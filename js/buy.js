$('.buy-btn').click((e) =>{
    let count  = Number($('.cart-count')[1].innerText);
    if (localStorage.count == undefined){
      count == 0
    }
    
    product = {}
    cost = e.currentTarget.parentElement.children[3].innerText.slice(0,4)
    product.img = (e.currentTarget.parentElement.children[1].src);
    product.name = (e.currentTarget.parentElement.children[2].innerText);
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

  $('.cart-count')[1].innerText =  localStorage.getItem('count')
$('.cart-count')[0].innerText =  localStorage.getItem('count')