<template>
  <div id="app">
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
    name: 'app',
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
            console.log('user selected synth', synth.name);
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