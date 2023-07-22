const $ = document ;
const input = $.querySelector("input");
const button = $.querySelector(".btn");
const button2 = $.querySelector(".btnchange");
const video_section = $.querySelector("#video_div");
const audio_section = $.querySelector("#audio_div");
const video = $.querySelector('video');
const audio = $.querySelector('audio');
const message = $.querySelector('.message');

function checkURL(val) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i'); 
    return !!pattern.test(val);
}

button.addEventListener('click' , ()=> {
    if(video.style.display == "none"){
        if(input.value){
            if(!checkURL(input.value)){
                alert('لطفا یه لینک درست وارد کن')
            }else {
                audio.removeAttribute('src')
                audio.setAttribute('src' , input.value)
                message.innerHTML = "امیدواریم از تماشای ویدیو لذت ببرید"
            }
        }else {
            alert('لینک یادت رفته')
        }
    }else {
        if(input.value){
            if(!checkURL(input.value)){
                alert('لطفا یه لینک درست وارد کن')
            }else {
                video.removeAttribute('src')
                video.setAttribute('src' , input.value)
                message.innerHTML = "امیدواریم از تماشای ویدیو لذت ببرید"
            }
        }else {
            alert('لینک یادت رفته')
        }
    }
})


button2.addEventListener('click' , ()=> {
    if(button2.innerHTML == "پخش مستقیم آهنگ"){
        video.style.display = "none"
        audio_section.style.display = "block"
        button2.innerHTML = "پخش مستقیم ویدیو"
        video.pause();
        video.currentTime = 0;
        input.value = ""
    }else if(button2.innerHTML == "پخش مستقیم ویدیو"){
        audio_section.style.display = "none"
        video.style.display = "block"
        button2.innerHTML = "پخش مستقیم آهنگ"
        audio.pause();
        audio.currentTime = 0;
        input.value = ""
    }

})

let width = window.innerWidth;
window.addEventListener('load', ()=> {
    if(width < 480){
        video.classList.remove('m-20')
        video.classList.remove('p-10')
    }
})

window.addEventListener('resize', ()=> {
    if(width < 480){
        video.classList.remove('m-20')
        video.classList.remove('p-10')
    }
})