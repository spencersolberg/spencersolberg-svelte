<script>
  import "virtual:windi.css";
  import { onMount } from "svelte";
  import { Gradient } from "../Gradient.js";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    // Create your instance
    const gradient = new Gradient();

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas");
  });
</script>

<main>
  <slot />
  <Footer />
  <canvas id="gradient-canvas" data-transition-in />
</main>

<style>
  #gradient-canvas {
    width: 100vw;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -9999;
    --gradient-color-1: #3a88fe;
    --gradient-color-2: #6ec3f4;
    --gradient-color-3: #be38f3;
    --gradient-color-4: #ff40ff;
  }

  @font-face {
    font-family: "Fluro Bold";
    src: url("/FluroBold.woff");
  }
</style>
