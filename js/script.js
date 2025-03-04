const text =[
    "Engineer",
    "Developer"
]

let speed = 100;

const textElement = document.querySelector('.typewriter-text');

let textIndex = 0;
let charIndex = 0;

function typewriter(){
    if(charIndex < text[textIndex].length){
        textElement.innerHTML += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typewriter, speed);
    }else{
        setTimeout(eraseText, speed + 2000);
    }
}

function eraseText(){
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.substring(0, textElement.innerHTML.length - 1);
        setTimeout(eraseText, 50);
    } else {
        textIndex++;
        if (textIndex >= text.length) {
            textIndex = 0;
        }
        charIndex = 0;
        setTimeout(typewriter, 100);
    }
}

function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('active');
}

window.onload = typewriter();


