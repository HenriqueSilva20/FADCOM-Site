<template>
  <v-app>
    <NavBar />
    <Slide />
    <Destaques />
    <Estatistica />
    <ProjetosLista />
    <ParceirosEmpresa />
    <FooterSite />
  </v-app>
</template>

<script setup>

  import Destaques from '@/components/DestaquesNews.vue';
  import NavBar from '@/components/NavBar.vue';
  import Slide from '@/components/SlideBanner.vue';
  import Estatistica from '@/components/EstatisticaInternet.vue';
  import ProjetosLista from '@/components/ProjetosLista.vue';
  import ParceirosEmpresa from '@/components/ParceirosEmpresa.vue';
  import FooterSite from '@/components/FooterSite.vue';

</script>
