<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="card mt-5">
            <div class="card-body">
              <ul>
                <li v-for="todo in todos" :key="todo.text">
                  <input
                    :checked="todo.done"
                    @change="toggle(todo)"
                    type="checkbox"
                  />
                  <span :class="{ done: todo.done }">{{ todo.text }}</span>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm mt-2"
                    @click="remove(todo)"
                  >
                    Danger
                  </button>
                </li>
                <li>
                  <input
                    @keyup.enter="addTodo"
                    placeholder="What needs to be done?"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle",
      remove: "todos/remove",
    }),
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
