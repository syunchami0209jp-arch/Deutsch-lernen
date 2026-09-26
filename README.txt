# ドイツ語クエスト 動詞活用 修正版

## 今回の不具合の原因

前回版では `verbs.js` に動詞データを書き込んだあと、
同じ `verbs.js` をプログラム本体で上書きしてしまい、
`verbData` が存在しない状態になっていました。

そのため「動詞独日カード」などを押したときに
JavaScriptエラーが発生して、何も起こらない状態になっていました。

## 今回の修正

`verbs.js` を「動詞データ + プログラム本体」の1ファイルにまとめました。

さらに、動詞練習の画面切替は既存の `app.js` の `show()` や `$()` に依存しないようにしました。

## GitHubでやること

今回のZIPの `verbs.js` を、現在のGitHubプロジェクトにある
`verbs.js` と入れ替えてください。

`index.html`、`app.js`、`data.js` は今回変更する必要はありません。

## 今後の動詞追加

`verbs.js` の一番上にある

const verbData = [...]

の配列に、新しい動詞を1個追加するだけです。

必要な項目は、

id
infinitive
japanese
du
er
past
subj2
participle
presentExample
pastExample
subjExample

です。

問題プログラムそのものを変更する必要はありません。
