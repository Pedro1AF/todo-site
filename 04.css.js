// Dados para o gráfico
const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'dados de vendas omega',
        data: [9, 4, 8, 13, 2],
        backgroundColor: [
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
        ],
        borderColor: [
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
            ' rgba(221, 13, 13, 0.824)',
        ],
        borderWidth: 1
    }]
};

// Opções para o gráfico
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Criando o gráfico
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}