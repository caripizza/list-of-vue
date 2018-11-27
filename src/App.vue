<template>
  <div id="app">
    <h1>Vue list app</h1> 
    <Synths
      v-bind:synths="synths"
      v-bind:onSelect="handleSelect"/>
    <Detail
      v-bind:synth="selected"/>
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
            this.selected = synth === this.selected ? null : synth;
            console.log('you selected the', synth.name);
        }
    }
};
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    color: purple;
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(255,195,0,1) 0%,rgba(239,4,231,1) 100%);
}
h1 {
    padding: 15px;
    margin: 0 auto;
}
</style>