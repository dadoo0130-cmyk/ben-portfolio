/* =========================================================
   作品資料檔 —— 新增 / 修改作品只要改這個檔案
   ---------------------------------------------------------
   ・排在越上面的作品，在網站上就越前面
   ・編號 01、02… 和 FIG. 01.1 會自動產生，不用手動改
   ・跑馬燈會自動列出所有作品的 marquee 名稱
   ・想暫時隱藏某個作品：加上 hidden: true
   ・圖片放進 images/ 資料夾，建議先壓縮（見 README）

   欄位說明：
   type     : 分類標籤（右上角黑底小字）
   title    : 標題，用陣列表示換行，例如 ["2023 JAKOTA", "經濟趨勢論壇"]
   marquee  : 跑馬燈上顯示的英文名稱（可省略，省略就不出現在跑馬燈）
   sections : 左側文字區塊，label 是小標，text 是內文（可用 \n 換行）
   images   : 圖片清單，第一張是大圖；之後的圖片兩張一排
              加上 full: true 則該張圖獨佔一整排
              alt 可省略，會自動用「標題 + 圖說」
   ========================================================= */

const PROJECTS = [
  {
    type: "EVENT VISUAL",
    title: ["SIIR-LEVEL UP", "創新大進擊"],
    marquee: "SIIR LEVEL UP",
    sections: [
      { label: "CONTEXT", text: "經濟部商業司「服務業創新研發計畫」年度成果發表會。核心挑戰在於將「創新研發」與「數位轉型」等抽象概念具象化。" },
      { label: "CONCEPT", text: "以「思維驅動進化」為核心。使用人腦剪影填充雲端與圖表符號，搭配衝出雲端的火箭，呼應「LEVEL UP」與「大進擊」的上升動能。配色選用萊姆綠傳達活力。" }
    ],
    images: [
      { src: "images/project1-main.webp", caption: "論壇主視覺" },
      { src: "images/project1-1.webp", caption: "現場陳列製作物" },
      { src: "images/project1-2.webp", caption: "現場陳列製作物" }
    ]
  },

  {
    type: "EVENT VISUAL",
    title: ["2023 JAKOTA", "經濟趨勢論壇"],
    marquee: "2023 JAKOTA",
    sections: [
      { label: "CONTEXT", text: "探討日韓台(JAKOTA)在全球變局下的供應鏈合作。目標打造具備「國際感」、「科技感」的視覺形象，吸引高階經理人。" },
      { label: "CONCEPT", text: "概念：「數據匯流，驅動東亞經濟共同體」。以深藍色數位地球為基底，金色光束匯聚於東亞板塊，象徵資本與技術的流動。" }
    ],
    images: [
      { src: "images/project2-main.webp", caption: "論壇主視覺" },
      { src: "images/project2-1.webp", caption: "活動雜誌" },
      { src: "images/project2-2.webp", caption: "現場陳列製作物" }
    ]
  },

  {
    type: "EVENT VISUAL",
    title: ["2023 永續投資高峰會"],
    marquee: "2023 SUSTAINABLE INVESTMENT",
    sections: [
      { label: "CONTEXT", text: "商業周刊年度財經論壇，探討「綠色金融3.0」與ESG浪潮。需傳達「永續、金融、加速」三大核心。" },
      { label: "CONCEPT", text: "視覺核心結合「燈泡(創新)」、「綠芽」與「循環符號」。以漸層綠象徵生命力，科技藍代表金融專業。透過動態光束具象化「加速器」的動能。" }
    ],
    images: [
      { src: "images/project3-main.webp", caption: "論壇主視覺" },
      { src: "images/project3-1.webp", caption: "現場陳列製作物", full: true }
    ]
  },

  {
    type: "WEB DESIGN",
    title: ["商周學院", "網頁視覺改版"],
    marquee: "BUSINESS WEEKLY ACADEMY",
    sections: [
      { label: "CONTEXT", text: "針對全台最有影響力的CEO共學平台進行官網改版。目標客群為金字塔頂端管理者，需打造RWD響應式且具權威感的頂級瀏覽體驗。" },
      { label: "CONCEPT", text: "以「尊爵黑」搭配「金屬髮絲紋」奠定權威感。運用品牌紅色的銳利箭頭造型，象徵「強者」前進的動能。高對比文字呼應「與強者為伍，與智者同行」的精神。" }
    ],
    images: [
      { src: "images/project4-main.webp", caption: "網站主視覺" },
      { src: "images/project4-1.webp", caption: "網站內頁", full: true }
    ]
  },

  {
    type: "DIGITAL MARKETING",
    title: ["HAPPY GO", "數位視覺設計"],
    marquee: "HAPPY GO",
    sections: [
      { label: "CONTEXT", text: "全台最大點數平台。挑戰在於在EDM、社群廣告、APP推播中，設計出能瞬間「喚醒」會員並驅動點擊的素材。" },
      { label: "STRATEGY", text: "設計調性講求「瞬間抓住目光」。針對「點數經濟」核心（如限時搶券、點數大富翁），使用高彩度配色與清晰重點文字，提升點擊率。" }
    ],
    images: [
      { src: "images/project5-main.webp", caption: "APP推播與活動Banner合輯" },
      { src: "images/project5-1.webp", caption: "活動Banner" },
      { src: "images/project5-2.webp", caption: "活動Banner" }
    ]
  },

  {
    type: "PACKAGING",
    title: ["食品包裝設計"],
    marquee: "LEEZEN PACKAGING",
    sections: [
      { label: "CONTEXT", text: "食品包裝設計的重點客戶希望能有創新的包裝視覺，能在貨架上「瞬間贏得選擇」。" },
      { label: "APPROACH", text: "食慾喚起：透過專業攝影或誘人色彩，讓產品看起來「絕對美味」。\n資訊清晰：建立「品牌-品名-風味」的清晰視覺層次，讓消費者秒懂。\n品牌定位：透過視覺風格精準傳達價值（如：精品、有機、手工）。" }
    ],
    images: [
      { src: "images/project6-main.webp", caption: "產品包裝設計" },
      { src: "images/project6-1.webp", caption: "產品包裝設計(不含商業攝影)" },
      { src: "images/project6-2.webp", caption: "產品包裝設計" }
    ]
  },

  {
    type: "EDITORIAL",
    title: ["企業年報", "封面設計"],
    marquee: "ANNUAL REPORT",
    sections: [
      { label: "CONTEXT", text: "企業年報與 ESG 報告書不僅是合規文件，更是企業向利害關係人展現營運透明度與未來願景的關鍵媒介。挑戰在於如何展現出企業的特色與願景，並易於閱讀且符合品牌識別的視覺。" }
    ],
    images: [
      { src: "images/project7-main.webp", caption: "企業財報封面設計" },
      { src: "images/project7-1.webp", caption: "企業財報封面設計" },
      { src: "images/project7-2.webp", caption: "企業財報封面設計" }
    ]
  },

  /* ---------- 新增作品：複製下面這段，拿掉前後的註解符號後填寫 ----------
  {
    type: "EVENT VISUAL",
    title: ["作品名稱第一行", "第二行"],
    marquee: "ENGLISH NAME",
    sections: [
      { label: "CONTEXT", text: "專案背景……" },
      { label: "CONCEPT", text: "設計概念……" }
    ],
    images: [
      { src: "images/project8-main.webp", caption: "主視覺" },
      { src: "images/project8-1.webp", caption: "延伸應用" },
      { src: "images/project8-2.webp", caption: "延伸應用" }
    ]
  },
  ------------------------------------------------------------------------ */
];
