// FILE CONTENTS
var storedmd = (localStorage.getItem('activemd')!==null) ? localStorage.getItem('activemd') : '';
var theme = (localStorage.getItem('editortheme')!==null) ? localStorage.getItem('editortheme') : 'default';
var target;
const changeTheme = (targettheme) => {
    // themes (to be added): default, black&yellow, haxxor, matte, pastel, chalky, caffiene
    theme = targettheme;

    target.classList.remove(...target.classList);
    target.classList.add(theme);
    saveProgress();
}

const openFile = () => {
    var files = document.getElementById('fileup').files;
    if (files.length !== 1) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(e){
        console.log(e);
        mdin.innerText = e.target.result;
        saveProgress();
    }
    fr.readAsText(files.item(0));
    location.reload();
}

const changeViewMode = () => {
    var targetElement = document.getElementsByClassName('main')[0];
    if (targetElement.classList.contains('vertical')) {
        targetElement.classList.remove('vertical');
        targetElement.classList.add('horizontal');
    }
    else if (targetElement.classList.contains('horizontal')){
        targetElement.classList.remove('horizontal');
        targetElement.classList.add('vertical');
    }
}

const clearEditor = () => {
    mdin.innerText = '';
    htop.innerHTML = '';
    saveProgress();
    console.log("CLEARED");
    window.location.reload();
}

const saveProgress = () => {
    // Saves MD to Local Storage
    window.localStorage.clear();
    window.localStorage.setItem('activemd',  mdin.innerText);
    window.localStorage.setItem('editortheme',  theme);
}

const loadProgress = () => {
    // Loads MD from Local Storage
    mdin.innerText=storedmd;
}

const saveFileAs = (extension) => {
    if (extension.toUpperCase()==='HTML'){
    } else if (extension.toUpperCase()==='MD'){
    }
}

window.onload = function () {
    mdin = document.getElementById('mdin');
    htop = document.getElementById('htop');
    target = document.getElementById('themeable');
    loadProgress();
    changeTheme(theme);
    parser = function(){
        htop.innerHTML=parse(mdin.innerText);
    }
    parser();
    mdin.addEventListener('keyup', parser, false);
    document.addEventListener("keydown", function(e) {
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
          e.preventDefault();
          saveProgress();
          alert("saved");
        }
    }, false);
}

window.onbeforeunload = () => {
    saveProgress();
}