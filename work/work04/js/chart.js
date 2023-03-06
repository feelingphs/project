
const ctx = document.getElementById('chart');

const DATA_COUNT = 31;
const labels = [];

for (let i = 0; i < DATA_COUNT; ++i){
    labels.push(`${i + 1}일`);
}

const data = {
    labels: labels,
    datasets: [
        {
            label: 'line',
            type: 'line',
            data: [235, 357, 1234, 678, 134, 2345],
            backgroundColor: '#26c6da',
            borderColor:'#26c6da',
            borderWidth: 1,
        },
        {
            label: 'bar',
            type: 'bar',
            data: ['1234', '2345', '467', '1234'],
            backgroundColor: '#34444c',
            barThickness: 16,
            borderRadius: 4,
            borderSkipped: true,
        },
    ],
}

const myChart = new Chart(ctx, {    
    type: 'line',
    data: data,
    // plugins: [ChartDataLabels],
    options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
                text: '매출현황',
                display:false
            },
            legend: {
				position: 'top',
			}
        },
        scales: {
            x: {
                display:true,
                title: {
                    display:true,
                    text : 'Day',
                    color: '#34444c',
                    font: {
                        size: 16,
                    },
                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                }
            },
            y: {
                display:true,
                title:{
                    display: true,
                    text: '매출',
                    color:'#34444c',
                    font: {
                        size: 18,
                    },
                    padding: {top: 0, left: 0, right: 0, bottom: 0}
                },
                beginAtZero: true,
            }
        },
    }
});

