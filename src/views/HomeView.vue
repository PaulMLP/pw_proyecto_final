<template>
  <div class="home">
    <Particulas id="particulas" />
  </div>
</template>

<script>
import Particulas from "@/modules/publicacion/components/Particulas.vue";
export default {
  name: "HomeView",
  components: {
    Particulas,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: 100%;
}

#particulas {
  position: fixed;
  height: 100%;
  width: 100%;
}

section {
  padding: 10px;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  background: rgb(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
}
</style>
