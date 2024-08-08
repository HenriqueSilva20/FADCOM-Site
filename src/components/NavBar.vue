<template>
  <v-app-bar class="bg-primary" :elevation="2" fixed>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-img
            src="../assets/img/logo.png"
            alt="FADCOM Logo"
            max-width="60"
          ></v-img>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="auto" class="pt-4">
          <v-btn text class="white--text" to="/">HOME</v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="white--text"
                v-bind="attrs"
                v-on="on"
              >
                FADCOM
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in fadcomItems" :key="index">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn class="white--text font-weight-normal" to="/galeria">GALERIA</v-btn>
          <v-btn class="white--text font-weight-normal" to="/projectos">PROJECTOS</v-btn>
          <v-btn class="white--text font-weight-normal" to="/noticias">NOTÍCIAS</v-btn>
          <v-btn class="white--text font-weight-normal" to="/contactos">CONTACTOS</v-btn>
          <v-btn @click="toggleTheme" icon>
            <v-icon>
              {{ currentTheme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

</template>

<script>
  export default {
    data() {
      return {
        fadcomItems: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
        currentTheme: this.$vuetify ? this.$vuetify.theme.global.name : 'light',
      };
    },
    watch: {
      // Observa mudanças no tema e atualiza a propriedade currentTheme
      '$vuetify.theme.global.name'(newTheme) {
        this.currentTheme = newTheme;
      },
    },
    methods: {
      toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.$vuetify.theme.global.name = this.currentTheme;
      },
    },
  };
</script>

<style scoped>
  .v-toolbar-title {
    font-weight: bold;
  }

  .white--text {
    font-size: 1rem;
  }

  .v-btn {
    font-weight: bold;
  }
</style>
