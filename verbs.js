/* ドイツ語クエスト：動詞活用練習 */

let verbMode = "present";
let verbQuestionType = "card";
let verbQuestions = [];
let verbIndex = 0;
let verbScore = {correct:0,total:0};

const VERB_MODE_LABELS = {
  present: "直接法現在",
  three: "三基本形",
  subj2: "接続法Ⅱ式",
  all: "全て出題"
};

function openVerbPractice(){
  show("verb-menu");
}

function openVerbType(mode){
  verbMode = mode;
  $("verb-type-title").textContent = VERB_MODE_LABELS[mode] || mode;
  show("verb-types");
}

function openVerbAll(){
  verbMode = "all";
  $("verb-type-title").textContent = "全て出題";
  show("verb-types");
}

function openVerbTable(){
  renderVerbTable();
  show("verb-table");
}

function verbTarget(v, mode){
  if(mode === "present") return v.du;
  if(mode === "three") return `${v.infinitive} / ${v.past} / ${v.participle}`;
  if(mode === "subj2") return v.subj2;
  return null;
}

function verbAnswerLabel(mode){
  if(mode === "present") return "直接法現在（du）";
  if(mode === "three") return "三基本形";
  if(mode === "subj2") return "接続法Ⅱ式";
  return "活用";
}

