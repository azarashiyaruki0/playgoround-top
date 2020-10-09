
console.log('hello world')

document.addEventListener('mouseover', (event) => {

     const X = event.pageX;
     const Y = event.pageY;
     console.log(`mouseover : ${X} ${Y}`)

}, false);

function func1(){

    var target = document.getElementById('voice');

    setTimeout(function () {
        target.innerText = 'なんでも～';
    }, 100);

}

function func2(){

    var target = document.getElementById('voice');

    setTimeout(function () {
        target.innerText = 'PC～';
    }, 100);

}

function func3(){

    var target = document.getElementById('voice');

    setTimeout(function () {
        target.innerText = 'PC～';
    }, 100);

}

function func4(){

    var target = document.getElementById('voice');

    setTimeout(function () {
        target.innerText = 'スマホタブレット～';
    }, 100);

}

function func4(){

    var target = document.getElementById('voice');

    setTimeout(function () {
        target.innerText = '画面だけ～';
    }, 100);

}

document.addEventListener('mouseout', (event) => {

    const X = event.pageX;
    const Y = event.pageY;
    console.log(`mouseout : ${X} ${Y}`)

    var target = document.getElementById('voice');
    target.innerText = 'ようこそ～'

}, false);
