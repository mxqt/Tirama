let mouseCursor = document.querySelector(".cursor")
let lis = document.querySelectorAll(".container")

window.addEventListener("mousemove", cursor)

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px"
  mouseCursor.style.left = e.pageX + "px"
}