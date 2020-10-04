console.log('hello world')

document.addEventListener('mouseover', (event) => {

     const X = event.pageX;
     const Y = event.pageY;
     console.log(`mouseover : ${X} ${Y}`)

}, false);

function func(){

    var target = document.getElementById('voice');

    setTimeout(function () {
        target.innerText = 'それにしちゃうの？';
    }, 100);

}

document.addEventListener('mouseout', (event) => {

    const X = event.pageX;
    const Y = event.pageY;
    console.log(`mouseout : ${X} ${Y}`)

    var target = document.getElementById('voice');
    target.innerText = 'ようこそ～'

}, false);
