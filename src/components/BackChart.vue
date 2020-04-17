<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Backchart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'Python', 'C', 'MySQL'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [20, 20, 10, 10, 30],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
              'rgba(15, 136, 57, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale: {
            ticks: {
              beginAtZero: true,
              max :50,
              min :0
            }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
