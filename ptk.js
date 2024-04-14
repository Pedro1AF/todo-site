// Dados para o gráfico
const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'dados de vendas patek',
        data: [9, 4, 8, 10, 12],
        backgroundColor: [
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
        ],
        borderColor: [
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
            ' rgba(78, 78, 78, 0.863)',
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