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
import getWords from '../parser'

const words = ['word', 'word', 'word', 'word']

getWords()

export default {
  name: 'App',
  components: { Navbar },
  mounted() {
    this.$store.dispatch('loadWords', words)
  }
}
</script>
