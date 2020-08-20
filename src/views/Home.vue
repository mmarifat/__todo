<template>
    <v-layout row wrap>
	<v-flex text-xs-center class="pa-4">
	    <h1 class="font-weight-medium my-3 text-h3 blue--text">TODOS</h1>
	    
	    <v-text-field autocomplete="off" placeholder="Add something" single-line solo v-model="todo" @keyup.enter.native="createNew"/>
	    
	    <v-row class="pl-1">
		<v-col class="text-right">
		    <v-btn-toggle v-model="toggle" color="dark" group dense mandatory tile>
			<v-btn :value="cStatus.ALL" text small v-html="'All'"/>
			<v-btn :value="cStatus.ACTIVE" text small v-html="'Active'"/>
			<v-btn :value="cStatus.COMPLETED" text small v-html="'Completed'"/>
		    </v-btn-toggle>
		    <v-btn @click="clearCompleted" text small v-html="'Clear Completed'" v-if="todos.some(check => check.completed === true)"/>
		</v-col>
		<v-col class="col-auto text-left pt-4 order-md-first">
		    <span class="text-sm-caption">{{ todos.length }} item left</span>
		</v-col>
	    </v-row>
	    
	    <v-list>
		<v-list-item v-for="item in todos" :key="item._id">
		    <v-list-item-icon @click="completeTodo(item)">
			<v-tooltip top color="green darken-2">
			    <template v-slot:activator="{ on, attrs }">
				<v-icon v-bind="attrs" v-on="on" color="indigo accent-4" small>
				    {{ item.completed ? 'fa fa-check-circle' : 'fa fa-circle' }}
				</v-icon>
			    </template>
			    <span>{{ item.completed ? 'Completed' : 'Make Complete' }}</span>
			</v-tooltip>
		    </v-list-item-icon>
		    
		    <v-list-item-content>
			<v-dialog v-model="show" persistent max-width="290">
			    <template v-slot:activator="{ on, attrs }">
				<span v-bind="attrs" v-on="on" class="text">
				    {{ item.name }}
				</span>
			    </template>
			    <v-card>
				<v-card-text>
				    <v-text-field v-model="item.name" @keyup.enter.native="editTodo(item)" single-line/>
				</v-card-text>
			    </v-card>
			</v-dialog>
		    </v-list-item-content>
		    
		    <v-list-item-icon @click="deleteTodo(item)">
			<v-tooltip top color="red darken-2">
			    <template v-slot:activator="{ on, attrs }">
				<v-icon v-bind="attrs" v-on="on" color="red accent-4" small>fa fa-trash</v-icon>
			    </template>
			    <span>Remove</span>
			</v-tooltip>
		    </v-list-item-icon>
		</v-list-item>
	    </v-list>
	</v-flex>
    </v-layout>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import {ITodo} from "@/interfaces/IEssentials";
import {CStatus} from "@/Helpers/Helper";

@Component
export default class Home extends Vue {
    cStatus = CStatus
    toggle: CStatus = CStatus.ALL
    todo: string = null
    show: boolean = false
    
    todos: Array<ITodo> = this.$store.getters.ALL
    
    @Watch('toggle')
    remap() {
	if (this.toggle === CStatus.ACTIVE)
	    this.todos = this.$store.getters.Active
	
	else if (this.toggle === CStatus.COMPLETED)
	    this.todos = this.$store.getters.Completed
	
	else
	    this.todos = this.$store.getters.ALL
    }
    
    createNew() {
	if (this.todo) {
	    this.$store.dispatch("addTodo", this.todo)
	    this.todo = null
	}
    }
    
    deleteTodo(row: ITodo) {
	this.$store.dispatch("deleteTodo", row)
    }
    
    editTodo(row: ITodo) {
	this.$store.dispatch("editTodo", row)
	this.show = false
    }
    
    completeTodo(row: ITodo) {
	this.$store.dispatch("completeTodo", row)
    }
    
    clearCompleted(row: ITodo) {
	this.$store.dispatch("clearCompleted")
	this.remap()
    }
}
</script>

<style lang="scss">

</style>
