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
            "confusableWith": [
              "l1-004"
            ],
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
            "confusableWith": [
              "l1-005",
              "l1-053"
            ],
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
            "confusableWith": [
              "l1-002"
            ],
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
            "confusableWith": [
              "l1-003"
            ],
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
            "confusableWith": [
              "l1-003"
            ],
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
            "pluralDistractors": [
              "Fotoe",
              "Fotons",
              "Fot"
            ],
            "example": "Das ist ein Foto.",
            "blank": "Foto",
            "translation": "これは写真です。",
            "explanation": "Foto は中性名詞です。"
          },
          {
            "id": "l1-007",
            "kind": "noun",
            "confusableWith": [
              "l1-013"
            ],
            "german": "die Dame",
            "japanese": "女性・婦人（やや改まった言い方）",
            "distinction": "Frau よりもやや改まった「女性・婦人」という語です。",
            "article": "die",
            "plural": "Damen",
            "pluralDistractors": [
              "Dames",
              "Däme",
              "Dame"
            ],
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
            "confusableWith": [
              "l1-007"
            ],
            "german": "die Frau",
            "japanese": "女性・～さん（一般的な言い方）",
            "distinction": "一般的な「女性」を表し、人名とともに「～さん」という敬称にも使います。",
            "article": "die",
            "plural": "Frauen",
            "pluralDistractors": [
              "Fraus",
              "Fraue",
              "Fraun"
            ],
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
            "pluralDistractors": [
              "Herrs",
              "Herre",
              "Herrer"
            ],
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
            "pluralDistractors": [
              "Names",
              "Namee",
              "Namer"
            ],
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
            "pluralDistractors": [
              "Firmas",
              "Firmae",
              "Firmer"
            ],
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
            "pluralDistractors": [
              "Spraches",
              "Spräche",
              "Spracher"
            ],
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
            "pluralDistractors": [
              "Frages",
              "Fräge",
              "Frager"
            ],
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
        "id": "preposition",
        "title": "前置詞",
        "items": [
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
            "id": "l1-030",
            "kind": "other",
            "german": "aus",
            "japanese": "～から、～出身の",
            "example": "Ich komme aus Japan.",
            "blank": "aus",
            "translation": "私は日本出身です。",
            "explanation": "aus は出身・起点を表す前置詞です。"
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
  },
  {
    "id": "lesson2",
    "title": "第2課　Meine Familie",
    "categories": [
      {
        "id": "conversation",
        "title": "フレーズ＆会話表現",
        "items": [
          {
            "id": "l2-c01",
            "kind": "conversation",
            "german": "Wie geht's?",
            "japanese": "元気？／調子はどう？",
            "example": "Wie geht's? – Super.",
            "blank": "Wie geht's?",
            "translation": "元気？―最高だよ。",
            "explanation": "親しい相手に使うカジュアルな「元気？」です。",
            "usage": "カジュアル"
          },
          {
            "id": "l2-c02",
            "kind": "conversation",
            "german": "Wie geht es Ihnen?",
            "japanese": "お元気ですか？",
            "example": "Wie geht es Ihnen? – Danke, sehr gut.",
            "blank": "Wie geht es Ihnen?",
            "translation": "お元気ですか？―ありがとう、とても元気です。",
            "explanation": "Sie を使う相手への丁寧な表現です。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c03",
            "kind": "conversation",
            "german": "Wie geht es dir?",
            "japanese": "元気？／調子はどう？",
            "example": "Wie geht es dir? – Gut, danke.",
            "blank": "Wie geht es dir?",
            "translation": "元気？―元気だよ、ありがとう。",
            "explanation": "親しい相手に使う表現です。",
            "usage": "カジュアル"
          },
          {
            "id": "l2-c04",
            "kind": "conversation",
            "german": "Und wie geht es Ihnen/dir?",
            "japanese": "それで、お元気ですか？",
            "example": "Und wie geht es Ihnen? – Auch gut, danke.",
            "blank": "Und wie geht es Ihnen?",
            "translation": "それで、お元気ですか？―こちらも元気です、ありがとう。",
            "explanation": "相手の調子を聞き返す表現です。",
            "usage": "Ihnen は丁寧、dir は親しい相手向け"
          },
          {
            "id": "l2-c05",
            "kind": "conversation",
            "german": "Danke, sehr gut.",
            "japanese": "ありがとう、とても元気です。",
            "example": "Wie geht es Ihnen? – Danke, sehr gut.",
            "blank": "Danke, sehr gut.",
            "translation": "お元気ですか？―ありがとう、とても元気です。",
            "explanation": "調子がとてもよいと答える表現です。"
          },
          {
            "id": "l2-c06",
            "kind": "conversation",
            "german": "Sehr gut.",
            "japanese": "とても元気です／とてもいいです。",
            "example": "Wie geht's? – Sehr gut.",
            "blank": "Sehr gut.",
            "translation": "元気？―とても元気だよ。",
            "explanation": "とてもよい状態だと答える表現です。"
          },
          {
            "id": "l2-c07",
            "kind": "conversation",
            "german": "Gut, danke.",
            "japanese": "元気です、ありがとう。",
            "example": "Wie geht es dir? – Gut, danke.",
            "blank": "Gut, danke.",
            "translation": "元気？―元気だよ、ありがとう。",
            "explanation": "簡潔に調子を答える表現です。"
          },
          {
            "id": "l2-c08",
            "kind": "conversation",
            "german": "Na ja, es geht.",
            "japanese": "まあ、なんとか。",
            "example": "Wie geht's? – Na ja, es geht.",
            "blank": "Na ja, es geht.",
            "translation": "元気？―まあ、なんとか。",
            "explanation": "あまりよくも悪くもないときの表現です。"
          },
          {
            "id": "l2-c09",
            "kind": "conversation",
            "german": "Ach, nicht so gut.",
            "japanese": "ああ、あまりよくないです。",
            "example": "Wie geht's? – Ach, nicht so gut.",
            "blank": "Ach, nicht so gut.",
            "translation": "元気？―ああ、あまりよくないです。",
            "explanation": "調子があまりよくないときの表現です。"
          },
          {
            "id": "l2-c10",
            "kind": "conversation",
            "german": "Auch gut, danke.",
            "japanese": "こちらも元気です、ありがとう。",
            "example": "Wie geht es Ihnen? – Auch gut, danke.",
            "blank": "Auch gut, danke.",
            "translation": "お元気ですか？―こちらも元気です、ありがとう。",
            "explanation": "自分も元気だと答える表現です。"
          },
          {
            "id": "l2-c11",
            "kind": "conversation",
            "german": "Das ist mein Vater.",
            "japanese": "こちらは私の父です。",
            "example": "Das ist mein Vater.",
            "blank": "mein Vater",
            "translation": "こちらは私の父です。",
            "explanation": "家族を紹介するときの表現です。"
          },
          {
            "id": "l2-c12",
            "kind": "conversation",
            "german": "Das sind meine Großeltern.",
            "japanese": "こちらは私の祖父母です。",
            "example": "Das sind meine Großeltern.",
            "blank": "meine Großeltern",
            "translation": "こちらは私の祖父母です。",
            "explanation": "複数の人を紹介するときは Das sind ... を使います。"
          },
          {
            "id": "l2-c13",
            "kind": "conversation",
            "german": "Sie/Er lebt in ...",
            "japanese": "彼女／彼は…に住んでいます。",
            "example": "Sie lebt in Hamburg.",
            "blank": "Sie lebt in Hamburg.",
            "translation": "彼女はハンブルクに住んでいます。",
            "explanation": "住んでいる場所を伝える表現です。"
          },
          {
            "id": "l2-c14",
            "kind": "conversation",
            "german": "Sie/Er kommt aus ...",
            "japanese": "彼女／彼は…出身です。",
            "example": "Er kommt aus Kanada.",
            "blank": "Er kommt aus Kanada.",
            "translation": "彼はカナダ出身です。",
            "explanation": "出身地を伝える表現です。"
          },
          {
            "id": "l2-c15",
            "kind": "conversation",
            "german": "Wo wohnen Sie?",
            "japanese": "あなたはどこに住んでいますか？",
            "example": "Wo wohnen Sie? – Ich wohne in Hamburg.",
            "blank": "Wo wohnen Sie?",
            "translation": "あなたはどこに住んでいますか？―私はハンブルクに住んでいます。",
            "explanation": "住んでいる場所を丁寧に尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c16",
            "kind": "conversation",
            "german": "Wie ist Ihre Adresse?",
            "japanese": "あなたの住所は何ですか？",
            "example": "Wie ist Ihre Adresse? – Marktstraße 1, Hamburg.",
            "blank": "Wie ist Ihre Adresse?",
            "translation": "あなたの住所は何ですか？―マルクト通り1番地、ハンブルクです。",
            "explanation": "住所を丁寧に尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c17",
            "kind": "conversation",
            "german": "Wie ist Ihre Telefonnummer?",
            "japanese": "あなたの電話番号は何ですか？",
            "example": "Wie ist Ihre Telefonnummer? – 788639.",
            "blank": "Wie ist Ihre Telefonnummer?",
            "translation": "あなたの電話番号は何ですか？―788639です。",
            "explanation": "電話番号を丁寧に尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c18",
            "kind": "conversation",
            "german": "Sind Sie verheiratet?",
            "japanese": "あなたは結婚していますか？",
            "example": "Sind Sie verheiratet? – Ja, ich bin verheiratet.",
            "blank": "Sind Sie verheiratet?",
            "translation": "あなたは結婚していますか？―はい、結婚しています。",
            "explanation": "既婚かどうかを丁寧に尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c19",
            "kind": "conversation",
            "german": "Haben Sie Kinder?",
            "japanese": "お子さんはいますか？",
            "example": "Haben Sie Kinder? – Ja, zwei.",
            "blank": "Haben Sie Kinder?",
            "translation": "お子さんはいますか？―はい、2人です。",
            "explanation": "子どもの有無を丁寧に尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c20",
            "kind": "conversation",
            "german": "Wie alt ist Ihr Kind?",
            "japanese": "あなたのお子さんは何歳ですか？",
            "example": "Wie alt ist Ihr Kind? – Drei.",
            "blank": "Wie alt ist Ihr Kind?",
            "translation": "あなたのお子さんは何歳ですか？―3歳です。",
            "explanation": "1人の子どもの年齢を尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c21",
            "kind": "conversation",
            "german": "Wie alt sind Ihre Kinder?",
            "japanese": "あなたのお子さんたちは何歳ですか？",
            "example": "Wie alt sind Ihre Kinder? – Acht und fünf.",
            "blank": "Wie alt sind Ihre Kinder?",
            "translation": "あなたのお子さんたちは何歳ですか？―8歳と5歳です。",
            "explanation": "複数の子どもの年齢を尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c22",
            "kind": "conversation",
            "german": "Wo sind Sie geboren?",
            "japanese": "どこで生まれましたか？",
            "example": "Wo sind Sie geboren? – In Biasca.",
            "blank": "Wo sind Sie geboren?",
            "translation": "どこで生まれましたか？―ビアスカです。",
            "explanation": "出生地を丁寧に尋ねます。",
            "usage": "丁寧"
          },
          {
            "id": "l2-c23",
            "kind": "conversation",
            "german": "Ja, genau.",
            "japanese": "はい、その通りです。",
            "example": "Ja, genau.",
            "blank": "Ja, genau.",
            "translation": "はい、その通りです。",
            "explanation": "相手の発言を肯定するときに使います。"
          },
          {
            "id": "l2-c24",
            "kind": "conversation",
            "german": "Nein, falsch.",
            "japanese": "いいえ、違います。",
            "example": "Nein, falsch.",
            "blank": "Nein, falsch.",
            "translation": "いいえ、違います。",
            "explanation": "相手の発言を否定するときに使います。"
          }
        ]
      },
      {
        "id": "noun",
        "title": "名詞",
        "items": [
          {
            "id": "l2-n01",
            "kind": "noun",
            "german": "der Lehrer",
            "japanese": "男性教師",
            "example": "Tim ist der Lehrer.",
            "blank": "Lehrer",
            "translation": "ティムは男性教師です。",
            "explanation": "Lehrer は男性名詞です。",
            "article": "der",
            "plural": "Lehrer",
            "pluralDistractors": [
              "Lehrers",
              "Lehre",
              "Lehreren"
            ]
          },
          {
            "id": "l2-n02",
            "kind": "noun",
            "german": "die Lehrerin",
            "japanese": "女性教師",
            "example": "Lara ist die Lehrerin.",
            "blank": "Lehrerin",
            "translation": "ララは女性教師です。",
            "explanation": "Lehrerin の複数形は Lehrerinnen です。",
            "article": "die",
            "plural": "Lehrerinnen",
            "pluralDistractors": [
              "Lehrerins",
              "Lehrerine",
              "Lehrerinen"
            ]
          },
          {
            "id": "l2-n03",
            "kind": "noun",
            "german": "die Pause",
            "japanese": "休憩、休み時間",
            "example": "Tim und Lara haben Pause.",
            "blank": "Pause",
            "translation": "ティムとララは休憩しています。",
            "explanation": "Pause の複数形は Pausen です。",
            "article": "die",
            "plural": "Pausen",
            "pluralDistractors": [
              "Pauses",
              "Paus",
              "Pausn"
            ]
          },
          {
            "id": "l2-n04",
            "kind": "noun",
            "german": "der Park",
            "japanese": "公園",
            "example": "Tim und Lara lernen im Park.",
            "blank": "Park",
            "translation": "ティムとララは公園で勉強します。",
            "explanation": "Park の複数形は Parks です。",
            "article": "der",
            "plural": "Parks",
            "pluralDistractors": [
              "Parke",
              "Parken",
              "Pärks"
            ]
          },
          {
            "id": "l2-n05",
            "kind": "noun",
            "german": "die Familie",
            "japanese": "家族",
            "example": "Das ist meine Familie.",
            "blank": "Familie",
            "translation": "こちらは私の家族です。",
            "explanation": "Familie の複数形は Familien です。",
            "article": "die",
            "plural": "Familien",
            "pluralDistractors": [
              "Families",
              "Familiee",
              "Familienn"
            ]
          },
          {
            "id": "l2-n06",
            "kind": "noun",
            "german": "der Vater",
            "japanese": "父、父親",
            "example": "Das ist Tims Vater.",
            "blank": "Vater",
            "translation": "こちらはティムの父です。",
            "explanation": "Vater の複数形は Väter です。",
            "article": "der",
            "plural": "Väter",
            "pluralDistractors": [
              "Vaters",
              "Vater",
              "Vätern"
            ]
          },
          {
            "id": "l2-n07",
            "kind": "noun",
            "german": "die Großeltern",
            "japanese": "祖父母",
            "example": "Das sind Laras Großeltern.",
            "blank": "Großeltern",
            "translation": "こちらはララの祖父母です。",
            "explanation": "Großeltern は複数形で使います。",
            "article": "die",
            "plural": "Großeltern",
            "pluralDistractors": [
              "Großelterns",
              "Großelter",
              "Großelterner"
            ]
          },
          {
            "id": "l2-n08",
            "kind": "noun",
            "german": "die Mutter",
            "japanese": "母、母親",
            "example": "Das ist Laras Mutter.",
            "blank": "Mutter",
            "translation": "こちらはララの母です。",
            "explanation": "Mutter の複数形は Mütter です。",
            "article": "die",
            "plural": "Mütter",
            "pluralDistractors": [
              "Mutters",
              "Muttere",
              "Müttern"
            ]
          },
          {
            "id": "l2-n09",
            "kind": "noun",
            "german": "die Eltern",
            "japanese": "両親",
            "example": "Das sind Tims Eltern.",
            "blank": "Eltern",
            "translation": "こちらはティムの両親です。",
            "explanation": "Eltern は複数形で使います。",
            "article": "die",
            "plural": "Eltern",
            "pluralDistractors": [
              "Elterns",
              "Elterne",
              "Elternen"
            ]
          },
          {
            "id": "l2-n10",
            "kind": "noun",
            "german": "der Bruder",
            "japanese": "兄、弟、兄弟",
            "example": "Das ist Tims Bruder.",
            "blank": "Bruder",
            "translation": "こちらはティムの兄弟です。",
            "explanation": "Bruder の複数形は Brüder です。",
            "article": "der",
            "plural": "Brüder",
            "pluralDistractors": [
              "Bruders",
              "Bruder",
              "Brüderen"
            ]
          },
          {
            "id": "l2-n11",
            "kind": "noun",
            "german": "die Geschwister",
            "japanese": "兄弟姉妹",
            "example": "Lara hat Geschwister.",
            "blank": "Geschwister",
            "translation": "ララには兄弟姉妹がいます。",
            "explanation": "Geschwister は複数形で使います。",
            "article": "die",
            "plural": "Geschwister",
            "pluralDistractors": [
              "Geschwisters",
              "Geschwistere",
              "Geschwisteren"
            ]
          },
          {
            "id": "l2-n12",
            "kind": "noun",
            "german": "das Jahr",
            "japanese": "年",
            "example": "Lara ist zwanzig Jahre alt.",
            "blank": "Jahr",
            "translation": "ララは20歳です。",
            "explanation": "Jahr の複数形は Jahre です。",
            "article": "das",
            "plural": "Jahre",
            "pluralDistractors": [
              "Jahrs",
              "Jahres",
              "Jahren"
            ]
          },
          {
            "id": "l2-n13",
            "kind": "noun",
            "german": "der Enkel",
            "japanese": "孫（男の子）",
            "example": "Walter ist Lilis Enkel.",
            "blank": "Enkel",
            "translation": "ヴァルターはリリの孫です。",
            "explanation": "Enkel の複数形も Enkel です。",
            "article": "der",
            "plural": "Enkel",
            "pluralDistractors": [
              "Enkels",
              "Enkele",
              "Enkeln"
            ]
          },
          {
            "id": "l2-n14",
            "kind": "noun",
            "german": "die Enkelin",
            "japanese": "孫娘",
            "example": "Lili ist Walters Enkelin.",
            "blank": "Enkelin",
            "translation": "リリはヴァルターの孫娘です。",
            "explanation": "Enkelin の複数形は Enkelinnen です。",
            "article": "die",
            "plural": "Enkelinnen",
            "pluralDistractors": [
              "Enkelins",
              "Enkeline",
              "Enkelin"
            ]
          },
          {
            "id": "l2-n15",
            "kind": "noun",
            "german": "die Tochter",
            "japanese": "娘",
            "example": "Sofia ist Walters Tochter.",
            "blank": "Tochter",
            "translation": "ソフィアはヴァルターの娘です。",
            "explanation": "Tochter の複数形は Töchter です。",
            "article": "die",
            "plural": "Töchter",
            "pluralDistractors": [
              "Tochters",
              "Tochtere",
              "Tochtern"
            ]
          },
          {
            "id": "l2-n16",
            "kind": "noun",
            "german": "der Sohn",
            "japanese": "息子",
            "example": "Tobias ist Walters Sohn.",
            "blank": "Sohn",
            "translation": "トビアスはヴァルターの息子です。",
            "explanation": "Sohn の複数形は Söhne です。",
            "article": "der",
            "plural": "Söhne",
            "pluralDistractors": [
              "Sohns",
              "Sohne",
              "Söhnen"
            ]
          },
          {
            "id": "l2-n17",
            "kind": "noun",
            "german": "das Kind",
            "japanese": "子ども",
            "example": "Das sind meine Kinder.",
            "blank": "Kind",
            "translation": "こちらは私の子どもたちです。",
            "explanation": "Kind の複数形は Kinder です。",
            "article": "das",
            "plural": "Kinder",
            "pluralDistractors": [
              "Kinds",
              "Kinde",
              "Kindern"
            ]
          },
          {
            "id": "l2-n18",
            "kind": "noun",
            "german": "die Schwester",
            "japanese": "姉、妹、姉妹",
            "example": "Sofia ist meine Schwester.",
            "blank": "Schwester",
            "translation": "ソフィアは私の姉妹です。",
            "explanation": "Schwester の複数形は Schwestern です。",
            "article": "die",
            "plural": "Schwestern",
            "pluralDistractors": [
              "Schwesters",
              "Schwesterer",
              "Schwester"
            ]
          },
          {
            "id": "l2-n19",
            "kind": "noun",
            "german": "die Oma",
            "japanese": "おばあちゃん、祖母",
            "example": "Luise ist Lilis Oma.",
            "blank": "Oma",
            "translation": "ルイーゼはリリのおばあちゃんです。",
            "explanation": "Oma はくだけた「祖母」です。",
            "article": "die",
            "plural": "Omas",
            "pluralDistractors": [
              "Omae",
              "Oman",
              "Omer"
            ]
          },
          {
            "id": "l2-n20",
            "kind": "noun",
            "german": "die Großmutter",
            "japanese": "祖母",
            "example": "Luisa ist Lilis Großmutter.",
            "blank": "Großmutter",
            "translation": "ルイーザはリリの祖母です。",
            "explanation": "Großmutter の複数形は Großmütter です。",
            "article": "die",
            "plural": "Großmütter",
            "pluralDistractors": [
              "Großmutters",
              "Großmuttere",
              "Großmüttern"
            ]
          },
          {
            "id": "l2-n21",
            "kind": "noun",
            "german": "der Mann",
            "japanese": "男性、夫",
            "example": "Walter ist mein Mann.",
            "blank": "Mann",
            "translation": "ヴァルターは私の夫です。",
            "explanation": "Mann の複数形は Männer です。",
            "article": "der",
            "plural": "Männer",
            "pluralDistractors": [
              "Manns",
              "Männ",
              "Manne"
            ]
          },
          {
            "id": "l2-n22",
            "kind": "noun",
            "german": "der Opa",
            "japanese": "おじいちゃん、祖父",
            "example": "Walter ist Lilis Opa.",
            "blank": "Opa",
            "translation": "ヴァルターはリリのおじいちゃんです。",
            "explanation": "Opa はくだけた「祖父」です。",
            "article": "der",
            "plural": "Opas",
            "pluralDistractors": [
              "Opae",
              "Opan",
              "Opar"
            ]
          },
          {
            "id": "l2-n23",
            "kind": "noun",
            "german": "der Großvater",
            "japanese": "祖父",
            "example": "Walter ist Lilis Großvater.",
            "blank": "Großvater",
            "translation": "ヴァルターはリリの祖父です。",
            "explanation": "Großvater の複数形は Großväter です。",
            "article": "der",
            "plural": "Großväter",
            "pluralDistractors": [
              "Großvaters",
              "Großvatere",
              "Großvatern"
            ]
          },
          {
            "id": "l2-n24",
            "kind": "noun",
            "german": "der Ehemann",
            "japanese": "夫",
            "example": "Er ist mein Ehemann.",
            "blank": "Ehemann",
            "translation": "彼は私の夫です。",
            "explanation": "Ehemann の複数形は Ehemänner です。",
            "article": "der",
            "plural": "Ehemänner",
            "pluralDistractors": [
              "Ehemanns",
              "Ehemanner",
              "Ehemännern"
            ]
          },
          {
            "id": "l2-n25",
            "kind": "noun",
            "german": "die Ehefrau",
            "japanese": "妻",
            "example": "Sie ist meine Ehefrau.",
            "blank": "Ehefrau",
            "translation": "彼女は私の妻です。",
            "explanation": "Ehefrau の複数形は Ehefrauen です。",
            "article": "die",
            "plural": "Ehefrauen",
            "pluralDistractors": [
              "Ehefraus",
              "Ehefraue",
              "Ehefrau"
            ]
          },
          {
            "id": "l2-n26",
            "kind": "noun",
            "german": "die Liste",
            "japanese": "リスト、一覧表",
            "example": "Machen Sie eine Liste.",
            "blank": "Liste",
            "translation": "リストを作ってください。",
            "explanation": "Liste の複数形は Listen です。",
            "article": "die",
            "plural": "Listen",
            "pluralDistractors": [
              "Listes",
              "Listee",
              "Lister"
            ]
          },
          {
            "id": "l2-n27",
            "kind": "noun",
            "german": "die Zahl",
            "japanese": "数字、数",
            "example": "Zahl: 0, 1, 2, ...",
            "blank": "Zahl",
            "translation": "数字：0、1、2、…",
            "explanation": "Zahl の複数形は Zahlen です。",
            "article": "die",
            "plural": "Zahlen",
            "pluralDistractors": [
              "Zahls",
              "Zahle",
              "Zahler"
            ]
          },
          {
            "id": "l2-n28",
            "kind": "noun",
            "german": "die Null",
            "japanese": "ゼロ、0",
            "example": "Null ist eine Zahl.",
            "blank": "Null",
            "translation": "0は数字です。",
            "explanation": "Null の複数形は Nullen です。",
            "article": "die",
            "plural": "Nullen",
            "pluralDistractors": [
              "Nulls",
              "Nulle",
              "Nuller"
            ]
          },
          {
            "id": "l2-n29",
            "kind": "noun",
            "german": "die Nummer",
            "japanese": "番号",
            "example": "Wie ist Ihre Telefonnummer?",
            "blank": "Nummer",
            "translation": "あなたの電話番号は何ですか？",
            "explanation": "Nummer の複数形は Nummern です。",
            "article": "die",
            "plural": "Nummern",
            "pluralDistractors": [
              "Nummers",
              "Nummere",
              "Nummer"
            ]
          },
          {
            "id": "l2-n30",
            "kind": "noun",
            "german": "der Geburtsort",
            "japanese": "出生地",
            "example": "Geburtsort: Biasca.",
            "blank": "Geburtsort",
            "translation": "出生地：ビアスカ。",
            "explanation": "Geburtsort は「生まれた場所」を表します。",
            "article": "der",
            "plural": "Geburtsorte",
            "pluralDistractors": [
              "Geburtsorts",
              "Geburtsortee",
              "Geburtsortn"
            ]
          },
          {
            "id": "l2-n31",
            "kind": "noun",
            "german": "der Wohnort",
            "japanese": "居住地、住所地",
            "example": "Wohnort: 20249 Hamburg.",
            "blank": "Wohnort",
            "translation": "居住地：20249 ハンブルク。",
            "explanation": "Wohnort は「住んでいる場所」を表します。",
            "article": "der",
            "plural": "Wohnorte",
            "pluralDistractors": [
              "Wohnorts",
              "Wohnortee",
              "Wohnortn"
            ]
          },
          {
            "id": "l2-n32",
            "kind": "noun",
            "german": "der Familienstand",
            "japanese": "婚姻状況",
            "example": "Familienstand: ledig, verheiratet, geschieden, ...",
            "blank": "Familienstand",
            "translation": "婚姻状況：独身、既婚、離婚など。",
            "explanation": "Familienstand は婚姻状況を表す男性名詞です。",
            "article": "der",
            "plural": "Familienstände",
            "pluralDistractors": [
              "Familienstands",
              "Familienstande",
              "Familienstandern"
            ]
          },
          {
            "id": "l2-n33",
            "kind": "noun",
            "german": "die Hauptstadt",
            "japanese": "首都",
            "example": "Berlin ist die Hauptstadt von Deutschland.",
            "blank": "Hauptstadt",
            "translation": "ベルリンはドイツの首都です。",
            "explanation": "Hauptstadt の複数形は Hauptstädte です。",
            "article": "die",
            "plural": "Hauptstädte",
            "pluralDistractors": [
              "Hauptstadts",
              "Hauptstädter",
              "Hauptstädten"
            ]
          },
          {
            "id": "l2-n34",
            "kind": "noun",
            "german": "die Polizei",
            "japanese": "警察",
            "example": "Ich bin bei der Polizei.",
            "blank": "Polizei",
            "translation": "私は警察で働いています。",
            "explanation": "Polizei は単数形で扱う名詞です。",
            "article": "die",
            "plural": "—",
            "pluralDistractors": []
          },
          {
            "id": "l2-n35",
            "kind": "noun",
            "german": "der Arzt",
            "japanese": "医師、医者",
            "example": "Ich bin Arzt.",
            "blank": "Arzt",
            "translation": "私は医師です。",
            "explanation": "Arzt の複数形は Ärzte です。",
            "article": "der",
            "plural": "Ärzte",
            "pluralDistractors": [
              "Arzts",
              "Arzte",
              "Ärzten"
            ]
          },
          {
            "id": "l2-n36",
            "kind": "noun",
            "german": "der Partner",
            "japanese": "パートナー、相手（男性）",
            "example": "Mein Partner kommt aus Dänemark.",
            "blank": "Partner",
            "translation": "私のパートナーはデンマーク出身です。",
            "explanation": "Partner の複数形は Partner です。",
            "article": "der",
            "plural": "Partner",
            "pluralDistractors": [
              "Partners",
              "Partnere",
              "Partnern"
            ]
          },
          {
            "id": "l2-n37",
            "kind": "noun",
            "german": "die Partnerin",
            "japanese": "パートナー、相手（女性）",
            "example": "Meine Partnerin kommt aus Dänemark.",
            "blank": "Partnerin",
            "translation": "私の女性パートナーはデンマーク出身です。",
            "explanation": "Partnerin の複数形は Partnerinnen です。",
            "article": "die",
            "plural": "Partnerinnen",
            "pluralDistractors": [
              "Partnerins",
              "Partnerine",
              "Partnerin"
            ]
          },
          {
            "id": "l2-n38",
            "kind": "noun",
            "german": "das Alter",
            "japanese": "年齢",
            "example": "Alter: drei.",
            "blank": "Alter",
            "translation": "年齢：3歳。",
            "explanation": "Alter は年齢を表す中性名詞です。",
            "article": "das",
            "plural": "—",
            "pluralDistractors": []
          }
        ]
      },
      {
        "id": "verb",
        "title": "動詞",
        "items": [
          {
            "id": "l2-v01",
            "kind": "verb",
            "german": "lernen",
            "japanese": "学ぶ、勉強する",
            "example": "Tim lernt auch Deutsch.",
            "blank": "lernt",
            "translation": "ティムもドイツ語を勉強します。",
            "explanation": "lernen は「学ぶ、勉強する」。3人称単数では lernt です。"
          },
          {
            "id": "l2-v02",
            "kind": "verb",
            "german": "haben",
            "japanese": "持っている、ある",
            "example": "Tim und Lara haben Pause.",
            "blank": "haben",
            "translation": "ティムとララは休憩しています。",
            "explanation": "haben は「持っている」。複数主語では haben です。"
          },
          {
            "id": "l2-v03",
            "kind": "verb",
            "german": "leben",
            "japanese": "住む、暮らす",
            "example": "Laras Vater lebt in Poznań.",
            "blank": "lebt",
            "translation": "ララの父はポズナンに住んでいます。",
            "explanation": "leben は「住む、暮らす」。3人称単数では lebt です。"
          },
          {
            "id": "l2-v04",
            "kind": "verb",
            "german": "heißen",
            "japanese": "～という名前である",
            "example": "Sie heißt Lara.",
            "blank": "heißt",
            "translation": "彼女はララという名前です。",
            "explanation": "heißen は「～という名前である」。3人称単数では heißt です。"
          },
          {
            "id": "l2-v05",
            "kind": "verb",
            "german": "sprechen",
            "japanese": "話す",
            "example": "Er spricht Deutsch.",
            "blank": "spricht",
            "translation": "彼はドイツ語を話します。",
            "explanation": "sprechen は3人称単数で e→i の母音交替があり、spricht になります。"
          },
          {
            "id": "l2-v06",
            "kind": "verb",
            "german": "sein",
            "japanese": "～である",
            "example": "Ich bin verheiratet.",
            "blank": "bin",
            "translation": "私は結婚しています。",
            "explanation": "sein は「～である」。ich では bin です。"
          },
          {
            "id": "l2-v07",
            "kind": "verb",
            "german": "kennen",
            "japanese": "知っている、面識がある",
            "example": "Du kennst uns noch nicht?",
            "blank": "kennst",
            "translation": "君はまだ私たちを知らないの？",
            "explanation": "kennen は人や場所などを知っているという意味です。du では kennst です。"
          },
          {
            "id": "l2-v08",
            "kind": "verb",
            "german": "wohnen",
            "japanese": "住む",
            "example": "Tim wohnt jetzt in München.",
            "blank": "wohnt",
            "translation": "ティムは今ミュンヘンに住んでいます。",
            "explanation": "wohnen は「住む」。3人称単数では wohnt です。"
          },
          {
            "id": "l2-v09",
            "kind": "verb",
            "german": "liegen",
            "japanese": "位置している、ある",
            "example": "Hamburg liegt in Norddeutschland.",
            "blank": "liegt",
            "translation": "ハンブルクは北ドイツにあります。",
            "explanation": "liegen は場所が「位置している」という意味でも使います。"
          }
        ]
      },
      {
        "id": "adjadv",
        "title": "形容詞・副詞",
        "items": [
          {
            "id": "l2-a01",
            "kind": "adjadv",
            "german": "super",
            "japanese": "最高、とてもいい",
            "example": "Wie geht's? – Super.",
            "blank": "Super",
            "translation": "元気？―最高だよ。",
            "explanation": "super はとてもよい状態を表します。"
          },
          {
            "id": "l2-a02",
            "kind": "adjadv",
            "german": "sehr",
            "japanese": "とても",
            "example": "Danke, sehr gut.",
            "blank": "sehr",
            "translation": "ありがとう、とても元気です。",
            "explanation": "sehr は程度を強める副詞です。"
          },
          {
            "id": "l2-a03",
            "kind": "adjadv",
            "german": "gut",
            "japanese": "よい、元気な",
            "example": "Wie geht's? – Gut, danke.",
            "blank": "Gut",
            "translation": "元気？―元気だよ、ありがとう。",
            "explanation": "gut は「よい」という意味で、調子を答えるときにも使います。"
          },
          {
            "id": "l2-a04",
            "kind": "adjadv",
            "german": "falsch",
            "japanese": "間違った、違う",
            "example": "Nein, falsch.",
            "blank": "falsch",
            "translation": "いいえ、違います。",
            "explanation": "falsch は「正しくない、間違っている」という意味です。"
          },
          {
            "id": "l2-a05",
            "kind": "adjadv",
            "german": "genau",
            "japanese": "その通り、正確に",
            "example": "Ja, genau.",
            "blank": "genau",
            "translation": "はい、その通りです。",
            "explanation": "genau は「正確に」のほか「その通り」という応答にも使います。"
          },
          {
            "id": "l2-a06",
            "kind": "adjadv",
            "german": "ledig",
            "japanese": "独身の、未婚の",
            "example": "Ich bin ledig.",
            "blank": "ledig",
            "translation": "私は未婚です。",
            "explanation": "ledig は婚姻関係がない状態を表します。"
          },
          {
            "id": "l2-a07",
            "kind": "adjadv",
            "german": "verheiratet",
            "japanese": "結婚している",
            "example": "Ich bin verheiratet.",
            "blank": "verheiratet",
            "translation": "私は結婚しています。",
            "explanation": "verheiratet は「結婚している」という状態を表します。"
          },
          {
            "id": "l2-a08",
            "kind": "adjadv",
            "german": "geschieden",
            "japanese": "離婚した、離婚している",
            "example": "Sie sind geschieden.",
            "blank": "geschieden",
            "translation": "彼らは離婚しています。",
            "explanation": "geschieden は「離婚した」という状態を表します。"
          },
          {
            "id": "l2-a09",
            "kind": "adjadv",
            "german": "verwitwet",
            "japanese": "死別した",
            "example": "Ich bin verwitwet.",
            "blank": "verwitwet",
            "translation": "私は配偶者と死別しています。",
            "explanation": "verwitwet は配偶者を亡くしている状態を表します。"
          },
          {
            "id": "l2-a10",
            "kind": "adjadv",
            "german": "alt",
            "japanese": "年齢が～の、古い",
            "example": "Wie alt ist Ihr Kind?",
            "blank": "alt",
            "translation": "あなたのお子さんは何歳ですか？",
            "explanation": "alt は年齢を尋ねる Wie alt ...? で使われます。"
          }
        ]
      },
      {
        "id": "numeral",
        "title": "数詞",
        "items": [
          {
            "id": "l2-num00",
            "kind": "numeral",
            "german": "null",
            "japanese": "0",
            "example": "Null ist eine Zahl.",
            "blank": "null",
            "translation": "0は数字です。",
            "explanation": "null は数詞の「0」です。名詞の die Null（ゼロ）とは区別できます。"
          },
          {
            "id": "l2-num01",
            "kind": "numeral",
            "german": "eins",
            "japanese": "1",
            "example": "Eins Jahre alt.",
            "blank": "eins",
            "translation": "1歳です。",
            "explanation": "eins は数字の1です。"
          },
          {
            "id": "l2-num02",
            "kind": "numeral",
            "german": "zwei",
            "japanese": "2",
            "example": "Zwei Jahre alt.",
            "blank": "zwei",
            "translation": "2歳です。",
            "explanation": "zwei は数字の2です。"
          },
          {
            "id": "l2-num03",
            "kind": "numeral",
            "german": "drei",
            "japanese": "3",
            "example": "Drei Jahre alt.",
            "blank": "drei",
            "translation": "3歳です。",
            "explanation": "drei は数字の3です。"
          },
          {
            "id": "l2-num04",
            "kind": "numeral",
            "german": "vier",
            "japanese": "4",
            "example": "Vier Jahre alt.",
            "blank": "vier",
            "translation": "4歳です。",
            "explanation": "vier は数字の4です。"
          },
          {
            "id": "l2-num05",
            "kind": "numeral",
            "german": "fünf",
            "japanese": "5",
            "example": "Fünf Jahre alt.",
            "blank": "fünf",
            "translation": "5歳です。",
            "explanation": "fünf は数字の5です。"
          },
          {
            "id": "l2-num06",
            "kind": "numeral",
            "german": "sechs",
            "japanese": "6",
            "example": "Sechs Jahre alt.",
            "blank": "sechs",
            "translation": "6歳です。",
            "explanation": "sechs は数字の6です。"
          },
          {
            "id": "l2-num07",
            "kind": "numeral",
            "german": "sieben",
            "japanese": "7",
            "example": "Sieben Jahre alt.",
            "blank": "sieben",
            "translation": "7歳です。",
            "explanation": "sieben は数字の7です。"
          },
          {
            "id": "l2-num08",
            "kind": "numeral",
            "german": "acht",
            "japanese": "8",
            "example": "Acht Jahre alt.",
            "blank": "acht",
            "translation": "8歳です。",
            "explanation": "acht は数字の8です。"
          },
          {
            "id": "l2-num09",
            "kind": "numeral",
            "german": "neun",
            "japanese": "9",
            "example": "Neun Jahre alt.",
            "blank": "neun",
            "translation": "9歳です。",
            "explanation": "neun は数字の9です。"
          },
          {
            "id": "l2-num10",
            "kind": "numeral",
            "german": "zehn",
            "japanese": "10",
            "example": "Zehn Jahre alt.",
            "blank": "zehn",
            "translation": "10歳です。",
            "explanation": "zehn は数字の10です。"
          },
          {
            "id": "l2-num11",
            "kind": "numeral",
            "german": "elf",
            "japanese": "11",
            "example": "Elf Jahre alt.",
            "blank": "elf",
            "translation": "11歳です。",
            "explanation": "elf は数字の11です。"
          },
          {
            "id": "l2-num12",
            "kind": "numeral",
            "german": "zwölf",
            "japanese": "12",
            "example": "Zwölf Jahre alt.",
            "blank": "zwölf",
            "translation": "12歳です。",
            "explanation": "zwölf は数字の12です。"
          },
          {
            "id": "l2-num13",
            "kind": "numeral",
            "german": "dreizehn",
            "japanese": "13",
            "example": "Dreizehn Jahre alt.",
            "blank": "dreizehn",
            "translation": "13歳です。",
            "explanation": "dreizehn は数字の13です。"
          },
          {
            "id": "l2-num14",
            "kind": "numeral",
            "german": "vierzehn",
            "japanese": "14",
            "example": "Vierzehn Jahre alt.",
            "blank": "vierzehn",
            "translation": "14歳です。",
            "explanation": "vierzehn は数字の14です。"
          },
          {
            "id": "l2-num15",
            "kind": "numeral",
            "german": "fünfzehn",
            "japanese": "15",
            "example": "Fünfzehn Jahre alt.",
            "blank": "fünfzehn",
            "translation": "15歳です。",
            "explanation": "fünfzehn は数字の15です。"
          },
          {
            "id": "l2-num16",
            "kind": "numeral",
            "german": "sechzehn",
            "japanese": "16",
            "example": "Sechzehn Jahre alt.",
            "blank": "sechzehn",
            "translation": "16歳です。",
            "explanation": "sechzehn は数字の16です。"
          },
          {
            "id": "l2-num17",
            "kind": "numeral",
            "german": "siebzehn",
            "japanese": "17",
            "example": "Siebzehn Jahre alt.",
            "blank": "siebzehn",
            "translation": "17歳です。",
            "explanation": "siebzehn は数字の17です。"
          },
          {
            "id": "l2-num18",
            "kind": "numeral",
            "german": "achtzehn",
            "japanese": "18",
            "example": "Achtzehn Jahre alt.",
            "blank": "achtzehn",
            "translation": "18歳です。",
            "explanation": "achtzehn は数字の18です。"
          },
          {
            "id": "l2-num19",
            "kind": "numeral",
            "german": "neunzehn",
            "japanese": "19",
            "example": "Neunzehn Jahre alt.",
            "blank": "neunzehn",
            "translation": "19歳です。",
            "explanation": "neunzehn は数字の19です。"
          },
          {
            "id": "l2-num20",
            "kind": "numeral",
            "german": "zwanzig",
            "japanese": "20",
            "example": "Zwanzig Jahre alt.",
            "blank": "zwanzig",
            "translation": "20歳です。",
            "explanation": "zwanzig は数字の20です。"
          }
        ]
      },
      {
        "id": "preposition",
        "title": "前置詞",
        "items": [
          {
            "id": "l2-o02",
            "kind": "other",
            "german": "in",
            "japanese": "～に、～で",
            "example": "Ich wohne in Hamburg.",
            "blank": "in",
            "translation": "私はハンブルクに住んでいます。",
            "explanation": "in は場所を表す前置詞です。"
          },
          {
            "id": "l2-o21",
            "kind": "other",
            "german": "von",
            "japanese": "～の、～から",
            "example": "Ich komme von der Arbeit.",
            "blank": "von",
            "translation": "私は仕事から来ます。",
            "explanation": "von は「～から」「～の」などを表す前置詞です。"
          },
          {
            "id": "l2-o22",
            "kind": "other",
            "german": "bei",
            "japanese": "～のところで、～に勤めて",
            "example": "Ich bin bei der Polizei.",
            "blank": "bei",
            "translation": "私は警察に勤めています。",
            "explanation": "bei は組織などとの関係や、そこで働くことを表せます。"
          },
          {
            "id": "l2-o24",
            "kind": "other",
            "german": "aus",
            "japanese": "～から、～出身の",
            "example": "Ich komme aus Kiel.",
            "blank": "aus",
            "translation": "私はキール出身です。",
            "explanation": "aus は出身地や起点を表します。"
          }
        ]
      },
      {
        "id": "conjunction",
        "title": "接続詞",
        "items": [
          {
            "id": "l2-o17",
            "kind": "other",
            "german": "aber",
            "japanese": "しかし、でも",
            "example": "Ich komme aus Kiel, aber ich lebe in Heidelberg.",
            "blank": "aber",
            "translation": "私はキール出身ですが、ハイデルベルクに住んでいます。",
            "explanation": "aber は逆接を表します。"
          },
          {
            "id": "l2-conj01",
            "kind": "conjunction",
            "german": "und",
            "japanese": "そして、～と",
            "example": "Hamburg und Kiel liegen in Norddeutschland.",
            "blank": "und",
            "translation": "ハンブルクとキールは北ドイツにあります。",
            "explanation": "und は語や文をつなぐ基本的な接続詞です。"
          }
        ]
      },
      {
        "id": "other",
        "title": "その他",
        "items": [
          {
            "id": "l2-o01",
            "kind": "other",
            "german": "auch",
            "japanese": "～も",
            "example": "Tim lernt auch Deutsch.",
            "blank": "auch",
            "translation": "ティムもドイツ語を勉強します。",
            "explanation": "auch は「～も」という意味です。"
          },
          {
            "id": "l2-o03",
            "kind": "other",
            "german": "dein-",
            "japanese": "君の",
            "example": "Wer ist das? Dein Bruder?",
            "blank": "Dein",
            "translation": "これは誰？君の兄弟？",
            "explanation": "dein- は「君の」を表す所有冠詞です。名詞に合わせて語尾が変化します。"
          },
          {
            "id": "l2-o04",
            "kind": "other",
            "german": "mein-",
            "japanese": "私の",
            "example": "Das ist mein Vater.",
            "blank": "mein",
            "translation": "こちらは私の父です。",
            "explanation": "mein- は「私の」を表す所有冠詞です。名詞に合わせて語尾が変化します。"
          },
          {
            "id": "l2-o05",
            "kind": "other",
            "german": "Ihr-",
            "japanese": "あなたの",
            "example": "Wie ist Ihre Adresse?",
            "blank": "Ihre",
            "translation": "あなたの住所は何ですか？",
            "explanation": "Ihr- は Sie に対する「あなたの」を表す所有冠詞です。大文字で書きます。"
          },
          {
            "id": "l2-o06",
            "kind": "other",
            "german": "sie (Singular)",
            "japanese": "彼女",
            "example": "Das ist Lara. Sie kommt aus Polen.",
            "blank": "Sie",
            "translation": "こちらはララです。彼女はポーランド出身です。",
            "explanation": "sie は「彼女」を表します。文頭では Sie と同じ形になるため文脈に注意します。"
          },
          {
            "id": "l2-o07",
            "kind": "other",
            "german": "sie (Plural)",
            "japanese": "彼ら／彼女ら",
            "example": "Das sind Laras Eltern. Sie sind geschieden.",
            "blank": "Sie",
            "translation": "こちらはララの両親です。彼らは離婚しています。",
            "explanation": "sie は複数では「彼ら／彼女ら」を表します。"
          },
          {
            "id": "l2-o08",
            "kind": "other",
            "german": "er",
            "japanese": "彼",
            "example": "Das ist Tim. Er kommt aus Kanada.",
            "blank": "Er",
            "translation": "こちらはティムです。彼はカナダ出身です。",
            "explanation": "er は「彼」を表します。"
          },
          {
            "id": "l2-o09",
            "kind": "other",
            "german": "ihr",
            "japanese": "君たち",
            "example": "Wer seid ihr?",
            "blank": "ihr",
            "translation": "君たちは誰？",
            "explanation": "ihr は du の複数形にあたる人称代名詞です。"
          },
          {
            "id": "l2-o10",
            "kind": "other",
            "german": "wir",
            "japanese": "私たち",
            "example": "Wir kommen aus Genf.",
            "blank": "Wir",
            "translation": "私たちはジュネーブ出身です。",
            "explanation": "wir は「私たち」を表します。"
          },
          {
            "id": "l2-o11",
            "kind": "other",
            "german": "zusammen",
            "japanese": "一緒に",
            "example": "Laras Eltern leben nicht zusammen.",
            "blank": "zusammen",
            "translation": "ララの両親は一緒に暮らしていません。",
            "explanation": "zusammen は「一緒に」という副詞です。"
          },
          {
            "id": "l2-o12",
            "kind": "other",
            "german": "jetzt",
            "japanese": "今、現在",
            "example": "Tim wohnt jetzt in München.",
            "blank": "jetzt",
            "translation": "ティムは今ミュンヘンに住んでいます。",
            "explanation": "jetzt は「今」という副詞です。"
          },
          {
            "id": "l2-o13",
            "kind": "other",
            "german": "wo",
            "japanese": "どこに、どこで",
            "example": "Wo wohnen Sie?",
            "blank": "Wo",
            "translation": "あなたはどこに住んでいますか？",
            "explanation": "wo は場所を尋ねる疑問詞です。"
          },
          {
            "id": "l2-o14",
            "kind": "other",
            "german": "geboren",
            "japanese": "生まれた",
            "example": "Wo sind Sie geboren?",
            "blank": "geboren",
            "translation": "どこで生まれましたか？",
            "explanation": "geboren は「生まれた」という意味です。"
          },
          {
            "id": "l2-o15",
            "kind": "other",
            "german": "also",
            "japanese": "つまり、それでは",
            "example": "Also, das sind wir: ...",
            "blank": "Also",
            "translation": "つまり、私たちはこうです：…",
            "explanation": "also は文脈により「つまり」「それでは」などの意味になります。"
          },
          {
            "id": "l2-o16",
            "kind": "other",
            "german": "hier",
            "japanese": "ここに、ここで",
            "example": "Ich lebe auch hier.",
            "blank": "hier",
            "translation": "私はここにも住んでいます。",
            "explanation": "hier は「ここ」を表す副詞です。"
          },
          {
            "id": "l2-o18",
            "kind": "other",
            "german": "schon",
            "japanese": "もう、すでに",
            "example": "Ich lebe schon sehr lange hier.",
            "blank": "schon",
            "translation": "私はもうここにとても長く住んでいます。",
            "explanation": "schon は「すでに、もう」という副詞です。"
          },
          {
            "id": "l2-o19",
            "kind": "other",
            "german": "lange",
            "japanese": "長く、長い間",
            "example": "Ich lebe schon sehr lange hier.",
            "blank": "lange",
            "translation": "私はもうここにとても長く住んでいます。",
            "explanation": "lange は時間の長さを表す副詞です。"
          },
          {
            "id": "l2-o20",
            "kind": "other",
            "german": "zurzeit",
            "japanese": "現在、今のところ",
            "example": "Zurzeit lebe ich in England.",
            "blank": "Zurzeit",
            "translation": "現在、私はイギリスに住んでいます。",
            "explanation": "zurzeit は「現在、今のところ」という副詞です。"
          },
          {
            "id": "l2-o23",
            "kind": "other",
            "german": "nicht",
            "japanese": "～ない",
            "example": "Laras Eltern leben nicht zusammen.",
            "blank": "nicht",
            "translation": "ララの両親は一緒に暮らしていません。",
            "explanation": "nicht は否定を表します。"
          }
        ]
      }
    ]
  }
];
// ========================================
// 動詞の活用練習
// ========================================

