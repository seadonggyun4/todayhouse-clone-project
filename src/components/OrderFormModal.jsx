


export default function orderFormModal(){
    return(
        // <!-- ===== 주문창 모달 ===== -->
        <aside className="order-form-modal lg-hidden">
            <h1 className="visually-hidden">주문창</h1>
            <form className="order-form" action="/" method="post">
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                    {/* <!-- 주문 입력창 --> */}
                    <div className="order-inputs">
                    <div className="select-group is-active">
                        <select className="form-select" id="order-form-modal-select-1" required>
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
                        <select className="form-select" id="order-form-modal-select-2">
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
                                <select id="order-form-modal-checkout-item-1">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </select>
                                <i className="ic-caret" aria-hidden="true"></i>
                            </div>
                            <output className="checkout-output" for="order-form-modal-checkout-item-1">
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
                        <output for="order-form-modal-select-1 order-form-modal-select-2">
                        <div className="price-20">
                            <strong className="amount">0</strong>
                            <span className="currency">원</span>
                        </div>
                        </output>
                    </dd>
                    </dl>
                </div>
                </div>
            </div>
            {/* <!-- 버튼 그룹 --> */}
            <div className="button-group">
                <button className="btn-fill-secondary btn-48" type="button">
                장바구니
                </button>
                <button className="btn-fill-primary btn-48" type="submit">
                구매하기
                </button>
            </div>
            </form>
        </aside>
    )
}