// 셀렉트 박스 클릭시 옵션 펼치기
const select = document.querySelector('.select');
const option = document.querySelector('.select_option');

select.addEventListener('click', function(){
    option.style.display = 'block';
});

// 상세영역 펼치기
// const openBtn = document.getElementById('btnOpen');
// const detailArea = document.getElementById('detailSearch');

// openBtn.addEventListener('click', function(){
//     if(detailArea.classList.contains('open')) {
//         detailArea.classList.remove('open');
//         detailArea.style.transitionDuration = '0.3s';
//     } else {
//         detailArea.classList.add('open');
//         detailArea.style.transitionDuration = '0.3s';
//     }
    
// });

//grid
const row_count = 4000;
const col_count = 12;

const data = [];
const columns = [
    {
        header: '주문일/결제일',
        name: 'date',
        minWidth: 140,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '주문번호/주문경로',
        name: 'ordernumber',
        minWidth: 130,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '주문자 정보',
        name: 'meminfo',
        minWidth: 120,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '상품정보',
        name: 'pdtinfo',
        minWidth: 256,
        whiteSpace: 'normal',
        align: "left",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '총 상품금액',
        name: 'price',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '배송비',
        name: 'shipment',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '할인금액',
        name: 'discount',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '적립금 사용',
        name: 'point',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '총 할인금액',
        name: 'totaldiscount',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '실 결제금액',
        name: 'payment',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '결제수단',
        name: 'method',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {
        header: '주문구분',
        name: 'type',
        minWidth: 100,
        whiteSpace: 'normal',
        align: "center",
        formatter: function(e) {
            return e.value
        },
    },
];

for (let i = 0; i < row_count; i++) {
    const row = {
        'date': '2023-01-03 15:54:23 <br> 2023-01-03 15:54:23',
        'ordernumber': '2023010357263680 <br> PC',
        'meminfo': '내친구네트웍스',
        'pdtinfo': '컵밥_전주식돌솥비빔밥(중량) 269G 외 1건',
        'price': '120,940원',
        'shipment': '2,500원',
        'discount': '2,800원',
        'point': '2,680원',
        'totaldiscount': '5,480원',
        'payment': '0원',
        'method': '적립금',
        'type' : '일반주문',
    };
    for (let j = 0; j < col_count; j++) {
        row[`${j}`] = row;
    }
    data.push(row);
}

// for (let i = 0; i < col_count; i++) {
//     const name = `c${i}`;
//     columns.push({ 
//         name, 
//         header: name,
//     });
// }

const grid = new tui.Grid({
    el: document.getElementById('grid'),
    data: data,
    //scrollX: false,
    //scrollY: false,
    bodyHeight: 497,
    rowHeight:80, // td 높이
    header: {
        height:40 // th 높이
    },
    draggable: false,
    contextMenu: null,
    rowHeaders: [
        {
            type: 'rowNum'
        },
        {
            type: 'checkbox',
            header: `
            <label for="all-checkbox" class="checkbox">
                <input type="checkbox" id="all-checkbox" class="hidden-input" name="_checked" />
                <span class="custom-input"></span>
            </label>
            `,
        }
    ],
    columns: columns,
    columnOptions: { 
        resizable: true // 컬럼 너비 조절
    },
    pageOptions: { 
        useClient: true,
        perPage: 30 // 페이지당 노출 갯수
    }
	
});

// 엑셀 다운로드
const options = {
    includeHiddenColumns: true,
    onlySelected: true,
    fileName: 'order_list',
};
const btnExport = document.querySelector('#gridExport');
btnExport.addEventListener('click', function() {
    //grid.export('csv');
    //grid.export('xlsx');
    grid.export('xlsx', options);
});


// lnb 열기, 닫기
// const leftMenu = document.getElementById('lnb');
// const switchBtn = document.getElementById('lnb_switch');

// switchBtn.addEventListener('click', function(){
//     if(this.classList.contains('openBtn')) {
//         this.classList.replace('openBtn', 'closeBtn');
//         leftMenu.classList.replace('close', 'open');
//     } else {
//         this.classList.replace('closeBtn', 'openBtn');
//         leftMenu.classList.replace('open', 'close');
//     }
//     setInterval(() => {
//         grid.refreshLayout();
//     }, );
// });



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
    const tab = document.querySelector("#btnOpen");
    const tabpanel = document.querySelector("#detailSearch");
    tab.addEventListener("click", (event) => {
        event.preventDefault();
        slideToggle(tabpanel, 500);
    });
});

// tooltip
const table = document.getElementsByClassName('.tui-grid-table');
const td = document.querySelectorAll('td');
const tooltip = document.getElementById('tooltip');

for(let i = 0; i < td.length; i++) {
    const tooltips = td[i].dataset.columnName;
    const key = Number(td[i].dataset.rowKey) + 1;

    // 상품정보에 마우스 오버시
    td[i].addEventListener('mouseover', function(){
        if(tooltips == 'pdtinfo'){
            tooltip.style.opacity = '1';

            tooltip.innerHTML = '<div class="tip_img"><img src="../imgs/test0' + key + '.jpg"></div>';
            tooltip.innerHTML += '<div class="tip_detail"><span class="prdtit">컵밥_전주식돌솥비빔밥</span><span class="price">3,000원</span><span class="state">미입금</span></div>';
        }
    });

    // 상품정보에서 마우스가 벗어났을 때
    td[i].addEventListener('mouseleave', function(){
        tooltip.innerHTML = '';
        tooltip.style.opacity = '0';
    });
}

// 마우스 위치 따라 tooltip 이동
document.addEventListener('mousemove', function(e){
    tooltip.style.left = (e.pageX - 270) + 'px';
    tooltip.style.top = (e.pageY - 320) + 'px';
});