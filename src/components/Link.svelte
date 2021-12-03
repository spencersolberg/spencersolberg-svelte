<script>
    export let url;
    export let title;
</script>

<a href={url} target="_blank"><div class="bg-warm-gray-200 rounded-xl border-2 border-black cursor-pointer mb-2 transition-transform transform transform-gpu motion-safe:hover:scale-105 motion-safe:active:scale-95">
    <h2 class="pt-4 pb-2 text-center text-xl">{title}</h2>
</div></a>

<style>
    h2 {
        font-family: "NCS Radhiumz";
    }
</style>