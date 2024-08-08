<template>
  <v-footer>
    <v-row>
      <v-col cols="12" class="bg-primary">
        <v-container>
          <v-row>
            <v-col cols="3" class="">
              <v-img src="../assets/img/logo.png" alt="FADCOM Logo" max-width="100"></v-img>
              <div>
                <h5 class="text-left font-weight-regular">FUNDO DE APOIO AO DESENVOLVIMENTO DAS COMUNICAÇÕES </h5>
              </div>
            </v-col>
            <v-col cols="3">
              <h5>Sobre a FADCOM</h5>
              <v-ul>
                <li style="font-size: .8rem" class="mb-3 mt-3">Definição</li>
                <li style="font-size: .8rem" class="mb-3">Presidente</li>
                <li style="font-size: .8rem" class="mb-3">Estrutura Organizacional</li>
              </v-ul>
            </v-col>
            <v-col cols="3">
              <h5>Publicações</h5>
              <v-ul>
                <li style="font-size: .8rem" class="mb-3 mt-3">Notíciais</li>
                <li style="font-size: .8rem" class="mb-3">Galeria</li>
                <li style="font-size: .8rem" class="mb-3">Projectos</li>
              </v-ul>
            </v-col>
            <v-col cols="3">
              <h5>Links Úteis</h5>
              <v-ul>
                <li style="font-size: .8rem" class="mb-3 mt-3">Governo de Angola</li>
                <li style="font-size: .8rem" class="mb-3">MINTTICS</li>
                <li style="font-size: .8rem" class="mb-3">Ministério das Finanças</li>
                <li style="font-size: .8rem" class="mb-3">Instituto Angolano das Comunicações</li>
              </v-ul>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="bg-botao">
        <v-container>
          <v-row>
            <v-col cols="12" class="d-flex justify-lg-space-between">
              <div>
                <h5>FADCOM © Todos os Direitos Reservados.</h5>
              </div>
              <div>
                <h5>Termos & Políticas de Uso</h5>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>