<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        v-loading="loading"
        :data="tableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column
          v-for="(item, key) in table.data"
          :key="key"
          :label="item.label"
          :prop="item.prop"
        ></el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="table.current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="table.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="table.total"
        style="padding: 10px 5px;"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { list } from "@/api/user";
export default {
  data() {
    return {
      table: {
        data: [
          {
            label: "姓名",
            prop: "realName"
          },
          {
            label: "用户名",
            prop: "userName"
          },
          {
            label: "邮箱",
            prop: "email"
          }
        ],
        total: 10,
        pageSize: 10,
        current: 1
      },
      tableData: [],
      loading: true
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    sizeChange(size) {
      this.table.current = 1;
      this.table.size = size;
      this.getList();
    },
    currentChange(current) {
      this.table.current = current;
      this.getList();
    },

    handleSelectionChange(val) {
      console.log(val);
    },
    getList() {
      list(this.table)
        .then(res => {
          this.table.total = res.data.total;
          this.table.pageSize = res.data.size;
          this.table.current = res.data.current;
          this.tableData = res.data.records;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
