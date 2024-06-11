const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const songEl = document.getElementById("song");

const imageEl = document.getElementById("image");
const titleEl = document.getElementById("title");
const artistEl = document.getElementById("artist");

const progressContainerEl = document.getElementById("progress-container");
const progressEl = document.getElementById("progress");

const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Data

const fakeData = [
{
    name: "the_pianist_soundtrack_-_nocturne",
    artist: "Frédéric Chopin",
    title: "The_Pianist_Soundtrack_-_Nocturne",
    duration: "4:27",
},

{     
name: "skyfall",
artist: "Adele",
title: "Skyfall",
duration: "4:46",

},

{     
name: "summer Moved On",
 artist: "A-HA",
title: "Summer Moved On",
duration: "4:37",

},

{     
name: "englishman_in_New_York",
artist: "Sting",
title: "Englishman_in_New_York",
duration: "4:25",

},

{     
name: "intizar",
 artist: "Elmira Rahimova",
title: "Intizar",
duration: "3:36",

},


];

let isPlaying = false;

const playSong = () => {
    songEl.play();
    isPlaying = true;
    playBtn.innerHTML = '<img src="./assets/icons8-pause-50.png" alt="" class="w-12 h-12">'
};

const pauseSong = () => {
    songEl.pause();
    isPlaying = false;
    playBtn.innerHTML = '<img src="./assets/gridicons_play.png" alt="" class="w-12 h-12">'
};

playBtn.addEventListener("click", () => {
    // if(isPlaying) {                       //ya bele veririk ya da ? : ile
    //     pauseSong();
    // }
    // else {
    //     playSong();
    // }

    isPlaying ? pauseSong() : playSong();
});

songEl.addEventListener("timeupdate", function () {
    // console.dir(event.target);

    // const duration = songEl.duration;
    // const currentTime = songEl.currentTime;

    // const{duration, currentTime} = songEl;            //yuxaridaki 2 setrin yerine object distraction-la bele yaziriq ve
                                                          //bele yazanda yuxarida function yazmaya da bilirik (event) olur
       const {duration, currentTime} = this;                      //arrow function olur
       console.log(this);


       const durationMinute = Math.floor(duration / 60);  //233/60= 3.88 // 3
       const durationSecond = Math.floor(duration % 60);    //233%60 = 53.11 // 53
    //    console.log(durationMinute, durationSecond);

      const currentTimeMinute = Math.floor(currentTime / 60);  //233/60= 3.88 // 3
      const currentTimeSecond = Math.floor(currentTime % 60);    //233%60 = 53.11 // 53


       
       durationEl.textContent = `${durationMinute} : ${String(durationSecond).padStart(2,0)}`
       currentTimeEl.textContent = `${currentTimeMinute} : ${String(currentTimeSecond).padStart(2,0)}`

});

