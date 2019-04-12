<template>
  <v-card class="mb-5">
    <v-card-title class="grey lighten-3">
      <h2>{{ wordFormHeader }}</h2>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="getWord(q)" ref="form">
        <v-text-field clearable v-model="q" :rules="inputRules" label="Kirjoita yhdyssana" required></v-text-field>
        <v-btn type="submit" flat class="grey lighten-3" :loading="loading">Hae</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import wordService from '../services/words'

export default {
  data() {
    return {
      q: '',
      loading: false,
      inputRules: [v => v.length >= 3 || 'Minimum length is 3 characters']
    }
  },
  name: 'WordForm',
  computed: {
    ...mapState(['wordFormHeader', 'words'])
  },
  methods: {
    submit() {
      this.$emit('getWord')
      if (this.$refs.form.validate()) {
        this.loading = true
        const thingy = () => {
          this.loading = false
        }
        // concat this.q and search search for it in words
        setTimeout(function() {
          thingy()
        }, 3000)
      }
    },
    getWord(q) {
      const cleanedQ = q
        .split(' ')
        .join('')
        .toLowerCase()
      wordService
        .getOne(cleanedQ)
        .then(word => {
          this.$store.dispatch('setWord', q)
          this.$store.dispatch('getWord', word)
          this.$refs.form.reset()
          this.$refs.t.blur()
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style></style>
