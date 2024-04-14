// Dados para o gráfico
const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'dados de vendas HUBLOT',
        data: [22, 14, 8, 4, 2],
        backgroundColor: [
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
        ],
        borderColor: [
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
            ' rgba(0, 0, 0, 0.877)',
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