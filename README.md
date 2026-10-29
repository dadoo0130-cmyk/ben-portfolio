# BEN 作品集網站

```
index.html    版面與樣式（一般不用動）
main.js       自動產生作品區的程式（一般不用動）
projects.js   ★ 作品資料，新增作品只改這裡
images/       所有圖片
```

## 新增一個作品（3 步驟）

1. **準備圖片**
   - 到 <https://squoosh.app> 把圖片轉成 **WebP**、品質約 80
   - 寬度：主視覺 2400px 以內，其他圖 1800px 以內
   - 每張最好控制在 400KB 以下
   - 命名照舊：`project8-main.webp`、`project8-1.webp`…

2. **上傳圖片**：GitHub 網頁進入 `images` 資料夾 → Add file → Upload files

3. **編輯 `projects.js`**：在 GitHub 點開檔案 → 右上角鉛筆圖示 →
   複製檔案最下方的範本，貼到想要的位置後填寫 → Commit changes

約 1 分鐘後網站就會更新。編號、FIG 圖號、跑馬燈都會自動處理。

## 常用操作

| 想做的事 | 怎麼做 |
|---|---|
| 調整作品順序 | 在 `projects.js` 裡把整段 `{ … },` 剪下貼到新位置 |
| 暫時隱藏作品 | 在該作品加一行 `hidden: true,` |
| 某張圖獨佔一整排 | 在那張圖加 `full: true` |
| 文字內換行 | 在 text 裡寫 `\n` |

## 注意

- 每段作品最後的 `},` 逗號不能漏，漏了整個作品區會空白
- 改完若網站作品區空白，多半是少了逗號或引號；可以先用電腦打開 `index.html` 確認
