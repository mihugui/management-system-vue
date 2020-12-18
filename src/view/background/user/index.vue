<template>
  <div>
    <el-card>
      <el-table
        v-loading="loading"
        :data="tableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="姓名" prop="realName"></el-table-column>
        <el-table-column label="用户名" prop="userName"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="table.current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="table.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="table.total"
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
