<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main><router-view /></el-main>
    <el-footer><Footer /></el-footer>
  </el-container>
</template>

<script>
import Footer from "@/layout/Footer";
export default {
  components: {
    Footer
  },
  mounted() {
    console.log(this.$router);
  }
};
</script>

<style></style>
