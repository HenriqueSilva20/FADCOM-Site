<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-lg-space-between">
          <div>
            <h3>Destaques</h3>
            <h2>Mergulhe nas novidades da FADCOM</h2>
          </div>
          <div class="d-flex justify-end align-content-end">
            <v-btn class="bg-primary" to="/all/destaques">Ver todos <v-icon right>mdi-chevron-right</v-icon></v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto elevation-6 bg-cardDestaque">
          <v-img
            height="200px"
            src="../assets/img/dest1.png"
            cover
          ></v-img>

          <v-card-title> FADCOM - ANGOTIC 2024 </v-card-title>

          <v-card-subtitle>
            FADCOM atraiu estudantes e visitantes com uma experiência inovadora
            de Realidade Virtual
          </v-card-subtitle>

          <v-card-actions class="pl-4 pb-6">
            <v-btn
              class="bg-botao"
              text="Ler mais"
              to="/destaque/id"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto elevation-6 bg-cardDestaque">
          <v-img
            height="200px"
            src="../assets/img/dest2.png"
            cover
          ></v-img>

          <v-card-title> FADCOM - ANGOTIC 2024 </v-card-title>

          <v-card-subtitle>
            FADCOM atraiu estudantes e visitantes com uma experiência inovadora
            de Realidade Virtual
          </v-card-subtitle>

          <v-card-actions class="pl-4 pb-6">
            <v-btn
              class="bg-botao"
              text="Ler mais"
              to="/destaque/id"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto elevation-6 bg-cardDestaque">
          <v-img
            height="200px"
            src="../assets/img/dest3.png"
            cover
          ></v-img>

          <v-card-title> FADCOM - ANGOTIC 2024 </v-card-title>

          <v-card-subtitle>
            FADCOM atraiu estudantes e visitantes com uma experiência inovadora
            de Realidade Virtual
          </v-card-subtitle>

          <v-card-actions class="pl-4 pb-6">
            <v-btn
              class="bg-botao"
              text="Ler mais"
              to="/destaque/id"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto elevation-6 bg-cardDestaque">
          <v-img
            height="200px"
            src="../assets/img/dest4.png"
            cover
          ></v-img>

          <v-card-title> FADCOM - ANGOTIC 2024 </v-card-title>

          <v-card-subtitle>
            FADCOM atraiu estudantes e visitantes com uma experiência inovadora
            de Realidade Virtual
          </v-card-subtitle>

          <v-card-actions class="pl-4 pb-6">
            <v-btn
              class="bg-botao"
              text="Ler mais"
              to="/destaque/id"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
