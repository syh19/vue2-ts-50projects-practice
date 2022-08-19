<!--
 * @Author: 
 * @Date: 2022-08-19 14:11:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 15:18:43
 * @Description: 
-->
<template>
  <div class="box">
    <form class="user-form"
      ref="formRef"
      id="form">
      <input @keyup.enter="onSubmit"
        type="text"
        v-model="inputVal"
        ref="searchRef"
        id="search"
        placeholder="Search a Github User">
    </form>

    <main id="main"
      ref="mainRef">
      <div class="card"
        v-if="isShowInfo">
        <div>
          <img :src="user.avatar_url"
            :alt="user.name"
            class="avatar">
        </div>
        <div class="user-info">
          <h2>{{user.name || user.login}}</h2>
          {{user.bio ? user.bio : ""}}
          <ul>
            <li>{{user.followers}} <strong>Followers</strong></li>
            <li>{{user.following}} <strong>Following</strong></li>
            <li>{{user.public_repos}} <strong>Repos</strong></li>
          </ul>

          <div id="repos"
            v-for="(repo,index) in repos"
            :key="index">
            <a class="repo"
              target="_blank"
              :href="repo.html_url">{{repo.name}}</a>
          </div>
        </div>
      </div>
      <div class="card"
        v-if="isShowErrorMsg">
        <h1>{{errMsg}}</h1>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {},
})
// #TODO 有bug
export default class extends Vue {
  APIURL = "https://api.github.com/users/";
  inputVal = "";
  user!: any;
  repos!: any;
  errMsg!: string;
  isShowInfo = false;
  isShowErrorMsg = false;

  onSubmit() {
    if (this.inputVal) {
      this.getUser(this.inputVal);
      console.log(this.inputVal);
      this.inputVal = "";
    }
  }

  async getUser(userName: string) {
    try {
      const { data } = await axios(this.APIURL + userName);
      this.user = data;
      this.isShowInfo = true;
      this.isShowErrorMsg = false;
      this.getRepos(userName);
    } catch (err: any) {
      if (err.response.status == 404) {
        this.errMsg = "No profile with this username";
        this.isShowErrorMsg = true;
        this.isShowInfo = false;
      }
    }
  }
  async getRepos(userName: string) {
    try {
      console.log("getRepos");
      const { data } = await axios(
        this.APIURL + userName + "/repos?sort=created"
      );
      this.repos = data;
      console.log(this.repos);
    } catch (err) {
      this.errMsg = "Problem fetching repos";
      this.isShowErrorMsg = true;
      this.isShowInfo = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");

* {
  box-sizing: border-box;
}

.box {
  background-color: #2a2a72;
  color: #fff;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.user-form {
  width: 100%;
  max-width: 700px;
}

.user-form input {
  width: 100%;
  display: block;
  background-color: #4c2885;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
}

.user-form input::placeholder {
  color: #bbb;
}

.user-form input:focus {
  outline: none;
}

.card {
  max-width: 800px;
  background-color: #4c2885;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 3rem;
  margin: 0 1.5rem;
}

.avatar {
  border-radius: 50%;
  border: 10px solid #2a2a72;
  height: 150px;
  width: 150px;
}

.user-info {
  color: #eee;
  margin-left: 2rem;
}

.user-info h2 {
  margin-top: 0;
}

.user-info ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  max-width: 400px;
}

.user-info ul li {
  display: flex;
  align-items: center;
}

.user-info ul li strong {
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.repo {
  text-decoration: none;
  color: #fff;
  background-color: #212a72;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}

@media (max-width: 500px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  .user-form {
    max-width: 400px;
  }
}
</style>