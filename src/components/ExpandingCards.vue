<!--
 * @Author: 
 * @Date: 2022-08-19 09:47:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 10:53:04
 * @Description: 
-->
<template>
  <div class="container">
    <div ref="panelRef"
      class="panel"
      :class="{active:isActiveId===index}"
      :style="{backgroundImage: 'url('+item.url+')'}"
      @click="onClickImg($event)"
      v-for="(item,index) in imgDescList"
      :key="item.id">
      <h3>{{item.desc}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { randomString } from "@/utils/util";

@Component({
  components: {},
})
export default class HomeView extends Vue {
  imgDescList = [
    {
      id: randomString(),
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc: "Explore The World",
    },
    {
      id: randomString(),
      url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc: "Wild Forest",
    },
    {
      id: randomString(),
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      desc: "Sunny Beach",
    },
    {
      id: randomString(),
      url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      desc: "City on Winter",
    },
    {
      id: randomString(),
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc: "Mountains - Clouds",
    },
  ];
  // #TODO 如何通过点击事件获取当前点击元素身上的id属性
  isActiveId = 0;

  onClickImg(e: any) {
    console.log(e.currentTarget.classList);
    const panels: any = this.$refs.panelRef;
    panels.forEach((panel: any) => {
      panel.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
* {
  box-sizing: border-box;
}
.container {
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  width: 90vw;
}
.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: all 700ms ease-in;
}
.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}
.panel.active {
  flex: 5;
}
.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
// #TODO 这个动画是否冗余
@media (max-width: 480px) {
  .container {
    width: 100vw;
  }
  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>
