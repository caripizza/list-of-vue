<template>
    <section>
    <div v-if="synth">
        <img v-bind:src="synth.image" class="selected-img">
        <h2>{{synth.name}}</h2>
        <p>{{synth.year}}</p><p>{{synth.polyphony}}</p>
        <p><a v-bind:href="synth.href" target="_blank">Read More</a></p>
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
div img.selected-img {
    width: 50%;
}
</style>
