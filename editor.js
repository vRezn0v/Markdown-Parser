// FILE CONTENTS
//TODO: Open and Save File
var storedmd;

const openFile = () => {

}

const clearEditor = () => {
    mdin.innerText = '';
    saveProgress();
}

const saveProgress = () => {
    // Saves MD to Local Storage
    window.localStorage.clear();
    window.localStorage.setItem('activemd',  mdin.innerText);
}

const loadProgress = () => {
    // Loads MD from Local Storage
    storedmd = (localStorage.getItem('activemd')!==null) ? localStorage.getItem('activemd') : '';
    mdin.innerText=storedmd;
    console.log("LOAD");
}

const saveFileAs = (extension) => {
    if (extension.toUpperCase()==='HTML'){
    } else if (extension.toUpperCase==='MD'){
    }
}

window.onload = function () {
    mdin = document.getElementById('mdin');
    htop = document.getElementById('htop');
    loadProgress();
    parser = function(){
        htop.innerHTML=parse(mdin.innerText);
    }
    parser();
    mdin.addEventListener('keyup', parser, false);
}

window.onbeforeunload = () => {
    saveProgress();
}