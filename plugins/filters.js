import Vue from 'vue'

import dayjs from 'dayjs'

Vue.filter('numberToPrice', (numberToPrice) => {
  return numberToPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.filter('date', (date) => {
  return dayjs(date).format('MMMM DD, YYYY')
})
