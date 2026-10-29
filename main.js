/* 依照 projects.js 的資料自動產生作品區、跑馬燈與年份。一般情況不需要修改這個檔案。 */
(function () {
  const pad = (n) => String(n).padStart(2, "0");
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };

  const list = (typeof PROJECTS !== "undefined" ? PROJECTS : []).filter((p) => !p.hidden);
  const root = document.getElementById("projects");

  function figure(img, no, idx, title, eager) {
    const wrap = el("figure", "fig");
    const btn = el("button", "zoom");
    btn.type = "button";
    btn.setAttribute("aria-label", "放大檢視：" + (img.caption || title));
    const im = new Image();
    im.src = img.src;
    im.alt = img.alt || `${title}｜${img.caption || ""}`;
    im.decoding = "async";
    im.loading = eager ? "eager" : "lazy";
    btn.appendChild(im);
    btn.addEventListener("click", () => openLightbox(img.src, im.alt));
    const cap = el("figcaption", "fig-caption");
    cap.append(el("span", null, `FIG. ${no}.${idx}`), el("span", null, img.caption || ""));
    wrap.append(btn, cap);
    return wrap;
  }

  list.forEach((p, i) => {
    const no = pad(i + 1);
    const titleLines = Array.isArray(p.title) ? p.title : [p.title];
    const titleText = titleLines.join(" ");

    const art = el("article", "project-block");
    art.id = "project-" + no;

    // 左側資訊
    const side = el("div", "p-sidebar");
    const sticky = el("div", "sticky-info");
    const head = el("div", "p-header");
    head.append(el("span", "p-no", no), el("span", "p-type", p.type || ""));
    const h2 = el("h2", "p-title");
    titleLines.forEach((line, k) => {
      if (k) h2.appendChild(document.createElement("br"));
      h2.appendChild(document.createTextNode(line));
    });
    sticky.append(head, h2);
    (p.sections || []).forEach((s) => {
      const box = el("div", "p-context-box");
      box.append(el("div", "p-subtitle", s.label), el("p", "p-text", s.text));
      sticky.appendChild(box);
    });
    side.appendChild(sticky);

    // 右側圖片：第一張大圖，其餘兩張一排，full:true 獨佔一排
    const vis = el("div", "p-visuals");
    let grid = null;
    (p.images || []).forEach((img, k) => {
      const f = figure(img, no, k + 1, titleText, i === 0 && k === 0);
      if (k === 0 || img.full) {
        grid = null;
        vis.appendChild(f);
      } else {
        if (!grid) { grid = el("div", "visual-grid"); vis.appendChild(grid); }
        grid.appendChild(f);
      }
    });

    art.append(side, vis);
    root.appendChild(art);
  });

  // 跑馬燈
  const names = list.map((p) => p.marquee).filter(Boolean);
  if (names.length) {
    const text = "/// " + names.join(" /// ") + " /// ";
    document.querySelector(".marquee-content").textContent = text + text;
  }

  // 頁尾年份
  document.getElementById("year").textContent = new Date().getFullYear();

  // 燈箱
  const box = document.getElementById("lightbox");
  const boxImg = box.querySelector("img");
  function openLightbox(src, alt) {
    boxImg.src = src;
    boxImg.alt = alt;
    box.showModal();
  }
  box.addEventListener("click", () => box.close());
})();
