const ele =document.getElementById('personal'); 
ele.scrollTop=100;  
ele.scrollLeft=150;  

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Obtenha a posição atual do mouse
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // A que distância o mouse foi movido
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Role o elemento
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};
const mouseDownHandler = function(e) {
    // Muda o cursor e evita que o usuário selecione o texto
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
};