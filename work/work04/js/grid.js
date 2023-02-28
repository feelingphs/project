//grid
const row_count = 4000;
const col_count = 12;

const data = [];
const columns = [
    {header: '주문일/결제일', name: 'date', minWidth: 140, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '주문번호/주문경로', name: 'ordernumber', minWidth: 130, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '주문자 정보', name: 'meminfo', minWidth: 120, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '상품정보', name: 'pdtinfo', minWidth: 218, whiteSpace: 'normal', align: "left",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '총 상품금액', name: 'price', minWidth: 100, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '배송비', name: 'shipment', minWidth: 100, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '할인금액', name: 'discount', minWidth: 100, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '적립금 사용', name: 'point', minWidth: 100, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '총 할인금액', name: 'totaldiscount', minWidth: 100, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '실 결제금액', name: 'payment', minWidth: 100, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '결제수단', name: 'method', minWidth: 100, whiteSpace: 'normal', align: "center",
        formatter: function(e) {
            return e.value
        },
    },
    {header: '주문구분', name: 'type', minWidth: 100, whiteSpace: 'normal', align: "center",
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
        'pdtinfo': '<a href="#none;">컵밥_전주식돌솥비빔밥(중량) 269G 외 1건</a>',
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

// checkbox custom renderer
class CheckboxRenderer {
    constructor(props) {
        const { grid, rowKey } = props;

        const inputWrap = document.createElement('div');
        inputWrap.className = 'chkbox_area';

        const label = document.createElement('label');
        label.setAttribute('for', String(rowKey));

        const checkInput = document.createElement('input');
        checkInput.className = 'chkbox_inp';
        checkInput.id = String(rowKey);

        inputWrap.appendChild(checkInput);
        inputWrap.appendChild(label);

        checkInput.type = 'checkbox';
        label.addEventListener('click', (ev) => {
            ev.preventDefault();

            if (ev.shiftKey) {
                gridOrd[!checkInput.checked ? 'checkBetween' : 'uncheckBetween'](rowKey);
                return;
            }

            grid[!checkInput.checked ? 'check' : 'uncheck'](rowKey);
        });

        this.el = inputWrap;

        this.render(props);
    }
  
    getElement() {
        return this.el;
    }
  
    render(props) {
        const checkInput = this.el.querySelector('.chkbox_inp');
        const checked = Boolean(props.value);

        checkInput.checked = checked;
    }
  }
  
// 주문별
const gridOrd = new tui.Grid({
    el: document.getElementById('gridOrd'),
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
            <div class="chkbox_area">
                <input type="checkbox" id="all-checkbox" class="chkbox_inp" name="_checked" />
                <label for="all-checkbox" class="checkbox">
                    <span class="custom-input"></span>
                </label>
            </div>
            `,
            renderer: {
                type: CheckboxRenderer
            }
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

// 상품별
const gridPrd = new tui.Grid({
    el: document.getElementById('gridPrd'),
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
            <div class="chkbox_area">
                <input type="checkbox" id="all-checkbox" class="chkbox_inp" name="_checked" />
                <label for="all-checkbox" class="checkbox">
                    <span class="custom-input"></span>
                </label>
            </div>
            `,
            renderer: {
                type: CheckboxRenderer
            }
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

// tooltip
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

gridOrd.on('mouseover', (e) => { // 상품정보에 마우스 오버시
    const key = e.rowKey + 1;
    if (e.columnName == 'pdtinfo' && !isNaN(key)) {
        if(key < 10){
            tooltip.innerHTML = '<div class="tip_img"><img src="../imgs/test0' + key + '.jpg"></div>';
        } else {
            tooltip.innerHTML = '<div class="tip_img"><img src="../imgs/test' + key + '.jpg"></div>';
        }
        tooltip.innerHTML += '<div class="tip_detail"><span class="prdtit">컵밥_전주식돌솥비빔밥</span><span class="price">3,000원</span><span class="state">미입금</span></div>';
        document.querySelector('.grid_wrap').append(tooltip);

        // 마우스 위치 따라 tooltip 이동
        document.addEventListener('mousemove', function(e){
            tooltip.style.left = (e.pageX) + 'px';
            tooltip.style.top = (e.pageY) + 'px';
        });
    }
});

gridOrd.on('mouseout', (e) => { // 상품정보에서 마우스가 벗어났을 때
    const key = e.rowKey + 1;
    if (e.columnName == 'pdtinfo' && !isNaN(key)) {
        tooltip.parentNode.removeChild(tooltip);
    }
});

gridOrd.on('click', (e) => { // 상품정보 클릭했을 때
    const key = e.rowKey + 1;
    if (e.columnName == 'pdtinfo' && !isNaN(key)) {
        window.open('popup_detail.html', '주문상세', 'width=1200, height=800, top=10, left=10');
    }
});

function closePopup() {
    window.open('', '_self').close();
}

// // 엑셀 다운로드
// const options = {
//     includeHiddenColumns: true,
//     onlySelected: true,
//     fileName: 'order_list',
// };
// const btnExport = document.querySelector('#gridExport');
// btnExport.addEventListener('click', function() {
//     //grid.export('csv');
//     //grid.export('xlsx');
//     gridOrd.export('xlsx', options);
// });