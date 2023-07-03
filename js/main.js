var cart = []

var wishlist = []
var wishbut = []
var info = []

let checList = () => {
  if (localStorage.getItem('wish') != null) {
  wishlist = JSON.parse(localStorage.getItem('wish'));
  }
  if (localStorage.getItem('wish-count') == null) {
      count = 0;
      localStorage.setItem('wish-count',0)
      }
      else{
        $('.wish-count')[1].innerText = localStorage.getItem('wish-count')
    $('.wish-count')[0].innerText = localStorage.getItem('wish-count')
    }
}

let checCart = () => {
  if (localStorage.getItem('cart') != null) {
  cart = JSON.parse(localStorage.getItem('cart'));
  }
  if (localStorage.getItem('count') == null) {
    count = 0;
    localStorage.setItem('count',0)
    }
}

checCart()
checList()


let checWish = () =>{
  if (localStorage.getItem('wishbut') != null) {
    wishbut = JSON.parse(localStorage.getItem('wishbut'));
    }
  for (i in wishbut) {
    console.log(i);
    document.getElementsByClassName('wish-btn')[wishbut[i]].children[0].src = '/img/images/icon/heart-filled.svg'
  }
    
}

checWish()

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-second", {
  slidesPerView: 4,
  spaceBetween:30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
});

$('.mobile-menu_btn').click((e) => {
  $('.mobile-menu').toggleClass('active')
})


$('.nav').click((e) => {
  $('.mobile_nav-drop').toggleClass('active')
})

$('.mobile-category_li').click ((e) => {
  e.currentTarget.classList.toggle('active');
  e.currentTarget.children[2].classList.toggle('active');
})

$('.category-btn_container').click ((e) => {
  $('.mobile-category').toggleClass('active')
})

window.addEventListener('scroll', function(){
  if (window.pageYOffset > 120){
      $('.header-fixed').addClass('active')
      $('.scrolltop').addClass('active')
  }
  else{
      $('.header-fixed').removeClass('active')
      $('.scrolltop').removeClass('active')
  }
})

$('.scrolltop').click(function(event) {
  $("html, body").animate({ scrollTop: 0 }, "slow");
})




$('.cart-count')[1].innerText =  localStorage.getItem('count')
$('.cart-count')[0].innerText =  localStorage.getItem('count')

$('.wish-btn').click((e) =>{
  product = {}
  console.log(e.currentTarget.parentElement.parentElement.children[3]);
  count = Number($('.wish-count')[1].innerText);
  console.log(e.currentTarget.children[0].src);
  if (e.currentTarget.children[0].src === 'https://los-amilhus.netlify.app/img/images/icon/heart-outline.svg'){
    e.currentTarget.children[0].src === 'https://los-amilhus.netlify.app/img/images/icon/heart-outline.svg'
    count += 1
  cost = e.currentTarget.parentElement.parentElement.children[3].innerText.slice(0,4)
  product.img = (e.currentTarget.parentElement.parentElement.children[1].src);
  product.name = (e.currentTarget.parentElement.parentElement.children[2].innerText);
  product.cost = (cost);
  wishlist.push(product)
  for (i in document.getElementsByClassName('item-name')){
    if ( document.getElementsByClassName('item-name')[i].innerHTML ==  product.name) {
      wishbut.push(i)

    }
   
  }
  }
  else{
    count -= 1
    e.currentTarget.children[0].src = '/img/images/icon/heart-outline.svg';
    wishlist.pop(product)
    console.log('remove');
    product.name = (e.currentTarget.parentElement.parentElement.children[2].innerText);
    for (i in document.getElementsByClassName('item-name')){
      if ( document.getElementsByClassName('item-name')[i].innerHTML ==  product.name) {
        index = wishbut.findIndex(a => a ==  i);  
      }
    }

    if (index == 0 ){
        wishbut.shift(index)
        console.log(index);
    }
    else{
        if (wishbut.length > 1 ){
            wishbut.splice(index,index )
        }
        else{
            wishbut.pop(index)
    
        }
    }
  }
  if (localStorage.count == undefined){
    count == 0
  }

  localStorage.setItem('wish-count', count)
  localStorage.setItem('wish', JSON.stringify(wishlist))
  localStorage.setItem('wishbut', JSON.stringify(wishbut))
  $('.wish-count')[1].innerText = count
  $('.wish-count')[0].innerText = count
})

$('.remove-btn').click((e) => {
  e.currentTarget.parentElement.parentElement.remove()
  count = localStorage.getItem('count')
  count -= 1
  console.log(count);
  if (localStorage['count']  <= 0){
    count =  0
  }
  localStorage['count'] = count
  $('.cart-count')[1].innerText =  localStorage.getItem('count')
  $('.cart-count')[0].innerText =  localStorage.getItem('count')
})

$('.fa-user').hover((e) => {
   $('.user-panel').css('display', 'block')
},function (e) {
  $('.user-panel').css('display', 'none')
  
}
)

$('.user-panel').hover((e) => {
  $('.user-panel').css('display', 'block')
},function (e) {
 $('.user-panel').css('display', 'none')
 
}
)

$('.btn-general').click((e) =>{
  $('.category-sidebar').toggleClass('active')
})

$('.item-image').click( (e) => {
  item = {}
  item.name = (e.currentTarget.parentElement.children[2].innerText);
  item.img = e.currentTarget.src
  item.cost = e.currentTarget.parentElement.children[3].innerText.slice(0,4)
  info.push(item)
  console.log(info);
  localStorage.setItem('info' , JSON.stringify(info) )
  window.location.href = 'product.html'
})

$(document).ready(function(){
  $('.info-image')
  .zoom({
  magnify : '1',})
});

