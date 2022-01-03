<script>
  import Link from "../components/Link.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    (function () {
      var ticker = document.createElement("script");
      ticker.async = true;
      ticker.src = "https://embed.twitcker.com/ticker/spencersolberg_.js";
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(ticker);
    })();
  });

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

<h1 class="mx-auto max-w-md text-5xl mt-4 text-center">Spencer Solberg</h1>

<img src="/favicon.png" alt="Spencer in a cube" class="mt-4 w-40 mx-auto transition-transform transform transform-gpu {!isTouchDevice()
  ? 'motion-safe:hover:scale-105'
  : ''} motion-safe:active:scale-95"
  onmouseup="party.confetti(this)" />

<li class="max-w-md mx-auto px-2 mt-4 mb-4 x-2 list-none">
  <Link title="🐦 Twitter" url="https://twitter.com/spencersolberg_" />
  <Link title="📸 Instagram" url="https://instagram.com/spencersolberg" />
  <Link title="💻 GitHub" url="https://github.com/spencersolberg" />
  <Link title="💵 hiphip.tips" url="https://hiphip.tips/spencersolberg" />
  <Link title="🤝 spencersolberg/" url="https://spencersolberg/" />
  <Link title="🌐 spencersolberg.com" url="https://spencersolberg.com" />
  <Link title="💈 Tags.Town" url="https://tags.town" />
  <Link title="🔥 Dumpster Fire" url="https://dumpster.fr" />
</li>

<style>
  h1 {
    font-family: "Fluro Bold";
  }
</style>
