const body = document.querySelector('body');
const button = document.querySelector('button');
const color = ['red','royalblue', 'yellow', 'black','orchid'];

// body.style.backgroundColor = 'blue' 
button.addEventListener('click', ()=>{
    const colorIndex = parseInt (Math.random() * color.length);
        body.style.backgroundColor = color[colorIndex];

});
