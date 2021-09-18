<template>
  <div class="home">
    <Header/>
    <h1>Admin</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Admin extends Vue {}
</script>
