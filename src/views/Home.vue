<template>
  <div id="container"></div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

import { BMPGL } from '@/utils/bmpgl';
import { styleJson } from '@/utils/mapStyle';

export default defineComponent({
  name: 'home',
  setup() {
    const initMap = () => {
      // 传入密钥获取地图回调。
      BMPGL().then((BMapGL?) => {
        if (BMapGL === undefined) return;
        // 创建地图实例
        const map = new BMapGL.Map('container');
        map.setMapStyleV2({ styleJson });
        // 创建点坐标 axios => res 获取的初始化定位坐标
        const point = new BMapGL.Point(113.39292, 23.062997);
        // 初始化地图，设置中心点坐标和地图级别
        map.centerAndZoom(point, 19);
        // 开启鼠标滚轮缩放
        map.enableScrollWheelZoom();
        map.setHeading(64.5);
        map.setTilt(73);
        // 保存数据
        // this.myMap = map

        const path = [];
        path.push(new BMapGL.Point(113.392961, 23.06328));
        path.push(new BMapGL.Point(113.393423, 23.062794));
        path.push(new BMapGL.Point(113.392974, 23.062411));
        path.push(new BMapGL.Point(113.392539, 23.062848));
        const prism = new BMapGL.Prism(path, 500, {
          topFillColor: '#5679ea',
          topFillOpacity: 0.6,
          sideFillColor: '#5679ea',
          sideFillOpacity: 0.9,
        });
        map.addOverlay(prism);
      }).catch((err) => {
        console.log(err);
      });
    };
    initMap();
  },
});
</script>

<style scoped lang="scss">
  #container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
