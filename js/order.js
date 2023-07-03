cart = []


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

let checkCart = () => {
    if (localStorage.getItem('cart') != null) {
    cart = JSON.parse(localStorage.getItem('cart'));

    }
    if (localStorage.getItem('count') == null) {
        count = 0;
        localStorage.setItem('count',0)
        }
}


let showCart = () => {
    var out = '';
    localStorage.setItem(cart, cart)
    for (key in cart){
        out += `<tr><td class="product-img">
        <a href="#"><img src="${cart[key].img}" alt="Product Image"></a>
    </td>
    <td class="product-name">${cart[key].name}</td>
    <td class="product-price">${cart[key].cost} Azn</td>
    <td class="product-quantity">
        1
    </td>
    <td class="product-color">-</td>
    <td class="product-total">${cart[key].cost} Azn</td>
    <td class="product-total">${ new Date().toLocaleString()} </td>
    <td class="product-deliver"><div>Çatdırılıb </div></td>
    <td class="product-reorder"><button>Təkrar Sifariş </button></td>
    </tr>`
    }
    $('.tbody').html(out);
}


checkCart()
showCart()

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
      e.currentTarget.parentElement.children[1].value = count
      total = Number(e.currentTarget.parentElement.parentElement.children[2].innerText.slice(0,3)) * Number(e.currentTarget.parentElement.children[1].value)
      e.currentTarget.parentElement.parentElement.children[5].innerText = total.toFixed(1) + " Azn"
      if (cart != null){
        x = 0
        i = 0
            while ( i < document.getElementsByClassName('product-total').length) {
                x += Number(document.getElementsByClassName('product-total')[i].innerText.slice(0,3))
                i++
                }
            }
            console.log(x);
            x = Number(x.toFixed(1))
    document.getElementById('total-cost').innerText = x + ' Azn'
  }
  })
  
$('.increment').click((e) => {
    $('.decrement')[0].disabled = false;
    count = Number(e.currentTarget.parentElement.children[1].value);
    count += 1
    e.currentTarget.parentElement.children[1].value = count
    total = Number(e.currentTarget.parentElement.parentElement.children[2].innerText.slice(0,3)) * Number(e.currentTarget.parentElement.children[1].value)
    e.currentTarget.parentElement.parentElement.children[5].innerText = total.toFixed(1) + " Azn"
    console.log(total);
    if (cart != null){
        x = 0
        i = 0
            while ( i < document.getElementsByClassName('product-total').length) {
                x += Number(document.getElementsByClassName('product-total')[i].innerText.slice(0,3))
                console.log(x);
                i++
                }
            }
            x = Number(x.toFixed(1))

    document.getElementById('total-cost').innerText = x + ' Azn'
})

$('.remove-btn').click((e) => {
count = localStorage.getItem('count')
count -= 1
console.log(count);
if (localStorage['count']  <= 0){
    count =  0
}
localStorage['count'] = count
$('.cart-count')[1].innerText =  localStorage.getItem('count')
$('.cart-count')[0].innerText =  localStorage.getItem('count')

const index = cart.findIndex(item => item.img === e.currentTarget.parentElement.parentElement.children[0].children[0].children[0].src);
cart.splice(index, 1);
cart = cart.filter(item => item.img !== e.currentTarget.parentElement.parentElement.children[0].children[0].children[0].src);
console.log(cart);
localStorage.setItem('cart', JSON.stringify(cart))
e.currentTarget.parentElement.parentElement.remove()
if (cart != null){
    x = 0
    i = 0
        while ( i < document.getElementsByClassName('product-total').length) {
            x += Number(document.getElementsByClassName('product-total')[i].innerText.slice(0,3))
            console.log(x);
            i++
            }
        }
        x = Number(x.toFixed(1))

document.getElementById('total-cost').innerText = x + ' Azn'
})

$('.tab-1').click((e) => {
    $('.tab-1').addClass('active')
    $('.tab-2').removeClass('active')
    $('.product-table.first').addClass('active')
    $('.product-table.second').removeClass('active')
})

$('.tab-2').click((e) => {
    $('.tab-2').addClass('active')
    $('.tab-1').removeClass('active')
    $('.product-table.first').removeClass('active')
    $('.product-table.second').addClass('active')
})