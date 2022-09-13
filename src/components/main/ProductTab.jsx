import { useEffect } from "react"

export default function ProductTab(){
    useEffect(() => {
        const productTab = document.querySelector('.product-tab')
        const productTabButtonList = productTab.querySelectorAll('button')

        const TOP_HEADER_DESKTOP = 80 + 50 + 54
        const TOP_HEADER_MOBILE = 50 + 40 + 40

        let currentActiveTab = productTab.querySelector('.is-active')

        //[==================== toggleActiveTab ====================] 
        function toggleActiveTab(){
        const tabItem = this.parentNode

        if(currentActiveTab !== tabItem){
            tabItem.classList.add('is-active')
            currentActiveTab.classList.remove('is-active')
            currentActiveTab = tabItem
        } 


        }

        // [==================== scrollToTabpanel ====================]
        function scrollToTabpanel(){
        const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
        const tabPanel = document.querySelector(`#${tabPanelId}`) //id선택자

        //삼항연산자로 조건을 건다
        const scrollAmount = tabPanel.getBoundingClientRect().top - (window.innerWidth >= 768 ?  TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)
        
        window.scrollBy({
            top: scrollAmount , // viewport 에서 어느정도 떨어진 위치에 이동하고 싶은지
            behavior: 'smooth' // 이동시 부드럽게 이동
        })
        }


        productTabButtonList.forEach((button)=>{
        button.addEventListener('click', toggleActiveTab)
        button.addEventListener('click', scrollToTabpanel)
        })


        // =======================================================================================================================================================





        // [ productTabPanelIdList => id값을 담은 배열 ]
        const productTabPanelIdList = [
        'product-spec',
        'product-review',
        'product-inquiry',
        'product-shipment',
        'product-recommendation'
        ]

        // [  productTabPanelList => id값을 통해 해당html 요소를 반환한 객체 생성 ]
        const productTabPanelList = productTabPanelIdList.map((panelId) => {
        const tabPanel = document.querySelector(`#${panelId}`)
        
        return tabPanel
        })

        // [  productTabPanelPositionMap => id:position 형태의 객체값을 담을 빈 객체 생성 ]
        const productTabPanelPositionMap = {
        // id: position 형태
        }


        // [  detectTabPanelPosition() => productTabPanelPositionMap를  productTabPanelList객체에서 값을 뽑아내 업데이트 할 함수]
        function detectTabPanelPosition(){
        productTabPanelList.forEach((panel) => {
            //id
            const id = panel.getAttribute('id')
            //y축 위치(window.scrollY + element.getBoundingClientRect().top)
            const position = window.scrollY + panel.getBoundingClientRect().top
            //productTabPanelPositionMap 에 업데이트
            productTabPanelPositionMap[id] = position

            
        })  
        }

        // [  updateActiveTabOnScroll() => 유저 스크롤 값에 따라 tabpanel active]
        function updateActiveTabOnScroll(){
        // 스크롤 위치에 따라서 activeTab업데이트
        // 1. 현재 유저의 스크롤값 -> window.scrollY
        // 2. 각 tabPanel y축 위치 -> productTabPanelPositionMap의 position값


        const scrolledAmmount = window.scrollY + (window.innerWidth >= 768 ?  TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

        let newActiveTab

        if(scrolledAmmount >= productTabPanelPositionMap['product-recommendation']){
            newActiveTab = productTabButtonList[4] // 추천 버튼
        } else if(scrolledAmmount >= productTabPanelPositionMap['product-shipment']){
            newActiveTab = productTabButtonList[3] // 배송/환불 버튼
        } else if(scrolledAmmount >= productTabPanelPositionMap['product-inquiry']){
            newActiveTab = productTabButtonList[2] // 문의 버튼
        } else if(scrolledAmmount >= productTabPanelPositionMap['product-review']){
            newActiveTab = productTabButtonList[1] // 리뷰 버튼
        } else {
            newActiveTab = productTabButtonList[0] // 상품정보 버튼
        } 
        
        if(newActiveTab){
            newActiveTab = newActiveTab.parentNode

            if(newActiveTab !== currentActiveTab){
            newActiveTab.classList.add('is-active')
            currentActiveTab.classList.remove('is-active')
            currentActiveTab = newActiveTab
            }
        }
        }


        //웹 컨텐츠가 로드 될시 detectTabPanelPosition 함수 실행 
        window.addEventListener('load', detectTabPanelPosition)

        //웹 viewpot 의 사이즈가 resize detectTabPanelPosition 함수 실행 
        window.addEventListener('resize', detectTabPanelPosition)

        //웹 scroll이벤트 발생시 updateActiveTabOnScroll 함수 실행 
        window.addEventListener('scroll', updateActiveTabOnScroll)






        //[ 배송/교환/환불 header:모바일 버전 ]

        const sectionHeaderIconButton = document.querySelector('.product-shipment .product-section-header .icon-button')


        function showFullSection(){
        //section은 sectionHeaderIconButton의 2단계 위에 있는 부모요소이다. 즉 product-shipment
        const section = this.parentNode.parentNode

        section.classList.add('is-open')
        }


        sectionHeaderIconButton.addEventListener('click',showFullSection)




    }, [])
    
    return(
        // <!-- ==== 탭 패널 ==== -->
        <div className="product-tab">
        <div className="container">
            <div className="row">
            <div className="col-sm-4 col-lg-8">
                <ul className="product-tab-list" role="tablist">
                <li className="product-tab-item is-active" role="tab" aria-labelledby="product-spec">
                    <button type="button">상품정보</button>
                </li>
                <li className="product-tab-item" role="tab" aria-labelledby="product-review">
                    <button type="button">
                    리뷰
                    <strong className="badge" aria-label="566개 리뷰">5665</strong>
                    </button>
                </li>
                <li className="product-tab-item" role="tab" aria-labelledby="product-inquiry">
                    <button type="button">
                    문의
                    <strong className="badge" aria-label="966개 문의">9669</strong>
                    </button>
                </li>
                <li className="product-tab-item" role="tab" aria-labelledby="product-shipment">
                    <button type="button">배송/환불</button>
                </li>
                <li className="product-tab-item" role="tab" aria-labelledby="product-recommendation">
                    <button type="button">추천</button>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}