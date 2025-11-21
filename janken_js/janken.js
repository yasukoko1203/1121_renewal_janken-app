// --- 画像配列（今回は長さと意味づけ用） ---
const cpuImages = [
  "https://th.bing.com/th/id/OIP.WfWvbT6Jb_18IcrGgxVHxwHaGq?w=198&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", // グー
  "https://www.bing.com/th/id/OIP.Ko-TH0M2J6ERg-L8GyUDbwHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // チョキ
  "https://thumb.ac-illust.com/c0/c05ce5ea004ec495cce70d29fc9bd03f_w.jpeg" // パー
];

const mineImages = [
  "https://th.bing.com/th/id/OIP.WfWvbT6Jb_18IcrGgxVHxwHaGq?w=198&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", // グー
  "https://www.bing.com/th/id/OIP.Ko-TH0M2J6ERg-L8GyUDbwHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // チョキ
  "https://thumb.ac-illust.com/c0/c05ce5ea004ec495cce70d29fc9bd03f_w.jpeg" // パー
];

// --- DOM 取得（HTML のクラス名に合わせる） ---
const myGu    = document.querySelector(".block1");
const myChoki = document.querySelector(".sithers1");
const myPa    = document.querySelector(".paper1");

const cpuGu    = document.querySelector(".block2");
const cpuChoki = document.querySelector(".sithers2");
const cpuPa    = document.querySelector(".paper2");

const startButton = document.querySelector(".button button");

// 手の名前（0:グー, 1:チョキ, 2:パー）
const handNames = ["グー", "チョキ", "パー"];

// 現在の自分の手（未選択時は null）
let myHandIndex = null;

// 結果表示用要素を追加
const resultArea = document.createElement("p");
resultArea.id = "result";
document.body.appendChild(resultArea);

// --- 初期状態：CPU の手は薄くしておく ---
[cpuGu, cpuChoki, cpuPa].forEach(img => {
  if (img) img.style.opacity = "0.3";
});

// --- 自分の手のクリック処理 ---
if (myGu) {
  myGu.addEventListener("click", () => {
    myHandIndex = 0;
    highlightMyHand();
  });
}
if (myChoki) {
  myChoki.addEventListener("click", () => {
    myHandIndex = 1;
    highlightMyHand();
  });
}
if (myPa) {
  myPa.addEventListener("click", () => {
    myHandIndex = 2;
    highlightMyHand();
  });
}

// 自分の選択をわかりやすくする（単純に枠線を変える）
function highlightMyHand() {
  if (!myGu || !myChoki || !myPa) return;

  myGu.style.outline    = myHandIndex === 0 ? "4px solid red" : "none";
  myChoki.style.outline = myHandIndex === 1 ? "4px solid red" : "none";
  myPa.style.outline    = myHandIndex === 2 ? "4px solid red" : "none";
}

// --- じゃんけん開始ボタン ---
if (startButton) {
  startButton.addEventListener("click", () => {

    // 自分の手が未選択の場合は中断
    if (myHandIndex === null) {
      alert("自分の手（グー・チョキ・パー）をクリックして選んでください。");
      return;
    }

    // CPU の手をランダムに決定（0〜2）
    const cpuHandIndex = Math.floor(Math.random() * cpuImages.length);
    console.log("CPUの手 =", cpuHandIndex);

    // CPU 側の見た目を更新
    if (cpuGu && cpuChoki && cpuPa) {
      cpuGu.style.opacity    = cpuHandIndex === 0 ? "1" : "0.3";
      cpuChoki.style.opacity = cpuHandIndex === 1 ? "1" : "0.3";
      cpuPa.style.opacity    = cpuHandIndex === 2 ? "1" : "0.3";
    }

    // 勝敗判定（switch + if でシンプルに）
    let resultText = "";

    switch (myHandIndex) {
      case 0: // 自分：グー
        if (cpuHandIndex === 0) resultText = "あいこです。";
        else if (cpuHandIndex === 1) resultText = "あなたの勝ちです！";  // グー vs チョキ
        else resultText = "あなたの負けです…。";                           // グー vs パー
        break;

      case 1: // 自分：チョキ
        if (cpuHandIndex === 1) resultText = "あいこです。";
        else if (cpuHandIndex === 2) resultText = "あなたの勝ちです！";  // チョキ vs パー
        else resultText = "あなたの負けです…。";                           // チョキ vs グー
        break;

      case 2: // 自分：パー
        if (cpuHandIndex === 2) resultText = "あいこです。";
        else if (cpuHandIndex === 0) resultText = "あなたの勝ちです！";  // パー vs グー
        else resultText = "あなたの負けです…。";                           // パー vs チョキ
        break;

      default:
        resultText = "エラー：不正な手です。";
        break;
    }

    // 結果表示
    resultArea.textContent =
      `あなた：${handNames[myHandIndex]}　CPU：${handNames[cpuHandIndex]} → ${resultText}`;
  });
}
