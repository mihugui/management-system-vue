<template>
  <el-container>
    <el-header>迷糊鬼个人生活</el-header>
    <el-main><router-view /></el-main>
    <el-footer><Footer /></el-footer>
  </el-container>
</template>

<script>
import Footer from "@/layout/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style></style>
