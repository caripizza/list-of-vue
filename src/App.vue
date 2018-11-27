<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Synths
      v-bind:synths="synths"
      v-bind:onSelect="handleSelect"/>
    <Detail
      v-bind:synth="selected"
    />
  </div>
</template>

<script>
import Synths from './components/Synths';
import synths from '../src/synths.js';
import Detail from './components/Detail';

export default {
//    name: 'app',
    data() {
        return {
            synths,
            selected: null
        };
    },
    components: {
        Synths,
        Detail
    },
    methods: {
        handleSelect(synth) {
            this.selected = synth;
        }
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
