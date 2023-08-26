<template>
  <div class="home">
    <Particulas id="particulas" />

    <!-- <Carousel
      :value="products"
      :numVisible="1"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.data.image"
          alt="imagen de galeria"
          style="height:450px"
        />
      </template>
    </Carousel> -->
    <div class="card flex justify-content-center" style="z-index: 1">
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
  </div>
</template>

<script>
import Particulas from "@/modules/publicacion/components/Particulas.vue";
import Carousel from "primevue/carousel";
import Galleria from "primevue/galleria";

export default {
  name: "HomeView",
  components: {
    Particulas,
    Carousel,
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
.home {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
