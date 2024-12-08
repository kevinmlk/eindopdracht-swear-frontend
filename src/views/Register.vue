<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const ruleFormRef = ref(null);

// const checkFirstname = (rule, value, callback) => {
//   if (value === '') {
//     return callback(new Error('Please input a firstname'))
//   } else {
//     callback()
//   }
// }

// const validatePass = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password'));
//   } else {
//     if (ruleForm.checkPass !== '') {
//       if (!ruleFormRef.value) return;
//       ruleFormRef.value.validateField('checkPass');
//     }
//     callback();
//   }
// };

// const validatePass2 = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password again'));
//   } else if (value !== ruleForm.pass) {
//     callback(new Error("Two inputs don't match!"));
//   } else {
//     callback();
//   }
// };

const ruleForm = reactive({
  firstname: '',
  lastname: '',
  email: '',
  username: '',
  password: '',
  phone: '',
  role: 'user',
  address: {
    street: '',
    city: '',
    postalCode: '',
    country: ''
  }
});

// const rules = reactive({
//   checkFirstname: [{ validator: checkFirstname, trigger: 'blur' }],
//   pass: [{ validator: validatePass, trigger: 'blur' }],
//   checkPass: [{ validator: validatePass2, trigger: 'blur' }],
// });

const submitForm = async (formEl) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        const response = await fetch('https://eindopdracht-swear-api.onrender.com/api/v1/users/register', {
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
        // Reset form after successful submission
        // resetForm(formEl);
        let token = data.data.token;
        localStorage.setItem("token", token);
        router.push({ name: 'Account' });

      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    } else {
      console.log('Error submitting the form!');
    }
  });
};

// const resetForm = (formEl) => {
//   if (!formEl) return;
//   formEl.resetFields();
// };

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
  <div id="form-fields">

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
      <!-- Username -->
      <el-form-item label="Username" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <!-- Phone -->
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
    <!-- Password -->
      <el-form-item label="Password" prop="pass">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <!-- Confirm Password -->
      <!-- <el-form-item label="Confirm password" prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
        />
      </el-form-item> -->
    </div>
     <div>
       <h3>Address information</h3>
       <el-form-item label="Street" prop="street">
        <el-input v-model="ruleForm.address.street" />
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input v-model="ruleForm.address.city" />
      </el-form-item>
      <el-form-item label="Postalcode" prop="postalCode">
        <el-input v-model="ruleForm.address.postalCode" />
      </el-form-item>
      <el-form-item label="Country" prop="country">
        <el-select v-model="ruleForm.address.country" placeholder="Country">
          <el-option label="Belgium" value="Belgium" />
          <el-option label="Luxembourg" value="Luxembourg" />
          <el-option label="Netherlands" value="Netherlands" />
        </el-select>
      </el-form-item>
     </div>
  </div>

   <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="$router.push({ name: 'Login' })">Go to Login Page</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
  #form-fields {
    display: flex;
    gap: 48px;
  }
</style>
