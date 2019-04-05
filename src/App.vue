<template>
  <v-app>
    <v-toolbar>
      <v-container>
        <v-layout>
          <v-flex xs12 sm4 offset-sm4>
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
