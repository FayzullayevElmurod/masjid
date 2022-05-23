<template>
  <div>
    <header-app></header-app>
    <router-view />
    <footer-app></footer-app>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    "header-app": Header,
    "footer-app": Footer,
  },
};
</script>
