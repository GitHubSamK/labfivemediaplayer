let vid;
document.addEventListener('DOMContentLoaded', init);

function init(){




    document.getElementById('btnPlay').addEventListener('click', play);
    document.getElementById('btnPaws').addEventListener('click', paws);
    document.getElementById('btnFF').addEventListener('click', ff);
    document.getElementById('btnSlow').addEventListener('click', slowmotion);
    document.getElementById('btnNorm').addEventListener('click', normalspeed);
    document.getElementById('btnSeek').addEventListener('click', seek);
    document.getElementById('btnLoad').addEventListener('click', load);
    
    
   
   
    vid = document.getElementById('myVideo');
    console.log(vid);
    console.log({vid})

    let mediaType = vid.type;
    let str = vid.canPlayType("video/mp4");
    console.log(str);
    vid.volume = 0.5;
    

}

function play(ev){
    vid = document.getElementById('myVideo');
    vid.play()
    .then(()=>{
        console.log('video playing')
    })
    .catch((err)=>{
        console.log({err});
    });
}

function paws(ev){
vid.pause();
}

function slowmotion(ev){
    vid.playbackRate = 0.5;
}

function normalspeed() {
    vid.playbackRate = 1;
}

function ff(ev){
document.getElementById('btnFF').addEventListener('click', ff);
vid = document.getElementById('myVideo');
vid.currentTime += 20;
console.log(vid.currentTime);
console.log(btnFF);

}

function seek(ev){
    vid.currentTime = 270;
}

function load(ev){
    
    vid.load();
}




