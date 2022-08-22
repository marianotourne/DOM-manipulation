const parrafo1 = document.querySelector('#parrafo1');
const parrafo2 = document.querySelector('#parrafo2');
const input1 = document.querySelector('#input1');

parrafo1.addEventListener('copy', textCopy);
parrafo2.addEventListener('mousemove', mouseMove);
parrafo2.addEventListener('mouseleave', mouseLeave);
input1.addEventListener('select', textSelect)

function textCopy(){
    alert('Copiaste texto del parrafo 1.');
}

function mouseMove(){
    console.log('Estas encima del párrafo 2.')
}

function mouseLeave(){
    console.log('Dejaste el párrafo 2.')
}

function textSelect(){
    console.log('Seleccionaste texto del input.')
}