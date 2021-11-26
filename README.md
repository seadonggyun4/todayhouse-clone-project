# 내일의 집

<img width="904" alt="오늘의집 클론 프로젝트" src="https://user-images.githubusercontent.com/84368302/138392627-0103b147-271c-496a-a7b3-151c63edcb5f.png">
<br>
<hr>
<br>

## 😏 내일의 집이란?
  자취생 들의 필수어플 "오늘의 집" 의 상품판매 페이지의 UI 를 componet 단위부터 자세하게 분석한뒤 똑같이 만들어 보았습니다.
<br>
<br>
<br>

# 구현방법
## 🌈 Assets 파일 준비
  ### 1. Image 
  - 웹페이지에서 이미지의 용량은 약 60%를 차지할 정도로 코드파일보다 크고 많은 영향을 끼친다. 랜더링 타임을 줄이고 사용성 증진을 위해, 목적에 맞는 이미지 확장자(jpg, png, svg, webp)를 선택.
  
  ### 2. Icon
  - svg 파일을 icon으로 변환
  - svg는 html에 넣어 조작할수 있다는 장점이 있지만 코드가 길고 복잡하다
  - svg 파일 icon으로 변환 사이트 : (https://icomoon.io/app/#/select) 

  ### 3. favicon
  - favicon 설정 사이트 : (https://realfavicongenerator.net/) 

  ### 4. Css reset
  - css reset 방법에는 대표적으로 Reset.css / Normalize.css 가 있다.
  - Reset.css 는 기본 css 를 전부 초기화 하고 백지상태로 만든다.
  - Normalize.css 브라우저 파편화, 크로스 브라우징을 위해 만들어진 css
  - 목적에 맞게 미리 Css reset을 세팅한다.
<hr>
<br>

## 💅 SCSS : 변수, Mixin , 모듈 리팩토링
  ### 1. 변수 
  - 자주 사용되는 CSS 스타일 코드를 따로 변수명을 지정해 관리하면 유지보수 가 용이해 진다.
  - 컬러, 타이포그래피, 그리드 시스템, z-index 등 ...
  ![constants](https://user-images.githubusercontent.com/84368302/143585814-74c6bc05-3a7d-4f7b-80cc-d4b080f9f832.PNG)

  ### 2. Mixin 
  - @mixin을 사용하면 그룹단위의 스타일을 변수처럼 적용할 수 있습니다. 즉 여러개의 스타일을 설정해두었다가 한번에 적용하는 것이 가능합니다.
  - @mixin으로 선언된 스타일을 사용하고자 할때는 @include로 사용합니다. 
![mixin](https://user-images.githubusercontent.com/84368302/143585860-874bd564-e9f2-44f3-aa00-0352fe91f986.png)


  ### 3. 모듈 
  - UI 구성요소중 반복적으로 사용하게되는 구성요소(버튼, 아바타 등...)을 미리 모듈화 한다.
![모듈](https://user-images.githubusercontent.com/84368302/143585878-be3115a6-b72f-4a04-856a-dbc35d265cb6.PNG)


<hr>
<br>

## 🔨 SCSS : Layout & Components 단위 구현
- 미리 리팩토링한 변수, Mixin, 모듈을 활용해 Layout, Components 단위의 UI 구현을 한다. 
![완성](https://user-images.githubusercontent.com/84368302/143585897-ca960649-a7f1-4999-82a5-d36ccd103506.PNG)



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