function shuffleVerbs(a){
  a=[...a];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function chooseVerbMode(){
  if(verbMode !== "all") return verbMode;
  return ["present","three","subj2"][Math.floor(Math.random()*3)];
}

function startVerbPractice(type){
  verbQuestionType = type;
  verbQuestions = shuffleVerbs(verbData);
  verbIndex = 0;
  verbScore = {correct:0,total:0};
  renderVerbQuestion();
  show("verb-practice");
}

function renderVerbQuestion(){
  if(verbIndex >= verbQuestions.length){
    finishVerbPractice();
    return;
  }
  const v = verbQuestions[verbIndex];
  const actualMode = chooseVerbMode();
  window.currentVerbActualMode = actualMode;
  $("verb-progress").innerHTML =
    `<div class="verb-progress-text">${verbIndex+1} / ${verbQuestions.length}　・　${VERB_MODE_LABELS[actualMode]}</div>`;
  if(verbQuestionType === "card") renderVerbCard(v, actualMode);
  else if(verbQuestionType === "blank") renderVerbBlank(v, actualMode);
  else renderVerbTyping(v, actualMode);
}

function verbFormTable(v){
  return `
    <div class="verb-card-form">
      <div class="verb-form-item"><div class="verb-form-label">直接法現在 du</div><div class="verb-form-value">${v.du}</div></div>
      <div class="verb-form-item"><div class="verb-form-label">直接法現在 er/sie/es</div><div class="verb-form-value">${v.er}</div></div>
      <div class="verb-form-item"><div class="verb-form-label">直説法過去</div><div class="verb-form-value">${v.past}</div></div>
      <div class="verb-form-item"><div class="verb-form-label">接続法Ⅱ式</div><div class="verb-form-value">${v.subj2}</div></div>
      <div class="verb-form-item"><div class="verb-form-label">過去分詞</div><div class="verb-form-value">${v.participle}</div></div>
    </div>`;
}

function renderVerbCard(v, mode){
  const modeText = VERB_MODE_LABELS[mode];
  $("verb-practice-content").innerHTML = `
    <div class="card">
      <div class="verb-mode-label">${modeText}</div>
      <div class="german">${v.infinitive}</div>
      <p class="translation">${v.japanese}</p>
      <p>まず活用を思い出してから答えを見てみよう。</p>
    </div>
    <div class="action-area">
      <button class="primary" id="verb-show">活用を見る</button>
      <button class="primary hidden" id="verb-next">次の問題</button>
    </div>
    <div class="answer hidden" id="verb-answer">
      ${verbFormTable(v)}
    </div>`;
  $("verb-show").onclick=()=>{
    $("verb-show").classList.add("hidden");
    $("verb-answer").classList.remove("hidden");
    $("verb-next").classList.remove("hidden");
    $("verb-next").focus();
  };
  $("verb-next").onclick=nextVerbQuestion;
}

function verbSentence(v, mode){
  if(mode === "present"){
    return v.presentExample.replace(v.du, "_____");
  }
  if(mode === "three"){
    return v.pastExample.replace(v.past, "_____");
  }
  return v.subjExample.replace("___", "_____");
}

function verbCorrect(v, mode){
  if(mode === "present") return v.du;
  if(mode === "three") return v.past;
  return v.subj2;
}

function verbChoices(v, mode){
  const correct = verbCorrect(v, mode);
  const pool = verbData
    .filter(x=>x.id!==v.id)
    .map(x=>verbCorrect(x,mode))
    .filter(x=>x && x!==correct);
  return shuffleVerbs([correct,...shuffleVerbs(pool).slice(0,3)]);
}

function showVerbResult(v, ok, answer){
  $("verb-result").innerHTML = ok
    ? `⭕ 正解！<br>正解：<b>${answer}</b>`
    : `❌ 不正解。正解は <b>${answer}</b> です。`;
}

function renderVerbBlank(v, mode){
  const answer = verbCorrect(v,mode);
  $("verb-practice-content").innerHTML = `
    <div class="verb-mode-label">${VERB_MODE_LABELS[mode]}</div>
    <div class="example">${verbSentence(v,mode)}</div>
    <p class="translation-small">意味：${v.japanese}</p>
    <div id="verb-options"></div>
    <div class="verb-result" id="verb-result"></div>
    <div class="action-area"><button class="primary hidden" id="verb-next">次の問題</button></div>`;
  verbChoices(v,mode).forEach(choice=>{
    const b=document.createElement("button");
    b.className="option";
    b.textContent=choice;
    b.onclick=()=>{
      const ok=choice===answer;
      verbScore.total++;
      if(ok) verbScore.correct++;
      showVerbResult(v,ok,answer);
      $("verb-options").querySelectorAll("button").forEach(x=>x.disabled=true);
      $("verb-next").classList.remove("hidden");
      $("verb-next").focus();
    };
    $("verb-options").appendChild(b);
  });
  $("verb-next").onclick=nextVerbQuestion;
}

function renderVerbTyping(v, mode){
  const answer = verbCorrect(v,mode);
  const prompt = mode === "three"
    ? `${v.japanese} の三基本形を入力（例：Infinitiv / Präteritum / Partizip II）`
    : `${v.infinitive}（${v.japanese}）の${verbAnswerLabel(mode)}を入力`;
  $("verb-practice-content").innerHTML = `
    <div class="verb-mode-label">${VERB_MODE_LABELS[mode]}</div>
    <div class="card">
      <div class="german">${v.infinitive}</div>
      <p>${prompt}</p>
    </div>
    <input id="verb-input" autocomplete="off" placeholder="ここに入力">
    <div class="special-keys-verb" aria-label="ドイツ語特殊文字">
      ${["ä","ö","ü","ß","Ä","Ö","Ü"].map(ch=>`<button type="button" data-char="${ch}">${ch}</button>`).join("")}
    </div>
    <div class="action-area">
      <button class="primary" id="verb-check">回答する</button>
      <button class="primary hidden" id="verb-next">次の問題</button>
    </div>
    <div class="verb-result" id="verb-result"></div>`;

  document.querySelectorAll(".special-keys-verb button").forEach(b=>{
    b.onclick=()=>{
      const input=$("verb-input");
      const start=input.selectionStart ?? input.value.length;
      const end=input.selectionEnd ?? input.value.length;
      input.value=input.value.slice(0,start)+b.dataset.char+input.value.slice(end);
      input.focus();
      input.setSelectionRange(start+b.dataset.char.length,start+b.dataset.char.length);
    };
  });

  $("verb-input").focus();
  $("verb-check").onclick=checkVerbTyping;
}

function normalizeVerbAnswer(s){
  return s.trim().toLowerCase().replace(/\s+/g," ");
}

function checkVerbTyping(){
  const v=verbQuestions[verbIndex];
  const mode=window.currentVerbActualMode;
  const answer=verbCorrect(v,mode);
  const input=$("verb-input");
  const user=normalizeVerbAnswer(input.value);
  const expected=normalizeVerbAnswer(answer);
  const ok=user===expected;
  verbScore.total++;
  if(ok) verbScore.correct++;
  input.disabled=true;
  $("verb-check").classList.add("hidden");
  showVerbResult(v,ok,answer);
  $("verb-next").classList.remove("hidden");
  $("verb-next").focus();
}

function nextVerbQuestion(){
  verbIndex++;
  if(verbIndex>=verbQuestions.length){
    finishVerbPractice();
    return;
  }
  renderVerbQuestion();
}

function finishVerbPractice(){
  $("verb-progress").textContent="";
  $("verb-practice-content").innerHTML=`
    <div class="card">
      <h2>練習終了！</h2>
      <p class="score">${verbScore.correct} / ${verbScore.total} 正解</p>
      <button class="primary" id="verb-again">もう一度</button>
      <button id="verb-menu-back">練習メニューへ</button>
    </div>`;
  $("verb-again").onclick=()=>startVerbPractice(verbQuestionType);
  $("verb-menu-back").onclick=()=>openVerbType(verbMode);
}

function renderVerbTable(){
  const rows=verbData.map(v=>`
    <tr>
      <td class="verb-inf">${v.infinitive}<br><small>${v.japanese}</small></td>
      <td>${v.du}<br>${v.er}</td>
      <td>${v.past}</td>
      <td>${v.subj2}</td>
      <td>${v.participle}</td>
    </tr>`).join("");
  $("verb-table-content").innerHTML=`
    <div class="verb-table-wrap">
      <table class="verb-table">
        <thead><tr>
          <th>不定詞・意味</th>
          <th>直接法現在<br>du / er</th>
          <th>直説法過去</th>
          <th>接続法Ⅱ式</th>
          <th>過去分詞</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

document.addEventListener("keydown", e=>{
  if($("verb-practice").classList.contains("hidden")) return;
  if(e.key !== "Enter") return;
  const check=$("verb-check");
  const next=$("verb-next");
  if(check && !check.classList.contains("hidden")){
    e.preventDefault();
    check.click();
  }else if(next && !next.classList.contains("hidden")){
    e.preventDefault();
    next.click();
  }
});
