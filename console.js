
let numero = document.getElementById('numero');
let password = document.getElementById('password');
let doc = document.getElementById('doc')
console.log(doc);


let btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    numero = numero.value;
    password = password.value;
    doc = doc;
    if(numero==779268560 && password==111){
        window.open(doc)
        e.preventDefault();
    }
    else{
        window.stop
    }
})



