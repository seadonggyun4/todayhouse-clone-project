# 내일의 집

<img width="904" alt="오늘의집 클론 프로젝트" src="https://user-images.githubusercontent.com/84368302/138392627-0103b147-271c-496a-a7b3-151c63edcb5f.png">
<br>
<br>

# ✅ 내일의 집이란?
  자취생 들의 필수어플 "오늘의 집" 의 상품판매 페이지의 UI 를 SCSS 를 활용해

크게는Layout 단위부터 componet 단위까지 자세하게 분석한뒤 똑같이 만들어 볼수 있다.
<br>
프런트엔드를 구성하는 가장 기초적인 assets 단위부터 SCSS를 통해 상태관리하는 방법 과 SCSS의 문법 등을 배울수 있다.
<br>
<br>
<br>


## 🔨기술스택 : HTML, SCSS, JavaScript


| Skill | Info       | ✔   |
| ------ | --------------- | --------------- | 
| HTML    | Semantic 한 내일의집 UI Mark up | ✔   |
|         | Login 상태 / 비회원 상태 Mark up | ✔   |
| SCSS     | constants / mixins / modules 선언| ✔   |
|          | layout / components 단위 UI 구축 | ✔   |
| JavaScript | Tiny slider.js 를 활용한 carousel 구현 | ✔ |

구현 과정 : (https://seaplus.tistory.com/59)

<br>
<br>
<br>

# ✅ UI Mark up
<br>

### 유저 인터렉션 UI
|         | .is-active | .is-open   |
| ------ | -----------| ------------ | 
| GNB    | ✔ |      |
| LNB    | ✔ |      |
| Star-rating | ✔ |      |
| Select-Group|  ✔ |      |

<br>
<br>
<br>

### 경우의수 에 따른 UI
|         | 회원/비회원 | 반응형   | 그외 조건들   |
| ------ | -----------| ------------ | ------------ | 
| GNB    | ✔ |      |   |
| .Sidebar-user    | ✔ |      |   |
| .sidebar-user-menu   | ✔ |      |   |
| .sear-modal    | ✔ |      |   |
| .product-info-price |  |   ✔    |  |
| .user-gallery-carousel |  |   ✔    |  |
| .review-item |  |       |  ✔ |
| .order-CTA |  |       |  ✔ |
| .inquiry-item |  |       |  ✔ |


<br>
<br>
<br>

## 🔧 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지 로 이동"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="스크랩북 페이지 로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="내소식 페이지 로 이동"
  >
    <i class="ic-bell"></i>
    <strong class="badge">5</strong>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지 로 이동"
  >
    <i class="ic-cart"></i>
    <strong class="badge">999</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="user imges" />
    </div>
  </button>
</div>
```

<br>
<hr>
<br>

## 🔧 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outline btn-40" href="/">로그인</a>
  <a class="btn-fill-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인을 했을 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="user imges" />
    </div>
    <strong class="username">사달라사달라사달라사달라사달라사달라</strong>
  </a>
</div>
```
