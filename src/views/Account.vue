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
</script>

<template>
  <h1>Account</h1>
</template>

<style lang="scss" scoped>

</style>
