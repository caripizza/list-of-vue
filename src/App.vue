<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Synths v-bind:synths="synths"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Synths from './components/Synths';
import synths from '../src/synths.js';

export default {
//    name: 'app',
    data() {
        return {
            synths
        };
    },
    components: {
        Synths
    }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: purple;
}
</style>
