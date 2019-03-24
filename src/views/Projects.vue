<template>
  <div class="projects">
    <h1 class = "subheading grey--text">Projects</h1>

  <v-container claas="ma-5">
    <v-expansion-panel>
    <v-expansion-panel-content
      v-for="project in myPrijects"
      :key="project.title"
    >
      <template v-slot:header>
        <div>{{project.title}}</div>
      </template>
      <v-card>
        <v-card-text>
          <div class="font-weight-bold">
            due to {{project.due}}
          </div>
          <div>
            {{project.content}}
          </div>
        </v-card-text>
      </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
    computed: {
      myPrijects(){
        return this.projects.filter(project => {
          return project.persone === 'The Net Ninja'
        })
      }
    }
  }
</script>
