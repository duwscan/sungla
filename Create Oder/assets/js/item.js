const coll = document.getElementsByClassName("collapsible");
const mainContainer = document.getElementById("Main__container");
const btnView = document.getElementById("order__header");
const order = document.querySelector(".content__order");
const closes = document.getElementById('close');
const main = document.querySelector(".main__content");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.display = "block";
    } 
  });
}

btnView.onclick = function() {
  order.style.display = "block";
  mainContainer.style.backgroundColor = "rgba(0,0,0,0.30)";
}

closes.onclick = function () {
  order.style.display = "none";
  mainContainer.style.backgroundColor = "unset";
}
window.onclick = function(event) {
  if (event.target == order) {
    order.style.display = "none";
  }
}
