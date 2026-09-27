/* ==========================================
   1. 遠端接收端點 (選填)
   - 貼上你的 Discord Webhook 或 Formspree URL
   - 留空也能正常產生破冰小卡
========================================== */
const RECEIVER_ENDPOINT = "https://discord.com/api/webhooks/1553426135692607703/ne_EEX5-h_CKv5E7mLMm2MXHkP10mTaF94anLyWUjyKYbloUiPecbHwFNXs5N_QqIAeu";

/* ==========================================
   2. 個人自介資料 (修改你的個人檔案)
========================================== */
const MY_PROFILE = {
  name: "Mushroom",
  mbti: "INTP",
  location: "台中",
  avatar: "./IMG_3241.jpg",
  bio: "其實做這個就是為了避免打這段自介，我覺得把一堆正面標籤放在自己身上很抽象？\n所以請直接開始以下的測驗吧！大概第六題開始會有你想知道的答案？\n",
  goodPoints: "脾氣好，不開心的時候可以好好說話\n有自己的興趣，可以互相分享自己喜歡的東西\n尊重他人，在意見不同的時候可以和平討論",
  badPoints: "支持國民黨或民眾黨\n追韓團\n習慣使用髒話\n周杰倫的粉絲",
  tags: ["女", "23歲", "異性戀", "怠惰考研中"]
};

