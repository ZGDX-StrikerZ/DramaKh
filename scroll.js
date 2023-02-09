let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 205;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 205;
})


// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);


// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}

// Top K-Drama Scroll
let thumbnail = document.getElementsByClassName('thumbnail2');
let slider2 = document.getElementById('slider2');

let buttonRight2 = document.getElementById('slide-right2');
let buttonLeft2 = document.getElementById('slide-left2');

buttonLeft2.addEventListener('click', function(){
    slider2.scrollLeft -= 205;
})

buttonRight2.addEventListener('click', function(){
    slider2.scrollLeft += 205;
})


// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);


// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnail.length; i++){

thumbnail[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnail[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}
// End Top K-Drama Scroll

// Top C-Drama Scroll
let thumbnailss = document.getElementsByClassName('thumbnail3');
let slider3 = document.getElementById('slider3');

let buttonRight3 = document.getElementById('slide-right3');
let buttonLeft3 = document.getElementById('slide-left3');

buttonLeft3.addEventListener('click', function(){
    slider3.scrollLeft -= 205;
})

buttonRight3.addEventListener('click', function(){
    slider3.scrollLeft += 205;
})


// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);


// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnailss.length; i++){

thumbnailss[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnailss[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}
// End Top C-Drama Scroll

// Anime
let thumbnailsss = document.getElementsByClassName('thumbnail4');
let slider4 = document.getElementById('slider4');

let buttonRight4 = document.getElementById('slide-right4');
let buttonLeft4 = document.getElementById('slide-left4');

buttonLeft4.addEventListener('click', function(){
    slider4.scrollLeft -= 205;
})

buttonRight4.addEventListener('click', function(){
    slider4.scrollLeft += 205;
})


// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);


// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnailss.length; i++){

thumbnailsss[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnailsss[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}
// End Anime

// Upcoming
let thumbnail5 = document.getElementsByClassName('thumbnail5');
let slider5 = document.getElementById('slider5');

let buttonRight5 = document.getElementById('slide-right5');
let buttonLeft5 = document.getElementById('slide-left5');

buttonLeft5.addEventListener('click', function(){
    slider5.scrollLeft -= 205;
})

buttonRight5.addEventListener('click', function(){
    slider5.scrollLeft += 205;
})


// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);


// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnail5.length; i++){

thumbnail5[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnail5[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}
// End Upcoming