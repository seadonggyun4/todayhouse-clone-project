import { useEffect } from 'react'
import { tns } from 'tiny-slider'

//images
import User1 from '../../assets/images/img-user-01.jpg'
import User2 from '../../assets/images/img-user-02.jpg'
import User3 from '../../assets/images/img-user-03.jpg'
import User4 from '../../assets/images/img-user-04.jpg'
import User5 from '../../assets/images/img-user-05.jpg'
import User6 from '../../assets/images/img-user-06.jpg'
import User7 from '../../assets/images/img-user-07.jpg'
import User8 from '../../assets/images/img-user-08.jpg'
import User9 from '../../assets/images/img-user-09.jpg'
import User10 from '../../assets/images/img-user-10.jpg'
import review1 from '../../assets/images/img-review-01.jpg'
import review2 from '../../assets/images/img-review-02.jpg'
import review3 from '../../assets/images/img-review-03.jpg'
import review4 from '../../assets/images/img-review-04.jpg'
import review5 from '../../assets/images/img-review-05.jpg'
import review6 from '../../assets/images/img-review-06.jpg'
import review7 from '../../assets/images/img-review-07.jpg'
import review8 from '../../assets/images/img-review-08.jpg'
import review9 from '../../assets/images/img-review-09.jpg'
import review10 from '../../assets/images/img-review-10.jpg'
import detail1 from '../../assets/images/img-detail-01.jpg'
import detail2 from '../../assets/images/img-detail-02.jpg'
import detail3 from '../../assets/images/img-detail-03.jpg'
import detail4 from '../../assets/images/img-detail-04.jpg'
import detail5 from '../../assets/images/img-detail-05.jpg'
import detail6 from '../../assets/images/img-detail-06.jpg'
import recomendation1 from "../../assets/images/img-recomendation-01.jpg"
import recomendation2 from "../../assets/images/img-recomendation-02.jpg"
import recomendation3 from "../../assets/images/img-recomendation-03.jpg"
import recomendation4 from "../../assets/images/img-recomendation-04.jpg"



