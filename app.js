let currentLesson=null,currentCategory=null,questions=[],index=0,score={correct:0,total:0};

// 「間違えた問題」は問題形式ごとに保存する。
// 例: { "l1-020": ["plural", "typing"] }
let wrongMap=loadWrongMap();
let favoriteIds=new Set(JSON.parse(localStorage.getItem("deutschQuestFavorites")||"[]"));

const $=id=>document.getElementById(id);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

function loadWrongMap(){
  try{
    const raw=JSON.parse(localStorage.getItem("deutschQuestWrong")||"{}");
    // v4/v5 の旧形式は「問題IDだけ」で形式が分からないため、
    // 新仕様では未回答・形式不明のまま復習対象にしない。
    if(Array.isArray(raw)) return {};
    return raw&&typeof raw==="object"?raw:{};
  }catch(e){return {}}
}
function saveWrong(){localStorage.setItem("deutschQuestWrong",JSON.stringify(wrongMap))}
function saveFavorites(){localStorage.setItem("deutschQuestFavorites",JSON.stringify([...favoriteIds]))}
function show(id){document.querySelectorAll(".screen").forEach(x=>x.classList.add("hidden"));$(id).classList.remove("hidden")}
function goHome(){renderLessons();show("home")}

function allItems(){return lessons.flatMap(l=>l.categories.flatMap(c=>c.items))}
function getItemById(id){return allItems().find(q=>q.id===id)}
function wrongCount(){return Object.keys(wrongMap).filter(id=>Array.isArray(wrongMap[id])&&wrongMap[id].length>0).length}
function favoriteCount(){return favoriteIds.size}

function renderLessons(){
 const box=$("lesson-buttons");box.innerHTML="";
 lessons.forEach(l=>{let b=document.createElement("button");b.className="primary";b.textContent=l.title;b.onclick=()=>openLesson(l);box.appendChild(b)});
 if(wrongCount()){let b=document.createElement("button");b.className="secondary-action";b.textContent=`↻ 間違えた問題だけ復習（${wrongCount()}問）`;b.onclick=openWrongReview;box.appendChild(b)}
 let fav=document.createElement("button");fav.className="secondary-action";fav.textContent=`★ マイ辞書（${favoriteCount()}語）`;fav.onclick=openDictionary;box.appendChild(fav)
}

function openLesson(l){
 currentLesson=l;$('lesson-title').textContent=l.title;const box=$("category-buttons");box.innerHTML="";
 l.categories.forEach(c=>{if(!c.items.length)return;let b=document.createElement("button");b.className="primary";b.textContent=`${c.title}（${c.items.length}）`;b.onclick=()=>openCategory(c);box.appendChild(b)});show("menu")
}
function openCategory(c){currentCategory=c;questions=shuffle(c.items);index=0;score={correct:0,total:0};renderPracticeMenu()}

function practiceTypes(c){
 if(c.id==="conversation")return [["card","① 独日カード"],["blank","② 例文4択穴埋め"],["typing","③ タイピング"]];
 if(c.id==="noun")return [["card","① 独日カード"],["gender","② 定冠詞の穴埋め"],["plural","③ 複数形4択"],["blank","④ 例文4択穴埋め"],["typing","⑤ タイピング"]];
 return [["card","① 独日カード"],["blank","② 例文4択穴埋め"],["typing","③ タイピング"]]
}
function renderPracticeMenu(){
 const box=$("category-buttons");box.innerHTML="";let h=document.createElement("h2");h.textContent=currentCategory.title;box.appendChild(h);
 practiceTypes(currentCategory).forEach(([t,label])=>{let b=document.createElement("button");b.className="primary";b.textContent=label;b.onclick=()=>startPractice(t);box.appendChild(b)});show("menu")
}

function filterQuestionsForType(items,t){
 let qs=items.filter(q=>q);
 if(t==="gender")qs=qs.filter(q=>q.kind==="noun"&&q.article);
 if(t==="plural")qs=qs.filter(q=>q.kind==="noun"&&q.plural&&q.plural!=="—");
 return qs;
}
function startPractice(t){
 questions=shuffle(filterQuestionsForType(currentCategory.items,t));
 index=0;score={correct:0,total:0};window.lastType=t;window.sessionWrong=[];
 if(!questions.length){alert("この形式で練習できる問題がありません。");return}
 renderQuestion(t);show("practice")
}
function progress(){
 if(window.lastType==="card"){$("progress").textContent="";return}
 $("progress").textContent=`${index+1} / ${questions.length}`
}

