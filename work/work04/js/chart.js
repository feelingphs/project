
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
            borderRadus: 10,
        },
    ],
}

const myChart = new Chart(ctx, {    
    type: 'line',
    data: data,
    plugins: [ChartDataLabels],
    options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
                text: 'dd',
                display:false
            }
        },
        elements: {
            bar: {
                backgroundColor: '#fff',
                borderColor: '#fff',
                borderWidth: 5
            }
        },
        scales: {
            x: {
                display:true,
                title: {
                    display:true,
                    text : 'Day',
                    color: '#ddd',
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
                    color:'#000',
                    font: {
                        size: 18,
                    },
                    padding: {top: 0, left: 0, right: 0, bottom: 0}
                },
                beginAtZero: true,
                min: 0,
                max: 3000,
                ticks:{
                    stepSize: 500,
                }
            }
        },
    }
});

