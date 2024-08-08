<template>
  <v-carousel
    height="640"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    delimiter-icon="mdi-circle"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="getImageSrc(item.src)"
      cover
      class="text-center"
      >
      <v-sheet style="background: #080d27bf" height="100%" tile>
        <div class="d-flex fill-height justify-center align-center">
          <div style="width: 70%"  class="mx-auto text-h3 text-white font-weight-black">{{ item.tema }}</div>
        </div>
      </v-sheet>
      <h1>
        {{ item.tema }}
      </h1>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "banner5.jpg",
          tema: "FADCOM - FUNDO DE APOIO AO DESENVOLVIMENTO DA COMUNICAÇÃO",
        },
        {
          src: "banner6.jpg",
          tema: "INTERLIGANDO PROVÍNCIAS, CONECTANDO PESSOAS",
        },
        {
          src: "banner7.jpg",
          tema: "DANDO UPGRADE NA COMUNICAÇÃO VIA SATELITE EM ANGOLA",
        },
        {
          src: "banner8.jpg",
          tema: "UMA EQUIPE EXCEPCIONAL DE PROGRAMADORES ",
        },
      ],
    };
  },
  methods: {
    getImageSrc(imageName) {
      return new URL(`../assets/banner/${imageName}`, import.meta.url).href;
    },
  },
};
</script>

<style>
.v-carousel .v-carousel__controls .v-carousel__control {
  /* Cor personalizada para os botões de avançar/recuar */
  background-color: #080d27bf !important;
  /* Cor do ícone */
  color: white;
}

.v-carousel .v-window__controls .v-window__control {
  /* Cor personalizada para os dots */
  background-color: #080d27bf !important;
}
</style>
