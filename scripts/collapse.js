const collapsestates = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
};
    
const collapse = (selector, cmd) => {
    console.log("Hi There");
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList[collapsestates[cmd]('show')];
    })
}
/*const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
window.addEventListener("click", (ev) => {
    const elm = ev.target;
    console.log(elm);
    if (triggers.includes(elm)){
        const selector = elm.getAttribute('data-target');
        collapse(selector, 'toggle');
    }
}, false);*/