const verbData = [

  // ===== 1〜20 =====

  {
    id: 1,
    infinitive: "befehlen",
    meaning: "命じる",
    present: {
      du: "befiehlst",
      er: "befiehlt"
    },
    past: "befahl",
    konj2: "beföhle",
    participle: "befohlen"
  },

  {
    id: 2,
    infinitive: "beginnen",
    meaning: "始める",
    present: {
      du: "beginnst",
      er: "beginnt"
    },
    past: "begann",
    konj2: "begänne",
    participle: "begonnen"
  },

  {
    id: 3,
    infinitive: "beißen",
    meaning: "かむ",
    present: {
      du: "beißt",
      er: "beißt"
    },
    past: "biss",
    konj2: "bisse",
    participle: "gebissen"
  },

  {
    id: 4,
    infinitive: "bergen",
    meaning: "救出する",
    present: {
      du: "birgst",
      er: "birgt"
    },
    past: "barg",
    konj2: "bärge",
    participle: "geborgen"
  },

  {
    id: 5,
    infinitive: "bieten",
    meaning: "提供する",
    present: {
      du: "bietest",
      er: "bietet"
    },
    past: "bot",
    konj2: "böte",
    participle: "geboten"
  },

  {
    id: 6,
    infinitive: "binden",
    meaning: "結ぶ",
    present: {
      du: "bindest",
      er: "bindet"
    },
    past: "band",
    konj2: "bände",
    participle: "gebunden"
  },

  {
    id: 7,
    infinitive: "bitten",
    meaning: "頼む",
    present: {
      du: "bittest",
      er: "bittet"
    },
    past: "bat",
    konj2: "bäte",
    participle: "gebeten"
  },

  {
    id: 8,
    infinitive: "blasen",
    meaning: "吹く",
    present: {
      du: "bläst",
      er: "bläst"
    },
    past: "blies",
    konj2: "bliese",
    participle: "geblasen"
  },

  {
    id: 9,
    infinitive: "bleiben",
    meaning: "とどまる",
    present: {
      du: "bleibst",
      er: "bleibt"
    },
    past: "blieb",
    konj2: "bliebe",
    participle: "geblieben"
  },

  {
    id: 10,
    infinitive: "braten",
    meaning: "（肉を）焼く",
    present: {
      du: "brätst",
      er: "brät"
    },
    past: "briet",
    konj2: "briete",
    participle: "gebraten"
  },

  {
    id: 11,
    infinitive: "brechen",
    meaning: "折る",
    present: {
      du: "brichst",
      er: "bricht"
    },
    past: "brach",
    konj2: "bräche",
    participle: "gebrochen"
  },

  {
    id: 12,
    infinitive: "brennen",
    meaning: "燃やす・燃える",
    present: {
      du: "brennst",
      er: "brennt"
    },
    past: "brannte",
    konj2: "brennte",
    participle: "gebrannt"
  },

  {
    id: 13,
    infinitive: "bringen",
    meaning: "持ってくる",
    present: {
      du: "bringst",
      er: "bringt"
    },
    past: "brachte",
    konj2: "brächte",
    participle: "gebracht"
  },

  {
    id: 14,
    infinitive: "denken",
    meaning: "考える",
    present: {
      du: "denkst",
      er: "denkt"
    },
    past: "dachte",
    konj2: "dächte",
    participle: "gedacht"
  },

  {
    id: 15,
    infinitive: "dringen",
    meaning: "突き進む",
    present: {
      du: "dringst",
      er: "dringt"
    },
    past: "drang",
    konj2: "dränge",
    participle: "gedrungen"
  },

  {
    id: 16,
    infinitive: "dürfen",
    meaning: "…してもよい",
    present: {
      du: "darfst",
      er: "darf"
    },
    past: "durfte",
    konj2: "dürfte",
    participle: "gedurft"
  },

  {
    id: 17,
    infinitive: "empfehlen",
    meaning: "勧める",
    present: {
      du: "empfiehlst",
      er: "empfiehlt"
    },
    past: "empfahl",
    konj2: "empföhle",
    participle: "empfohlen"
  },

  {
    id: 18,
    infinitive: "erschrecken",
    meaning: "驚く",
    present: {
      du: "erschrickst",
      er: "erschrickt"
    },
    past: "erschrak",
    konj2: "erschräke",
    participle: "erschrocken"
  },

  {
    id: 19,
    infinitive: "essen",
    meaning: "食べる",
    present: {
      du: "isst",
      er: "isst"
    },
    past: "aß",
    konj2: "äße",
    participle: "gegessen"
  },

  {
    id: 20,
    infinitive: "fahren",
    meaning: "（乗物で）行く",
    present: {
      du: "fährst",
      er: "fährt"
    },
    past: "fuhr",
    konj2: "führe",
    participle: "gefahren"
  },


  // ===== 21〜40 =====

  {
    id: 21,
    infinitive: "fallen",
    meaning: "落ちる",
    present: {
      du: "fällst",
      er: "fällt"
    },
    past: "fiel",
    konj2: "fiele",
    participle: "gefallen"
  },

  {
    id: 22,
    infinitive: "fangen",
    meaning: "捕える",
    present: {
      du: "fängst",
      er: "fängt"
    },
    past: "fing",
    konj2: "finge",
    participle: "gefangen"
  },

  {
    id: 23,
    infinitive: "finden",
    meaning: "見つける",
    present: {
      du: "findest",
      er: "findet"
    },
    past: "fand",
    konj2: "fände",
    participle: "gefunden"
  },

  {
    id: 24,
    infinitive: "fliegen",
    meaning: "飛ぶ",
    present: {
      du: "fliegst",
      er: "fliegt"
    },
    past: "flog",
    konj2: "flöge",
    participle: "geflogen"
  },

  {
    id: 25,
    infinitive: "fliehen",
    meaning: "逃げる",
    present: {
      du: "fliehst",
      er: "flieht"
    },
    past: "floh",
    konj2: "flöhe",
    participle: "geflohen"
  },

  {
    id: 26,
    infinitive: "fließen",
    meaning: "流れる",
    present: {
      du: "fließt",
      er: "fließt"
    },
    past: "floss",
    konj2: "flösse",
    participle: "geflossen"
  },

  {
    id: 27,
    infinitive: "fressen",
    meaning: "（動物が）食う",
    present: {
      du: "frisst",
      er: "frisst"
    },
    past: "fraß",
    konj2: "fräße",
    participle: "gefressen"
  },

  {
    id: 28,
    infinitive: "frieren",
    meaning: "凍える",
    present: {
      du: "frierst",
      er: "friert"
    },
    past: "fror",
    konj2: "fröre",
    participle: "gefroren"
  },

  {
    id: 29,
    infinitive: "gebären",
    meaning: "産む",
    present: {
      du: "gebärst",
      er: "gebärt"
    },
    past: "gebar",
    konj2: "gebäre",
    participle: "geboren"
  },

  {
    id: 30,
    infinitive: "geben",
    meaning: "与える",
    present: {
      du: "gibst",
      er: "gibt"
    },
    past: "gab",
    konj2: "gäbe",
    participle: "gegeben"
  },

  {
    id: 31,
    infinitive: "gehen",
    meaning: "行く",
    present: {
      du: "gehst",
      er: "geht"
    },
    past: "ging",
    konj2: "ginge",
    participle: "gegangen"
  },

  {
    id: 32,
    infinitive: "gelingen",
    meaning: "成功する",
    present: {
      du: "gelingst",
      er: "gelingt"
    },
    past: "gelang",
    konj2: "gelänge",
    participle: "gelungen"
  },

  {
    id: 33,
    infinitive: "gelten",
    meaning: "通用する",
    present: {
      du: "giltst",
      er: "gilt"
    },
    past: "galt",
    konj2: "gölte",
    participle: "gegolten"
  },

  {
    id: 34,
    infinitive: "genießen",
    meaning: "楽しむ",
    present: {
      du: "genießt",
      er: "genießt"
    },
    past: "genoss",
    konj2: "genösse",
    participle: "genossen"
  },

  {
    id: 35,
    infinitive: "geschehen",
    meaning: "起こる",
    present: {
      du: "geschiehst",
      er: "geschieht"
    },
    past: "geschah",
    konj2: "geschähe",
    participle: "geschehen"
  },

  {
    id: 36,
    infinitive: "gewinnen",
    meaning: "獲得する",
    present: {
      du: "gewinnst",
      er: "gewinnt"
    },
    past: "gewann",
    konj2: "gewönne",
    participle: "gewonnen"
  },

  {
    id: 37,
    infinitive: "gießen",
    meaning: "注ぐ",
    present: {
      du: "gießt",
      er: "gießt"
    },
    past: "goss",
    konj2: "gösse",
    participle: "gegossen"
  },

  {
    id: 38,
    infinitive: "gleiten",
    meaning: "すべる",
    present: {
      du: "gleitest",
      er: "gleitet"
    },
    past: "glitt",
    konj2: "glitte",
    participle: "geglitten"
  },

  {
    id: 39,
    infinitive: "graben",
    meaning: "掘る",
    present: {
      du: "gräbst",
      er: "gräbt"
    },
    past: "grub",
    konj2: "grübe",
    participle: "gegraben"
  },

  {
    id: 40,
    infinitive: "greifen",
    meaning: "つかむ",
    present: {
      du: "greifst",
      er: "greift"
    },
    past: "griff",
    konj2: "griffe",
    participle: "gegriffen"
  },


  // ===== 41〜44 =====

  {
    id: 41,
    infinitive: "haben",
    meaning: "持っている",
    present: {
      du: "hast",
      er: "hat"
    },
    past: "hatte",
    konj2: "hätte",
    participle: "gehabt"
  },

  {
    id: 42,
    infinitive: "halten",
    meaning: "保つ",
    present: {
      du: "hältst",
      er: "hält"
    },
    past: "hielt",
    konj2: "hielte",
    participle: "gehalten"
  },

  {
    id: 43,
    infinitive: "hängen",
    meaning: "掛かっている",
    present: {
      du: "hängst",
      er: "hängt"
    },
    past: "hing",
    konj2: "hinge",
    participle: "gehangen"
  },

  {
    id: 44,
    infinitive: "heben",
    meaning: "持ち上げる",
    present: {
      du: "hebst",
      er: "hebt"
    },
    past: "hob",
    konj2: "höbe",
    participle: "gehoben"
  }

];
