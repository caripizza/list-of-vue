<template>
    <ul>
        <li v-for="synth in synths"
            v-bind:key="synth.name"
            @click="onSelect(synth)"
            >
            <h3>{{synth.name}}</h3>
            <img v-bind:src="synth.image">
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        synths: Array
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
    border: 2px solid purple;
    cursor: pointer;
}
li img {
    width: 25%;
    height: 25%;
    margin: 0 auto;
}

</style>
