<script setup>
  import { column } from 'element-plus/es/components/table-v2/src/common.mjs';
import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const orderValues = ref({});

  onMounted(async () => {
    const response = await fetch(`http://localhost:3000/api/v1/orders/${route.params.id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    const data = await response.json();
    orderValues.value = data.data.order;
    console.log(orderValues.value);
  });
</script>

<template>
  <h1>Order status: {{ orderValues.status }}</h1>
  <el-descriptions
    title="Sneaker configuration"
    direction="vertical"
    border
    style="margin-top: 20px"
    column="3"
  >
    <el-descriptions-item
      :rowspan="2"
      :width="140"
      label="Photo"
      align="center"
    >
      <el-image
        style="width: 100px; height: 100px"
        src="../assets/sneaker-thumbnail.png"
      />
    </el-descriptions-item>
    <el-descriptions-item label="Shoesize">{{ orderValues.sneakerConfig && orderValues.sneakerConfig.shoeSize }}</el-descriptions-item>
    <el-descriptions-item label="Color options">
      <el-tag size="small">{{ orderValues.sneakerConfig && orderValues.sneakerConfig.colorOptions.laces }} laces</el-tag>
      <el-tag size="small">{{ orderValues.sneakerConfig && orderValues.sneakerConfig.colorOptions.sole }} sole</el-tag>
      <el-tag size="small">{{ orderValues.sneakerConfig && orderValues.sneakerConfig.colorOptions.upper }} upper</el-tag>
      <el-tag size="small">{{ orderValues.sneakerConfig && orderValues.sneakerConfig.colorOptions.extraOption1 }} ({{ orderValues.sneakerConfig && orderValues.sneakerConfig.charms[0] }})</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Material options">
      <el-tag size="small">{{ orderValues.sneakerConfig && orderValues.sneakerConfig.materialOptions.laces }} laces</el-tag>
      <el-tag size="small">{{ orderValues.sneakerConfig && orderValues.sneakerConfig.materialOptions.sole }} sole</el-tag>
      <el-tag size="small">upper {{ orderValues.sneakerConfig && orderValues.sneakerConfig.materialOptions.upper }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Charms" >
      <el-tag size="small" v-for="charm in orderValues.sneakerConfig && orderValues.sneakerConfig.charms">{{ charm }}</el-tag>
    </el-descriptions-item>
  </el-descriptions>

  <!-- Contact details -->
  <el-descriptions
    title="Contact details"
    direction="vertical"
    border
    style="margin-top: 20px"
    :column="4"
  >
    <el-descriptions-item label="Firstname">{{ orderValues.contactDetails && orderValues.contactDetails.firstname }}</el-descriptions-item>
    <el-descriptions-item label="Lastname">{{ orderValues.contactDetails && orderValues.contactDetails.lastname }}</el-descriptions-item>
    <el-descriptions-item label="Email">{{ orderValues.contactDetails && orderValues.contactDetails.email }}</el-descriptions-item>
    <el-descriptions-item label="Phone">{{ orderValues.contactDetails && orderValues.contactDetails.phone }}</el-descriptions-item>
    <el-descriptions-item label="Street & nummer">{{ orderValues.contactDetails && orderValues.contactDetails.address.street }}</el-descriptions-item>
    <el-descriptions-item label="City">{{ orderValues.contactDetails && orderValues.contactDetails.address.city }}</el-descriptions-item>
    <el-descriptions-item label="Postal code">{{ orderValues.contactDetails && orderValues.contactDetails.address.postalCode }}</el-descriptions-item>
    <el-descriptions-item label="Country">{{ orderValues.contactDetails && orderValues.contactDetails.address.country }}</el-descriptions-item>
  </el-descriptions>
</template>

<style lang="scss" scoped>

</style>
