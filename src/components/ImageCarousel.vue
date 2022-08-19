<!--
 * @Author: 
 * @Date: 2022-08-19 15:27:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 16:08:01
 * @Description: 
-->
<template>
  <div class="box">
    <div class="carousel">
      <div ref="imgsRef"
        class="image-container"
        id="imgs">
        <img v-for="(img,index) in imgList"
          :key="index"
          :src="img.url"
          :alt="img.alt" />
      </div>

      <div class="buttons-container">
        <button id="left"
          @click="onClickBtn('prev')"
          class="btn">Prev</button>
        <button id="right"
          @click="onClickBtn('next')"
          class="btn">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {
  imgList = [
    {
      url: "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
      alt: "first-image",
    },
    {
      url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "second-image",
    },
    {
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "third-image",
    },
    {
      url: "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
      alt: "fourth-image",
    },
  ];

  idx = 0;
  interval!: any;
  changeImage() {
    if (this.idx > this.imgList.length - 1) {
      this.idx = 0;
    } else if (this.idx < 0) {
      this.idx = this.imgList.length - 1;
    }
    const imgs: any = this.$refs.imgsRef;
    imgs.style.transform = `translateX(${-this.idx * 500}px)`;
  }

  run() {
    this.interval = setInterval(() => {
      this.idx++;
      this.changeImage();
    }, 2000);
  }

  onClickBtn(which: string) {
    console.log(which);
    if (which === "prev") {
      this.idx--;
    } else if (which === "next") {
      this.idx++;
    }
    clearInterval(this.interval);
    this.changeImage();
    this.run();
  }
  mounted(){
    this.run()
  }
}
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

.box {
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

img {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.carousel {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  height: 530px;
  width: 500px;
  overflow: hidden;
}

.image-container {
  display: flex;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
}

.btn {
  background-color: rebeccapurple;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 49.5%;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  outline: none;
}
</style>
