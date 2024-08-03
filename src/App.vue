<script setup>
 gsap.registerPlugin(ScrollToPlugin);
 gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


</script>

<template class="bg-slate-100">
   <RouterView />
</template>

<style scoped>
</style>
