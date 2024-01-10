$(document).ready(function () {
    $(".js-slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
  
  fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        $(".js-slider").slick("slickAdd",
        //   `
        // <div class="card">
        //   <div class="like"></div>
        //   <a href="">
        //     <img class="produto" src="https://static.vecteezy.com/ti/fotos-gratis/t2/22653879-fantasia-ilha-com-cachoeiras-3d-ilustracao-elementos-do-isto-imagem-mobiliado-de-nasa-generativo-ai-gratis-foto.jpg" alt="">
        //   </a>
        //     <h4 class="nome-produto">Nome do produto</h4>
        //   <div class="rating">
        //     &#9733;
        //     &#9733;
        //     &#9733;
        //     &#9734;
        //     &#9734;  
        //   </div>
        //   <div class="price">
        //     <h5>Preço</h5>
        //     <h5>Preço promoção</h5>
        //   </div>
        //     <a class="button">Adicionar ao carrinho</a>
        // </div>
        // `
        );
      });
    })