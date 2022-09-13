import { useEffect } from 'react'
import {tns} from 'tiny-slider'

//images
import slideProduct1 from '../../assets/images/img-product-01.jpg'
import slideProduct2 from '../../assets/images/img-product-02.jpg'
import slideProduct3 from '../../assets/images/img-product-03.jpg'
import slideProduct4 from '../../assets/images/img-product-04.jpg'
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



export default function Gallery(){
    useEffect(() => {
        tns({
            container: '.product-carousel .slider-list', //케러샐화 시킬 요소들
            controls: false,
            navContainer: '.product-carousel .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
            navAsThumbnails: true,
            arrowKeys: true, //화살표로 움직이기
            autoplay: true, //자동재생
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            mouseDrag: true, //마우스 드래그로 움직일수 있는가.
            preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
            autoplayTimeout: 5000, //자동재생 시간
            //   items: 3,
            //   slideBy: 'page',
        })

        tns({
            container: '.user-gallery.is-mobile .slider-list',
            controls:false,
            navContainer: '.user-gallery.is-mobile .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
            gutter: 4, // 캐러셀 이미지와 이미지 간의 간격
            edgePadding: 16, // 사진 양 옆에 padding 값 부여(캐러셀의 영역이 줄어든다)
            loop: false, //캐러셀 루프 설정
            arrowKeys: true, //화살표로 움직이기
            mouseDrag: true, //마우스 드래그로 움직일수 있는가.
            preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
        })
    },[])



    return(
        // <!-- ==== 캐러셀 & 상품주문 & 사용자 갤러리 ==== -->
        <div className="container">
        <div className="row">
            <div className="col-sm-4">
            {/* <!-- 브래드 크럼 --> */}
            <div className="breadcrumb">
                <a href="/">가전</a>
                <i className="ic-chevron" aria-hidden="true"></i>
                <a href="/">계절가전</a>
                <i className="ic-chevron" aria-hidden="true"></i>
                <a href="/">전기히터/온풍기</a>
                <i className="ic-chevron" aria-hidden="true"></i>
                <a href="/">전기히터</a>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4 col-md-6 col-lg-7">
            <div className="product-carousel" role="region">
                {/* <!-- 케러셀 슬라이더 --> */}
                <div className="product-carousel-slider">
                <ol className="slider-list">
                    <li className="slider-item" role="tabpanel" aria-labelledby="product-carousel-tab-1">
                    <figure>
                        <img src={slideProduct1} alt="" />
                        <figcaption className="visually-hidden">
                        보아르 전기히터 상세이미지 1
                        </figcaption>
                    </figure>
                    </li>
                    <li className="slider-item" role="tabpanel" aria-labelledby="product-carousel-tab-2">
                    <figure>
                        <img src={slideProduct2} alt="" />
                        <figcaption className="visually-hidden">
                        보아르 전기히터 상세이미지 2
                        </figcaption>
                    </figure>
                    </li>
                    <li className="slider-item" role="tabpanel" aria-labelledby="product-carousel-tab-3">
                    <figure>
                        <img src={slideProduct3} alt="" />
                        <figcaption className="visually-hidden">
                        보아르 전기히터 상세이미지 3
                        </figcaption>
                    </figure>
                    </li>
                    <li className="slider-item" role="tabpanel" aria-labelledby="product-carousel-tab-4">
                    <figure>
                        <img src={slideProduct4} alt="" />
                        <figcaption className="visually-hidden">
                        보아르 전기히터 상세이미지 4
                        </figcaption>
                    </figure>
                    </li>
                </ol>
                </div>
                {/* <!-- 케러셀 버튼 --> */}
                <div className="product-carousel-thumbnail">
                <ol className="thumbnail-list" role="tablist">
                    <li className="thumbnail-item" role="tab" id="product-carousel-tab-1">
                    <button type="button">
                        <img src={slideProduct1} alt="1번 이미지" />
                    </button>
                    </li>
                    <li className="thumbnail-item" role="tab" id="product-carousel-tab-2">
                    <button type="button">
                        <img src={slideProduct2} alt="2번 이미지" />
                    </button>
                    </li>
                    <li className="thumbnail-item" role="tab" id="product-carousel-tab-3">
                    <button type="button">
                        <img src={slideProduct3} alt="3번 이미지" />
                    </button>
                    </li>
                    <li className="thumbnail-item" role="tab" id="product-carousel-tab-4">
                    <button type="button">
                        <img src={slideProduct4} alt="4번 이미지" />
                    </button>
                    </li>
                </ol>
                </div>
            </div>
            </div>

            <div className="col-sm-4 col-md-6 col-lg-5">
            {/* <!-- 상품정보 --> */}
            <section className="product-info">
                <header className="product-info-header">
                <a className="info-brand" href="/">보아르</a>
                <h1 className="info-title">
                    캠핑/가정용 400W 미니멀 전기히터 VO-HT015 (안전장치기능탑재)
                </h1>
                <div className="info-review">
                    <div className="star-rating">
                    <i className="ic-star is-active"></i>
                    <i className="ic-star is-active"></i>
                    <i className="ic-star is-active"></i>
                    <i className="ic-star"></i>
                    <i className="ic-star"></i>
                    </div>
                    <p>
                    <strong>566</strong>
                    <span className="sm-hidden">개 리뷰</span>
                    </p>
                </div>
                </header>

                {/* <!-- NOTE: 모바일용 가격 --> */}
                <div className="product-info-price sm-only">
                <div className="info-original-price">
                    <div className="discount-rate">
                    <span className="rate">34</span>
                    <span className="percent">%</span>
                    </div>
                    <div className="price-off">
                    <strong className="amount">49,900</strong>
                    <span className="currency sm-hidden">원</span>
                    </div>
                </div>

                <div className="info-sale-price">
                    <div className="price-20">
                    <strong className="amount">32,900</strong>
                    <span className="currency">원</span>
                    </div>
                    <strong className="tag-red">특가</strong>
                </div>
                <p className="info-point">
                    <strong aria-label="987 포인트">987P</strong>
                    적립해드립니다. (VIP 3배 혜택 적용됨)
                </p>
                </div>
                {/* <!-- NOTE: 태블릿 이후 가격 --> */}
                <div className="product-info-price sm-hidden">
                <div className="info-price-wrapper">
                    <div className="discount-rate">
                    <span className="rate">99</span>
                    <span className="percent">%</span>
                    </div>
                    <div className="info-price">
                    <div className="price-off">
                        <strong className="amount">49,900,000</strong>
                        <span className="currency">원</span>
                    </div>

                    <div className="info-sale-price">
                        <div className="price-32">
                        <strong className="amount">32,900,000</strong>
                        <span className="currency">원</span>
                        </div>
                        <strong className="tag-red">특가</strong>
                    </div>
                    </div>
                </div>

                <p className="info-point">
                    <strong aria-label="987 포인트">98758P</strong>
                    적립해드립니다. (VIP 3배 혜택 적용됨)
                </p>
                </div>

                <div className="product-info-delivery">
                <span>일반택배</span>
                <strong className="tag-gray">무료배송</strong>
                </div>
            </section>

            {/* <!-- 주문창 --> */}
            <form className="order-form lg-only" action="/" method="post">
                {/* <!-- 주문 입력창 --> */}
                <div className="order-inputs">
                <div className="select-group is-active">
                    <select className="form-select" id="select-1" required>
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
                    <select className="form-select" id="select-2">
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
                            1위 믿고 구매하세요. 절대 후회하지 않으실거라
                            장담합니다! 제 귤이 당신들 목구멍으로 넘어가는 순간
                            놀라운 경험을 하게 될것 이라고 확신합니다.
                        </h4>
                        <button className="delete-button" type="button" aria-label="해당상품을 삭제하기">
                            <i className="ic-close" aria-hidden="true"></i>
                        </button>
                        </header>

                        <footer className="checkout-footer">
                        <div className="checkout-select">
                            <select id="checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            <i className="ic-caret" aria-hidden="true"></i>
                        </div>
                        <output className="checkout-output" for="checkout-item-1">
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
                            <select id="checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                            <i className="ic-caret" aria-hidden="true"></i>
                        </div>
                        <output className="checkout-output" for="checkout-item-1">
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
                    <output for="select-1 select-2">
                    <div className="price-20">
                        <strong className="amount">0</strong>
                        <span className="currency">원</span>
                    </div>
                    </output>
                </dd>
                </dl>
                {/* <!-- 버튼 그룹 --> */}
                <div className="button-group">
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

        <div className="row sm-only">
            <div className="col-sm-4">
            <div className="product-section-divider" aria-hidden="true"></div>
            {/* <!-- 0. 사용자 갤러리 색션: 모바일 --> */}
            <section className="product-section product-user-gallery">
                <header className="product-section-header">
                <h1 className="title">유저들의 스타일링샷</h1>
                <strong className="badge" aria-label="461개">461</strong>
                <a className="icon-button is-right" href="/" aria-label="더보기">
                    <i className="ic-chevron" aria-hidden></i>
                </a>
                </header>

                <div className="product-section-content">
                <div className="user-gallery is-mobile" role="region">
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
                                <img src={User1} alt="user imges" />
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
            <div className="product-section-divider is-big" aria-hidden="true"></div>
            </div>
        </div>
        </div>
    )
}