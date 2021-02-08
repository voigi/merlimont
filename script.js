
var item = document.querySelector("#test");
var item1 = document.querySelector("#test1");
var item2 = document.querySelector("#test2");
var item3 = document.querySelector("#test3");

var item4 = document.querySelector(".para");
item4.textContent="Bacon ipsum dolor amet bacon tongue pork, alcatra tri-tip short ribs biltong picanha boudin cow meatball ham hock ground round.";

var music = new Audio('son/gold.mp3');

item.addEventListener("mouseover", playMusic, false);
item.addEventListener("mouseout", stopMusic, false);

item1.addEventListener("mouseover", playMusic, false);
item1.addEventListeners("mouseout", stopMusic, false);

item2.addEventListener("mouseover", playMusic, false);
item2.addEventListener("mouseout", stopMusic, false);

item3.addEventListener("mouseover", playMusic, false);
item3.addEventListener("mouseout", stopMusic, false);

function playMusic() {
    music.play();
}

function stopMusic() {
    music.pause();
}






