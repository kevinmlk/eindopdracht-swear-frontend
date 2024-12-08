<script setup>
  import { getUserID } from '../utils/auth';
  const sneakerConfigLink = "https://eindopdracht-swear-model.vercel.app/?id=" + getUserID();
  // const sneakerConfigLink = "http://localhost:5174/?id=" + getUserID();

</script>

<template>
  <el-row :gutter="20" >
    <el-col :span="8">
      <a :href="sneakerConfigLink">
        <el-card style="max-width: 480px">
          <template #header>Air Rev. Nitro S Sneakers</template>
          <img
            src="../assets/sneaker-thumbnail.png"
            style="width: 100%"
          />
        </el-card>
      </a>
    </el-col>

    <el-col :span="8">
      <a :href="sneakerConfigLink">
        <el-card style="max-width: 480px">
          <template #header>Air Revive Vegan Boots</template>
          <img
            src="../assets/sneaker-thumbnail.png"
            style="width: 100%"
          />
        </el-card>
      </a>
    </el-col>

    <el-col :span="8">
      <a :href="sneakerConfigLink">
        <el-card style="max-width: 480px">
          <template #header>Amazon Platform Sneakers</template>
          <img
            src="../assets/sneaker-thumbnail.png"
            style="width: 100%"
          />
        </el-card>
      </a>
    </el-col>
  </el-row>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
