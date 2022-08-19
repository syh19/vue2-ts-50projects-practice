<!--
 * @Author: 
 * @Date: 2022-08-19 11:21:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 16:10:46
 * @Description: 
-->
<template>
  <div class="body">
    <div class="container">
      <div class="progress-container">
        <div class="progress"
          id="progress"></div>
        <div class="circle active">1</div>
        <div class="circle">2</div>
        <div class="circle">3</div>
        <div class="circle">4</div>
      </div>

      <button class="btn"
        id="prev"
        disabled>Prev</button>
      <button class="btn"
        id="next">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {
  mounted() {
    const progress: any = document.getElementById("progress");
    const prev: any = document.getElementById("prev");
    const next: any = document.getElementById("next");
    const circles = document.querySelectorAll(".circle");

    let currentActive = 1;

    next.addEventListener("click", () => {
      currentActive++;
      console.log(currentActive);

      if (currentActive > circles.length) {
        currentActive = circles.length;
      }

      update();
    });

    prev.addEventListener("click", () => {
      currentActive--;

      if (currentActive < 1) {
        currentActive = 1;
      }

      update();
    });

    function update() {
      circles.forEach((circle, idx) => {
        if (idx < currentActive) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });

      const actives = document.querySelectorAll(".active");

      // 动态改变元素样式的宽度
      progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

      if (currentActive === 1) {
        prev.disabled = true;
      } else if (currentActive === circles.length) {
        next.disabled = true;
      } else {
        prev.disabled = false;
        next.disabled = false;
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
:root {
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
}

* {
  box-sizing: border-box;
}
.body {
  // #TODO 层叠上下文
  // #TODO 改变层级才可以显示进度条，但是就无法点击按钮了
  // position:relative;
  background-color: #f6f7fb;
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  // z-index:-2;
}
.container {
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: "";
  background-color: #e0e0e0;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress {
  background-color: #3498db;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e0e0e0;
  transition: 0.4s ease;
}

.circle.active {
  border-color: #3498db;
}

.btn {
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
</style>