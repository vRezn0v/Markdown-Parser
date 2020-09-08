const collapse = (element) => {
    var modalbg = document.getElementById('modalshade');
    var target = element.getAttribute('data-target');
    var targetElement = document.getElementById(target);
    if (targetElement.classList.contains('show'))  {
        targetElement.classList.remove('show');
        modalbghandler();
    }
    else {
        targetElement.classList.add('show');
        modalbg.classList.add('enabled');
        document.getElementById('modalshade').dataset.target = target;
    }
}

const modalbghandler = () => {
    var modalbg = document.getElementById('modalshade');
    var target = modalbg.getAttribute('data-target');
    var targetElement = document.getElementById(target);
    if ( modalbg.classList.contains('enabled') ) {
        modalbg.classList.remove('enabled');
        targetElement.classList.remove('show');
        document.getElementById('modalshade').dataset.target = "";
    }
}