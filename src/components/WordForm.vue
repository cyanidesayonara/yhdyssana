<template>
  <v-card class="mb-5">
    <v-card-title class="grey lighten-3">
      <h2>{{ wordFormHeader }}</h2>
    </v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="q"
          :rules="inputRules"
          label="Kirjoita yhdyssana"
          required
        ></v-text-field>
        <v-btn flat class="grey lighten-3" :loading="loading" @click="submit"
          >Hae</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

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
      if (this.$refs.form.validate()) {
        this.loading = true
        const thingy = () => {
          console.log(this.q)
          this.loading = false
        }
        // concat this.q and search search for it in words
        setTimeout(function() {
          thingy()
        }, 3000)
      }
    }
  }
}
</script>

<style></style>
