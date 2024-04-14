const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'Dados de vendas Breitling',
        data: [870, 760, 1023, 920, 940],
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
