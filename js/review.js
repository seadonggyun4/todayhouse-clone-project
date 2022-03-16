const reviewLikeButtons = document.querySelectorAll('.review-card-footer button')



const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'

// [ ====================== toggleReviewLikeButton ====================== ] 
function toggleReviewLikeButton(){
  const isLiked =  this.classList.contains('btn-fill-primary') //isLiked = button 이 primary를 포함하고 있는가(toggleReviewLikeButton이벤트가 실행될때 기준)
  const textElement = this.nextElementSibling //text Element
  const reviewCardFooter = this.parentNode // reviewCard 하단

  // [활성화 상태인지 아닌지]
  if(isLiked === true){
    //비활성화
    this.innerHTML = NOT_HELPFUL
  } else {
    //활성화
    this.innerHTML = HELPFUL 


    // 자식요소에 새로운 요소를 추가하는 방법 => appendChild:맨뒤에 추가 , prepend:맨앞에 추가
    const checkIcon = document.createElement('i') //i 태그 생성
    checkIcon.classList.add('ic-check') // i 태그에 ic-check 클래스 추가
    checkIcon.setAttribute('aria-hidden', true) // aria-hidden 속성 추가
    this.prepend(checkIcon) //reviewLikeButton 자식요소중 맨 앞에 값을 붙힌다. 

  }

  
  //[ textElement 가 있는지 없는지]
  if(textElement){
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',',''))

    let newCount = count

    // [ 활성화 상태인지 아닌지]
    // newCount 삭제및 추가
    if(!isLiked){
      //활성화
      newCount += 1  
      countSpan.innerHTML = newCount
    } else{
      //비활성화
      newCount -= 1

      //[newCount가 0인지 아닌지]
      if(newCount === 0 ){
        reviewCardFooter.removeChild(textElement) //newCount가 0 이라면 textElement 제거
      } else {
        countSpan.innerHTML = newCount    
      }
    }

  } else {
    if(!isLiked){
      //앞으로는 활성화가 될거다.
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML = `<strong><span>1</span>명</strong>에게 도움이 되었습니다.`
      reviewCardFooter.appendChild(newTextElement) // newTextElement 를 추가한다.
    }
  }



  this.classList.toggle('btn-fill-primary')
  this.classList.toggle('btn-outline')
}

reviewLikeButtons.forEach(function(reviewLikeButton){
  reviewLikeButton.addEventListener('click', toggleReviewLikeButton)
})
