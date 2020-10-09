<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap";
export default {
  name: "App",
  components: {
    GoogleMap,
  },
};
</script>

