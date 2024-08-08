<template>
  <v-container class="mt-13">
    <v-row>
      <v-col cols="12">
        <div>
          <div class="pb-4" style="border-bottom: 1px solid #222">
            <h3>Já conheces?</h3>
            <h2>Angola Online</h2>
          </div>
          <div class="pt-4">
            <p>
              É um projecto social, sem fins lucrativos com o objectivo de criar
              pontos de acesso público e gratuitos a Internet em diversos locais
              do país.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <div id="chartdiv" style="width: 100%; height: 400px"></div>
      </v-col>
      <v-col cols="4">
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="legend in legendItems" :key="legend.label">
              <v-list-item-content>
                <v-list-item-title>
                  <span
                    :style="{
                      backgroundColor: legend.color,
                      width: '16px',
                      height: '16px',
                      display: 'inline-block',
                      marginRight: '8px',
                    }"
                  ></span>
                  {{ legend.label }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data() {
      return {
        legendItems: [
          { color: "#00008B", label: "Menos de 5 pontos" },
          { color: "#0000CD", label: "Mais de 5 pontos" },
          { color: "#0000FF", label: "Mais de 10 pontos" },
          { color: "#1E90FF", label: "Mais de 20 pontos" },
        ],
      };
    },
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        // Carregar scripts
        am5.ready(function() {

          // Create root element
          var root = am5.Root.new("chartdiv");

          // Set themes
          root.setThemes([
            am5themes_Animated.new(root)
          ]);

          // Create the map chart
          var chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "rotateX",
            projection: am5map.geoMercator(),
            layout: root.horizontalLayout
          }));

          am5.net.load("https://www.amcharts.com/tools/country/?v=xz6Z", chart).then(function (result) {
            var geo = am5.JSONParser.parse(result.response);
            loadGeodata(geo.country_code);
          });

          // Create polygon series for continents
          var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            calculateAggregates: true,
            valueField: "value"
          }));

          polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            interactive: true
          });

          polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0x677935)
          });

          polygonSeries.set("heatRules", [{
            target: polygonSeries.mapPolygons.template,
            dataField: "value",
            min: am5.color(0x8ab7ff),
            max: am5.color(0x25529a),
            key: "fill"
          }]);

          polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
            heatLegend.showValue(ev.target.dataItem.get("value"));
          });

          function loadGeodata(country) {
            var defaultMap = "usaLow";

            if (country == "US") {
              chart.set("projection", am5map.geoAlbersUsa());
            } else {
              chart.set("projection", am5map.geoMercator());
            }

            var currentMap = defaultMap;
            var title = "";
            if (am5geodata_data_countries2[country] !== undefined) {
              currentMap = am5geodata_data_countries2[country]["maps"][0];

              if (am5geodata_data_countries2[country]["country"]) {
                title = am5geodata_data_countries2[country]["country"];
              }
            }

            am5.net.load("https://cdn.amcharts.com/lib/5/geodata/json/" + currentMap + ".json", chart).then(function (result) {
              var geodata = am5.JSONParser.parse(result.response);
              var data = [];
              for (var i = 0; i < geodata.features.length; i++) {
                data.push({
                  id: geodata.features[i].id,
                  value: Math.round(Math.random() * 10000)
                });
              }

              polygonSeries.set("geoJSON", geodata);
              polygonSeries.data.setAll(data)
            });

            chart.seriesContainer.children.push(am5.Label.new(root, {
              x: 5,
              y: 5,
              text: title,
              background: am5.RoundedRectangle.new(root, {
                fill: am5.color(0xffffff),
                fillOpacity: 0.2
              })
            }));
          }

          var heatLegend = chart.children.push(
            am5.HeatLegend.new(root, {
              orientation: "vertical",
              startColor: am5.color(0x8ab7ff),
              endColor: am5.color(0x25529a),
              stepCount: 5
            })
          );

          heatLegend.startLabel.setAll({
            fontSize: 12,
            fill: heatLegend.get("startColor")
          });

          heatLegend.endLabel.setAll({
            fontSize: 12,
            fill: heatLegend.get("endColor")
          });

          polygonSeries.events.on("datavalidated", function () {
            heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
            heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
          });

        }); // end am5.ready()
      }
    },
  };

</script>

<style>
  .v-list-item-title {
    display: flex;
    align-items: center;
  }
  #chartdiv {
    width: 100%;
    height: 300px;
  }
</style>


