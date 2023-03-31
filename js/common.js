const body = document.getElementsByTagName('body')[0];
const header = document.createElement('header')
const homeDiv = document.createElement('div')
header.className = 'header'
homeDiv.className = 'home'
body.prepend(header)
header.after(homeDiv)


const headerStyle = `<a class="logo" href=""
><img src="./img/logo.svg" alt="#"
/></a>
<a class="logo2" href=""
><img src="./img/logoMobile.svg" alt="#"
/></a>
<div class="login">
<i class="fa-solid fa-user"></i>
<span>로그인</span>
</div> 
`
const headerHome =
`
<ul class="homewrap">
    <li>여행정보</li>
    <li><a href="index.html"><i class="fa-solid fa-house"></i></a></li>
    <li><a href="board.html">게시판</a></li>
</ul>
`

$('.header').html(headerStyle)
$('.home').html(headerHome)

let home = document.querySelector('.home')
let homewrap = document.querySelectorAll('.homewrap li')

home.addEventListener('mouseover', function(){
    home.classList.add('on')
    homewrap[1].innerHTML= `홈`
})

home.addEventListener('mouseout', function(){
    home.classList.remove('on')
    homewrap[1].innerHTML= `<i class="fa-solid fa-house"></i>`
})

