// تعریف متغییر ها
const $ = document ;
const input = $.querySelector("input");
const button = $.querySelector("button");
const video_section = $.querySelector(".video_div");

// تعریف ایونت کلیک روی دکمه
button.addEventListener('click' , ()=> {
    // شرط گذاری به خاطر اینکه کاربر بدون وارد کردن لینک نتونه اجرا کنه
    if(input.value){

        // الرت ساده فقط برای مطلع کردن کاربر
    alert("پحش ویدیو بستگی به سرعت نت و سرور بستکی دارد منتظر بمانید") //optional

        // ساخت یک تگ ویدیو توسط جی اس
    const video = document.createElement("video");
    
        // قرار دادن ویدیو دورن محل مشخص شده
    video_section.append(video)

        // ست کردن اتربیوت های ویدیو
    video.setAttribute("src" , input.value) //importent
    video.setAttribute("controls" , "");


        // یه کنسول لاگ بسیار ساده برای مطلع شدن از تگ ساخته شده 
    console.log(video) //optional
    }
    else {
            // الرتی برای مطلع کردن کاربر به دلیل اینکه لینکی وارد نکرده
        alert("لینک رو وارد نکردی") //optional
    }

})

// بحث مهم توی این تمرین قرار دادن اس ار سی وارد شده توسط کاربر به ویدیو هست یعنی ما ویدویی میسازیم با اس ار سی که کاربر به ما داده

/*
    zmat24
*/
