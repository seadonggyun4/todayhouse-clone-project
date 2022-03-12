//[ 배송/교환/환불 header:모바일 버전 ]

const sectionHeaderIconButton = document.querySelector('.product-shipment .product-section-header .icon-button')


function showFullSection(){
  //section은 sectionHeaderIconButton의 2단계 위에 있는 부모요소이다. 즉 product-shipment
  const section = this.parentNode.parentNode

  section.classList.add('is-open')
}


sectionHeaderIconButton.addEventListener('click',showFullSection)