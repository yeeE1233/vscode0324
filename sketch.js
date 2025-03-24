let button1, button2;
let spriteSheet; // 精靈圖集
let frames = []; // 儲存每一幀的小圖
let currentFrame = 0; // 當前顯示的幀索引
let frameWidth = 25; // 每幀的寬度
let frameHeight = 22; // 每幀的高度
let frameCount = 0; // 計算幀數，用於控制動畫速度
let isMouseOverButton1 = false;
let iframe; // 用於存儲 iframe 元素

function preload() {
  spriteSheet = loadImage('kirb1.png', () => {
    console.log('Sprite loaded successfully');
  }, () => {
    console.error('Failed to load sprite.png');
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 將精靈圖集分割成單獨的幀
  for (let i = 0; i < spriteSheet.width / frameWidth; i++) {
    let frame = spriteSheet.get(i * frameWidth, 0, frameWidth, frameHeight);
    frames.push(frame);
    console.log(`Frame ${i} extracted`);
  }
  console.log(`Total frames: ${frames.length}`);

  // 創建第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');

  button1.mouseOver(() => {
    isMouseOverButton1 = true;
  });

  button1.mouseOut(() => {
    isMouseOverButton1 = false;
  });

  button1.mousePressed(() => {
    createIframe('https://cfchengit.github.io/20250317');
  });

  // 創建第二個按鈕
  button2 = createButton('作品商介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');

  button2.mousePressed(() => {
    createIframe('https://yeee1233.github.io/20250310/');
  });

  // 創建第三個按鈕
  let button3 = createButton('筆記說明');
  button3.position(310, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');

  button3.mousePressed(() => {
    createIframe('https://example.com/notes'); // 替換為您的筆記說明 URL
  });
}

function draw() {
  background(200);

  if (isMouseOverButton1) {
    image(frames[currentFrame], 200, 150, frameWidth * 4, frameHeight * 4);

    frameCount++;
    if (frameCount % 5 === 0) {
      currentFrame = (currentFrame + 1) % frames.length;
    }
  }
}

// 動態創建 iframe
function createIframe(url) {
  // 如果已經存在 iframe，先移除
  if (iframe) {
    iframe.remove();
  }

  // 創建新的 iframe
  iframe = createElement('iframe');
  iframe.attribute('src', url);
  iframe.position(windowWidth * 0.1, windowHeight * 0.2); // 設置位置為視窗中間
  iframe.size(windowWidth * 0.8, windowHeight * 0.6); // 設置寬高
}
