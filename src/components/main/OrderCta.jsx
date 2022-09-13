import { useEffect } from "react"

export default function OrderCta(){
    useEffect(() => {
        const orderCta = document.querySelector('.order-cta')

        // orderCta.children => orderCta의 자식요소(orderCtaBuyButton, orderCtaBookmarkButton)가 배열로 할당된다
        // orderCta.children 을 구조분해해서 사용한다.
        const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
        // const orderCtaBuyButton = orderCta.querySelector('.btn-primary') 
        // const orderCtaBookmarkButton = orderCta.querySelector('.btn-ghost') 
        
        const orderModal = document.querySelector('.order-form-modal')
        const orderOverlay = document.querySelector('.overlay')
        
        const [icon,countSpan] = orderCtaBookmarkButton.children
        
        
        
        
        //orderCta Open
        function orderCtaOpen(){
          orderModal.classList.add('is-open')
          orderOverlay.classList.add('is-active')
        }
        
        orderCtaBuyButton.addEventListener('click',orderCtaOpen)
        
        
        
        //orderCta Close
        function orderCtaClose(){
          orderModal.classList.remove('is-open')
          orderOverlay.classList.remove('is-active')
        }
        
        orderOverlay.addEventListener('click',orderCtaClose)
        
        
        
        //toggle orderCta BookMark
        function toggleOrderCtaBookark(){
          // innerHTML, innerText, textContent => HTML 태그 내부 요소 값을 제어할때 사용된다.(https://hianna.tistory.com/483)
          // replaceAll(바꿀문장, 바뀔문장)
          // Number() => 문자열 타입을 숫자 타입으로 변환
          let count = Number(countSpan.innerHTML.replaceAll(',','') )
        
          //toggleOrderCtaBookark 가 is-active 클래스를 포함하고 있는지를 기준으로 조건문 설정
          if(this.classList.contains('is-active')){
            //활성화가 된 상태이니 누르면 -> 비활성화(ic-bookmark) 
            
            icon.classList.add('ic-bookmark')
            icon.classList.remove('ic-bookmark-filled')
            
            count -= 1    
          } else {
            //활성화가 안된 상태이니 누르면 -> 활성화(ic-bookmark-filled) 
            
            icon.classList.add('ic-bookmark-filled')
            icon.classList.remove('ic-bookmark')
            
            count += 1
          }
        
          //toLocaleString() 은 숫자 타입에 , 를 자동으로 붙히고 문자열로 변환한다.
          countSpan.innerHTML = count.toLocaleString()
        
          //setAttribute()는 HTML 속성을 제어하는 매서드 이다.
          //setAttribute(제어하고싶은 속성, 넣을 문장)
          countSpan.setAttribute('aria-label',`북마크 ${countSpan.innerHTML} 회`)
        
        
          // 조건문보다 먼저 존재하면 is-active가 있다는 상태로 시작되어 꼬이게 된다.
          this.classList.toggle('is-active')  
        
        }
        
        orderCtaBookmarkButton.addEventListener('click',toggleOrderCtaBookark)
        
        
    },[])
    
    
    return(
        // <!-- order CTA(call to action) -->
        <div className="order-cta lg-hidden">
        {/* <!-- NOTE: 활성화 X --> */}
        <button className="btn-ghost btn-48" type="button">
            <i className="ic-bookmark" aria-hidden="true"></i>
            <span aria-label="북마크 18,302">18,302</span>
        </button>


        {/* <!-- NOTE: 활성화 o --> */}
        {/* <!-- <button className="btn-ghost btn-48 is-active" type="button">
            <i className="ic-bookmark-filled" aria-hidden="true"></i>
            <span aria-label="북마크 18,302">18,302</span>
            </button> --> */}
        <button className="btn-fill-primary btn-48" type="button">구매하기</button>
        </div>
    )
}