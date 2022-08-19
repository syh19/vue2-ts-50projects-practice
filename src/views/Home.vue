<!--
 * @Author: 
 * @Date: 2022-08-19 09:50:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 15:30:20
 * @Description: 
-->
<template>
  <div class="home">
    <div v-for="item in projectsList"
      :key="item.id"
      @click="pushToUrl(item.url)">
      {{item.name}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { randomString } from "@/utils/util";

@Component({
  components: {},
})
export default class Home extends Vue {
  projectsList = [
    {
      id: randomString(16),
      url: "/expanding-cards",
      name: "折叠卡片",
    },
    {
      id: randomString(16),
      url: "/progress-steps",
      name: "进度条",
    },
    {
      id:randomString(16),
      url:'/github-profiles',
      name:'github个人页'
    },
    {
      id:randomString(16),
      url:'/image-carousel',
      name:'图片滚动'
    },
  ];

  // 在新窗口打开页面
  pushToUrl(url: string) {
    let newUrl = this.$router.resolve({
      path: url,
      // query:{id:18}
    });
    window.open(newUrl.href, "_blank");
  }
}
</script>
