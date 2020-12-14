<template>
  <div>
    <Aside :menuData="menuData" />
  </div>
</template>

<script>
import Aside from "@/components/Aside/index.vue";
import { getRouter } from "@/utils/router";
import { getPermissions } from "@/utils/auth";
export default {
  data() {
    const menuData = this.getMenuData();
    return {
      menuData
    };
  },

  components: {
    Aside
  },
  mounted() {},
  methods: {
    getMenuData() {
      let permissions = getPermissions();
      let routes = getRouter("background").children;
      let menuData = [];
      for (let route of routes) {
        console.log(permissions);
        console.log(route);
        //判断是否展示
        if (route.hideInMenu == false) {
          //添加权限判定

          menuData.push(route);
        }
      }
      return menuData;
    }
  }
};
</script>

<style></style>
