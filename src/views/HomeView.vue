<template>
  <div class="home">
    <Particulas id="particulas" />
    <div class="cont-galeria">
      <Galleria
        :value="images"
        :numVisible="1"
        :circular="true"
        containerStyle="max-width: 100%;"
        :showItemNavigators="true"
        :showThumbnails="false"
        :showItemNavigatorsOnHover="true"
        :showIndicators="true"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.image"
            style="width: 100%; max-height: 60vh"
          />
        </template>
      </Galleria>
    </div>
    <div class="informacion">
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>

<script>
import Particulas from "@/modules/publicacion/components/Particulas.vue";
import Galleria from "primevue/galleria";

export default {
  name: "HomeView",
  components: {
    Particulas,
    Galleria,
  },
  data() {
    return {
      images: [
        {
          image:
            "https://e0.pxfuel.com/wallpapers/24/646/desktop-wallpaper-industrial-design-group.jpg",
        },
        {
          image:
            "https://wallpaper-house.com/data/out/10/wallpaper2you_376827.jpg",
        },
        {
          image:
            "https://static.vecteezy.com/system/resources/previews/012/721/545/original/doge-meme-icon-free-vector.jpg",
        },
        {
          image:
            "https://static.vecteezy.com/system/resources/previews/012/721/545/original/doge-meme-icon-free-vector.jpg",
        },
        {
          image:
            "https://static.vecteezy.com/system/resources/previews/012/721/545/original/doge-meme-icon-free-vector.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
#particulas {
  position: fixed;
  height: 100%;
  width: 100%;
}

.cont-galeria,
.card {
  z-index: 1;
}
.informacion {
  width: 100%;
  padding: 10px;
  border: solid gray;
  gap: 2%;
}
.informacion,
.card {
  display: flex;
  justify-content: center;
}

.card {
  height: 450px;
  width: 300px;
  border-radius: 5px;
  border: solid blue;
}
</style>
