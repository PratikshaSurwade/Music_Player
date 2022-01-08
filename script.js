const playBtn = document.getElementById('masterPlay');
const music = new Audio('songs/10.mp3');
const isPlaying = false;


// playBtn.addEventListener("click", () => {
//     isPlaying ? music.play() : music.pause();
//     playBtn.classList.toggle("fa-play","fa-pause");
// })

// function togglePlay() {
//     return  music.pause() ? music.play() : music.pause();
// }

playBtn.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})