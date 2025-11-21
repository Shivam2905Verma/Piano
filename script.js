let buttons = {
  0: document.querySelector("#zero"),
  1: document.querySelector("#one"),
  2: document.querySelector("#two"),
  3: document.querySelector("#three"),
  4: document.querySelector("#four"),
  5: document.querySelector("#five"),
  6: document.querySelector("#six"),
  7: document.querySelector("#seven"),
  8: document.querySelector("#eight"),
  9: document.querySelector("#nine"),

  q: document.querySelector("#q"),
  w: document.querySelector("#w"),
  e: document.querySelector("#e"),
  r: document.querySelector("#r"),
  t: document.querySelector("#t"),
  y: document.querySelector("#y"),
  u: document.querySelector("#u"),
  i: document.querySelector("#i"),
  o: document.querySelector("#o"),
  p: document.querySelector("#p"),

  a: document.querySelector("#a"),
  s: document.querySelector("#s"),
  d: document.querySelector("#d"),
  f: document.querySelector("#f"),
};

let sounds = {
  1: "./allsound/key01.ogg",
  2: "./allsound/key02.ogg",
  3: "./allsound/key03.ogg",
  4: "./allsound/key04.ogg",
  5: "./allsound/key05.ogg",
  6: "./allsound/key06.ogg",
  7: "./allsound/key07.ogg",
  8: "./allsound/key08.ogg",
  9: "./allsound/key09.ogg",
  0: "./allsound/key24.ogg",

  q: "./allsound/key10.ogg",
  w: "./allsound/key11.ogg",
  e: "./allsound/key12.ogg",
  r: "./allsound/key13.ogg",
  t: "./allsound/key14.ogg",
  y: "./allsound/key15.ogg",
  u: "./allsound/key16.ogg",
  i: "./allsound/key17.ogg",
  o: "./allsound/key18.ogg",
  p: "./allsound/key19.ogg",

  a: "./allsound/key20.ogg",
  s: "./allsound/key21.ogg",
  d: "./allsound/key22.ogg",
  f: "./allsound/key23.ogg",
};

let written = document.querySelector(".written");

document.body.addEventListener("keydown", function (e) {
  let key = e.key.toLowerCase();
  playKey(key);
});

document.body.addEventListener("keyup", function (e) {
  let key = e.key.toLowerCase();
  releaseKey(key);
});

Object.keys(buttons).forEach((key) => {
  buttons[key].addEventListener("mousedown", function () {
    playKey(key);
  });

  buttons[key].addEventListener("mouseup", function () {
    releaseKey(key);
  });

  buttons[key].addEventListener("touchstart", function () {
    playKey(key);
  });

  buttons[key].addEventListener("touchend", function () {
    releaseKey(key);
  });
});

function playKey(key) {
  if (buttons[key]) {
    written.innerHTML = key;
    written.style.opacity = 1;

    buttons[key].classList.add("active");

    let audio = new Audio(sounds[key]);
    audio.currentTime = 0;
    audio.play();
  }
}

function releaseKey(key) {
  if (buttons[key]) {
    written.style.opacity = 0;
    buttons[key].classList.remove("active");
  }
}
