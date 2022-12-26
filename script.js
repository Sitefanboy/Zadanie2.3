let rocket = document.querySelector(".rocketa");
let rimg = document.querySelector(".rimg");

let mobil = document.querySelector(".mobilnik");
let mimg = document.querySelector(".ming");

let ll = document.querySelector(".lifeline");
let limg = document.querySelector(".limg");

let but1 = document.querySelector("#but15");
let ar1 = document.querySelector("#ar1");

let but2 = document.querySelector("#but10");
let ar2 = document.querySelector("#ar2");

let but3 = document.querySelector("#but20");
let ar3 = document.querySelector("#ar3");

rocket.addEventListener("mouseover", function(){
    rimg.style.background = "url(images/rocketpressed.png)"
    rimg.style.backgroundRepeat = "no-repeat";
    rocket.style.background = "#f6ae48";
    rocket.style.color = "white";
});

rocket.addEventListener("mouseout", function(){
    rimg.style.background = "url(images/rocket.png)";
    rimg.style.backgroundRepeat = "no-repeat";
    rocket.style.background = "transparent";
    rocket.style.color = "black";
});

mobil.addEventListener("mouseover", function(){
    mimg.style.background = "url(images/mobilepressed.png)"
    mimg.style.backgroundRepeat = "no-repeat";
    mobil.style.background = "#f6ae48";
    mobil.style.color = "white";
});

mobil.addEventListener("mouseout", function(){
    mimg.style.background = "url(images/mobile.png)"
    mimg.style.backgroundRepeat = "no-repeat";
    mobil.style.background = "transparent";
    mobil.style.color = "black";
});

ll.addEventListener("mouseover", function(){
    limg.style.background = "url(images/lifepressed.png)"
    limg.style.backgroundRepeat = "no-repeat";
    ll.style.background = "#f6ae48";
    ll.style.color = "white";
});

ll.addEventListener("mouseout", function(){
    limg.style.background = "url(images/life.png)"
    limg.style.backgroundRepeat = "no-repeat";
    ll.style.background = "transparent";
    ll.style.color = "black";
});

but1.addEventListener("mouseover", function(){
    but1.style.border = "2px solid #00b9e7"
    ar1.style.background = "url(images/pressed1.png)"
})

but1.addEventListener("mouseout", function(){
    but1.style.border = "2px solid white"
    ar1.style.background = "url(images/rightarrowbig.png)"
})

but2.addEventListener("mouseover", function(){
    but2.style.border = "2px solid #ffcb00"
    ar2.style.background = "url(images/pressed2.png)"
})

but2.addEventListener("mouseout", function(){
    but2.style.border = "2px solid white"
    ar2.style.background = "url(images/rightarrowbig.png)"
})

but3.addEventListener("mouseover", function(){
    but3.style.border = "2px solid #66bf0d"
    ar3.style.background = "url(images/pressed3.png)"
})

but3.addEventListener("mouseout", function(){
    but3.style.border = "2px solid white"
    ar3.style.background = "url(images/rightarrowbig.png)"
})

ar1.addEventListener("mouseover", function(){
    but1.style.border = "2px solid #00b9e7"
    ar1.style.background = "url(images/pressed1.png)"
})

ar1.addEventListener("mouseout", function(){
    but1.style.border = "2px solid white"
    ar1.style.background = "url(images/rightarrowbig.png)"
})

ar2.addEventListener("mouseover", function(){
    but2.style.border = "2px solid #ffcb00"
    ar2.style.background = "url(images/pressed2.png)"
})

ar2.addEventListener("mouseout", function(){
    but2.style.border = "2px solid white"
    ar2.style.background = "url(images/rightarrowbig.png)"
})

ar3.addEventListener("mouseover", function(){
    but3.style.border = "2px solid #66bf0d"
    ar3.style.background = "url(images/pressed3.png)"
})

ar3.addEventListener("mouseout", function(){
    but3.style.border = "2px solid white"
    ar3.style.background = "url(images/rightarrowbig.png)"
})