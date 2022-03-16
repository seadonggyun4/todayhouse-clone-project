const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')

console.log(productTab)

function toggleActiveTab(){
  const TabItem = this.parentNode

  if(currentActiveTab !== TabItem){
    TabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = TabItem
  } 


}


productTabButtonList.forEach((button)=>{
  button.addEventListener('click', toggleActiveTab)
})