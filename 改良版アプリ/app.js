let currentLesson=null,currentCategory=null,questions=[],index=0,score={correct:0,total:0};
let wrongIds=new Set(JSON.parse(localStorage.getItem("deutschQuestWrong")||"[]"));
const $=id=>document.getElementById(id);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const saveWrong=()=>localStorage.setItem("deutschQuestWrong",JSON.stringify([...wrongIds]));
function show(id){document.querySelectorAll(".screen").forEach(x=>x.classList.add("hidden"));$(id).classList.remove("hidden")}
function goHome(){renderLessons();show("home")}
function renderLessons(){
 const box=$("lesson-buttons");box.innerHTML="";
 lessons.forEach(l=>{let b=document.createElement("button");b.className="primary";b.textContent=l.title;b.onclick=()=>openLesson(l);box.appendChild(b)});
 if(wrongIds.size){let b=document.createElement("button");b.textContent=`★ 間違えた問題だけ復習（${wrongIds.size}問）`;b.onclick=openWrongReview;box.appendChild(b)}
}
function openLesson(l){
 currentLesson=l;$("lesson-title").textContent=l.title;const box=$("category-buttons");box.innerHTML="";
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
function startPractice(t){
 questions=shuffle(currentCategory.items);
 if(t==="gender")questions=questions.filter(q=>q.kind==="noun"&&q.article);
 if(t==="plural")questions=questions.filter(q=>q.kind==="noun"&&q.plural&&q.plural!=="—");
 index=0;score={correct:0,total:0};window.lastType=t;renderQuestion(t);show("practice")
}
function progress(){
 if(window.lastType==="card"){$("progress").textContent="";return}
 $("progress").textContent=`${index+1} / ${questions.length}`
}
function mark(q,ok){
 score.total++;
 if(ok){
   score.correct++;
   // 一度間違えた問題を正解できたら、復習リストから削除する。
   if(wrongIds.has(q.id)){wrongIds.delete(q.id);saveWrong();}
 }else{
   wrongIds.add(q.id);saveWrong();
 }
}
function next(){index++;if(index>=questions.length)return finish();renderQuestion(window.lastType)}
function finish(){
 const isCard=window.lastType==="card";
 $("practice-content").innerHTML=`<div class="card"><h2>${isCard?"完了":"練習終了！"}</h2>${isCard?"":`<p class="score">${score.correct} / ${score.total} 正解</p>`}<button class="primary" id="again">もう一度</button><button id="to-menu">練習メニューへ</button></div>`;
 $("again").onclick=()=>startPractice(window.lastType);
 $("to-menu").onclick=renderPracticeMenu;
}
function renderQuestion(t){if(t==="card")renderCard();else if(t==="gender")renderGender();else if(t==="plural")renderPlural();else if(t==="blank")renderBlank();else renderTyping()}
function renderCard(){
 let q=questions[index];
 $("progress").textContent="";
 $("practice-content").innerHTML=`
   <div class="card card-word"><div class="german">${q.german}</div><p>まず日本語の意味を考えてみよう</p></div>
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
 $("show").onclick=()=>{
   $("show").classList.add("hidden");
   $("card-next").classList.remove("hidden");
   $("answer").classList.remove("hidden");
   $("card-next").focus();
 };
 $("card-next").onclick=next;
}
function previousCard(){
 if(window.lastType!=="card"||index<=0)return;
 index--;
 renderCard();
}
function nextCard(){
 if(window.lastType!=="card")return;
 if(index>=questions.length-1)return;
 index++;
 renderCard();
}
function options(q){
 const blocked=new Set(q.confusableWith||[]);blocked.add(q.id);
 const candidates=currentCategory.items.filter(x=>x.blank&&!blocked.has(x.id)).map(x=>x.blank);
 return shuffle([q.blank,...shuffle(candidates).slice(0,3)]);
}
function umlautize(word){
 return word.replace(/a/g,"ä").replace(/o/g,"ö").replace(/u/g,"ü").replace(/A/g,"Ä").replace(/O/g,"Ö").replace(/U/g,"Ü");
}
function pluralOptions(q){
 // 複数形の誤答は、他の名詞ではなく「その単語を誤って複数形にした形」にする。
 if(Array.isArray(q.pluralDistractors)&&q.pluralDistractors.length>=3){
   return shuffle([q.plural,...q.pluralDistractors.slice(0,3)]);
 }
 const singular=(q.german||"").replace(/^(der|die|das)\s+/i,"").trim();
 const candidates=[];
 const add=v=>{if(v&&v!==q.plural&&!candidates.includes(v))candidates.push(v)};
 add(singular+"s");
 add(umlautize(singular));
 add(singular+"e");
 add(singular+"en");
 add(singular+"er");
 add(singular+"n");
 // 正解が語尾変化型なら、語幹だけを残す誤答も候補にする。
 if(q.plural.startsWith(singular)) add(singular);
 while(candidates.length<3) add(singular+"".padEnd(candidates.length+1,"n"));
 return shuffle([q.plural,...candidates.slice(0,3)]);
}
function showResult(q,ok,answer){
 $("result").innerHTML=ok?`⭕ 正解！<br>${q.explanation}`:`❌ 不正解。正解は <b>${answer}</b> です。<br>${q.explanation}`;
}
function renderBlank(){
 let q=questions[index],blank=q.blank;progress();
 $("practice-content").innerHTML=`<h2>例文4択穴埋め</h2><div class="example">${q.example.replace(blank,"_____" )}</div><p class="translation-small">${q.translation}</p><div id="options"></div><div class="result-area" id="result"></div><div class="action-area"><button class="primary hidden" id="next">次の問題</button></div>`;
 options(q).forEach(o=>{let b=document.createElement("button");b.className="option";b.textContent=o;b.onclick=()=>{let ok=o===blank;mark(q,ok);showResult(q,ok,blank);$("options").querySelectorAll("button").forEach(x=>x.disabled=true);$("next").classList.remove("hidden");$("next").focus()};$("options").appendChild(b)});
 $("next").onclick=next
}
function renderTyping(){
 let q=questions[index],blank=q.blank;progress();
 $("practice-content").innerHTML=`<h2>例文タイピング</h2><div class="example">${q.example.replace(blank,"_____" )}</div><p class="translation-small">${q.translation}</p><input id="answerInput" autocomplete="off" placeholder="空欄に入るドイツ語"><div class="action-area"><button class="primary" id="check">回答する</button><button class="primary hidden" id="next">次の問題</button></div><div class="result-area" id="result"></div>`;
 $("answerInput").focus();
 $("check").onclick=()=>{
   if($("check").dataset.done)return;
   let v=$("answerInput").value.trim().toLowerCase().replace(/\s+/g," "),ok=v===blank.toLowerCase();
   mark(q,ok);showResult(q,ok,blank);$("answerInput").disabled=true;
   $("check").dataset.done="1";$("check").classList.add("hidden");$("next").classList.remove("hidden");$("next").focus()
 };
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
 let all=lessons.flatMap(l=>l.categories.flatMap(c=>c.items)),wrong=all.filter(q=>wrongIds.has(q.id));if(!wrong.length)return alert("間違えた問題はありません。");
 currentCategory={id:"other",title:"間違えた問題",items:wrong};questions=shuffle(wrong);index=0;score={correct:0,total:0};renderPracticeMenu()
}
document.addEventListener("keydown",e=>{
 if($("practice").classList.contains("hidden"))return;
 if(window.lastType==="card"){
   if(e.key==="ArrowLeft"){e.preventDefault();previousCard();return}
   if(e.key==="ArrowRight"){e.preventDefault();nextCard();return}
   if(e.key==="Enter"){
     e.preventDefault();
     const showBtn=$("show"),nextBtn=$("card-next");
     if(showBtn&&!showBtn.classList.contains("hidden")){showBtn.click();return}
     if(nextBtn&&!nextBtn.classList.contains("hidden")){nextBtn.click();return}
   }
   return;
 }
 if(e.key!=="Enter")return;
 if(window.lastType==="typing"){
   const check=$("check"),nextBtn=$("next");
   if(check&&!check.classList.contains("hidden")){e.preventDefault();check.click();return}
   if(nextBtn&&!nextBtn.classList.contains("hidden")){e.preventDefault();nextBtn.click();return}
 }
 const nextBtn=$("next");
 if(nextBtn&&!nextBtn.classList.contains("hidden")){e.preventDefault();nextBtn.click()}
});
$("practice-back").onclick=renderPracticeMenu;renderLessons();
