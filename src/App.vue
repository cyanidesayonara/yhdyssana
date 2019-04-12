<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

const words = [
  { id: '0', text: 'word1' },
  { id: '1', text: 'word2' },
  { id: '2', text: 'word3' },
  { id: '3', text: 'word4' }
]

export default {
  name: 'App',
  components: { Navbar },
  mounted() {
    this.$store.dispatch('loadWords', words)
  }
}
</script>
