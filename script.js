let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg'];
let i = 0;

//load fotogallery
function load() {
    for(let i = 0; i < images.length; i++) {
        let img = images[i];
        document.getElementById('fotogallery').innerHTML += `
        <div onclick="openImage(${i})">
        <img src="${img}" class="imgBox">
        </div>
        `;
    }
}

//click on an image to open it
function openImage(i) {
    document.getElementById('fotogallery').innerHTML += `
    <div class="showImgContainer" id="showImgContainer">
    <button onclick="closeImgContainer(${i})" class="btn"><img class="close-btn" src="img/close.svg"></button>
    <button onclick="prvs()" class="btnLeft"><img class="left-btn" src="img/left.svg"></button>
    <img src="${images[i]}" class="showImg" id="showImg">
    <button onclick="nxt()" class="btnRight"><img class="right-btn" src="img/right.svg"></button>
    </div>
    `;
    document.getElementById('showImgContainer').style.visibility = "visible"; 
    document.getElementById('showImg').src = images[i];
}

//close button
function closeImgContainer(i) {
    document.getElementById('showImgContainer').remove();
}

//previous and next button
function prvs() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function nxt() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return document.getElementById('showImg').src = images[i];
}