<template>
    <ul>
        <li v-for="synth in synths"
            v-bind:key="synth.name"
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
li {
    display: flex;
}

</style>
