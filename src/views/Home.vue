<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <WordForm />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <WordList msg="Lista" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WordForm from '../components/WordForm'
import WordList from '../components/WordList'
import { mapState } from 'vuex'

export default {
  components: {
    WordList,
    WordForm
  },
  computed: mapState(['formHeader', 'sanat'])
}
</script>
