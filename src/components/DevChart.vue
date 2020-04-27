<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgba(87, 16, 131, 0.25)'
            ],
            borderColor: [
              'rgba(87, 16, 131, 1)',
              'rgba(87, 16, 131, 1)',
              'rgba(87, 16, 131, 1)',
              'rgba(87, 16, 131, 1)',
              'rgba(87, 16, 131, 1)'
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
      const names = this.$store.getters.skillName(2)
      this.data.labels = names
      const scores = this.$store.getters.skillScore(2)
      this.data.datasets[0].data = scores
    }
  }
}
</script>
