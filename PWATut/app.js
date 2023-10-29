var what = document.getElementById("what");
var next = document.getElementById("next");
var main = document.getElementById("main");
var build = document.getElementById("build");
var dive = document.getElementById("dive");
var detailShown = false;
var buildShown = false;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function () {
        console.log("SW Registered");
    })
}

what.addEventListener('click', function () {
    if (!detailShown) {
        detailShown = true;
        buildShown = true;
        main.style.opacity = 0;
        dive.style.opacity = 0;
        next.style.display = 'block';
        main.style.display = 'none';
        dive.style.display = 'none';
        setTimeout(function () {
            next.style.opacity = 1;
        }, 300);
        what.innerText = "Home";
        build.innerText = "Dive";
    } else {
        detailShown = false;
        buildShown = false;
        next.style.opacity = 0;
        dive.style.opacity = 0;
        main.style.display = 'block';
        next.style.display = 'none';
        dive.style.display = 'none';
        setTimeout(function () {
            main.style.opacity = 1;
        }, 300);
        what.innerText = "PWA?";
        build.innerText = "Dive";
    }
});

build.addEventListener("click", function (event) {
    if (!buildShown) {
        buildShown = true;
        detailShown = true;
        main.style.opacity = 0;
        next.style.opacity = 0;
        dive.style.display = 'block';
        main.style.display = 'none';
        next.style.display = 'none';
        setTimeout(function () {
            dive.style.opacity = 1;
        }, 300);
        build.innerText = "Home";
        what.innerText = "PWA?";
    }
    else {
        buildShown = false;
        detailShown = false;
        dive.style.opacity = 0;
        next.style.opacity = 0;
        main.style.display = 'block';
        dive.style.display = 'none';
        next.style.display = 'none';
        setTimeout(function () {
            main.style.opacity = 1;
        }, 300);
        build.innerText = "Dive";
        what.innerText = "PWA?";
    }
})
