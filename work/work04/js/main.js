// 현재 스크롤 위치
window.addEventListener('scroll', function(){
    let scrollX = this.scrollX;
    let scrollY = this.scrollY;
    console.log(scrollX);
    console.log(scrollY);
});

// dimmed
function dimmed () {
    const dim = document.getElementById('dimmed');
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
const bookmarkBefore = document.getElementById('bookmark');
const bmList = document.getElementById('favorite');
bookmarkBefore.addEventListener('click', function(){
    dimmed();
    return slideToggle(bmList, 300);
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
        grid.refreshLayout();
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

// 셀렉트 박스 클릭시 옵션 펼치기
const select = document.querySelectorAll('.select');
select.forEach(function(select){
    const option = select.nextElementSibling;
    select.addEventListener('click', function(){
        slideToggle(option, 300);
    });
});


// 상세조건 토글
const slideUp = (target, duration = 300) => {
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;

    window.setTimeout(() => {
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
    }, duration);
};
  
const slideDown = (target, duration = 300) => {
    target.style.removeProperty("display");
    const computedDisplay = window.getComputedStyle(target).display;
    const display = computedDisplay === "none" ? "block" : computedDisplay;
    target.style.display = display;

    const height = target.offsetHeight;

    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");

    window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
    }, duration);
};
  
const slideToggle = (target, duration = 300) => {
    if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration);
    }

    return slideUp(target, duration);
};

window.addEventListener("DOMContentLoaded", () => {
    const btnOpen = document.querySelector("#btnOpen");
    const detailSearch = document.querySelector("#detailSearch");
    btnOpen.addEventListener("click", (event) => {
        event.preventDefault();
        slideToggle(detailSearch, 500);
    });
});

// 상세조회 내 기간 설정
const btnAdd = document.getElementById('btn_add');
const period = document.getElementById('period');

let periodDummy = '';
periodDummy += '<div class="period_wrap">';
periodDummy += '    <button class="btn_del" id="btn_del" aria-label="기간 삭제 버튼"></button>';
periodDummy += '    <div class="dropdown_wrap">';
periodDummy += '        <div class="dropdown sm">';
periodDummy += '            <button type="button" class="select">선택</button>';
periodDummy += '            <ul class="select_option">';
periodDummy += '                <li>주문일</li>';
periodDummy += '                <li>결제완료일</li>';
periodDummy += '                <li>상품명</li>';
periodDummy += '            </ul>';
periodDummy += '        </div>';
periodDummy += '    </div>';
periodDummy += '    <div class="input_area">';
periodDummy += '        <input type="number" id="" name="" class="text_inp">';
periodDummy += '    </div>';
periodDummy += '    <span>~</span>';
periodDummy += '    <div class="input_area">';
periodDummy += '        <input type="number" id="" name="" class="text_inp">';
periodDummy += '    </div>';
periodDummy += '    <div class="period_btnwrap">';
periodDummy += '        <button class="active">오늘</button>';
periodDummy += '        <button>어제</button>';
periodDummy += '        <button>3일</button>';
periodDummy += '        <button>7일</button>';
periodDummy += '        <button>1개월</button>';
periodDummy += '        <button>3개월</button>';
periodDummy += '        <button>6개월</button>';
periodDummy += '    </div>';
periodDummy += '</div>';

document.addEventListener('click', function(e){
    if(e.target && e.target.id == 'btn_add'){
        period.innerHTML += periodDummy;
    }
    if(e.target && e.target.id == 'btn_del'){
        e.target.parentNode.remove();
    }
});