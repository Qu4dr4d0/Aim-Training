let sqr1 = document.getElementById("sqr1");
let sqr2 = document.getElementById("sqr2");
let sqr3 = document.getElementById("sqr3");
let sqr4 = document.getElementById("sqr4");
let sqr5 = document.getElementById("sqr5");
let sqr6 = document.getElementById("sqr6");
let sqr7 = document.getElementById("sqr7");
let sqr8 = document.getElementById("sqr8");
let sqr9 = document.getElementById("sqr9");
let sqr10 = document.getElementById("sqr10");
let sqr11 = document.getElementById("sqr11");
let sqr12 = document.getElementById("sqr12");
let sqr13 = document.getElementById("sqr13");
let sqr14 = document.getElementById("sqr14");
let sqr15 = document.getElementById("sqr15");
let sqr16 = document.getElementById("sqr16");
let sqr17 = document.getElementById("sqr17");
let sqr18 = document.getElementById("sqr18");
let sqr19 = document.getElementById("sqr19");
let sqr20 = document.getElementById("sqr20");

let play = document.getElementById("play");
let replay = document.getElementById("replay");
let panel = document.getElementById("panel");
let score = document.getElementById("score");
let result = document.getElementById("result");

let pts = 0;
pts = Number(pts);



// switch (position) {
//   case 1:
//     result.innerHTML = `&#129351;`;
//     break;
//   case 2:
//     result.innerHTML = `&#129352`;
//     break;
//   case 3:
//     result.innerHTML = `&#129353`;
//     break;
//   case 4:
//     result.innerHTML = `&#10060`;
//     break;
//   default:
//     result.innerHTML = `aaaa`
// }

function show() {
  replay.style.visibility = "visible";
}
play.onclick = function () {
  play.classList.add("hidden");
  panel.classList.add("appear-flex");

  setTimeout("show()", 18000);

  sqr1.classList.add("appear");
  sqr1.classList.remove("hidden");

  sqr2.classList.add("appear");
  sqr2.classList.remove("hidden");

  sqr3.classList.add("appear");
  sqr3.classList.remove("hidden");

  sqr4.classList.add("appear");
  sqr4.classList.remove("hidden");

  sqr5.classList.add("appear");
  sqr5.classList.remove("hidden");

  sqr6.classList.add("appear");
  sqr6.classList.remove("hidden");

  sqr7.classList.add("appear");
  sqr7.classList.remove("hidden");

  sqr8.classList.add("appear");
  sqr8.classList.remove("hidden");

  sqr9.classList.add("appear");
  sqr9.classList.remove("hidden");

  sqr10.classList.add("appear");
  sqr10.classList.remove("hidden");

  sqr11.classList.add("appear");
  sqr11.classList.remove("hidden");

  sqr12.classList.add("appear");
  sqr12.classList.remove("hidden");

  sqr13.classList.add("appear");
  sqr13.classList.remove("hidden");

  sqr14.classList.add("appear");
  sqr14.classList.remove("hidden");

  sqr15.classList.add("appear");
  sqr15.classList.remove("hidden");

  sqr16.classList.add("appear");
  sqr16.classList.remove("hidden");

  sqr17.classList.add("appear");
  sqr17.classList.remove("hidden");

  sqr18.classList.add("appear");
  sqr18.classList.remove("hidden");

  sqr19.classList.add("appear");
  sqr19.classList.remove("hidden");

  sqr20.classList.add("appear");
  sqr20.classList.remove("hidden");
};

sqr1.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr1.classList.remove("appear");
};

sqr2.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr2.classList.remove("appear");
};

sqr3.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr3.classList.remove("appear");
};

sqr4.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr4.classList.remove("appear");
};

sqr5.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr5.classList.remove("appear");
};

sqr6.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr6.classList.remove("appear");
};

sqr7.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr7.classList.remove("appear");
};

sqr8.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr8.classList.remove("appear");
};

sqr9.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr9.classList.remove("appear");
};

sqr10.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr10.classList.remove("appear");
};

sqr11.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr11.classList.remove("appear");
};

sqr12.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr12.classList.remove("appear");
};

sqr13.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr13.classList.remove("appear");
};

sqr14.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr14.classList.remove("appear");
};

sqr15.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr15.classList.remove("appear");
};

sqr16.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr16.classList.remove("appear");
};

sqr17.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr17.classList.remove("appear");
};

sqr18.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr18.classList.remove("appear");
};

sqr19.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr19.classList.remove("appear");
};

sqr20.onclick = function () {
  pts += 50;
  score.innerHTML = pts;
  sqr20.classList.remove("appear");
};

replay.onclick = function () {
    window.location.reload();
};


