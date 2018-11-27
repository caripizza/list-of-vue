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
    width: 50%;
    float: left;
}
li {
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
li:hover {
    opacity: .5;
    outline: 2px solid purple;
}
li h3 {
    justify-content: space-evenly;
}
li img {
    width: 15%;
    height: 15%;
    padding: 1em 2em 1em 0em;
    margin-left: 5em;
}
@media screen and (max-width: 680px) {
    ul {
        width: 100%;
    }
}
</style>