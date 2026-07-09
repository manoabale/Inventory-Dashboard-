// Inventory Chart Example
const ctx = document.getElementById('inventoryChart').getContext('2d');
const inventoryChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Products', 'Suppliers', 'Orders'],
    datasets: [{
      label: 'Inventory Stats',
      data: [1250, 45, 78],
      backgroundColor: ['#38bdf8', '#22c55e', '#ef4444']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Example refresh button
document.getElementById('refresh').addEventListener('click', () => {
  alert("Inventory data refreshed!");
});