function mark(q,ok){
 score.total++;
 if(ok){
   score.correct++;
   // 「この形式」で間違えたものだけを削除する。
   if(wrongMap[q.id]){
     wrongMap[q.id]=wrongMap[q.id].filter(t=>t!==window.lastType);
     if(!wrongMap[q.id].length)delete wrongMap[q.id];
     saveWrong();
   }
 }else{
   if(!wrongMap[q.id])wrongMap[q.id]=[];
   if(!wrongMap[q.id].includes(window.lastType))wrongMap[q.id].push(window.lastType);
   saveWrong();
   if(!window.sessionWrong.some(x=>x.id===q.id&&x.type===window.lastType)){
     window.sessionWrong.push({id:q.id,type:window.lastType});
   }
 }
}

function next(){index++;if(index>=questions.length)return finish();renderQuestion(window.lastType)}

function finish(){
 const isCard=window.lastType==="card";
 const wrongThisTest=(window.sessionWrong||[]).map(x=>getItemById(x.id)).filter(Boolean);
 const wrongHtml=(!isCard&&wrongThisTest.length)?`
   <section class="wrong-summary">
     <h3>今回間違えた問題</h3>
     ${wrongThisTest.map(q=>`<div class="wrong-item"><div class="wrong-german">${q.german}</div><div>${q.japanese}</div><p>${q.explanation||""}</p></div>`).join("")}
   </section>`:"";
 $("practice-content").innerHTML=`<div class="card"><h2>${isCard?"完了":"練習終了！"}</h2>${isCard?"":`<p class="score">${score.correct} / ${score.total} 正解</p>`}${wrongHtml}<button class="primary" id="again">もう一度</button><button id="to-menu">練習メニューへ</button></div>`;
 $("again").onclick=()=>startPractice(window.lastType);
 $("to-menu").onclick=()=>{window.sessionWrong=[];renderPracticeMenu()};
}

function renderQuestion(t){if(t==="card")renderCard();else if(t==="gender")renderGender();else if(t==="plural")renderPlural();else if(t==="blank")renderBlank();else renderTyping()}

function toggleFavorite(q){
 if(favoriteIds.has(q.id))favoriteIds.delete(q.id);else favoriteIds.add(q.id);
 saveFavorites();
 const b=$("favorite");
 if(b){b.textContent=favoriteIds.has(q.id)?"★ 苦手な単語に登録中":"☆ 苦手な単語に登録";b.classList.toggle("favorite-on",favoriteIds.has(q.id))}
 renderLessons();
}

function renderCard(){
 let q=questions[index];
 $("progress").textContent="";
 const isFav=favoriteIds.has(q.id);
 $("practice-content").innerHTML=`
   <div class="card card-word card-word-with-star">
     <button class="favorite-button ${isFav?"favorite-on":""}" id="favorite" title="マイ辞書">${isFav?"★ 苦手な単語に登録中":"☆ 苦手な単語に登録"}</button>
     <div class="german">${q.german}</div><p>まず日本語の意味を考えてみよう</p>
   </div>
   <div class="action-area card-action">
     <button class="primary" id="show">日本語・解説を見る</button>
     <button class="primary hidden" id="card-next">次の問題</button>
   </div>
   <div class="answer hidden" id="answer">
     <div class="translation">${q.japanese}</div>
     ${q.usage?`<p class="note">使用場面：${q.usage}</p>`:""}
     ${q.article?`<p><span class="tag">性：${q.article}</span>${q.plural&&q.plural!=="—"?`<span class="tag">複数：${q.plural}</span>`:""}</p>`:""}
     ${q.grammarNote?`<p class="note">${q.grammarNote}</p>`:""}
     <hr><p><b>例文</b><br>${q.example}</p><p>${q.translation}</p><p><b>解説</b><br>${q.explanation}</p>
   </div>`;
 $("favorite").onclick=()=>toggleFavorite(q);
 $("show").onclick=()=>{
   $("show").classList.add("hidden");$("card-next").classList.remove("hidden");$("answer").classList.remove("hidden");$("card-next").focus()
 };
 $("card-next").onclick=next;
}
function previousCard(){if(window.lastType!=="card"||index<=0)return;index--;renderCard()}
function nextCard(){if(window.lastType!=="card")return;if(index>=questions.length-1)return;index++;renderCard()}

