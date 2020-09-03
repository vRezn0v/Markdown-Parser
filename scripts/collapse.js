const collapse = (element) => {
    var target = element.getAttribute('data-target');
    var targetElement = document.getElementById(target);
    if (targetElement.classList.contains('show')) targetElement.classList.remove('show');
    else targetElement.classList.add('show');
}

