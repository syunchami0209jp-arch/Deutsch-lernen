/*
  教科書データ
  第2課以降は lessons に lesson2, lesson3... を追加してください。
*/
const lessons = [
  {
    "id": "lesson1",
    "title": "第1課　Guten Tag. Mein Name ist ...",
    "categories": [
      {
        "id": "conversation",
        "title": "フレーズ＆会話表現",
        "items": [
          {
            "id": "l1-002",
            "kind": "conversation",
            "confusableWith": ["l1-004"],
            "german": "Guten Tag!",
            "japanese": "こんにちは！",
            "usage": "日中の丁寧なあいさつ",
            "example": "Guten Tag! Wie geht es Ihnen?",
            "blank": "Guten Tag!",
            "translation": "こんにちは！お元気ですか？",
            "explanation": "日中に使う丁寧なあいさつです。"
          },
          {
            "id": "l1-003",
            "kind": "conversation",
            "confusableWith": ["l1-005", "l1-053"],
            "german": "Auf Wiedersehen!",
            "japanese": "さようなら！（対面）",
            "usage": "【対面】直接会って別れるときの丁寧なあいさつ。電話では Auf Wiederhören! を使います。",
            "example": "Auf Wiedersehen! Bis morgen.",
            "blank": "Auf Wiedersehen!",
            "translation": "さようなら！また明日。",
            "explanation": "丁寧な別れのあいさつです。"
          },
          {
            "id": "l1-004",
            "kind": "conversation",
            "confusableWith": ["l1-002"],
            "german": "hallo",
            "japanese": "やあ／こんにちは",
            "usage": "カジュアルなあいさつ",
            "example": "Hallo! Schön, dich zu sehen.",
            "blank": "Hallo!",
            "translation": "やあ！会えてうれしいよ。",
            "explanation": "親しい相手に使うカジュアルなあいさつです。"
          },
          {
            "id": "l1-005",
            "kind": "conversation",
            "confusableWith": ["l1-003"],
            "german": "tschüs",
            "japanese": "バイバイ／じゃあね",
            "usage": "カジュアルな別れ",
            "example": "Tschüs! Bis später.",
            "blank": "Tschüs!",
            "translation": "バイバイ！またあとで。",
            "explanation": "親しい相手との別れに使います。"
          },
          {
            "id": "l1-006",
            "kind": "conversation",
            "german": "Guten Abend!",
            "japanese": "こんばんは！",
            "usage": "夕方・夜のあいさつ",
            "example": "Guten Abend! Willkommen.",
            "blank": "Guten Abend!",
            "translation": "こんばんは！ようこそ。",
            "explanation": "夕方から夜に使うあいさつです。"
          },
          {
            "id": "l1-012",
            "kind": "conversation",
            "german": "Guten Morgen!",
            "japanese": "おはようございます！",
            "usage": "朝のあいさつ",
            "example": "Guten Morgen! Heute ist Montag.",
            "blank": "Guten Morgen!",
            "translation": "おはようございます！今日は月曜日です。",
            "explanation": "朝に使うあいさつです。"
          },
          {
            "id": "l1-015",
            "kind": "conversation",
            "german": "Gute Nacht!",
            "japanese": "おやすみなさい！",
            "usage": "寝る前のあいさつ",
            "example": "Gute Nacht! Schlaf gut.",
            "blank": "Gute Nacht!",
            "translation": "おやすみなさい！よく寝てね。",
            "explanation": "寝る前に使うあいさつです。"
          },
          {
            "id": "l1-053",
            "kind": "conversation",
            "confusableWith": ["l1-003"],
            "german": "Auf Wiederhören!",
            "japanese": "では、失礼します！（電話）",
            "usage": "電話で別れるときの丁寧な表現",
            "example": "Vielen Dank für Ihren Anruf. Auf Wiederhören!",
            "blank": "Auf Wiederhören!",
            "translation": "お電話ありがとうございます。では、失礼します！",
            "explanation": "電話での別れに使う表現です。"
          },
          {
            "id": "l1-054",
            "kind": "conversation",
            "german": "Freut mich!",
            "japanese": "はじめまして／お会いできてうれしいです",
            "usage": "初対面などで使う表現",
            "example": "Freut mich! Ich heiße Ken.",
            "blank": "Freut mich!",
            "translation": "はじめまして！私はケンです。",
            "explanation": "直訳すると「私を喜ばせます」ですが、あいさつでは「お会いできてうれしいです」という意味です。"
          },
          {
            "id": "l1-055",
            "kind": "conversation",
            "german": "Willkommen!",
            "japanese": "ようこそ！",
            "usage": "人を歓迎するとき",
            "example": "Willkommen! Schön, dass Sie da sind.",
            "blank": "Willkommen!",
            "translation": "ようこそ！来てくださってうれしいです。",
            "explanation": "歓迎を表すあいさつです。"
          }
        ]
      },
      {
        "id": "noun",
        "title": "名詞",
        "items": [
          {
            "id": "l1-001",
            "kind": "noun",
            "german": "das Foto",
            "japanese": "写真",
            "article": "das",
            "plural": "Fotos",
            "pluralDistractors": ['Fotoe', 'Fotons', 'Fot'],
            "example": "Das ist ein Foto.",
            "blank": "Foto",
            "translation": "これは写真です。",
            "explanation": "Foto は中性名詞です。"
          },
          {
            "id": "l1-007",
            "kind": "noun",
            "confusableWith": ["l1-013"],
            "german": "die Dame",
            "japanese": "女性・婦人（やや改まった言い方）",
            "distinction": "Frau よりもやや改まった「女性・婦人」という語です。",
            "article": "die",
            "plural": "Damen",
            "pluralDistractors": ['Dames', 'Däme', 'Dame'],
            "example": "Die Dame heißt Anna.",
            "blank": "Dame",
            "translation": "そのご婦人はアンナという名前です。",
            "explanation": "Dame は女性名詞です。複数形は Damen。Frau よりもやや改まった「女性・婦人」を表す語です。"
          },
          {
            "id": "l1-010",
            "kind": "noun",
            "german": "die Musik",
            "japanese": "音楽",
            "article": "die",
            "plural": "—",
            "example": "Die Musik ist schön.",
            "blank": "Musik",
            "translation": "音楽は美しいです。",
            "explanation": "Musik は女性名詞です。通常は数えられない名詞として扱います。"
          },
          {
            "id": "l1-013",
            "kind": "noun",
            "confusableWith": ["l1-007"],
            "german": "die Frau",
            "japanese": "女性・～さん（一般的な言い方）",
            "distinction": "一般的な「女性」を表し、人名とともに「～さん」という敬称にも使います。",
            "article": "die",
            "plural": "Frauen",
            "pluralDistractors": ['Fraus', 'Fraue', 'Fraun'],
            "example": "Die Frau heißt Lara.",
            "blank": "Frau",
            "translation": "その女性はララという名前です。",
            "explanation": "Frau は女性名詞です。一般的な「女性」を表し、人名とともに「～さん」という敬称にも使います。"
          },
          {
            "id": "l1-016",
            "kind": "noun",
            "german": "der Herr",
            "japanese": "男性、～さん",
            "article": "der",
            "plural": "Herren",
            "pluralDistractors": ["Herrs", "Herre", "Herrer"],
            "grammarNote": "男性弱変化名詞（N-Deklination）です。単数の主格以外では Herrn になります。",
            "example": "Der Herr heißt Schröder.",
            "blank": "Herr",
            "translation": "その男性はシュレーダーさんです。",
            "explanation": "Herr は男性名詞です。名前の前後で「～さん」に相当します。"
          },
          {
            "id": "l1-020",
            "kind": "noun",
            "german": "der Name",
            "japanese": "名前",
            "article": "der",
            "plural": "Namen",
            "pluralDistractors": ["Names", "Namee", "Namer"],
            "grammarNote": "男性弱変化名詞（N-Deklination）です。単数の主格以外では Namen になります。",
            "example": "Mein Name ist Yuki.",
            "blank": "Name",
            "translation": "私の名前はユウキです。",
            "explanation": "Name は男性名詞です。"
          },
          {
            "id": "l1-031",
            "kind": "noun",
            "german": "die Firma",
            "japanese": "会社",
            "article": "die",
            "plural": "Firmen",
            "pluralDistractors": ['Firmas', 'Firmae', 'Firmer'],
            "example": "Ich bin von der Firma Sakura.",
            "blank": "Firma",
            "translation": "私はSakura社の者です。",
            "explanation": "Firma は女性名詞です。"
          },
          {
            "id": "l1-032",
            "kind": "noun",
            "german": "Deutschland",
            "japanese": "ドイツ",
            "article": "das",
            "noArticle": true,
            "plural": "—",
            "example": "Berlin liegt in Deutschland.",
            "blank": "Deutschland",
            "translation": "ベルリンはドイツにあります。",
            "explanation": "国名 Deutschland は中性扱いですが、通常は冠詞なしで使います。"
          },
          {
            "id": "l1-033",
            "kind": "noun",
            "german": "die Schweiz",
            "japanese": "スイス",
            "article": "die",
            "plural": "—",
            "example": "Meine Freundin kommt aus der Schweiz.",
            "blank": "Schweiz",
            "translation": "私の友人はスイス出身です。",
            "explanation": "Schweiz は女性名詞で、国名として定冠詞 die を伴います。"
          },
          {
            "id": "l1-035",
            "kind": "noun",
            "german": "die Sprache",
            "japanese": "言語",
            "article": "die",
            "plural": "Sprachen",
            "pluralDistractors": ['Spraches', 'Spräche', 'Spracher'],
            "example": "Deutsch ist eine Sprache.",
            "blank": "Sprache",
            "translation": "ドイツ語は一つの言語です。",
            "explanation": "Sprache は女性名詞です。"
          },
          {
            "id": "l1-057",
            "kind": "noun",
            "german": "die Frage",
            "japanese": "質問",
            "article": "die",
            "plural": "Fragen",
            "pluralDistractors": ['Frages', 'Fräge', 'Frager'],
            "example": "Ich habe eine Frage.",
            "blank": "Frage",
            "translation": "私は質問があります。",
            "explanation": "Frage は女性名詞です。"
          }
        ]
      },
      {
        "id": "verb",
        "title": "動詞",
        "items": [
          {
            "id": "l1-018",
            "kind": "verb",
            "german": "heißen",
            "japanese": "～という名前である",
            "example": "Ich heiße Ken.",
            "blank": "heiße",
            "translation": "私はケンという名前です。",
            "explanation": "heißen は「～という名前である」。ich では heiße となります。"
          },
          {
            "id": "l1-019",
            "kind": "verb",
            "german": "sein",
            "japanese": "～である",
            "example": "Ich bin Maria.",
            "blank": "bin",
            "translation": "私はマリアです。",
            "explanation": "sein は重要な不規則動詞です。ich の現在形は bin。"
          },
          {
            "id": "l1-027",
            "kind": "verb",
            "german": "wissen",
            "japanese": "知っている",
            "example": "Ich weiß es nicht.",
            "blank": "weiß",
            "translation": "私はそれを知りません。",
            "explanation": "wissen は「知っている」。ich では weiß となります。"
          },
          {
            "id": "l1-029",
            "kind": "verb",
            "german": "kommen",
            "japanese": "来る",
            "example": "Ich komme aus Japan.",
            "blank": "komme",
            "translation": "私は日本出身です。",
            "explanation": "kommen は「来る」。出身地は kommen aus ～ で表せます。"
          },
          {
            "id": "l1-056",
            "kind": "verb",
            "german": "haben",
            "japanese": "持っている",
            "example": "Ich habe eine Frage.",
            "blank": "habe",
            "translation": "私は質問があります。",
            "explanation": "haben は「持っている」。ich では habe となります。"
          }
        ]
      },
      {
        "id": "adjadv",
        "title": "形容詞・副詞",
        "items": [
          {
            "id": "l1-011",
            "kind": "adjadv",
            "german": "international",
            "japanese": "国際的な",
            "example": "Die Musik ist international.",
            "blank": "international",
            "translation": "その音楽は国際的です。",
            "explanation": "international は「国際的な」という意味です。"
          },
          {
            "id": "l1-058",
            "kind": "adjadv",
            "german": "bisschen",
            "japanese": "少し",
            "example": "Ich spreche ein bisschen Deutsch.",
            "blank": "bisschen",
            "translation": "私はドイツ語を少し話します。",
            "explanation": "ein bisschen で「少し」という意味です。"
          }
        ]
      },
      {
        "id": "other",
        "title": "その他",
        "items": [
          {
            "id": "l1-008",
            "kind": "other",
            "german": "willkommen",
            "japanese": "ようこそ、歓迎されて",
            "example": "Willkommen in unserem Kurs!",
            "blank": "Willkommen",
            "translation": "私たちの授業へようこそ！",
            "explanation": "人を歓迎するときに使います。"
          },
          {
            "id": "l1-009",
            "kind": "other",
            "german": "bei",
            "japanese": "～で、～のところで",
            "example": "Willkommen bei uns!",
            "blank": "bei",
            "translation": "私たちのところへようこそ！",
            "explanation": "bei は「～のところで／～のところへ」などを表す前置詞です。"
          },
          {
            "id": "l1-014",
            "kind": "other",
            "german": "danke",
            "japanese": "ありがとう",
            "example": "Danke für Ihre Hilfe.",
            "blank": "Danke",
            "translation": "ご助力ありがとうございます。",
            "explanation": "感謝を表す表現です。"
          },
          {
            "id": "l1-021",
            "kind": "other",
            "german": "Entschuldigung",
            "japanese": "すみません",
            "example": "Entschuldigung, wie heißen Sie?",
            "blank": "Entschuldigung",
            "translation": "すみません、お名前は何ですか？",
            "explanation": "人に声をかけたり謝ったりするときに使います。"
          },
          {
            "id": "l1-022",
            "kind": "other",
            "german": "wie",
            "japanese": "どのように、どう",
            "example": "Wie heißen Sie?",
            "blank": "Wie",
            "translation": "お名前は何ですか？",
            "explanation": "ここでは「どのように」という疑問詞です。"
          },
          {
            "id": "l1-024",
            "kind": "other",
            "german": "wer",
            "japanese": "誰",
            "example": "Wer ist das?",
            "blank": "Wer",
            "translation": "あれは誰ですか？",
            "explanation": "wer は「誰」を表す疑問詞です。"
          },
          {
            "id": "l1-025",
            "kind": "other",
            "german": "ja",
            "japanese": "はい",
            "example": "Ja, das stimmt.",
            "blank": "Ja",
            "translation": "はい、その通りです。",
            "explanation": "肯定の答えに使います。"
          },
          {
            "id": "l1-026",
            "kind": "other",
            "german": "nein",
            "japanese": "いいえ",
            "example": "Nein, das ist nicht richtig.",
            "blank": "Nein",
            "translation": "いいえ、それは正しくありません。",
            "explanation": "否定の答えに使います。"
          },
          {
            "id": "l1-028",
            "kind": "other",
            "german": "woher",
            "japanese": "どこから",
            "example": "Woher kommen Sie?",
            "blank": "Woher",
            "translation": "あなたはどこから来ましたか？",
            "explanation": "woher は出身・起点を尋ねる疑問詞です。"
          },
          {
            "id": "l1-030",
            "kind": "other",
            "german": "aus",
            "japanese": "～から、～出身の",
            "example": "Ich komme aus Japan.",
            "blank": "aus",
            "translation": "私は日本出身です。",
            "explanation": "aus は出身・起点を表す前置詞です。"
          },
          {
            "id": "l1-034",
            "kind": "other",
            "german": "sprechen",
            "japanese": "話す",
            "example": "Ich spreche ein bisschen Deutsch.",
            "blank": "spreche",
            "translation": "私はドイツ語を少し話します。",
            "explanation": "sprechen は話す。ich では spreche となります。"
          },
          {
            "id": "l1-036",
            "kind": "other",
            "german": "Deutsch",
            "japanese": "ドイツ語",
            "example": "Wir sprechen Deutsch im Kurs.",
            "blank": "Deutsch",
            "translation": "私たちは授業でドイツ語を話します。",
            "explanation": "Deutsch は言語名です。"
          },
          {
            "id": "l1-037",
            "kind": "other",
            "german": "Polnisch",
            "japanese": "ポーランド語",
            "example": "Sie spricht Polnisch.",
            "blank": "Polnisch",
            "translation": "彼女はポーランド語を話します。",
            "explanation": "言語名は通常大文字で始まります。"
          },
          {
            "id": "l1-038",
            "kind": "other",
            "german": "Englisch",
            "japanese": "英語",
            "example": "Mein Bruder spricht Englisch.",
            "blank": "Englisch",
            "translation": "私の兄弟は英語を話します。",
            "explanation": "Englisch は英語を表します。"
          },
          {
            "id": "l1-039",
            "kind": "other",
            "german": "Spanisch",
            "japanese": "スペイン語",
            "example": "Carlos spricht Spanisch.",
            "blank": "Spanisch",
            "translation": "カルロスはスペイン語を話します。",
            "explanation": "Spanisch はスペイン語を表します。"
          },
          {
            "id": "l1-040",
            "kind": "other",
            "german": "Französisch",
            "japanese": "フランス語",
            "example": "Marie spricht Französisch.",
            "blank": "Französisch",
            "translation": "マリーはフランス語を話します。",
            "explanation": "Französisch はフランス語を表します。"
          },
          {
            "id": "l1-041",
            "kind": "other",
            "german": "Italienisch",
            "japanese": "イタリア語",
            "example": "Luca spricht Italienisch.",
            "blank": "Italienisch",
            "translation": "ルカはイタリア語を話します。",
            "explanation": "Italienisch はイタリア語を表します。"
          },
          {
            "id": "l1-042",
            "kind": "other",
            "german": "Griechisch",
            "japanese": "ギリシャ語",
            "example": "Nikos spricht Griechisch.",
            "blank": "Griechisch",
            "translation": "ニコスはギリシャ語を話します。",
            "explanation": "Griechisch はギリシャ語を表します。"
          },
          {
            "id": "l1-043",
            "kind": "other",
            "german": "Russisch",
            "japanese": "ロシア語",
            "example": "Anna spricht Russisch.",
            "blank": "Russisch",
            "translation": "アンナはロシア語を話します。",
            "explanation": "Russisch はロシア語を表します。"
          },
          {
            "id": "l1-044",
            "kind": "other",
            "german": "Türkisch",
            "japanese": "トルコ語",
            "example": "Sie spricht Türkisch.",
            "blank": "Türkisch",
            "translation": "彼女はトルコ語を話します。",
            "explanation": "Türkisch はトルコ語を表します。"
          },
          {
            "id": "l1-045",
            "kind": "other",
            "german": "Chinesisch",
            "japanese": "中国語",
            "example": "Lin spricht Chinesisch.",
            "blank": "Chinesisch",
            "translation": "リンは中国語を話します。",
            "explanation": "Chinesisch は中国語を表します。"
          },
          {
            "id": "l1-046",
            "kind": "other",
            "german": "Griechenland",
            "japanese": "ギリシャ",
            "example": "Athen liegt in Griechenland.",
            "blank": "Griechenland",
            "translation": "アテネはギリシャにあります。",
            "explanation": "国名です。"
          },
          {
            "id": "l1-047",
            "kind": "other",
            "german": "Österreich",
            "japanese": "オーストリア",
            "example": "Wien liegt in Österreich.",
            "blank": "Österreich",
            "translation": "ウィーンはオーストリアにあります。",
            "explanation": "国名です。"
          },
          {
            "id": "l1-048",
            "kind": "other",
            "german": "Russland",
            "japanese": "ロシア",
            "example": "Moskau liegt in Russland.",
            "blank": "Russland",
            "translation": "モスクワはロシアにあります。",
            "explanation": "国名です。"
          },
          {
            "id": "l1-049",
            "kind": "other",
            "german": "Großbritannien",
            "japanese": "イギリス",
            "example": "London liegt in Großbritannien.",
            "blank": "Großbritannien",
            "translation": "ロンドンはイギリスにあります。",
            "explanation": "国名です。"
          },
          {
            "id": "l1-050",
            "kind": "other",
            "german": "Frankreich",
            "japanese": "フランス",
            "example": "Paris liegt in Frankreich.",
            "blank": "Frankreich",
            "translation": "パリはフランスにあります。",
            "explanation": "国名です。"
          },
          {
            "id": "l1-051",
            "kind": "other",
            "german": "Italien",
            "japanese": "イタリア",
            "example": "Rom liegt in Italien.",
            "blank": "Italien",
            "translation": "ローマはイタリアにあります。",
            "explanation": "国名です。"
          },
          {
            "id": "l1-052",
            "kind": "other",
            "german": "Polen",
            "japanese": "ポーランド",
            "example": "Sie kommt aus Polen.",
            "blank": "Polen",
            "translation": "彼女はポーランド出身です。",
            "explanation": "国名です。"
          }
        ]
      }
    ]
  }
];