export default function MainContainer(){
    useEffect(() => {
        tns({
            container: '.user-gallery.is-desktop .slider-list',
            controls: true,
            controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
            navContainer: '.user-gallery.is-desktop .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
            gutter: 6, // 캐러셀 이미지와 이미지 간의 간격
            edgePadding: 75, // 사진 양 옆에 padding 값 부여(캐러셀의 영역이 줄어든다)
            loop: false, //캐러셀 루프 설정
            arrowKeys: true, //화살표로 움직이기
            mouseDrag: true, //마우스 드래그로 움직일수 있는가.
            preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
          })




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

    }, [])


    return(
        // <!-- ===== 메인 내용들 ===== -->
        <div className="container">
        <div className="row">
            <div className="col-sm-4 col-lg-8">
            {/* <!-- 0. 사용자 갤러리 색션: 데스크탑 --> */}
            <section className="product-section product-user-gallery sm-hidden">
                <header className="product-section-header">
                <h1 className="title">유저들의 스타일링샷</h1>
                <strong className="badge" aria-label="461개">461</strong>
                <a className="icon-button is-right" href="/" aria-label="더보기">
                    <i className="ic-chevron" aria-hidden></i>
                </a>
                </header>

                <div className="product-section-content">
                <div className="user-gallery is-desktop" role="region">
                    {/* <!-- 슬라이더 --> */}
                    <div className="user-gallery-slider">
                    <ol className="slider-list">
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-1">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review1} alt="" />
                            <figcaption className="visually-hidden">
                                김코인 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User1} alt="user imges" />
                            </a>
                            <a className="username" href="/">김코인은 돈을 많이 벌었다네!!</a>
                            <span className="order">1/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-2">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review2} alt="" />
                            <figcaption className="visually-hidden">
                                초코송이 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User2} alt="user imges" />
                            </a>
                            <a className="username" href="/">초코송이</a>
                            <span className="order">2/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-3">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review3} alt="" />
                            <figcaption className="visually-hidden">
                                물마시는 하마 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User3} alt="user imges" />
                            </a>
                            <a className="username" href="/">물마시는 하마</a>
                            <span className="order">3/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-4">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review4} alt="" />
                            <figcaption className="visually-hidden">
                                고영희 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User4} alt="user imges" />
                            </a>
                            <a className="username" href="/">고영희</a>
                            <span className="order">4/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-5">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review5} alt="" />
                            <figcaption className="visually-hidden">
                                이부자리 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User5} alt="user imges" />
                            </a>
                            <a className="username" href="/">이부자리</a>
                            <span className="order">5/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-6">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review6} alt="" />
                            <figcaption className="visually-hidden">
                                _na_na 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User6} alt="user imges" />
                            </a>
                            <a className="username" href="/">_na_na</a>
                            <span className="order">5/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-7">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review7} alt="" />
                            <figcaption className="visually-hidden">
                                겸둥이 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User7} alt="user imges" />
                            </a>
                            <a className="username" href="/">겸둥이</a>
                            <span className="order">5/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-8">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review8} alt="" />
                            <figcaption className="visually-hidden">
                                08AM 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User8} alt="user imges" />
                            </a>
                            <a className="username" href="/">08AM</a>
                            <span className="order">5/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-9">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review9} alt="" />
                            <figcaption className="visually-hidden">
                                구미호 꼬리 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User9} alt="user imges" />
                            </a>
                            <a className="username" href="/">구미호 꼬리</a>
                            <span className="order">5/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-10">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review10} alt="" />
                            <figcaption className="visually-hidden">
                                딩코황제 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User10} alt="user imges" />
                            </a>
                            <a className="username" href="/">딩코황제</a>
                            <span className="order">5/461</span>
                            </div>
                        </div>
                        </li>
                        <li className="slider-item" role="tabpanel" aria-labelledby="user-gallery-tab-11">
                        <div className="gallery-card">
                            <figure className="gallery-card-image">
                            <img src={review2} alt="" />
                            <figcaption className="visually-hidden">
                                별사탕코코 님의 스타일링샷
                            </figcaption>
                            </figure>

                            <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                                <img src={User2} alt="user imges" />
                            </a>
                            <a className="username" href="/">별사탕코코</a>
                            <span className="order">5/461</span>
                            </div>
                        </div>
                        </li>
                    </ol>
                    {/* <!-- 버튼 --> */}
                    <div className="user-gallery-controls sm-hidden">
                        <button className="control-button is-prev" aria-label="이전 이미지"><i className="ic-chevron"
                            aria-hidden="true"></i></button>
                        <button className="control-button is-next" aria-label="다음 이미지"><i className="ic-chevron"
                            aria-hidden="true"></i></button>
                    </div>
                    </div>
                    {/* <!-- 버튼thumbnail --> */}
                    <div className="user-gallery-thumbnail">
                    <ol className="thumbnail-list" role="tablist">
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-1">
                        <button type="button">
                            <img src={review1} alt="유저리뷰 1번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-2">
                        <button type="button">
                            <img src={review2} alt="유저리뷰 2번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-3">
                        <button type="button">
                            <img src={review3} alt="유저리뷰 3번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-4">
                        <button type="button">
                            <img src={review4} alt="유저리뷰 4번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-5">
                        <button type="button">
                            <img src={review5} alt="유저리뷰 5번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-6">
                        <button type="button">
                            <img src={review6} alt="유저리뷰 6번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-7">
                        <button type="button">
                            <img src={review7} alt="유저리뷰 7번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-8">
                        <button type="button">
                            <img src={review8} alt="유저리뷰 8번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-9">
                        <button type="button">
                            <img src={review9} alt="유저리뷰 9번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-10">
                        <button type="button">
                            <img src={review10} alt="유저리뷰 10번" />
                        </button>
                        </li>
                        <li className="thumbnail-item" role="tab" id="user-gallery-tab-11">
                        <button type="button">
                            <img src={review2} alt="유저리뷰 11번" />
                        </button>
                        </li>
                    </ol>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- 1. 상품색션 --> */}
            <section className="product-section product-spec is-open" id="product-spec" role="tabpanel">
                <header className="product-section-header sm-hidden">
                <h1 className="title">상품 정보</h1>
                </header>

                <div className="product-section-content">
                <div className="button-wrapper sm-only">
                    <button className="btn-fill-primary btn-55" type="button">
                    펼치기
                    </button>
                </div>
                {/* <!-- 제품 상세이미지 --> */}
                <figure>
                    <img src={detail1} alt="" />
                    <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 01
                    </figcaption>
                </figure>
                <figure>
                    <img src={detail2} alt="" />
                    <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 02
                    </figcaption>
                </figure>
                <figure>
                    <img src={detail3} alt="" />
                    <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 03
                    </figcaption>
                </figure>
                <figure>
                    <img src={detail4} alt="" />
                    <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 04
                    </figcaption>
                </figure>
                <figure>
                    <img src={detail5} alt="" />
                    <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 05
                    </figcaption>
                </figure>
                <figure>
                    <img src={detail6} alt="" />
                    <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 06
                    </figcaption>
                </figure>

                {/* <!-- 테이블 형식 설명 --> */}
                <table className="product-table">
                    <tbody>
                    <tr>
                        <th scope="row">품명 및 모델명</th>
                        <td>VO-HT015</td>
                    </tr>
                    <tr>
                        <th scope="row">KC 인증 필 유무</th>
                        <td>SU071586-19003</td>
                    </tr>
                    <tr>
                        <th scope="row">정격전압, 소비전력</th>
                        <td>AC220V, 60Hz, 400W</td>
                    </tr>
                    <tr>
                        <th scope="row">에너지소비효율등급</th>
                        <td>해당사항없음</td>
                    </tr>
                    <tr>
                        <th scope="row">동일모델의 출시년월</th>
                        <td>2019.11</td>
                    </tr>
                    <tr>
                        <th scope="row">
                        제조자, 수입품의 경우 수입자를 함께 표기
                        </th>
                        <td>보아르주식회사</td>
                    </tr>
                    <tr>
                        <th scope="row">제조국</th>
                        <td>중국</td>
                    </tr>
                    <tr>
                        <th scope="row">크기</th>
                        <td>338*122*300 mm</td>
                    </tr>
                    <tr>
                        <th scope="row">냉난방면적</th>
                        <td>개인용</td>
                    </tr>
                    <tr>
                        <th scope="row">추가설치비용</th>
                        <td>해당사항없음</td>
                    </tr>
                    <tr>
                        <th scope="row">품질보증기준</th>
                        <td>구매일로부터 1년 이내 무상 A/S가능</td>
                    </tr>
                    <tr>
                        <th scope="row">A/S 책임자와 전화번호</th>
                        <td>1661-4555</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden="true"></div>

            {/* <!-- 2. 리뷰색션:리뷰가 있을때 --> */}
            <section className="product-section product-review" id="product-review" role="tabpanel">
                <header className="product-section-header">
                <h1 className="title">리뷰</h1>
                <strong className="badge" aria-label="5665개">5665</strong>
                <a className="text-button" href="/">리뷰쓰기</a>
                </header>

                <div className="product-section-content">
                <div className="review-scoreboard">
                    <div className="score-summary">
                    <strong className="avarage-score" aria-label="평점 4.8">4.8</strong>
                    <div className="star-rating">
                        <i className="ic-star is-active"></i>
                        <i className="ic-star is-active"></i>
                        <i className="ic-star is-active"></i>
                        <i className="ic-star is-active"></i>
                        <i className="ic-star"></i>
                    </div>
                    </div>

                    <div className="score-detail">
                    <dl className="score-stats-list">
                        <div className="score-stats-item is-active">
                        <dt>5점</dt>
                        <dd>
                            <div className="bar-graph" aria-hidden="true">
                            <div className="active-bar" style={{width: "82.50883392226148%"}}></div>
                            </div>
                            <strong className="count" aria-label="467명">467</strong>
                        </dd>
                        </div>

                        <div className="score-stats-item">
                        <dt>4점</dt>
                        <dd>
                            <div className="bar-graph" aria-hidden="true">
                            <div className="active-bar" style={{width: "15.37102473498233%"}}></div>
                            </div>
                            <strong className="count" aria-label="87명">87</strong>
                        </dd>
                        </div>

                        <div className="score-stats-item">
                        <dt>3점</dt>
                        <dd>
                            <div className="bar-graph" aria-hidden="true">
                            <div className="active-bar" style={{width: "2.296819787985866%"}}></div>
                            </div>
                            <strong className="count" aria-label="13명">13</strong>
                        </dd>
                        </div>

                        <div className="score-stats-item">
                        <dt>2점</dt>
                        <dd>
                            <div className="bar-graph" aria-hidden="true">
                            <div className="active-bar"></div>
                            </div>
                            <strong className="count" aria-label="0명">0</strong>
                        </dd>
                        </div>

                        <div className="score-stats-item">
                        <dt>1점</dt>
                        <dd>
                            <div className="bar-graph" aria-hidden="true">
                            <div className="active-bar"></div>
                            </div>
                            <strong className="count" aria-label="0명">0</strong>
                        </dd>
                        </div>
                    </dl>
                    </div>
                </div>
                {/* <!-- ===== 리뷰 리스트 ===== --> */}
                <ol className="review-list">
                    {/* <!-- NOTE: 유저이미지 o, 이미지x --> */}
                    <li className="review-item">
                    <article className="review-card">
                        <header className="review-card-header">
                        <h3 className="visually-hidden">김코인 님이 작성한 리뷰</h3>
                        <a className="avatar-24" href="/">
                            <img src={User1} alt="user imges" />
                        </a>

                        <div className="info">
                            <a className="username" href="/"><strong>김코인</strong></a>

                            <div className="detail">
                            <div className="star-rating-13" aria-label="5.0점/5.0점">
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                            </div>
                            <div className="misc">
                                <time datetime="2021-01-01">2021.01.01</time>
                                <span>오늘의집 구매</span>
                            </div>
                            </div>
                        </div>
                        </header>

                        <div className="review-card-body">
                        <p>
                            집 전체를 데운다기보다는 틀어놓고 앞에 앉아있으면
                            따땃해지는 정도예요. 불 꺼놓고 난로 켜고 담요 덮은
                            채로 커피 마시면 아주 좋아요. 고양이도 좋아해요
                        </p>
                        </div>

                        <footer className="review-card-footer">
                        <button className="btn-outline btn-32" type="button">
                            도움이 돼요
                        </button>
                        <p>
                            <strong><span>7</span>명</strong>에게 도움이
                            되었습니다.
                        </p>
                        </footer>
                    </article>
                    </li>
                    {/* <!-- NOTE: 유저이미지 x, 이미지x --> */}
                    <li className="review-item">
                    <article className="review-card">
                        <header className="review-card-header">
                        <h3 className="visually-hidden">
                            우유파이 님이 작성한 리뷰
                        </h3>
                        <a className="avatar-24" href="/" aria-label="우유파이 님의 프로필">
                        </a>

                        <div className="info">
                            <a className="username" href="/"><strong>우유파이</strong></a>

                            <div className="detail">
                            <div className="star-rating-13" aria-label="5.0점/4.0점">
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star"></i>
                            </div>
                            <div className="misc">
                                <time datetime="2021-01-01">2021.01.01</time>
                                <span>오늘의집 구매</span>
                            </div>
                            </div>
                        </div>
                        </header>

                        <div className="review-card-body">
                        <p>
                            작업실에서 손이 시려워서 책상 위에 올려서 쓸걸로
                            골랐습니다! 아주아주 뜨듯하고 크기도 적당하고 민트
                            사고싶엇지만 품절 ㅠㅠ
                        </p>
                        </div>

                        <footer className="review-card-footer">
                        <button className="btn-outline btn-32" type="button">
                            도움이 돼요
                        </button>
                        <p>
                            <strong><span>15</span>명</strong>에게 도움이
                            되었습니다.
                        </p>
                        </footer>
                    </article>
                    </li>
                    {/* <!-- NOTE: 유저이미지 o, 이미지o --> */}
                    <li className="review-item">
                    <article className="review-card">
                        <header className="review-card-header">
                        <h3 className="visually-hidden">
                            고영희님이좋아합니다 님이 작성한 리뷰
                        </h3>
                        <a className="avatar-24" href="/" aria-label="우유파이 님의 프로필">
                            <img src={User4} alt="user imges" />
                        </a>

                        <div className="info">
                            <a className="username" href="/"><strong>고영희님이좋아합니다</strong></a>

                            <div className="detail">
                            <div className="star-rating-13" aria-label="5.0점/4.0점">
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star"></i>
                            </div>
                            <div className="misc">
                                <time datetime="2021-01-01">2021.01.01</time>
                                <span>오늘의집 구매</span>
                            </div>
                            </div>
                        </div>
                        </header>

                        <div className="review-card-body">
                        <div className="review-image">
                            <img src={review1} alt="고영희님이좋아합니다 님의 리뷰 사진" />
                        </div>
                        <p>
                            온도 조절과 타이머가 안 된다는 걸 뒤늦게 알았지만
                            이쁘니까 대만족! 가격도 대만족!
                        </p>
                        </div>

                        <footer className="review-card-footer">
                        <button className="btn-outline btn-32" type="button">
                            도움이 돼요
                        </button>
                        <p>
                            <strong><span>5</span>명</strong>에게 도움이
                            되었습니다.
                        </p>
                        </footer>
                    </article>
                    </li>
                    {/* <!-- NOTE: 유저HELP 버튼 클릭 o --> */}
                    <li className="review-item">
                    <article className="review-card">
                        <header className="review-card-header">
                        <h3 className="visually-hidden">쿠쿠팡 님이 작성한 리뷰</h3>
                        <a className="avatar-24" href="/">
                            <img src={User2} alt="user imges" />
                        </a>

                        <div className="info">
                            <a className="username" href="/"><strong>쿠쿠팡</strong></a>

                            <div className="detail">
                            <div className="star-rating-13" aria-label="5.0점/3.0점">
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star"></i>
                                <i className="ic-star"></i>
                            </div>
                            <div className="misc">
                                <time datetime="2021-01-01">2021.01.01</time>
                                <span>오늘의집 구매</span>
                            </div>
                            </div>
                        </div>
                        </header>

                        <div className="review-card-body">
                        <p>
                            오래된 아파트 확장된 방이라 외풍이 너무 심해 급하게
                            구매했습니다! 예약배송이라 10일 가까이 기다렸는데
                            너무너무 만족스러워요~ :) 방이 큰 편이라 전체가 다
                            따뜻해지길 바라지도 않았고, 후기를 먼저 봤던터라 크게
                            기대를 안햇었는데 기대 이상입니다. 틀어놓으면 확실히
                            방 공기가 달라져요! 후끈!!! 까진 아니어도 차가운
                            공기가 따뜻해집니다~ 만족스러워요!!! 올 겨울 덕분에
                            떨지 않고 보낼 수 있을것 같습니당
                        </p>
                        </div>

                        <footer className="review-card-footer">
                        <button className="btn-fill-primary btn-32" type="button">
                            <i className="ic-check" aria-hidden="true"></i>
                            도움됨
                        </button>
                        <p>
                            <strong><span>1</span>명</strong>에게 도움이
                            되었습니다.
                        </p>
                        </footer>
                    </article>
                    </li>
                    {/* <!-- NOTE: 유저HELP 버튼 클릭 x, 도움이됨 x --> */}
                    <li className="review-item">
                    <article className="review-card">
                        <header className="review-card-header">
                        <h3 className="visually-hidden">빅토르 님이 작성한 리뷰</h3>
                        <a className="avatar-24" href="/">
                            <img src={User3} alt="user imges" />
                        </a>

                        <div className="info">
                            <a className="username" href="/"><strong>빅토르</strong></a>

                            <div className="detail">
                            <div className="star-rating-13" aria-label="5.0점/5.0점">
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star"></i>
                                <i className="ic-star"></i>
                                <i className="ic-star"></i>
                            </div>
                            <div className="misc">
                                <time datetime="2021-01-01">2021.01.01</time>
                                <span>오늘의집 구매</span>
                            </div>
                            </div>
                        </div>
                        </header>

                        <div className="review-card-body">
                        <p>가격 대비 만족합니다.</p>
                        </div>

                        <footer className="review-card-footer">
                        <button className="btn-outline btn-32" type="button">
                            도움이 돼요
                        </button>
                        </footer>
                    </article>
                    </li>
                </ol>
                {/* <!-- ===== 페이지 네이션 ===== --> */}
                <div className="pagination">
                    <ol className="page-list">
                    <li className="page-item is-active"><a href="#1">1</a></li>
                    <li className="page-item"><a href="#2">2</a></li>
                    <li className="page-item"><a href="#3">3</a></li>
                    <li className="page-item"><a href="#4">4</a></li>
                    <li className="page-item"><a href="#5">5</a></li>
                    </ol>
                    <button className="page-control page-next" type="button">
                    <i className="ic-chevron"></i>
                    </button>
                </div>
                </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden="true"></div>
            {/* <!-- 2. 리뷰색션:리뷰가 없을 --> */}
            {/* <!-- <section
                className="product-section product-review"
                id="product-review"
                role="tabpanel"
                >
                <header className="product-section-header">
                    <h1 className="title">리뷰</h1>
                    <strong className="badge" aria-label="0개">0</strong>
                    <a className="text-button" href="/">리뷰쓰기</a>
                </header>

                <div className="product-section-content">
                    <p className="review-empty">
                    첫 리뷰를 남겨주세요! <br />
                    최대 <strong>500P</strong>를 드립니다.
                    </p>
                </div>
                </section>
                <div
                className="product-section-divider sm-only"
                aria-hidden="true"
                ></div> --> */}

            {/* <!-- 3. 문의색션: 문의가 있을때 --> */}
            <section className="product-section product-inquiry is-open" id="product-inquiry" role="tabpanel">
                <header className="product-section-header">
                <h1 className="title">문의</h1>
                <strong className="badge" aria-label="96개">96</strong>
                <a className="text-button" href="/">문의하기</a>
                <button className="icon-button sm-only" type="button" aria-label="더보기">
                    <i className="ic-chevron" aria-hidden></i>
                </button>
                </header>

                <div className="product-section-content">
                <ol className="inquiry-list">
                    {/* <!-- NOTE: 공개 o , 답변 x --> */}
                    <li className="inquiry-item">
                    <article className="inquiry-card">
                        <header className="inquiry-card-header">
                        <h3 className="visually-hidden">지* 님이 남기신 문의</h3>
                        <dl className="detail">
                            <dt className="visually-hidden">구매여부</dt>
                            <dd>구매</dd>
                            <dt className="visually-hidden">문의 유형</dt>
                            <dd>상품</dd>
                            <dt className="visually-hidden">답변여부</dt>
                            <dd>미답변</dd>
                        </dl>
                        <div className="misc">
                            <strong>지*</strong>
                            <time datetime="2021-1-1 12:34">2021년 1월 1일 12시 34분</time>
                        </div>
                        </header>
                        <div className="inquiry-card-body">
                        <div className="inquiry-content">
                            <span aria-label="문의내용">Q</span>
                            <p>
                            상품받았는데<br />
                            사용하면서 보니까 불들어오는곳 옆에<br />
                            하얀 부분이 갈색으로 얼룩져있는데 불량인가요...?<br />
                            위험하지는 않겠죠? 다른분들 후기사진에는 다 깨끗한
                            것 같아서요!<br />
                            사진첨부가없어서 텍스트로 설명하려 하니
                            애매하네요ㅠㅠ
                            </p>
                        </div>
                        </div>
                    </article>
                    </li>
                    {/* <!-- NOTE: 공개 x , 답변 x --> */}
                    <li className="inquiry-item">
                    <article className="inquiry-card">
                        <header className="inquiry-card-header">
                        <h3 className="visually-hidden">홍시* 님이 남기신 문의</h3>
                        <dl className="detail">
                            <dt className="visually-hidden">구매여부</dt>
                            <dd>구매</dd>
                            <dt className="visually-hidden">문의 유형</dt>
                            <dd>상품</dd>
                            <dt className="visually-hidden">답변여부</dt>
                            <dd>미답변</dd>
                        </dl>
                        <div className="misc">
                            <strong>홍시*</strong>
                            <time datetime="2021-1-15 10:38">2021년 1월 15일 10시 38분</time>
                        </div>
                        </header>
                        <div className="inquiry-card-body">
                        <div className="inquiry-content">
                            <span aria-label="문의내용">Q</span>
                            <p>
                            <i className="ic-lock" aria-hidden="true"></i>
                            비밀글입니다.
                            </p>
                        </div>
                        </div>
                    </article>
                    </li>
                    {/* <!-- NOTE: 공개 o , 답변 o --> */}
                    <li className="inquiry-item">
                    <article className="inquiry-card">
                        <header className="inquiry-card-header">
                        <h3 className="visually-hidden">샤* 님이 남기신 문의</h3>
                        <dl className="detail">
                            <dt className="visually-hidden">구매여부</dt>
                            <dd>구매</dd>
                            <dt className="visually-hidden">문의 유형</dt>
                            <dd>상품</dd>
                            <dt className="visually-hidden">답변여부</dt>
                            <dd className="is-answered">답변완료</dd>
                        </dl>
                        <div className="misc">
                            <strong>샤*</strong>
                            <time datetime="2020-12-24 09:03">2020년 12월 24일 09시 03분</time>
                        </div>
                        </header>
                        <div className="inquiry-card-body">
                        <div className="inquiry-content">
                            <span aria-label="문의내용">Q</span>
                            <p>
                            화이트 재입고 날짜 알려 주세요 그리고 4평 남짓 방에
                            두려고 하는데 너무 가까울까요
                            </p>
                        </div>
                        <div className="inquiry-content">
                            <span aria-label="답변 내용">A</span>
                            <div className="seller">
                            <strong>OA</strong>
                            <time datetime="2020-12-24 19:34">
                                2020년 12월 24일 19시 34분</time>
                            </div>
                            <p>
                            안녕하세요 고객님, 보아르입니다:)<br />
                            현재 고객님의 주문 정보가 확인되지 않아 바로
                            안내드리지 못하는 점 양해 부탁드립니다.<br />
                            문의하신 제품의 경우 현재 주문폭주로 인한 예약
                            판매중으로 순차 발송 진행되고 있습니다.<br />
                            주문 시 최대한 빠른 발송 진행될 수 있도록
                            노력하겠습니다.<br />
                            감사합니다.
                            </p>
                        </div>
                        </div>
                    </article>
                    </li>
                </ol>
                <div className="pagination">
                    <ol className="page-list">
                    <li className="page-item is-active"><a href="#1">1</a></li>
                    <li className="page-item"><a href="#2">2</a></li>
                    <li className="page-item"><a href="#3">3</a></li>
                    <li className="page-item"><a href="#4">4</a></li>
                    <li className="page-item"><a href="#5">5</a></li>
                    </ol>
                    <button className="page-control page-next" type="button">
                    <i className="ic-chevron"></i>
                    </button>
                </div>
                </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden="true"></div>
            {/* <!-- 3. 문의색션: 문의가 없을 --> */}
            {/* <!-- <section
                className="product-section product-inquiry is-open"
                id="product-inquiry"
                role="tabpanel"
                >
                <header className="product-section-header">
                    <h1 className="title">문의</h1>
                    <strong className="badge" aria-label="0개">0</strong>
                    <a className="text-button" href="/">문의하기</a>
                    <button
                    className="icon-button sm-only"
                    type="button"
                    aria-label="더보기"
                    >
                    <i className="ic-chevron" aria-hidden></i>
                    </button>
                </header>

                <div className="product-section-content">
                    <p className="inquiry-empty">문의 내역이 없습니다.</p>
                </div>
                </section>
                <div
                className="product-section-divider sm-only"
                aria-hidden="true"
                ></div> --> */}

            {/* <!-- 4. 배송, 교환/환불 색션 --> */}
            <div className="product-shipment " id="product-shipment" role="tabpanel">
                <header className="product-section-header sm-only">
                <h1 className="title">배송/교환/환불</h1>
                <button className="icon-button" type="button" aria-label="더보기">
                    <i className="ic-chevron" aria-hidden></i>
                </button>
                </header>
                {/* <!-- 배송색션 --> */}
                <section className="product-section">
                <header className="product-section-header">
                    <h1 className="title">배송</h1>
                </header>
                <div className="product-section-content">
                    <table className="product-table">
                    <tbody>
                        <tr>
                        <th scope="row">배송</th>
                        <td>일반택배</td>
                        </tr>
                        <tr>
                        <th scope="row">배송비</th>
                        <td>무료 배송</td>
                        </tr>
                        <tr>
                        <th scope="row">배송불가 지역</th>
                        <td>배송불가 지역이 없습니다</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </section>
                <div className="product-section-divider sm-only" aria-hidden="true"></div>
                {/* <!-- 교환/환불 색션 --> */}
                <section className="product-section">
                <header className="product-section-header">
                    <h1 className="title">교환/환불</h1>
                </header>
                <div className="product-section-content">
                    <table className="product-table">
                    <tbody>
                        <tr>
                        <th scope="row">반품배송비</th>
                        <td>
                            2,500원 (최초 배송비가 무료인 경우 5,000원 부과)
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">교환배송비</th>
                        <td>5,000원</td>
                        </tr>
                        <tr>
                        <th scope="row">보내실 곳</th>
                        <td>(00000) 서울 종로구 누하동</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </section>
                <div className="product-section-divider sm-only" aria-hidden="true"></div>
            </div>

            {/* <!-- 5. 상품 추천 색션 --> */}
            <section className="product-section product-recommendation" id="product-recommendation" role="tabpanel">
                <header className="product-section-header">
                <h1 className="title">비슷한 상품</h1>
                </header>
                <div className="product-section-content">
                <ul className="product-list">
                    <li className="product-item">
                    <a href="/">
                        <div className="product-card">
                        <div className="product-card-image">
                            <img src={recomendation1} alt="" />
                        </div>
                        <span className="product-card-brand">emk</span>
                        <h3 className="product-card-title">
                            시즌템! 감성 레트로 전기히터 EQH-S161 (3 colors)
                        </h3>
                        <div className="product-card-price">
                            <span className="percent">72%</span>
                            <strong className="price">49,000</strong>
                        </div>

                        <dl className="product-card-detail">
                            <div className="rating">
                            <dt>
                                <i className="ic-star"></i>
                                <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.6</dd>
                            </div>

                            <div className="review">
                            <dt>리뷰</dt>
                            <dd>3,605</dd>
                            </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                        </div>
                    </a>
                    </li>
                    <li className="product-item">
                    <a href="/">
                        <div className="product-card">
                        <div className="product-card-image">
                            <img src={recomendation3} alt="" />
                        </div>
                        <span className="product-card-brand">플러스마이너스제로
                        </span>
                        <h3 className="product-card-title">
                            원적외선 2단 히터 XHS-Y010
                        </h3>
                        <div className="product-card-price">
                            <span className="percent">10%</span>
                            <strong className="price">88,200</strong>
                        </div>

                        <dl className="product-card-detail">
                            <div className="rating">
                            <dt>
                                <i className="ic-star"></i>
                                <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.5</dd>
                            </div>

                            <div className="review">
                            <dt>리뷰</dt>
                            <dd>28</dd>
                            </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                        </div>
                    </a>
                    </li>
                    <li className="product-item">
                    <a href="/">
                        <div className="product-card">
                        <div className="product-card-image">
                            <img src={recomendation2} alt="" />
                        </div>
                        <span className="product-card-brand">플러스마이너스제로
                        </span>
                        <h3 className="product-card-title">
                            리플렉트 에코히터 4colors
                        </h3>
                        <div className="product-card-price">
                            <span className="percent">23%</span>
                            <strong className="price">129,000</strong>
                        </div>

                        <dl className="product-card-detail">
                            <div className="rating">
                            <dt>
                                <i className="ic-star"></i>
                                <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.6</dd>
                            </div>

                            <div className="review">
                            <dt>리뷰</dt>
                            <dd>605</dd>
                            </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                        </div>
                    </a>
                    </li>
                    <li className="product-item">
                    <a href="/">
                        <div className="product-card">
                        <div className="product-card-image">
                            <img src={recomendation4} alt="" />
                        </div>
                        <span className="product-card-brand">코시나 </span>
                        <h3 className="product-card-title">
                            오방난로 히터 6종 모음전
                        </h3>
                        <div className="product-card-price">
                            <span className="percent">52%</span>
                            <strong className="price">56,900</strong>
                        </div>

                        <dl className="product-card-detail">
                            <div className="rating">
                            <dt>
                                <i className="ic-star"></i>
                                <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.6</dd>
                            </div>

                            <div className="review">
                            <dt>리뷰</dt>
                            <dd>205</dd>
                            </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                        </div>
                    </a>
                    </li>
                </ul>
                </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden="true"></div>
            </div>


            <div className="col-lg-4 lg-only">
            {/* <!-- 주문창 --> */}
            <form className="floating-order-form order-form" action="/" method="post">
                {/* <!-- 주문 입력창 --> */}
                <div className="order-inputs">
                <div className="select-group is-active">
                    <select className="form-select" id="floating-order-form-select-1" required>
                    <option value="">선택</option>
                    <option value="1">선택사항 1</option>
                    <option value="2">선택사항 2</option>
                    <option value="3">선택사항 3</option>
                    <option value="4">선택사항 4</option>
                    <option value="5">선택사항 5</option>
                    </select>
                    <i className="ic-caret" aria-hidden="true"></i>
                </div>
                <div className="select-group">
                    <select className="form-select" id="floating-order-form-select-2">
                    <option value="">추가상품 (선택)</option>
                    <option value="1">선택사항 1</option>
                    <option value="2">선택사항 2</option>
                    <option value="3">선택사항 3</option>
                    <option value="4">선택사항 4</option>
                    <option value="5">선택사항 5</option>
                    </select>
                    <i className="ic-caret" aria-hidden="true"></i>
                </div>
                </div>
                {/* <!-- 주문 목록 창 --> */}
                <div className="order-checkouts">
                <ul className="checkout-list">
                    <li className="checkout-item">
                    <div className="checkout-card">
                        <header className="checkout-header">
                        <h4 className="checkout-title">
                            추가상품 - 맛있는 제주 감귤을 직배송 / 제주도 귤 판매
                            1위 믿고 구매하세요.
                        </h4>
                        <button className="delete-button" type="button" aria-label="해당상품을 삭제하기">
                            <i className="ic-close" aria-hidden="true"></i>
                        </button>
                        </header>

                        <footer className="checkout-footer">
                        <div className="checkout-select">
                            <select id="floating-order-form-checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            <i className="ic-caret" aria-hidden="true"></i>
                        </div>
                        <output className="checkout-output" for="floating-order-form-checkout-item-1">
                            <div className="price-16">
                            <strong className="amount">40,000</strong>
                            <span className="currency">원</span>
                            </div>
                        </output>
                        </footer>
                    </div>
                    </li>
                    <li className="checkout-item">
                    <div className="checkout-card">
                        <header className="checkout-header">
                        <h4 className="checkout-title">
                            추가상품 - 맛있는 제주 감귤을 직배송 / 제주도 귤 판매
                            1위 믿고 구매하세요.
                        </h4>
                        <button className="delete-button" type="button" aria-label="해당상품을 삭제하기">
                            <i className="ic-close" aria-hidden="true"></i>
                        </button>
                        </header>

                        <footer className="checkout-footer">
                        <div className="checkout-select">
                            <select id="floating-order-form-checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            <i className="ic-caret" aria-hidden="true"></i>
                        </div>
                        <output className="checkout-output" for="floating-order-form-checkout-item-1">
                            <div className="price-16">
                            <strong className="amount">40,000</strong>
                            <span className="currency">원</span>
                            </div>
                        </output>
                        </footer>
                    </div>
                    </li>
                    <li className="checkout-item">
                    <div className="checkout-card">
                        <header className="checkout-header">
                        <h4 className="checkout-title">
                            추가상품 - 맛있는 제주 감귤을 직배송 / 제주도 귤 판매
                            1위 믿고 구매하세요.
                        </h4>
                        <button className="delete-button" type="button" aria-label="해당상품을 삭제하기">
                            <i className="ic-close" aria-hidden="true"></i>
                        </button>
                        </header>

                        <footer className="checkout-footer">
                        <div className="checkout-select">
                            <select id="floating-order-form-checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            <i className="ic-caret" aria-hidden="true"></i>
                        </div>
                        <output className="checkout-output" for="floating-order-form-checkout-item-1">
                            <div className="price-16">
                            <strong className="amount">40,000</strong>
                            <span className="currency">원</span>
                            </div>
                        </output>
                        </footer>
                    </div>
                    </li>
                    <li className="checkout-item">
                    <div className="checkout-card">
                        <header className="checkout-header">
                        <h4 className="checkout-title">
                            추가상품 - 맛있는 제주 감귤을 직배송 / 제주도 귤 판매
                            1위 믿고 구매하세요.
                        </h4>
                        <button className="delete-button" type="button" aria-label="해당상품을 삭제하기">
                            <i className="ic-close" aria-hidden="true"></i>
                        </button>
                        </header>

                        <footer className="checkout-footer">
                        <div className="checkout-select">
                            <select id="floating-order-form-checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            <i className="ic-caret" aria-hidden="true"></i>
                        </div>
                        <output className="checkout-output" for="floating-order-form-checkout-item-1">
                            <div className="price-16">
                            <strong className="amount">40,000</strong>
                            <span className="currency">원</span>
                            </div>
                        </output>
                        </footer>
                    </div>
                    </li>

                </ul>
                </div>
                {/* <!-- 주문 총 합 --> */}
                <dl className="order-summary">
                <dt>주문금액</dt>
                <dd>
                    <output for="floating-order-form-select-1 floating-order-form-select-2">
                    <div className="price-20">
                        <strong className="amount">0</strong>
                        <span className="currency">원</span>
                    </div>
                    </output>
                </dd>
                </dl>
                {/* <!-- 버튼 그룹 --> */}
                <div className="button-group">
                <button className="bookmark-button btn-55" type="button" aria-label="북마크에 추가">
                    <i className="ic-bookmark" aria-hidden="true"></i>
                </button>
                {/* <!-- 북마크 해제 --> */}
                {/* <!-- <button className="bookmark-button btn-55 is-active" type="button" aria-label="북마크 해제">
                    <i className="ic-bookmark-filled" aria-hidden="true"></i>
                    </button> --> */}
                <button className="btn-outline btn-55" type="button">
                    장바구니
                </button>
                <button className="btn-fill-primary btn-55" type="submit">
                    바로구매
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}