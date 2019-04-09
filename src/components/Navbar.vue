<template>
  <nav class="grey lighten-3">
    <v-toolbar flat app>
      <v-container class="py-0">
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
            <v-toolbar flat color="transparent">
              <v-toolbar-title class="text-uppercase grey--text">
                <router-link to="/" class="toolbar-title">
                  <span class="font-weight-light">Yhdys</span>
                  <span>Sana</span>
                </router-link>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn flat small router :to="'/about'">
                  <v-icon left class="grey--text">description</v-icon>
                  <span class="hidden-sm-and-down grey--text">About</span>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      thingy: []
    }
  }
}
</script>
<style>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.toolbar-title {
  color: unset;
  text-decoration: unset;
}
.v-toolbar__content {
  padding: 0;
}
</style>