function options(q){
 const blocked=new Set(q.confusableWith||[]);blocked.add(q.id);
 const candidates=currentCategory.items.filter(x=>x.blank&&!blocked.has(x.id)).map(x=>x.blank);
 return shuffle([q.blank,...shuffle(candidates).slice(0,3)]);
}
function umlautize(word){return word.replace(/a/g,"ä").replace(/o/g,"ö").replace(/u/g,"ü").replace(/A/g,"Ä").replace(/O/g,"Ö").replace(/U/g,"Ü")}
function pluralOptions(q){
 if(Array.isArray(q.pluralDistractors)&&q.pluralDistractors.length>=3)return shuffle([q.plural,...q.pluralDistractors.slice(0,3)]);
 const singular=(q.german||"").replace(/^(der|die|das)\s+/i,"").trim();const candidates=[];
 const add=v=>{if(v&&v!==q.plural&&!candidates.includes(v))candidates.push(v)};
 add(singular+"s");add(umlautize(singular));add(singular+"e");add(singular+"en");add(singular+"er");add(singular+"n");
 if(q.plural.startsWith(singular))add(singular);
 while(candidates.length<3)add(singular+"n".repeat(candidates.length+1));
 return shuffle([q.plural,...candidates.slice(0,3)])
}
function showResult(q,ok,answer){$("result").innerHTML=ok?`⭕ 正解！<br>${q.explanation}`:`❌ 不正解。正解は <b>${answer}</b> です。<br>${q.explanation}`}

function renderBlank(){
 let q=questions[index],blank=q.blank;progress();
 $("practice-content").innerHTML=`<h2>例文4択穴埋め</h2><div class="example">${q.example.replace(blank,"_____")}</div><p class="translation-small">${q.translation}</p><div id="options"></div><div class="result-area" id="result"></div><div class="action-area"><button class="primary hidden" id="next">次の問題</button></div>`;
 options(q).forEach(o=>{let b=document.createElement("button");b.className="option";b.textContent=o;b.onclick=()=>{let ok=o===blank;mark(q,ok);showResult(q,ok,blank);$("options").querySelectorAll("button").forEach(x=>x.disabled=true);$("next").classList.remove("hidden");$("next").focus()};$("options").appendChild(b)});$("next").onclick=next
}
function renderTyping(){
 let q=questions[index],blank=q.blank;progress();
 $("practice-content").innerHTML=`<h2>例文タイピング</h2><div class="example">${q.example.replace(blank,"_____")}</div><p class="translation-small">${q.translation}</p><input id="answerInput" autocomplete="off" placeholder="空欄に入るドイツ語"><div class="action-area"><button class="primary" id="check">回答する</button><button class="primary hidden" id="next">次の問題</button></div><div class="result-area" id="result"></div>`;
 $("answerInput").focus();
 $("check").onclick=()=>{if($("check").dataset.done)return;let v=$("answerInput").value.trim().toLowerCase().replace(/\s+/g," "),ok=v===blank.toLowerCase();mark(q,ok);showResult(q,ok,blank);$("answerInput").disabled=true;$("check").dataset.done="1";$("check").classList.add("hidden");$("next").classList.remove("hidden");$("next").focus()};
 $("next").onclick=next
}
function renderGender(){
 let q=questions[index],noun=q.german.replace(/^(der|die|das)\s+/i,"");progress();
 const correctAnswer=q.noArticle?"通常定冠詞なし":q.article;
 const choices=q.noArticle?["der","die","das","通常定冠詞なし"]:["der","die","das"];
 $("practice-content").innerHTML=`<h2>定冠詞の穴埋め</h2><div class="card"><div class="german">_____ ${noun}</div><p>${q.japanese}</p></div><p>正しい定冠詞を選んでください。</p><div id="options"></div><div class="result-area" id="result"></div><div class="action-area"><button class="primary hidden" id="next">次の問題</button></div>`;
 shuffle(choices).forEach(o=>{let b=document.createElement("button");b.className="option";b.textContent=o;b.onclick=()=>{let ok=o===correctAnswer;mark(q,ok);showResult(q,ok,correctAnswer);$("options").querySelectorAll("button").forEach(x=>x.disabled=true);$("next").classList.remove("hidden");$("next").focus()};$("options").appendChild(b)});$("next").onclick=next
}
function renderPlural(){
 let q=questions[index];progress();
 $("practice-content").innerHTML=`<h2>複数形4択</h2><div class="card"><div class="german">${q.german}</div><p>${q.japanese}</p></div><p>この名詞の複数形を選んでください。</p><div id="options"></div><div class="result-area" id="result"></div><div class="action-area"><button class="primary hidden" id="next">次の問題</button></div>`;
 pluralOptions(q).forEach(o=>{let b=document.createElement("button");b.className="option";b.textContent=o;b.onclick=()=>{let ok=o===q.plural;mark(q,ok);showResult(q,ok,q.plural);$("options").querySelectorAll("button").forEach(x=>x.disabled=true);$("next").classList.remove("hidden");$("next").focus()};$("options").appendChild(b)});$("next").onclick=next
}

