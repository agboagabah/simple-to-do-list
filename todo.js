const myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length ; i++){
    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\U00D7');
    span.className = 'close';
    span.appendChild (txt);
    myNodelist[i].appendChild(span);
}

const close = document.getElementsByClassName('close');
var i;
for (i = 0; i <close.length; i++ ){
    close [i].onclick = ()=>{
        const div = this.parentElement;
        div.style.display = 'none';
    }
}

const list = document.querySelector('ul');
list.addEventListener('click', (ev)=>{ if (ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');

    }

}, false); 

const newElement = () =>{
    const li = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert('Write something to add please!');
    } else {
        document.getElementById('myUL').appendChild(li);
    }

    document.getElementById('myInput').value = '';

    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i<close.length; i++){
        close[i].onclick = 
        () =>{
            const div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
