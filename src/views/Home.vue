<template>
  <div class="home">
    <h1 class = "subheading grey--text">Homepage</h1>
    <v-container class = 'my-5'>

      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By project Name</span>
          </v-btn>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('persone')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By persone</span>
          </v-btn>
          <span>Sort projects by persone</span>
        </v-tooltip>


      </v-layout>

      <v-card flat  v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div >{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Persone</div>
            <div >{{project.persone}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div >{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <!-- <div class="caption grey--text">Status</div>
            <div >{{project.status}}</div> -->
            <div class="right">
                <v-chip small :class="`${project.status} white--text my-2 caption`">{{project.status}}</v-chip>
            </div>

          </v-flex>
        </v-layout>
      </v-card>

    </v-container>

    <h1 class = "subheading grey--text">This is an FIRST page</h1>
    <v-container class = 'my-5'>
      <p class = 'light-green lighten-4 green--text text--darken-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <v-btn class = "hidden-md-and-down pink white--text">Text</v-btn>
        <v-btn depressed color = "pink">Text</v-btn>
        <v-btn flat color = "pink">Text</v-btn>
        <v-btn class = "pink white--text">
          <v-icon>email</v-icon>
          <span>email me</span>
        </v-btn>
        <v-btn large class = "pink white--text">
          <v-icon left>email</v-icon>
          <span>email me</span>
        </v-btn>
        <v-btn depressed fab small dark color = "purple">
          <v-icon>favorite</v-icon>
        </v-btn>



        <v-layout row>
          <v-flex xs12 md6>
            <v-btn outline block class="success">1</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outline block class="success">2</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outline block class="success">2</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn outline block class="success">2</v-btn>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs4 md3>
            <v-btn outline block class="primary">1</v-btn>
          </v-flex>
          <v-flex xs4 md3>
            <v-btn outline block class="primary">2</v-btn>
          </v-flex>
        </v-layout>
    </v-container>
  </div>

</template>

<script>


  export default {
    components: {

    },
    data() {
      return {
        projects: [
          {title: 'Disign a new website', persone: 'The Net Ninja', due: '1st Mar 2019', status: 'ongoing', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {title: 'Code up the Home page', persone: 'MOZ', due: '14st Feb 2018', status: 'complete', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {title: 'Code up the Projects page', persone: 'Alena', due: '1st Sum 2019', status: 'ongoing', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {title: 'Code up the Team page', persone: 'The Net Ninja', due: '31st Oct 2018', status: 'complete', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        ]
      }
    },
    methods: {
      sortBy(prop) {
        this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)
      }
    }
  }
</script>
<style>
  .project.complete {
    border-left: 4px solid green;
  }
  .project.ongoing {
    border-left: 4px solid red;
  }

  .v-chip.complete {
    background: green;
  }
  .v-chip.ongoing {
    background: red;
  }
</style>
