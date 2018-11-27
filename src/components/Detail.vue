<template>
    <section>
    <div v-if="synth">
        <img v-bind:src="synth.image" class="selected-img">
        <h2>{{synth.name}}</h2>
        <p>{{synth.year}}</p>
        <p>{{synth.polyphony}}</p>
        <p><a v-bind:href="synth.href" target="_blank">Read More</a></p>
    </div>
    <div class="synth-heading" v-else>
        <p>(Please select a synth)</p>
    </div>
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
section {
    width: 40%;
    float: right;
    margin-right: 50px;
    margin-top: 10px;
}
div.synth-heading {
    margin-top: 15%;
    font-size: 20px;
    font-style: italic;
    color: purple;
}
div img.selected-img {
    width: 100%;
}
@media screen and (max-width: 680px) {
    section {
        width: 100%;
        margin: 0 auto;
    }
}
</style>
