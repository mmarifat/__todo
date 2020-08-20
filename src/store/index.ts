import Vue from "vue";
import Vuex from "vuex";
import {ITodo} from "@/interfaces/IEssentials";
import uniqid from 'uniqid'

export interface StoreInterface {
	todo: Array<ITodo>;
}

Vue.use(Vuex);

export default new Vuex.Store<StoreInterface>({
	state: {
		todo: [],
	},
	mutations: {
		addTodo(state, todo: string) {
			let newTodo: ITodo = {
				_id: uniqid(), completed: false, name: todo, color: '#' + ('BCDEF' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6)
			}
			state.todo.push(newTodo);
		},
		editTodo(state, todo: ITodo) {
			state.todo[state.todo.indexOf(todo)] = todo;
		},
		deleteTodo(state, todo: ITodo) {
			state.todo.splice(state.todo.indexOf(todo), 1);
		},
		completeTodo(state, todo: ITodo) {
			state.todo[state.todo.indexOf(todo)].completed = true;
		},
		activeTodo(state, todo: ITodo) {
			state.todo[state.todo.indexOf(todo)].completed = false;
		},
		clearCompleted(state) {
			state.todo = state.todo.filter(c => c.completed !== true)
		},
		completeAll(state) {
			state.todo = state.todo.map(a => {
				a.completed = true
				return a
			})
		},
		activeAll(state) {
			state.todo = state.todo.map(a => {
				a.completed = false
				return a
			})
		}
	},
	actions: {
		addTodo(state, todo: string) {
			state.commit("addTodo", todo);
		},
		editTodo(state, todo: ITodo) {
			state.commit("editTodo", todo);
		},
		deleteTodo(state, todo: ITodo) {
			state.commit("deleteTodo", todo);
		},
		completeTodo(state, todo: ITodo) {
			state.commit("completeTodo", todo);
		},
		activeTodo(state, todo: ITodo) {
			state.commit("activeTodo", todo);
		},
		clearCompleted(state) {
			state.commit("clearCompleted");
		},
		completeAll(state) {
			state.commit("completeAll");
		},
		activeAll(state) {
			state.commit("activeAll");
		}
	},
	getters: {
		ALL: (state) => state.todo,
		Completed: (state) => state.todo.filter(status => status.completed === true),
		Active: (state) => state.todo.filter(status => status.completed === false),
	},
});
