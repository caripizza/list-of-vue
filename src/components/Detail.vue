<template>
    <section>
    <div v-if="synth">
        <h2>{{synth.name}}</h2>
        <p>{{synth.year}}</p>
        <img v-bind:src="synth.image">
    </div>
    <div v-else>Please select a synth</div>
    </section>
</template>

<script>
export default {
    props: {
        synth: Object
    }
};
</script>

<style>

</style>
