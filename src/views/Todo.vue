<template>
  <div class="todo">
    <h3 class = "subheading grey--text">Todo list</h3>
    <v-container class="ma-5">
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm6>


          <v-card-title fluid class="justify-center">
            <h1 class="green--text text--lighten-4 display-3 font-weight-bold">TODOS</h1>
          </v-card-title>

          <v-text-field color="green" prepend-inner-icon="crop_square" solo clearable placeholder="What needs to be done?" v-model="newTodo" @keydown.enter="addTodo()">
          </v-text-field>

          <v-card v-show="todos.length > 0">
            <v-progress-linear color="success" :value="((completed / (completed + remaining)) * 100)"></v-progress-linear>
            <v-tabs slider-color="success">
              <span class="green--text ma-2">
                {{ remaining }} items left
              </span>
              <v-spacer></v-spacer>
              <v-tab color="green" :class= "{selected: filter === 'all'}" @click.prevent = "filter = 'all'">all</v-tab>
              <v-tab color="green" :class= "{selected: filter === 'active'}" @click.prevent = "filter = 'active'">active</v-tab>
              <v-tab color="green" :class= "{selected: filter === 'completed'}" @click.prevent = "filter = 'completed'">completed</v-tab>
            </v-tabs>
          </v-card>

          <v-divider v-show="todos.length > 0"></v-divider>
          <v-list v-show="todos.length > 0">
            <v-list-tile class="todo" v-for="todo in filteredTodos">
              <v-list-tile-action  >
                <v-checkbox color="green" :label="todo.value" :value="todo.value" v-model="todo.completed"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                 <v-list-tile-title> </v-list-tile-title>
             </v-list-tile-content>
             <v-list-tile-action>
               <v-btn flat icon small color="pink" @click.prevent = 'deleteTodo(todo)'>
                 <v-icon>clear</v-icon>
               </v-btn>
             </v-list-tile-action>
            </v-list-tile>
           </v-list>

           <v-btn color="success" text-capitalize block round depressed v-show="completed" @click.prevent = "clearCompleted()"> clear completed </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      todos: [],
      newTodo: '',
      filter: 'all',

    }
  },
  created(){
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  },
  methods: {
   addTodo(){
    this.todos.push({ value: this.newTodo, completed: false });
    this.newTodo = '';
    localStorage.setItem('todos', JSON.stringify(this.todos));

    },
    deleteTodo(todo) {
      // this.todos = this.todos.filter(i => i !== todo)
      this.todos.splice(this.todos.indexOf(todo), 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    clearCompleted(){
      this.todos.slice(0).forEach(todo => {
        if (todo.completed) {
          this.todos.splice(this.todos.indexOf(todo), 1);
        }
      });
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },


  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length
    },
    completed() {
      return this.todos.filter(todo => todo.completed).length
    },
    filteredTodos() {
      if(this.filter === 'active') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed)
      } else {
          return this.todos
        }
      },
    }
}
</script>

<style scoped>

</style>
