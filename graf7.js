// Dados para o gráfico
const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'Dados de vendas Cartier',
        data: [113, 142, 122, 132, 121],
        backgroundColor: [
            ' rgba(232, 236, 6, 0.644)',
            ' rgba(232, 236, 6, 0.644)',
            ' rgba(232, 236, 6, 0.644)',
            ' rgba(232, 236, 6, 0.644)',
            ' rgba(232, 236, 6, 0.644)',
        ],
        borderColor: [
            ' rgba(232, 236, 6, 0.644)',
            ' rgba(232, 236, 6, 0.644),',
            ' rgba(232, 236, 6, 0.644)',
            ' rgba(232, 236, 6, 0.644),',
            ' rgba(232, 236, 6, 0.644)',
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