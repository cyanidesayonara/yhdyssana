<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
        <WordForm />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
        <WordList msg="Lista" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WordForm from '../components/WordForm'
import WordList from '../components/WordList'

export default {
  components: {
    WordList,
    WordForm
  }
}
</script>
