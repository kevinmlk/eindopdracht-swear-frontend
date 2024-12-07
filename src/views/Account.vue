<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  onMounted(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push({ name: 'Register' });
    }
  });

  const logout = () => {
    localStorage.removeItem('token');
    router.push({ name: 'Home' });
  }

</script>

<template>
  <h1>Account</h1>
  <div id="account-cards-container">
    <el-card shadow="hover"><el-icon style="margin-right: 8px;"><User /></el-icon>Profile</el-card>
    <el-card shadow="hover"><el-icon style="margin-right: 8px;"><ElementPlus /></el-icon>Saved configurations</el-card>
    <el-card shadow="hover"><el-icon style="margin-right: 8px;"><User /></el-icon>Orders</el-card>
    <el-button @click="logout">Logout</el-button>
  </div>
</template>

<style lang="scss" scoped>
  #account-cards-container {
    display: flex;
    flex-direction: column;
    gap: 24px;

  }
</style>
