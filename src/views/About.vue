<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model"/>
      </div>
      <div class="error" v-if="!$v.name.required">Field is required</div>
      <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
      <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  }
};
</script>
