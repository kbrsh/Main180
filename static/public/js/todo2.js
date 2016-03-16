var STORAGE_KEY = 'my-180-todos';

	todoStorage = {
		fetch: function () {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

var moonInstance = new Moon({
  el: '#app',
  data: {
    newTodo: '',
    todos: todoStorage.fetch()
  },
  watch: {
			todos: {
				handler: function (todos) {
				  todoStorage.save(todos);
				},
				deep: true
			}
		},
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})
