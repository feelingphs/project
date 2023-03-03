'use strict';

// 셀렉트 박스 클릭시 옵션 펼치기
document.addEventListener('click', function(e){

    const optGroup = e.target.nextElementSibling;
    if(e.target.classList.contains('select')){
        
        slideToggle(optGroup);
    }

    const option = document.querySelectorAll('.select_option');
    for (let i = 0; i < option.length; i++) {
        const optionList = option[i].querySelectorAll('li');
        for (let j = 0; j < option.length; j++) {
            if(e.target == optionList[j]){
                const select = optionList[j].parentElement.previousElementSibling;
                select.textContent = '';
                select.textContent += optionList[j].textContent;
                slideUp(option[i]);
            }
        }
    }
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
    const btnOpen = document.getElementById("btnOpen");
    const detailSearch = document.querySelector("#detailSearch");
    btnOpen.addEventListener("click", (e) => {
        e.preventDefault();
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
        periodBtn();
    }
    if(e.target && e.target.id == 'btn_del'){
        e.target.parentNode.remove();
    }
});

// 기간 버튼 활성화
function periodBtn() {
    const periodBtnWrap = document.querySelectorAll('.period_btnwrap');

    periodBtnWrap.forEach(function(el, i){
        const periodBtn = periodBtnWrap[i].querySelectorAll('button');

        periodBtn.forEach(function(el, j){
            periodBtn[j].addEventListener('click', function(e){
                for(let k = 0; k < periodBtn.length; k++){
                    periodBtn[k].classList.remove('active');
                }
                e.target.classList.add('active');
            });
        });
    });
}periodBtn();

// tab
const tabGroups = document.querySelectorAll('[data-role="tab"]');

tabGroups.forEach(function(el, i){
    const tabs = el.querySelectorAll('[role="tablist"]');
    const tabContWrap = el.querySelectorAll('.tabcont_wrap');

    for(let i = 0 ; i < tabs.length; i++){
        const tab = tabs[i].querySelectorAll('.tab_item');
        const tabCont = tabContWrap[i].children;

        for(let j = 0; j < tab.length; j++){
            tab[j].addEventListener('click', function(){
                for(let k= 0; k < tab.length; k++){
                    tab[k].classList.remove('active');
                    tabCont[k].classList.remove('active');
                }
                tab[j].classList.add('active');
                tabCont[j].classList.add('active');
            });
        }
    }
});