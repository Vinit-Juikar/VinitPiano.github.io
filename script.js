const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keyCheckbox = document.querySelector(".key-checkbox input");

let allKeys = [],
    audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();
    // console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add("active");
    setTimeout(() => {

        clickedKey.classList.remove("active");

    }, 150);
}


pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => {
        playTune(key.dataset.key);
    })
    // dataset is the js attribute that is used to access and set the data
});

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
}

const handleVolume = (e) => {
    audio.volume = e.target.value
}
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

document.addEventListener("keydown", pressedKey);
keyCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);