/* ==========================================
   3. 13 道題目與你的答案
   - title: 題目
   - desc: 副標說明
   - options: 選項
   - myAnswerText: 點完後跳出的「你的選擇」
   - myAnswerNote: 點完後跳出的「你的心聲 / 為什麼這樣選」
========================================== */
const QUIZ_QUESTIONS = [
  {
    id: "q6",
    category: "飲食習慣",
    title: "你比較喜歡哪一個？",
    desc: "",
    options: [
      { text: "烏龍茶" },
      { text: "麥茶" },
      { text: "綠茶" },
      { text: "咖啡" },
      { text: "我喜歡有糖的" }
    ],
    myAnswerText: "茶超讚",
    myAnswerNote: "大學去茶藝社每週狂喝，從7.喝到9.，我至今很想知道到底有沒有人喝那麼多咖啡因能睡得著。"
  },
  {
    id: "q8",
    category: "音樂喜好",
    title: "你喜歡的音樂類型！",
    desc: "日常背景音",
    options: [
      { text: "搖滾樂" },
      { text: "鄉村音樂" },
      { text: "其他(我想知道！)" },
      { text: "都是一些靡靡之音" }
    ],
    myAnswerText: "超級喜歡鄉村音樂",
    myAnswerNote: "Morgan Wallen的 I'm The Problem 整張專輯都好讚"
  },
  {
    id: "q9",
    category: "休閒活動",
    title: "你比較喜歡哪一項活動",
    desc: "",
    options: [
      { text: "爬山" },
      { text: "潛水" },
      { text: "看書" },
      { text: "其他" }
    ],
    myAnswerText: "",
    myAnswerNote: "小時候爬了富士山之後誓不爬山，但現在發現台灣的山好像很漂亮\n海中世界超級美的！考完研想去考AOW\n跟朋友最開心的記憶是在書店看同一本書，一邊看一邊一起吐槽(各自拿一本)"
  },
  {
    id: "q7",
    category: "電影喜好",
    title: "請選出你最不喜歡的一部作品",
    desc: "",
    options: [
      { text: "聲之形" },
      { text: "怦然心動" },
      { text: "是個幸運沒看過這兩部作品的人" }
    ],
    myAnswerText: "我覺得都蠻糟糕的，也不推薦你去看",
    myAnswerNote: "至今還在思考為什麼高中老師要讓全班看怦然心動，聲之形跟朋友去看的，他們好像都蠻感動的 Mmmm..."
  },
  {
    id: "q1",
    category: "政治傾向",
    title: "請pick你的政治傾向",
    desc: "感覺適合放在第五題",
    options: [
      { text: "台獨" },
      { text: "國民黨" },
      { text: "民進黨" },
      { text: "民眾黨" },
      { text: "我沒有很關心政治" }
    ],
    myAnswerText: "或許可以分享你的看法？",
    myAnswerNote: "是真的蠻喜歡看政論節目的，吵吵鬧鬧不有趣ㄇ"
  },
  {
    id: "q2",
    category: "情緒溝通",
    title: "你生氣或不開心的時候，通常會怎麼做？",
    desc: "(一邊寫一邊想這好像是無效問題)",
    options: [
      { text: "我從來沒有對別人大吼、消失、讓對方通靈，我脾氣超好ㄉ，而且超能控制自己情緒" },
      { text: "我生氣的時候會消失或讓對方通靈，但我會事後好好說話" },
      { text: "什麼是生氣，我每天都很開心" },
      { text: "以上皆非(願意的話可以跟我說答案)" }
    ],
    myAnswerText: "覺得生氣對事情沒有幫助，所以沒有跟任何人吵架過，也希望對方情緒管理很好",
    myAnswerNote: "小時候以為家人脾氣很差, 情緒控制有問題。長大之後發現我好像投胎投到SSR，從小到大家人就兩三次生氣然後就不跟我說話，基於寄人籬下不管誰的錯我都會去道歉認錯(怎麼可能是我的錯呢！)，然後隔天就好了。因為成長環境有點太好了所以不太願意去體驗這些新東西，小學第一次看到有人生氣大吼摔東西我簡直嚇傻了。\nps. 相較容易生氣的家人脾氣好的程度是，開車的時候在講前面車子的神奇行為，我通常會接不然你去撞他啊你又不敢。我朋友聽到這件事之後嚴肅警告說他開車的時候不能這樣("
  },
  {
    id: "q3",
    category: "背景知識",
    title: "你的大學畢業學校",
    desc: "一些溝通時有多少相似的背景知識？",
    options: [
      { text: "我超強的我是學神" },
      { text: "戰校的時候被放到頂大會很感激的學校" },
      { text: "讀書是什麼你們這群nerd" },
      { text: "其他(願意的話可以跟我說答案)" }
    ],
    myAnswerText: "每次滑到戰校有放我們學校就很感激，讚",
    myAnswerNote: "個人覺得不是很重要，重要性比前三題小非常多"
  },
  {
    id: "q4",
    category: "閱讀習慣",
    title: "請選擇你喜歡的書籍類型！",
    desc: "超級重要ㄉ",
    options: [
      { text: "歷史" },
      { text: "科幻" },
      { text: "其他" },
      { text: "不太喜歡看書" }
    ],
    myAnswerText: "超級喜歡科幻小說",
    myAnswerNote: "很喜歡反烏托邦小說，如果你也喜歡的話希望可以一起看、討論讀後感！！\n歷史的話在緩慢閱讀二創，野史和二創嚴重蓋過我對正史的了解(x)"
  },
  {
    id: "q5",
    category: "感情狀況",
    title: "你的感情經驗！",
    desc: "D選項是存在的！",
    options: [
      { text: "母單" },
      { text: "有超過兩年的交往經驗" },
      { text: "其他" },
      { text: "我不想說" }
    ],
    myAnswerText: "沒有特別想要處理複雜問題？",
    myAnswerNote: "現在過得也挺開心的所以不想自找麻煩啦（"
  },
  {
    id: "q10",
    category: "出生順序",
    title: "請選出你在家中的排行",
    desc: "貼標籤參考(x)",
    options: [
      { text: "獨生子" },
      { text: "長子" },
      { text: "在中間" },
      { text: "末子" }
    ],
    myAnswerText: "兩個獨生子女待在一起是不會有好結果的，應該啦",
    myAnswerNote: "某一天，我突然發現自己有0個朋友是獨生子女，並且大部分是脾氣超好的長姐\nps. 我真的滑到研究寫獨生子女不適合待一起"
  },
  {
    id: "q11",
    category: "女性主義",
    title: "你對女性主義有相關了解嗎？",
    desc: "沒有了解很正常！",
    options: [
      { text: "沒有" },
      { text: "有一點點了解" },
      { text: "有，我覺得很不行" },
      { text: "有，我可以長篇大論" }
    ],
    myAnswerText: "一些價值觀？",
    myAnswerNote: "我其實並不喜歡朋友說話或者網路上使用辱女詞或者到處咖啡，性羞辱更是糟糕。\n你有這些習慣的話請❌"
  },
  {
    id: "q12",
    category: "個人喜好",
    title: "你比較喜歡哪部作品？",
    desc: "(以下幾部我都很喜歡)",
    options: [
      { text: "Criminal Minds" },
      { text: "Rick and Morty" },
      { text: "Clarkson's Farm" },
      { text: "都還好" }
    ],
    myAnswerText: "你也可以再跟我說最喜歡的作品！",
    myAnswerNote: "超級喜歡Criminal Minds, 理想型是Spencer Reid但我感覺這種人不存在(x), 看這部的原因是Morgan, 他有部糊糊的叫S.W.A.T.的劇\n\n最近做了超多Rick拼豆！我可以傳給你看超可愛的！！\n\n最近在看老頭種田！推薦你吃飯看(x)"
  },
  {
    id: "q13",
    category: "個人喜好",
    title: "你比較喜歡哪個Comedian？",
    desc: "是時候來品鑑幽默感了(x)",
    options: [
      { text: "Sam Campbell" },
      { text: "Bob Mortimer" },
      { text: "Daniel Sloss" },
      { text: "我比較喜歡其他人" }
    ],
    myAnswerText: "大推英國喜劇人，他們真的超級有趣",
    myAnswerNote: "Last One Laughing跟Taskmaster真的很好看，你不會後悔的！！吃飯看看能有什麼損失呢！"
  }
];