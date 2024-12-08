<script setup>
  import { onMounted, reactive } from 'vue';
  const orders = reactive({
    values: []
  });

  onMounted(() => {
    fetch('http://localhost:3000/api/v1/orders', {
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
  <ul>
    <!-- Iterate over orders.values instead of orders -->
    <li v-for="(order, index) in orders.values" :key="index">
      <strong>{{ order.status }}</strong>: {{ order._id }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
