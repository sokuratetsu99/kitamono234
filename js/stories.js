// 13駅分の小説データ
const stories = [
  {
    id: 1,
    station: "小倉駅",
    title: "小倉、始まりの場所",
    author: "企画制作チーム",
    content: `ここに小倉駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 2,
    station: "平和通駅",
    title: "平和通りの午後",
    author: "企画制作チーム",
    content: `ここに平和通駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 3,
    station: "旦過駅",
    title: "市場の朝、湯気の向こう",
    author: "企画制作チーム",
    content: `ここに旦過駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 4,
    station: "香春口三萩野駅",
    title: "長い駅名の短い手紙",
    author: "企画制作チーム",
    content: `ここに香春口三萩野駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 5,
    station: "片野駅",
    title: "窓辺を走る雲",
    author: "企画制作チーム",
    content: `ここに片野駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 6,
    station: "城野駅",
    title: "午後四時のタイムカプセル",
    author: "企画制作チーム",
    content: `ここに城野駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 7,
    station: "北方駅",
    title: "坂道と赤い自転車",
    author: "企画制作チーム",
    content: `ここに北方駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 8,
    station: "競馬場前駅",
    title: "風の名前を知る日",
    author: "企画制作チーム",
    content: `ここに競馬場前駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 9,
    station: "守恒駅",
    title: "灯りのある窓",
    author: "企画制作チーム",
    content: `ここに守恒駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 10,
    station: "徳力公団前駅",
    title: "金木犀の帰り道",
    author: "企画制作チーム",
    content: `ここに徳力公団前駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 11,
    station: "徳力嵐山口駅",
    title: "川を渡る声",
    author: "企画制作チーム",
    content: `ここに徳力嵐山口駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 12,
    station: "志井駅",
    title: "星を数える駅",
    author: "企画制作チーム",
    content: `ここに志井駅を舞台にした小説の本文を記入します。`,
  },
  {
    id: 13,
    station: "企救丘駅",
    title: "終点から、もう一度",
    author: "企画制作チーム",
    content: `ここに企救丘駅を舞台にした小説の本文を記入します。`,
  },
];

const root = document.querySelector("#root");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function arrowIcon() {
  return `
    <svg class="arrow-icon arrow-back" aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path>
    </svg>
  `;
}

function brand() {
  return `
    <a class="brand" href="./index.html#top" aria-label="ものがたりモノレール トップへ">
      <span>
        <span class="brand-kicker">KITAKYUSHU MONORAIL</span>
        <span class="brand-name">ものがたりモノレール</span>
      </span>
    </a>
  `;
}

function deviceHardware() {
  return `
    <div class="device-hardware" aria-hidden="true">
      <span class="device-island"><i></i></span>
    </div>
  `;
}

function renderStory(requestedId) {
  const storyIndex = stories.findIndex((story) => story.id === requestedId);
  if (storyIndex < 0) return;

  const story = stories[storyIndex];
  const nextStory = stories[(storyIndex + 1) % stories.length];
  const isLastStory = storyIndex === stories.length - 1;
  const paragraphs = story.content
    .split(/\n\s*\n/)
    .map(
      (paragraph, index) =>
        `<p class="${index === 0 ? "drop-cap" : ""}">${escapeHtml(paragraph)}</p>`,
    )
    .join("");

  document.title = `${story.station}「${story.title}」｜ものがたりモノレール`;
  root.innerHTML = `
    <div class="story-shell" id="top">
      ${deviceHardware()}
      <header class="story-header">
        <a class="back-link" href="./index.html">
          ${arrowIcon()}<span>駅一覧</span>
        </a>
        ${brand()}
        <span class="story-progress">${String(story.id).padStart(2, "0")} / 13</span>
      </header>

      <main>
        <section class="story-title-section">
          <p class="story-number">STATION STORY ${String(story.id).padStart(2, "0")}</p>
          <p class="story-station">
            <span>${escapeHtml(story.station)}</span>
            <small>KITAKYUSHU MONORAIL</small>
          </p>
          <h1>${escapeHtml(story.title)}</h1>
          <p class="story-author">作　${escapeHtml(story.author)}</p>
        </section>

        <article class="story-article">
          <p class="opening-mark">—</p>
          ${paragraphs}
          <p class="end-mark">了</p>
        </article>

        <section class="next-story">
          <p>${isLastStory ? "BACK TO THE FIRST STORY" : "NEXT STATION STORY"}</p>
          <a href="./index.html?station=${nextStory.id}">
            <span class="next-station-main">
              <span class="next-station-number">${String(nextStory.id).padStart(2, "0")}</span>
              <b>${escapeHtml(nextStory.station)}</b>
            </span>
            <em>${escapeHtml(nextStory.title)}</em>
          </a>
        </section>
      </main>

      <footer class="story-footer">
        ${brand()}
        <small>© 2025 MONOGATARI MONORAIL</small>
      </footer>
    </div>
  `;
}

const requestedStation = Number(new URLSearchParams(window.location.search).get("station"));
if (stories.some((story) => story.id === requestedStation)) {
  renderStory(requestedStation);
}
