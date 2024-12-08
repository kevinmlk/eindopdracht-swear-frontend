<script setup>
  import { onMounted, reactive } from 'vue';
  import { getUserID } from '../utils/auth';
  
  const orders = reactive({
    values: []
  });

  onMounted(() => {
    fetch(`https://eindopdracht-swear-api.onrender.com/api/v1/orders/user/${getUserID()}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        orders.values = data.data.orders;
        console.log(orders);
      });
  });
</script>

<template>
  <h1>Orders</h1>

  <el-row :gutter="20" v-for="(order, index) in orders.values" :key="index">
    <el-col :span="6" @click="$router.push({ name: 'Order', params: { id: order._id } })">
      <el-card style="max-width: 480px">
        <template #header>Order status: {{ order.status }}</template>
        <img
          src="../assets/sneaker-thumbnail.png"
          style="width: 100%"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .el-row {
    .el-col {
      cursor: pointer;
    }
  }
</style>
