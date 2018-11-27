<template>
    <ul>
        <li v-for="synth in synths"
            v-bind:key="synth.name"
            v-on:click="onSelect(synth)">
            <img v-bind:src="synth.image">
            <h3>{{synth.name}}</h3>
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
    flex-direction: row;
    cursor: pointer;
}
li:hover {
    opacity: .5;
}
li h3 {
    justify-content: space-evenly;
}
li img {
    width: 10%;
    height: 10%;
    padding: 1em 2em 1em 0.5em;
    margin-left: 5em;
}
</style>