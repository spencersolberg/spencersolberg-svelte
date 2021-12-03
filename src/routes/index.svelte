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
</script>

<h1 class="mx-auto max-w-md text-4xl mt-4 text-center">Spencer Solberg</h1>

<img src="/favicon.png" alt="Spencer in a cube" class="mt-4 w-40 mx-auto" />

<li class="mx-auto max-w-md mt-4 mb-4 list-none">
  <Link title="🐦 Twitter" url="https://twitter.com/spencersolberg_" />
  <Link title="⚡️ Strike" url="https://strike.me/spencersolberg" />
  <Link title="📸 Instagram" url="https://instagram.com/spencersolberg" />
  <Link title="💻 GitHub" url="https://github.com/spencersolberg" />
  <Link title="🤝 spencersolberg/" url="https://spencersolberg/" />
  <Link title="🌐 spencersolberg.com" url="https://spencersolberg.com" />
  <Link title="💈 Tags.Town" url="https://tags.town" />
  <Link title="🔥 Dumpster Fire" url="https://dumpster.fr" />
</li>

<style>
  h1 {
    font-family: "NCS Radhiumz";
  }
</style>
