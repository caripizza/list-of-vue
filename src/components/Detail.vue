<template>
    <section>
    <div v-if="synth">
        <h2>{{synth.name}}</h2>
        <p>{{synth.year}}</p><p>{{synth.polyphony}}</p>
        <img v-bind:src="synth.image">
    </div>
    <div class="synth-heading" v-else></div>
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
div.synth-heading {
    font-size: 20px;
}
</style>