function openWrongReview(){
 const all=allItems();
 const entries=Object.entries(wrongMap).filter(([id,types])=>Array.isArray(types)&&types.length);
 if(!entries.length){alert("間違えた問題はありません。");renderLessons();return}
 const box=$("category-buttons");box.innerHTML="";
 let h=document.createElement("h2");h.textContent="間違えた問題だけ復習";box.appendChild(h);
 const typeLabels={card:"独日カード",gender:"定冠詞の穴埋め",plural:"複数形4択",blank:"例文4択穴埋め",typing:"タイピング"};
 const validTypes=["gender","plural","blank","typing"];
 validTypes.forEach(t=>{
   const qs=entries.filter(([id,types])=>types.includes(t)).map(([id])=>all.find(q=>q.id===id)).filter(Boolean);
   if(!qs.length)return;
   let b=document.createElement("button");b.className="primary";b.textContent=`${typeLabels[t]}（${qs.length}）`;
   b.onclick=()=>startWrongPractice(t,qs);box.appendChild(b)
 });
 let back=document.createElement("button");back.textContent="← 戻る";back.onclick=goHome;box.appendChild(back);show("menu")
}
function startWrongPractice(t,qs){
 currentCategory={id:"wrong",title:`間違えた問題：${({gender:"定冠詞の穴埋め",plural:"複数形4択",blank:"例文4択穴埋め",typing:"タイピング"})[t]}`,items:qs};
 questions=shuffle(qs);index=0;score={correct:0,total:0};window.lastType=t;window.sessionWrong=[];renderQuestion(t);show("practice")
}

function openDictionary(){
 const all=allItems();
 const favs=all.filter(q=>favoriteIds.has(q.id));
 const box=$("category-buttons");box.innerHTML="";
 let h=document.createElement("h2");h.textContent="★ マイ辞書";box.appendChild(h);
 if(!favs.length){let p=document.createElement("p");p.textContent="まだ苦手な単語は登録されていません。独日カードの☆ボタンから登録できます。";box.appendChild(p)}
 else{
   let p=document.createElement("p");p.textContent=`登録語：${favs.length}語`;box.appendChild(p);
   let b=document.createElement("button");b.className="primary";b.textContent="★ 苦手な単語を練習";b.onclick=()=>openFavoritePracticeMenu(favs);box.appendChild(b);
   favs.forEach(q=>{let row=document.createElement("div");row.className="dictionary-item";row.innerHTML=`<span><b>${q.german}</b> — ${q.japanese}</span><button class="remove-favorite">★</button>`;row.querySelector("button").onclick=()=>{favoriteIds.delete(q.id);saveFavorites();openDictionary()};box.appendChild(row)})
 }
 let back=document.createElement("button");back.textContent="← 戻る";back.onclick=goHome;box.appendChild(back);show("menu")
}
function openFavoritePracticeMenu(favs){
 const groups=lessons.flatMap(l=>l.categories).map(c=>({category:c,items:c.items.filter(q=>favoriteIds.has(q.id))})).filter(x=>x.items.length);
 const box=$("category-buttons");box.innerHTML="";let h=document.createElement("h2");h.textContent="★ 苦手な単語を練習";box.appendChild(h);
 groups.forEach(({category,items})=>{
   let sub=document.createElement("h3");sub.textContent=category.title;box.appendChild(sub);
   practiceTypes(category).forEach(([t,label])=>{
     const qs=filterQuestionsForType(items,t);if(!qs.length)return;
     let b=document.createElement("button");b.className="primary";b.textContent=`${label}（${qs.length}）`;b.onclick=()=>{currentCategory={...category,items:qs};startPractice(t)};box.appendChild(b)
   })
 });
 let back=document.createElement("button");back.textContent="← マイ辞書";back.onclick=openDictionary;box.appendChild(back);show("menu")
}

document.addEventListener("keydown",e=>{
 if($("practice").classList.contains("hidden"))return;
 if(window.lastType==="card"){
   if(e.key==="ArrowLeft"){e.preventDefault();previousCard();return}
   if(e.key==="ArrowRight"){e.preventDefault();nextCard();return}
   if(e.key==="Enter"){
     e.preventDefault();const showBtn=$("show"),nextBtn=$("card-next");
     if(showBtn&&!showBtn.classList.contains("hidden")){showBtn.click();return}
     if(nextBtn&&!nextBtn.classList.contains("hidden")){nextBtn.click();return}
   }
   return
 }
 if(e.key!=="Enter")return;
 if(window.lastType==="typing"){
   const check=$("check"),nextBtn=$("next");
   if(check&&!check.classList.contains("hidden")){e.preventDefault();check.click();return}
   if(nextBtn&&!nextBtn.classList.contains("hidden")){e.preventDefault();nextBtn.click();return}
 }
 const nextBtn=$("next");if(nextBtn&&!nextBtn.classList.contains("hidden")){e.preventDefault();nextBtn.click()}
});
$("practice-back").onclick=renderPracticeMenu;renderLessons();
