const orderCta = document.querySelector('.order-cta')

// orderCta.children => orderCta의 자식요소(orderCtaBuyButton, orderCtaBookmarkButton)가 배열로 할당된다
// orderCta.children 을 구조분해해서 사용한다.
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
// const orderCtaBuyButton = orderCta.querySelector('.btn-primary') 
// const orderCtaBookmarkButton = orderCta.querySelector('.btn-ghost') 

const orderModal = document.querySelector('.order-form-modal')
const orderOverlay = document.querySelector('.overlay')






//orderCtaOpen
function orderCtaOpen(){
  orderModal.classList.add('is-open')
  orderOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click',orderCtaOpen)



//orderCtaClose
function orderCtaClose(){
  orderModal.classList.remove('is-open')
  orderOverlay.classList.remove('is-active')
}

orderOverlay.addEventListener('click',orderCtaClose)