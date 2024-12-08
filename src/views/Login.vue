<script setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const ruleFormRef = ref(null);

  const ruleForm = reactive({
    username: '',
    password: '',
  });

  const submitForm = async (formEl) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        try {
          const response = await fetch('https://eindopdracht-swear-api.onrender.com/api/v1/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ruleForm),
          });

          console.log(ruleForm);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Form submitted successfully:', data);
          // Go to the account page and store the token after successful login
          let token = data.data.token;
          let userId = data.data.user;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          router.push({ name: 'Account' });
        } catch (error) {
          console.error('Error submitting the form:', error);
        }
      } else {
        console.log('Error submitting the form!');
      }
    });
  };
</script>

<template>
  <h1>Login</h1>
  <h2>Please fill out the form below</h2>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <!-- Username -->
    <el-form-item label="Username" prop="username">
      <el-input v-model="ruleForm.username" />
    </el-form-item>
  <!-- Password -->
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>

   <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="$router.push({ name: 'Register' })">Go to Register Page</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
  #form-fields {
    display: flex;
    gap: 48px;
  }
</style>
