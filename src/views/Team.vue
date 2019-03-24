<template>
  <div class="team">
    <h1>Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team"  :key="person.name">
          <v-card flat class  = 'text-xs-center ma-3'>
            <v-responsive class="pt-4">
              <v-avatar size="20" class="grey lighten-2">
                <img :src="person.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-action>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>


  </div>
</template>


<script>


  export default {
    components: {

    },
    data(){
      return {
        team: [
          {name: 'Ninja', role: "Web developer", avatar: '/favicon.ico' },
          {name: 'Roy', role: "Grafic disigner" , avatar: '/favicon.ico'},
          {name: 'Chan Li', role: "Web developer" , avatar: '/favicon.ico'},
          {name: 'Mario', role: "Social media maverick" , avatar: '/favicon.ico'},
          {name: 'Yoshi', role: "Sales guru" , avatar: '/favicon.ico'}
        ]
      }
    }
  }
</script>
