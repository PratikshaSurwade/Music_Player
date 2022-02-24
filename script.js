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
let flag = true;

const songs = [1,2,3,4,5,6,7,8,9];
let songIndex = 1;
let song=1;

function loadSong(song) {
  let songIndex = song;
  // let id = song.id;
  // console.log(songs);
  toggle();
  title.innerText = document.getElementById(song).parentNode.parentElement.childNodes[3].innerText;;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
  document.getElementById(song).classList.toggle('fa-play-circle');
  document.getElementById(song).classList.toggle('fa-pause-circle');
    
  playSong();
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
// function playSong(song) {
//   // let id = song.id;
//   console.log(song);
//   songIndex = song;
  
//   // title.innerText = song;
//   // title.innerText = document.getElementById(song).parentNode.parentElement.childNodes[3].innerText;;
//   let title= document.getElementById(song).parentNode.parentElement.childNodes[3].innerText;;
//   console.log(title);
//   audio.src = `music/${song}.mp3`;
//   cover.src = `images/${song}.jpg`;
//   document.getElementById(song).classList.remove('fa-play-circle');
//   document.getElementById(song).classList.add('fa-pause-circle');
//   // playSong();
// }


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    console.log(song);
    console.log(songIndex);
    
    // loadSong1(song);
    if (isPlaying) {
      toggle();
      pauseSong();
    } else {
      loadSong(songIndex);
      playSong1();
    }
    
});
function playSong1() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  
  audio.play();
}
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

  
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
}

// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);

function prevSong() {
    // console.log(song);
    console.log(song);
    // song--;
    // if (song < 0) {
    //   song = songs.length - 1;
    // }
    // // console.log(songs.values);
    // // let id = setAttribute("id",)
    // // toggle(song);
    // loadSong(songs[song]);
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    // console.log(songs);
    // let id = setAttribute("id",)
    loadSong(songs[songIndex]);
 
}

function nextSong() {
  console.log(song);
    songIndex++;
  
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


