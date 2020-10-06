console.log('hello world')

'use strict';
window.onload = function(){
    
    console.log('1');
    document.addEventListener('touchstart', (event) => {
    
        console.log(`${event.type} : ${event.identifier} : ${event.target} : ${event.pageX} : ${event.pageY} : ${event.screenX} : ${event.screenY} : ${event.radiusX} : ${event.radiusY} : ${event.rotationAngle} : ${event.force} : ${event.timeStamp}`);
    
        var el = document.getElementById('xy');
        el.style.backgroundColor = "rgb(51, 147, 179)";

        var el = document.getElementById('voice1');
        el.innerText = event.target;

        var el = document.getElementById('voice2');
        el.innerText = event.timeStamp;
    
        var el = document.getElementById('voice3');
        el.innerText = event.type;
        
    }, false);

    console.log('2');
    document.addEventListener('touchend', (event) => {
    
        console.log(`${event.type} : ${event.identifier} : ${event.target} : ${event.pageX} : ${event.pageY} : ${event.screenX} : ${event.screenY} : ${event.radiusX} : ${event.radiusY} : ${event.rotationAngle} : ${event.force} : ${event.timeStamp}`);

        var el = document.getElementById('xy');
        el.style.backgroundColor = "rgb(0, 0, 0)";

        var el = document.getElementById('voice1');
        el.innerText = event.target;

        var el = document.getElementById('voice2');
        el.innerText = event.timeStamp;
    
        var el = document.getElementById('voice3');
        el.innerText = event.type;
    
        
    }, false);

    console.log('3');
    document.addEventListener('touchmove', (event) => {
    
        console.log(`${event.type} : ${event.identifier} : ${event.target} : ${event.pageX} : ${event.pageY} : ${event.screenX} : ${event.screenY} : ${event.radiusX} : ${event.radiusY} : ${event.rotationAngle} : ${event.force} : ${event.timeStamp}`);

        var el = document.getElementById('xy');
        el.style.backgroundColor = "yellowgreen";

        var el = document.getElementById('voice1');
        el.innerText = event.target;

        var el = document.getElementById('voice2');
        el.innerText = event.timeStamp;
    
        var el = document.getElementById('voice3');
        el.innerText = event.type;
        
    }, false);

    console.log('4');
    document.addEventListener('keydown', (event) => {
    
        const keyName = event.key;
        const keyCode = event.code;

        var el = document.getElementById('voice1');
        el.innerText = 'ここは';

        var el = document.getElementById('voice2');
        el.innerText = 'スマホ・タブレット向けだよ～';

        var el = document.getElementById('voice3');
        el.innerText = event.type;

        console.log(`keydown ${keyName} ${keyCode}`)
    
    }, false);
    
    console.log('5');
    document.addEventListener('keyup', (event) => {
    
        const keyName = event.key;
        const keyCode = event.code;
      
        var el = document.getElementById('voice1');
        el.innerText = 'ここは';

        var el = document.getElementById('voice2');
        el.innerText = 'スマホ・タブレット向けだよ～';

        var el = document.getElementById('voice3');
        el.innerText = event.type;
    
        console.log(`keyup ${keyName} ${keyCode}`)
    
    }, false);

    console.log('6');
    document.addEventListener('mouseover', (event) => {
      
          console.log(`${event.type} : ${event.timeStamp}`);

          var el = document.getElementById('voice1');
          el.innerText = 'ここは';
  
          var el = document.getElementById('voice2');
          el.innerText = 'スマホ・タブレット向けだよ～';
  
          var el = document.getElementById('voice3');
          el.innerText = event.type;

    }, false);

    console.log('7');
    document.addEventListener('mousemove', (event) => {
      
          console.log(`${event.type} : ${event.timeStamp}`);

          var el = document.getElementById('voice1');
          el.innerText = 'ここは';
  
          var el = document.getElementById('voice2');
          el.innerText = 'スマホ・タブレット向けだよ～';
  
          var el = document.getElementById('voice3');
          el.innerText = event.type;

    }, false);

    console.log('8');
    document.addEventListener('click', (event) => {
      
          console.log(`${event.type} : ${event.timeStamp}`);

          var el = document.getElementById('voice1');
          el.innerText = 'ここは';
  
          var el = document.getElementById('voice2');
          el.innerText = 'スマホ・タブレット向けだよ～';
  
          var el = document.getElementById('voice3');
          el.innerText = event.type;

    }, false);

    console.log('9');
    document.addEventListener('wheel', (event) => {
      
          console.log(`${event.type} : ${event.timeStamp}`);

          var el = document.getElementById('voice1');
          el.innerText = 'ここは';
  
          var el = document.getElementById('voice2');
          el.innerText = 'スマホ・タブレット向けだよ～';
  
          var el = document.getElementById('voice3');
          el.innerText = event.type;

    }, false);
}
