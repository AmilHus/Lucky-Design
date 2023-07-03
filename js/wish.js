wishlist = []
wishbut = []

let checkList = () => {
    if (localStorage.getItem('wish') != null) {
    wishlist = JSON.parse(localStorage.getItem('wish'));
    }
    if (localStorage.getItem('wishbut') != null) {
        wishbut= JSON.parse(localStorage.getItem('wishbut'));
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

let showCart = () => {
    var out = '';
    localStorage.setItem(wishlist, wishlist)
    for (key in wishlist){
        out += `
        <div class="food-products_item">
                    <div class="food-products_item-top">
                        <button class="wish-btn"><img src="/img/images/icon/heart-filled.svg" alt="Wish Image"></button>
                    </div>
                    <img src="${wishlist[key].img}" alt="Item Image" class="item-image">
                    <p class="item-name">${wishlist[key].name}</p>
                    <div class="cost-container" style="display: flex;">
                        <p class="item-cost">${wishlist[key].cost}</p>
                    </div>
                    <button class="buy-btn">Səbətə At</button>
                </div>
        `
    }
    $('.wish-list').html(out);
}

checkList()
showCart()

$('.wish-btn').click((e) =>{
    product = {}
    count = Number($('.wish-count')[1].innerText);
    cost = e.currentTarget.parentElement.parentElement.children[3].innerText.slice(0,4)
    product.img = (e.currentTarget.parentElement.parentElement.children[1].src);
    product.name = (e.currentTarget.parentElement.parentElement.children[2].innerText);
    product.cost = (cost);
    count -= 1
    index = wishlist.findIndex(i => i.name == product.name);
    console.log(wishlist.lenght);
    if (index == 0 ){
        wishlist.shift(index)
    }
    else{
        if (wishlist.length > 1 ){
            wishlist.splice(index,index )
        }
        else{
            wishlist.pop(product)
    
        }
    }
    for (i in document.getElementsByClassName('item-name')){
        if ( document.getElementsByClassName('item-name')[i].innerHTML ===  product.name) {
            console.log(i);
            if (wishbut.length === 1 ){
                wishbut.shift(i)
            }
            else{
                if (wishbut.length > 1 ){
                    wishbut.splice(i,i )
                }
                else{
                    wishbut.pop(i)
            
                }
            }}}

      e.currentTarget.children[0].src = '/img/images/icon/heart-outline.svg';
    
    if (localStorage.count == undefined){
      count == 0
    }
  
    localStorage.setItem('wish-count', count)
    localStorage.setItem('wish', JSON.stringify(wishlist))
    localStorage.setItem('wishbut', JSON.stringify(wishbut))
    $('.wish-count')[1].innerText = count
    $('.wish-count')[0].innerText = count
  })