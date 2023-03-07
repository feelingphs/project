'use strict';

// 현재 스크롤 위치
window.addEventListener('scroll', function(){
    let scrollX = this.scrollX;
    let scrollY = this.scrollY;
    console.log(scrollX);
    console.log(scrollY);
});

// dimmed
const dim = document.getElementById('dimmed');
function dimmed () {
    if (window.getComputedStyle(dim).display === "none") {
        dim.style.display = 'block';
    }else {
        dim.style.display = 'none';
    }
};

// 최상단 이동
const topBtn = document.getElementById('topBtn');
topBtn.addEventListener('click', function(){
    window.scrollTo({left:0, top:0, behavior: 'smooth'});
});

// 즐겨찾기 토글
const bookMarkOpen = document.getElementById('bookmark');
const bookMarkList = document.getElementById('favorite');
bookMarkOpen.addEventListener('click', () => {
    slideToggle(bookMarkList);
    dimmed();
});
document.addEventListener('click', (e) => {
    const clickInside = bookMarkList.contains(e.target) || bookMarkOpen.contains(e.target);
    if(!clickInside){
        dim.style.display = 'none';
        bookMarkList.style.display = 'none';
    }
});

// 즐겨찾기 활성화 버튼
document.addEventListener('click', function(e) {
    if(e.target.id == 'addBmark'){
        e.target.classList.toggle('active');
    }
});

// 계정 버튼 클릭시
const accountBtn = document.getElementById('accoundBtn');
const accountLayer = document.getElementById('account');

accountBtn.addEventListener('click', function() {
    slideToggle(accountLayer);
    dimmed();
});

// lnb 열기, 닫기
const leftMenu = document.getElementById('lnb');
const switchBtn = document.getElementById('lnb_switch');

switchBtn.addEventListener('click', function(){
    if(this.classList.contains('openBtn')) {
        this.classList.replace('openBtn', 'closeBtn');
        leftMenu.classList.replace('close', 'open');
    } else {
        this.classList.replace('closeBtn', 'openBtn');
        leftMenu.classList.replace('open', 'close');
    }
    setInterval(() => {
        gridOrd.refreshLayout();
    }, );
});

// lnb 아코디언 메뉴
const menu = document.querySelectorAll('.menu');
menu.forEach(function(menu){
    menu.addEventListener('click', function(e){
        const parent = e.target.parentNode;
        const ul = parent.querySelector('.depth');

        if (ul != null){
            if(parent.classList.contains('active')){
                parent.classList.remove('active');
                return slideUp(ul, 300);
            } else{
                parent.classList.add('active');
                return slideDown(ul, 300);
            }
        } else {
            menu.classList.add('active');
        }
    });
});
