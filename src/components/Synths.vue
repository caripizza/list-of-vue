<template>
    <ul>
        <pre>{{ synths }}</pre>
        <li>
            <h3>Synth Name</h3>
            <img src="http://www.vintagesynth.com/sites/default/files/2017-05/ms20.jpg">
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
