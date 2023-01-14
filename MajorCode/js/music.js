let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let show_duration = document.querySelector('#show_duration');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total= document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create an audio element

let track = document.createElement('audio');

//all songs list

let All_song = [ {
    name: "Amafu",
    path: "audios/SuperMandla Amafu.mp3",
    img: "img/art.png",
    singer:"Supermandla"
},
    {
    name: "Toxic",
    path: "audios/Toxic.mp3",
    img: "toxic.jpg",
    singer:"Supermandla, Tweezytwer"
},
                {
    name: "Coupe",
    path: "audios/Supermandla - Coupe ft Kgosi.mp3",
    img: "img/art(2).png",
    singer:"Supermandla, Kgosi"
},
                {
    name: "Utjelwe Nguban",
    path: "audios/Supermandla - Utjelwe Nguban.mp3",
    img: "img/art(2).png",
    singer:"Supermandla, Papi Nyuka"
},
                {
    name: "Manzini Lifestyle",
    path: "audios/Chox ft Papi Nyuka - Manzini Lifestyle.mp3",
    img: "toxic.jpg",
    singer:"Chox,Papi Nyuka"
},
                {
    name: "Bremasdorp",
    path: "audios/Bremasdorp ft Chox.mp3",
    img: "toxic.jpg",
    singer:"Supermandla, Chox"
},
                {
    name: "Nomathemba",
    path: "audios/Nomathemba.mp3",
    img: "toxic.jpg",
    singer:"Supermandla, Tommy Lee"
},
                {
    name: "Sfun' Imali",
    path: "audios/Sfuna imali_Chox ft Papi Nyuka.wav",
    img: "toxic.jpg",
    singer:"Chox, Papi Nyuka"
},
                {
    name: "Toxic",
    path: "audios/Toxic.mp3",
    img: "toxic.jpg",
    singer:"Supermandla, Tweezytwer"
},
];

//All Functions
function load_track(index_no){
     reset_slider();
    track.src = All_song[index_no].path;
   $("#track_image").attr("src", All_song[index_no].img.src);
    title.innerHTML = All_song[index_no].name;
    
    artist.innerHTML = All_song[index_no].singer;
    track.load();
    
    total.innerHTML = All_song.length;
    present.innerHTML = index_no +1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);

function reset_slider(){
    slider.value = 0;
}
//checking if song is palying

function just_play(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
}
}

//Play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}
//Pause song
function pausesong(){
    track.pause();
    playing_song = false;
     play.innerHTML = '<i class="fa fa-play"></i>';
}
//next song

function next_song(){
    if (index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
//previous song
function previous_song(){
    if(index_no > 0){
        index_no -=1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}
//Change volume
function volume_change(){
   volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value /100;
}

//Change slider position
function change_duration(){
    slider_position = track.duration * (slider.value/100);
    track.currentTime = slider_position;
}

//autoplay 

function autoplay_switch(){
    if(autoplay==1){
        autoplay = 0;
        autoplay =0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    }else{
        autoplay =1;
        auto_play.style.background = "#FF8A65";
    }
}

function range_slider(){
    let position = 0;
    
    //update position
    if(!isNaN(track.duration)){
        position = track.currentTime * (100/ track.duration);
        slider.value = position;
    }
    //End of song function
    if(track.ended){
        play.innerHTML = '<i class"fa fa-play"></i>'
        if(auto_play == 1){
            index_no +=1;
            load_track(index_no);
            playsong();
        }
    }
}
