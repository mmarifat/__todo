<template>
    <v-app id="app">
	<v-main>
	    <v-container id="container">
		<router-view/>
	    </v-container>
	</v-main>
    </v-app>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";

@Component
export default class App extends Vue {
    @Watch('$route', {immediate: true})
    changeDocTitle() {
	document.title = this.$route.meta.title + ' :: MMARIFAT'
    }
}
</script>

<style lang="scss">

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#container {
    max-width: 550px;
    padding: 8px
}
</style>
