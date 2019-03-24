<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class='grey--text' @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class = 'text-uppercase grey--text'>
        <span class = 'font-weight-light'>Todo</span>
        <span>Alena</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>

        <v-btn color="grey" flat slot="activator">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>

        <v-list>
          <v-list-tile v-for="link in links" :key="link.text"  router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>


      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model='drawer' app class = 'success'>
      <v-layout column align-center>
        <v-flex>
          <Popup/>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-tile v-for='link in links' :key='link.text' router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="white--text">
              {{ link.text }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>

import Popup from "./Popup.vue"
export default {
  components: {
    Popup
  },
  data(){
    return {
      drawer: false,
      links: [
        {icon: 'dashboard', text: 'Home', route: '/'},
        {icon: 'folder', text: 'My projects', route: '/projects'},
        {icon: 'person', text: 'Team', route: '/team'},
        {icon: 'edit', text: 'Todo', route: '/todo'}
      ]
    }
  }
}
</script>

<style  scoped>
</style>
