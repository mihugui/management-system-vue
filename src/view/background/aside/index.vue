<template>
  <div>
    <Aside :menuData="menuData" />
  </div>
</template>

<script>
import Aside from "@/components/Aside/index.vue";
import { getRouter, check } from "@/utils/auth";
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
      let routes = getRouter("background").children;
      let menuData = new Array();
      routes.forEach(item => {
        // 判断是否展示
        if (item.hideInMenu === false) {
          // 添加权限判定;
          if (check(item.meta.authority)) {
            item.children.filter(element => {
              return check(element.meta.authority);
            });
            menuData.push(item);
          }
        }
      });

      console.log(menuData);
      return menuData;
    }
  }
};
</script>

<style></style>
