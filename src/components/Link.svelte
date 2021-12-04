<script>
  export let url;
  export let title;

  import { browser } from "$app/env";

  const isTouchDevice = () => {
    if (browser) {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    } else return false;
  };
</script>

<a href={url} target="_blank"
  ><div
    class="bg-white rounded-xl border-2 border-black cursor-pointer mb-2 transition-transform transform transform-gpu {!isTouchDevice()
      ? 'motion-safe:hover:scale-105'
      : ''} motion-safe:active:scale-95"
  >
    <h2 class="pt-4 pb-2 text-center text-xl">{title}</h2>
  </div></a
>

<style>
  h2 {
    font-family: "NCS Radhiumz";
  }
</style>
