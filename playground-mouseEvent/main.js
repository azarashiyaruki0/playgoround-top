console.log('hello world')

'use strict';
window.onload = function(){

    const target = document.getElementById('xy'); 

    console.log('1');
    document.addEventListener('keydown', (event) => {

        const keyName = event.key;
        const keyCode = event.code;
        console.log(`keydown ${keyName} ${keyCode}`);
        
        var el = document.getElementById('voice1');
        el.innerText = `keydown ${keyName} ${keyCode}`;
    
    }, false);

    console.log('2');
    document.addEventListener('keyup', (event) => {
    
        const keyName = event.key;
        const keyCode = event.code;
        console.log(`keyup ${keyName} ${keyCode}`);

        var el = document.getElementById('voice1');
        el.innerText = `keyup ${keyName} ${keyCode}`;
    
    }, false);
    
    console.log('3');
    document.addEventListener('mousemove', (event) => {
    
        console.log(`${event.type} : ${event.timeStamp}`);

        var el = document.getElementById('xy');
        var bounds = el.getBoundingClientRect();
        var intbLeft = parseInt(bounds.left); 
        var intbRight = parseInt(bounds.right);
        var intbTop = parseInt(bounds.top);
        var intbBottom = parseInt(bounds.bottom);

        const X1 = event.pageX;
        const Y1 = event.pageY;
        const X2 = event.screenX;
        const Y2 = event.screenY;
        console.log(`${event.type} : X1:${X1} Y1:${Y1} X2:${X2} Y2:${Y2}`);

        var el = document.getElementById('voice1');
        el.innerText = `xL:${intbLeft} xR:${intbRight} yT:${intbTop} yB:${intbBottom}`;

        var el = document.getElementById('voice2');
        el.innerText = `X1:${X1} Y1:${Y1}`;
    
        var el = document.getElementById('voice3');
        el.innerText = event.type;    
    
        
    }, false);
    
    console.log('4');
    target.addEventListener('mouseover', (event) => {
        
        console.log(`${event.type} : ${event.timeStamp}`)

        var el = document.getElementById('xy');
        var bounds = el.getBoundingClientRect();
        var intbLeft = parseInt(bounds.left); 
        var intbRight = parseInt(bounds.right);
        var intbTop = parseInt(bounds.top);
        var intbBottom = parseInt(bounds.bottom);
            
        const X1 = event.pageX;
        const Y1 = event.pageY;
        const X2 = event.screenX;
        const Y2 = event.screenY;
        console.log(`${event.type} : X1:${X1} Y1:${Y1} X2:${X2} Y2:${Y2}`)
        console.log(`bounds : ${intbLeft} ${intbRight} ${intbTop} ${intbBottom}`)
    
    
        setTimeout(function(){

                var el = document.getElementById('xy');
                el.style.backgroundColor = "rgb(51, 147, 179)";

                var el = document.getElementById('voice1');
                el.innerText = `xL:${intbLeft} xR:${intbRight} yT:${intbTop} yB:${intbBottom}`;
                
                var el = document.getElementById('voice2');
                el.innerText = `X1:${X1} Y1:${Y1}`;
            
                var el = document.getElementById('voice3');
                el.innerText = event.type;

        },100);

    }, false);
    
    console.log('5');
    target.addEventListener('mouseout', (event) => {
    
        console.log(`${event.type} : ${event.timeStamp}`)

        var el = document.getElementById('xy');
        var bounds = el.getBoundingClientRect();
        var intbLeft = parseInt(bounds.left); 
        var intbRight = parseInt(bounds.right);
        var intbTop = parseInt(bounds.top);
        var intbBottom = parseInt(bounds.bottom);
        
        const X1 = event.pageX;
        const Y1 = event.pageY;

        setTimeout(function(){

            var el = document.getElementById('xy');
            el.style.backgroundColor = "black";

            var el = document.getElementById('voice1');
            el.innerText = `xL:${intbLeft} xR:${intbRight} yT:${intbTop} yB:${intbBottom}`;

            var el = document.getElementById('voice2');
            el.innerText = `X1:${X1} Y1:${Y1}`;
        
            var el = document.getElementById('voice3');
            el.innerText = event.type;

        },100);

    }, false);

    console.log('6');
    target.addEventListener('click', (event) => {
    
        console.log(`${event.type} : ${event.timeStamp}`)

        var el = document.getElementById('xy');
        var bounds = el.getBoundingClientRect();
        var intbLeft = parseInt(bounds.left); 
        var intbRight = parseInt(bounds.right);
        var intbTop = parseInt(bounds.top);
        var intbBottom = parseInt(bounds.bottom);
        
        const X1 = event.pageX;
        const Y1 = event.pageY;

        setTimeout(function(){

            var el = document.getElementById('xy');
            el.style.backgroundColor = "rgb(10, 73, 94)";

            var el = document.getElementById('voice1');
            el.innerText = `xL:${intbLeft} xR:${intbRight} yT:${intbTop} yB:${intbBottom}`;

            var el = document.getElementById('voice2');
            el.innerText = `X1:${X1} Y1:${Y1}`;
        
            var el = document.getElementById('voice3');
            el.innerText = event.type;

        },100);

    }, false);

    target.addEventListener('dblclick', (event) => {
    
        console.log(`${event.type} : ${event.timeStamp}`)

        var el = document.getElementById('xy');
        var bounds = el.getBoundingClientRect();
        var intbLeft = parseInt(bounds.left); 
        var intbRight = parseInt(bounds.right);
        var intbTop = parseInt(bounds.top);
        var intbBottom = parseInt(bounds.bottom);
        
        const X1 = event.pageX;
        const Y1 = event.pageY;

        setTimeout(function(){

            var el = document.getElementById('xy');
            el.style.backgroundColor = "gray";

            var el = document.getElementById('voice1');
            el.innerText = `xL:${intbLeft} xR:${intbRight} yT:${intbTop} yB:${intbBottom}`;

            var el = document.getElementById('voice2');
            el.innerText = `X1:${X1} Y1:${Y1}`;
        
            var el = document.getElementById('voice3');
            el.innerText = event.type;

        },100);

    }, false);
}
