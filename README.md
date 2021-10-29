# 내일의 집

<img width="904" alt="오늘의집 클론 프로젝트" src="https://user-images.githubusercontent.com/84368302/138392627-0103b147-271c-496a-a7b3-151c63edcb5f.png">
<br>
<hr>
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
