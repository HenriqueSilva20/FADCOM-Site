<template>
  <v-container class="mt-15 mb-15">
    <v-row class="mb-3">
      <v-col cols="12">
        <v-text class="text-center">
          <h3>Conheça os</h3>
          <h2>Projectos Apoiados pelo FADCOM</h2>
        </v-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" elevation="3">
        <v-card class="mx-auto bg-primary p-8">
          <v-img
            height="350px"
            src="../assets/banner/banner1.jpg"
            cover
          ></v-img>
          <v-card-title class="pt-3">Software Olho de Aguia V2.0</v-card-title>
          <v-card-actions>
            <v-btn
              class="ml-4 mb-4 bg-botao text-uppercase"
              color="blue-lighten-2"
              text="Saber mais"
              to="/projetos/id"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4" elevation="3">
        <v-card class="mx-auto bg-primary p-8">
          <v-img
            height="350px"
            src="../assets/banner/banner2.jpg"
            cover
          ></v-img>
          <v-card-title class="pt-3">NGOLA ONLINE - Conectando pessoas</v-card-title>
          <v-card-actions>
            <v-btn
              class="ml-4 mb-4 bg-botao text-uppercase"
              color="blue-lighten-2"
              text="Saber mais"
              to="/projetos/id"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4" elevation="3">
        <v-card class="mx-auto bg-primary p-8">
          <v-img
            height="350px"
            src="../assets/banner/banner3.jpg"
            cover
          ></v-img>
          <v-card-title class="pt-3">OLHO METEREOLOÓGICO - Um guia para o INAMET</v-card-title>
          <v-card-actions>
            <v-btn
              class="ml-4 mb-4 bg-botao text-uppercase"
              color="blue-lighten-2"
              text="Saber mais"
              to="/projetos/id"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
