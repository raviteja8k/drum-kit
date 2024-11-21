function makeSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

// check buttons clicked on webpage and play sound
const buttons = document.querySelectorAll('.drum');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const clickedButton = event.target.innerHTML;
        makeSound(getSoundFile(clickedButton));
        buttonAnimation(clickedButton);
    });
});

// check keys pressed from keyboard and play sound
document.addEventListener('keypress', (event) => {
    const keyPressed = event.key;
    makeSound(getSoundFile(keyPressed));
    buttonAnimation(keyPressed);
});

function getSoundFile(key) {
    switch(key) {            
        case 'w':
            return 'sounds/tom-1.mp3';
        case 'a':
            return 'sounds/tom-2.mp3';          
        case 's':
            return 'sounds/tom-3.mp3';
        case 'd':
            return 'sounds/tom-4.mp3';
        case 'j':
            return 'sounds/snare.mp3';
        case 'k':
            return 'sounds/crash.mp3';
        case 'l':
            return 'sounds/kick-bass.mp3';
        default:
            // Default case
            return '';
    }
}

function buttonAnimation(card){
    document.querySelectorAll('.drum').forEach(drum => drum.classList.remove('pressed'));
    document.querySelector('.'+card).classList.add('pressed');

}