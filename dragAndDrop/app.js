const ball = document.querySelector(".ball");
const container = document.querySelector(".container");

//TODO:
// 1) disable scrolling and implement proper handling of the ball
//    going out of bounds at right/bottom edges
// 2) fix a bug that occurs when a ball is being dropped on itself
//    need to get the offsets of parent element when child is the event target?

ball.addEventListener("dragstart", dragStartBall);
const offsets = { x: 0, y: 0 };
function dragStartBall(e) {
  console.log(e);
  offsets.x = e.offsetX;
  offsets.y = e.offsetY;
  console.log("start = ", e.offsetX, e.offsetY);
}

container.addEventListener("dragover", e => e.preventDefault());
container.addEventListener("drop", dropBackground);

function dropBackground(e) {
  console.log(e);
  e.preventDefault();
  console.log("drp = ", e.offsetX, e.offsetY);
  ball.style.position = "absolute";
  let offsetX = e.offsetX - offsets.x;
  let offsetY = e.offsetY - offsets.y;

  offsetX = offsetX > 0 ? offsetX : 0;
  offsetY = offsetY > 0 ? offsetY : 0;

  ball.style.left = offsetX + "px";
  ball.style.top = offsetY + "px";
  console.log("dom = ", ball.style.left, ball.style.top);
}
