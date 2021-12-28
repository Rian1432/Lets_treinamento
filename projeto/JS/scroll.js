// slider tá selecionando nosso elemento pela classe, no caso a div que contém o scroll
const slider = document.querySelector(".container_carousel");

let isDown = false;
let startX;
let scrollLeft;

// --------------EVENTOS DE MOUSE---------------------------------

// Mousedown é quando o usuário clica sob o elemento
slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  //Mouseup é quando o usuário para de clicar sob o elemento.
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  
  // Mousemove o nome já fala tudo, é quando o mouse é movido.
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //velocidade do scroll
      slider.scrollLeft = scrollLeft - walk;
  });