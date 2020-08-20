<template>
    <v-layout row wrap>
	<v-flex text-xs-center class="pa-4">
	    <h1 class="font-weight-medium my-3 text-h3 blue--text">TODOS</h1>
	    
	    <v-text-field autocomplete="off" placeholder="Add something" single-line solo v-model="todo" @keyup.enter.native="createNew"/>
	    
	    <v-row class="pl-1">
		<v-col class="col-12 col-md text-md-right">
		    <v-btn-toggle v-model="toggle" color="dark" group dense mandatory tile>
			<v-btn outlined :value="cStatus.ALL" text small v-html="'All'"/>
			<v-btn outlined :value="cStatus.ACTIVE" text small v-html="'Active'"/>
			<v-btn outlined :value="cStatus.COMPLETED" text small v-html="'Completed'"/>
		    </v-btn-toggle>
		    <v-btn outlined @click="clearCompleted" text small v-html="'Clear Completed'"
			   v-if="todos.some(check => check.completed === true)"/>
		</v-col>
		<v-col class="col-12 col-md-auto text-center order-md-first pt-0">
		    <v-checkbox dense v-model="completeAll" :label="todos.length+' item left'" @click="makeAllComplete"/>
		</v-col>
	    </v-row>
	    
	    <v-list>
		<v-list-item v-for="item in todos" :key="item._id">
		    <v-list-item-icon @click="changeStatus(item)">
			<v-tooltip top color="green darken-2">
			    <template v-slot:activator="{ on, attrs }">
				<v-icon v-bind="attrs" v-on="on" :color="item.completed ? 'grey' : 'indigo accent-4'" small>
				    {{ item.completed ? 'fa fa-check-circle' : 'fa fa-circle' }}
				</v-icon>
			    </template>
			    <span>{{ item.completed ? 'Make Active' : 'Make Complete' }}</span>
			</v-tooltip>
		    </v-list-item-icon>
		    
		    <v-list-item-content>
			<v-dialog v-model="show" persistent max-width="290">
			    <template v-slot:activator="{ on, attrs }">
				<span v-bind="attrs" v-on="on" :class="item.completed ? 'text-decoration-line-through grey--text' : ''">
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
				<v-icon v-bind="attrs" v-on="on" :color="item.completed ? 'grey' : 'red accent-4'" small>fa fa-times</v-icon>
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
    completeAll: boolean = false
    
    todos: Array<ITodo> = this.$store.getters.ALL
    
    @Watch('toggle')
    @Watch('$store.state', {deep: true})
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
    
    changeStatus(row: ITodo) {
	row.completed ? this.$store.dispatch("activeTodo", row) : this.$store.dispatch("completeTodo", row)
    }
    
    clearCompleted() {
	this.$store.dispatch("clearCompleted")
	this.completeAll = false
    }
    
    makeAllComplete() {
	this.completeAll ? this.$store.dispatch("completeAll") : this.$store.dispatch('activeAll')
    }
}
</script>

<style lang="scss">
.v-list-item__icon {
    cursor: pointer;
}
</style>
