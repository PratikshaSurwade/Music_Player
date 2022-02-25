const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
//song cover 

let currentChange;
let flag = false;

const songs = [1,2,3,4,5,6,7,8,9];
let songIndex = 1;
let song=1;

function loadSong(song) {
  toggle();
  console.log(song);
  // song=songIndex;
  console.log(songIndex);
    title.innerText = document.getElementById(song).parentNode.parentElement.childNodes[3].innerText;;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
    document.getElementById(song).classList.toggle('fa-play-circle');
    document.getElementById(song).classList.toggle('fa-pause-circle'); 
  playSong();
}
function toggleSong(song){
  console.log(song);
  const isPlaying = musicContainer.classList.contains('play');
  if (!isPlaying) {
    loadSong(song);
  }
  else{
    toggle();
    pauseSong();
  }


}
function toggle() {
  document.querySelectorAll(".far")[0].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[1].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[2].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[3].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[4].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[5].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[6].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[7].classList.replace('fa-pause-circle','fa-play-circle');
  document.querySelectorAll(".far")[8].classList.replace('fa-pause-circle','fa-play-circle');

}
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    // console.log(song);
    if (isPlaying) {
      flag = false;
      toggle();
      pauseSong();    
    } else {
      flag = true;
      console.log(songIndex);
      loadSong(songs[songIndex-1]);
    }  
});
console.log(flag);

function playSong() {
  // console.log(flag);
  // console.log(songs[songIndex]);
    document.getElementById('songInfo').innerHTML=songIndex;

    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
  // console.log(flag);
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function prevSong() {
    // console.log(song);

    songIndex = songIndex - 1;
    

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
 
}

function nextSong() {
  // console.log(song);
    songIndex = songIndex + 1;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);

}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener('ended', nextSong);


