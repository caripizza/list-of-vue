<template>
    <ul>
        <li v-for="synth in synths"
            v-bind:key="synth.name"
            v-on:click="onSelect(synth)">
            <h3>{{synth.name}}</h3>
            <img v-bind:src="synth.image">
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        synths: Array,
        onSelect: Function
    }
};
</script>

<style>
ul {
    list-style: none;
    padding-left: 0px;
}
li {
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
}
li img {
    width: 10%;
    height: 10%;
    margin: 0 auto;
}
</style>