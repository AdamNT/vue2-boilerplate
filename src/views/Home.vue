<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div><button class="btn" @click="open">BTN SCSS Kliknij</button></div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";

const fetchData = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(data);
};

fetchData();

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    open() {
      this.$toast.open({
        message: "Test message from Vue",
        type: "success",
        duration: 5000,
        dismissible: true
      })
    }
  }
};
</script>
