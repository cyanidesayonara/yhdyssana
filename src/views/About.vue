<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
        <v-card class="mb-5">
          <v-card-title class="grey lighten-3">
            <h2>{{ aboutHeader }}</h2>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'About',
  computed: mapState(['aboutHeader'])
}
</script>

<style></style>
