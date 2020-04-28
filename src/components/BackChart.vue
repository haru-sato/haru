<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Backchart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
              'rgba(15, 136, 57, 1)',
              'rgba(15, 136, 57, 1)',
              'rgba(15, 136, 57, 1)',
              'rgba(15, 136, 57, 1)',
              'rgba(15, 136, 57, 1)'
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
          },
          legend: {
            display: false
        }
      }
    }
  },
  mounted () {
    this.getChartName()
    this.renderChart(this.data, this.options)
  },
  methods:{
    getChartName(){
      const names = this.$store.getters.skillName(1)
      this.data.labels = names
      const scores = this.$store.getters.skillScore(1)
      this.data.datasets[0].data = scores
    }
  }
}
</script>
