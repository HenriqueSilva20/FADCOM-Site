<template>
  <v-container class="mb-15">
    <v-row class="mb-3">
      <v-col cols="12">
        <v-text class="text-center">
          <h4>Nossos Parceiros</h4>
          <h2>Contribuintes do FADCOM</h2>
        </v-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet class="mx-auto">
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-primary"
            show-arrows
          >
            <v-slide-group-item
              v-for="(item, index) in items"
              :key="index"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                :class="['ma-4', selectedClass]"
                color="white"
                height="200"
                width="200"
                elevation="3"
                @click="toggle"
              >
                <v-img :src="getImageSrc(item.image)" height="200px" contain></v-img>
                <div class="d-flex fill-height align-center justify-center bg-white">
                  <v-scale-transition>
                    <v-icon
                      v-if="isSelected"
                      color="white"
                      icon="mdi-close-circle-outline"
                      size="48"
                    ></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>

          <v-expand-transition>
            <v-sheet v-if="model != null" height="50" class="pb-8">
              <div class="d-flex fill-height align-center justify-center">
                <h3 class="text-h6">Parceiro -> {{ selectedItemName }}</h3>
              </div>
            </v-sheet>
          </v-expand-transition>

        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        model: null,
        items: [
          { image: "parc1.png", name: "Unitel" },
          { image: "parc2.png", name: "Zap" },
          { image: "parc3.png", name: "TVCABO" },
          { image: "parc4.png", name: "PARATUS" },
          { image: "parc5.png", name: "TV ZIMBO" },
          { image: "parc6.png", name: "Girassol" },
        ],
      };
    },
    methods: {
      getImageSrc(imageName) {
        return new URL(`../assets/img/${imageName}`, import.meta.url).href;
      }
    },
    computed: {
      selectedItemName() {
        return this.items[this.model]?.name || "None";
      },
    },
  };
</script>
