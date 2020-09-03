// FILE CONTENTS
//TODO: Open and Save File
var storedmd;
var theme;

const updateTheme = (themename) => {
    // themes (to be added): default, black&yellow, haxxor, matte, pastel, chalky, caffiene
    // Remove All Theme Classes
    // Save Theme Classes
}

const openFile = () => {
    // Check If File Is Markdown
    // If markdown, pipe into mdin and render to htop
}

const clearEditor = () => {
    mdin.innerText = '';
    saveProgress();
    console.log("CLEARED");
}

const saveProgress = () => {
    // Saves MD to Local Storage
    window.localStorage.clear();
    window.localStorage.setItem('activemd',  mdin.innerText);
}

const loadProgress = () => {
    // Loads MD from Local Storage
    storedmd = (localStorage.getItem('activemd')!==null) ? localStorage.getItem('activemd') : '';
    themename = (localStorage.getItem('editortheme')!==null) ? localStorage.getItem('editortheme') : 'default';
    updateTheme(themename);
    mdin.innerText=storedmd;
    console.log("LOAD");
}

const saveFileAs = (extension) => {
    if (extension.toUpperCase()==='HTML'){
    } else if (extension.toUpperCase()==='MD'){
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