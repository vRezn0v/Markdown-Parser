window.onload = function () {
    mdin = document.getElementById('mdin');
    htop = document.getElementById('htop');
    parser = function(){
        document.getElementById('htop').innerHTML=parse(mdin.innerText);
    }
    parser();
    mdin.addEventListener('keyup', parser, false);
}