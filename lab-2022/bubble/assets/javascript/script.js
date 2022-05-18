let bubbles = document.querySelectorAll('.bubble');
let container = document.getElementById('container');


bubbles.forEach(function (bubble) {
    bubble.style.left = (90 * Math.random()) + '%';
    bubble.style.top = (90 * Math.random()) + '%';
});

container.addEventListener('click', function (event) {
    console.log(event) 
    if (event.target.classList.contains('bubble')){
        event.target.remove();   
     }
});