document.getElementsByClassName('range-container')[0].children[1].addEventListener('input', e =>{
    document.getElementsByClassName('max-num')[0].children[0].value = e.currentTarget.value
  });
  
  document.getElementsByClassName('range-container')[0].children[0].addEventListener('input', e =>{
    document.getElementsByClassName('min-num')[0].children[0].value = e.currentTarget.value
  });