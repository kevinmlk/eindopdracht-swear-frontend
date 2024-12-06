<script setup>
  import { reactive, ref } from 'vue';

const ruleFormRef = ref(null);

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'));
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField('checkPass');
    }
    callback();
  }
};

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'));
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: '',
  checkPass: '',
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
});

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

</script>

<template>
  <h1>Register</h1>
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
  <div>
    <h3>Contact information</h3>
    <!-- Firstname -->
    <el-form-item label="Firstname" prop="firstname">
      <el-input v-model="ruleForm.firstname" />
    </el-form-item>
    <!-- Lastname -->
    <el-form-item label="Lastname" prop="lastname">
      <el-input v-model="ruleForm.lastname" />
    </el-form-item>
    <!-- Email -->
    <el-form-item label="Email" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <!-- Phone -->
    <el-form-item label="Phone" prop="phone">
      <el-input v-model="ruleForm.phone" />
    </el-form-item>
  <!-- Password -->
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <!-- Confirm Password -->
    <el-form-item label="Confirm password" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
  </div>
   <div>
     <h3>Address information</h3>
     <el-form-item label="Street" prop="street">
      <el-input v-model="ruleForm.street" />
    </el-form-item>
    <el-form-item label="City" prop="city">
      <el-input v-model="ruleForm.city" />
    </el-form-item>
    <el-form-item label="Postalcode" prop="postalcode">
      <el-input v-model="ruleForm.postalcode" />
    </el-form-item>
    <el-form-item label="Country" prop="country">
      <el-select v-model="ruleForm.country" placeholder="Country">
        <el-option label="Belgium" value="Belgium" />
        <el-option label="Luxembourg" value="Luxembourg" />
        <el-option label="Netherlands" value="Netherlands" />
      </el-select>
    </el-form-item>
   </div>

   <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>

</style>
