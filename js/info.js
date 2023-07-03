info = []

let checkInfo = () => {
    if (localStorage.getItem('cart') != null) {
    info = JSON.parse(localStorage.getItem('info'));

    }}

let showInfo = () => {
    var out = '';
    $('.info-name').html(info[0].name)
    $('.info-image').html(`<img class="info-img" src="${info[0].img}"  alt="info image">`)
    $('.info-cost').html(`Qiymət: ${info[0].cost} Azn`)
}




checkInfo()
showInfo()

var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
            },
        400: {
            slidesPerView: 1,
            spaceBetween: 40,
            },
        500: {
            slidesPerView: 1,
            spaceBetween: 40,
            },
        600: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

$('.increment').click((e) => {
    $('.decrement')[0].disabled = false;
    count = Number(e.currentTarget.parentElement.children[1].value);
    count += 1
    $('#quantity')[0].value = count
})


$('.decrement').click((e) => {
    if ($('#quantity')[0].value <= 1 ){
      $('.decrement')[0].disabled = true;
    }
    else{
      $('.decrement')[0].disabled = false;
    
    }
    if ($('.decrement')[0].disabled == false) {
      count = Number(e.currentTarget.parentElement.children[1].value);
      count -= 1
      $('#quantity')[0].value = count
  }
  })

  $('.buy-btn').click((e) =>{
    let count  = Number($('.cart-count')[1].innerText);
    if (localStorage.count == undefined){
      count == 0
    }
    
    product = {}
    cost = info[0].cost
    product.img = info[0].img
    product.name = info[0].name
    product.cost = (cost);
    if (cart.length == 0){
      cart.push(product)
      count += 1;
    }
    else{
      x = 0
      for (i in cart){
        if (cart[i].name === product.name) {
        console.log(cart[i]);
        x += 1
        }
      }
      if (x == 0) {
        cart.push(product)
          count += 1;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('count', count)
    $('.cart-count')[1].innerText =  localStorage.getItem('count')
    $('.cart-count')[0].innerText =  localStorage.getItem('count')
    localStorage.setItem('cart', JSON.stringify(cart))
  })