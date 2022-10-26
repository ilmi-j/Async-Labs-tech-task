<template>
  <q-page class="main-page flex flex-center">
    <div class="main-container">
      <div class="header-container q-pa-xl flex column">
        <span class="text-weight-bold" style="font-size: 70px">Let's talk</span>
        <span class="header-text"
          >Deep light land beginning form fish there brought fifth forth earth
          us make cattle seasons every spirit one can't behold, creepeth fish
          thing male his him.
        </span>
      </div>
      <q-form
        @submit.prevent.stop="onSubmit"
        class="form-container full-width q-ma-xl q-pa-xl"
      >
        <div class="input-container full-width flex justify-between">
          <q-input
            ref="nameRef"
            :rules="[(val) => !!val || 'Please enter your name.']"
            lazy-rules
            v-model="name"
            label="Your name*"
          />
          <q-input
            ref="emailRef"
            :rules="[
              (val) => !!val || 'Please enter your email.',
              (val, rules) =>
                rules.email(val) || 'Please enter a valid email address',
            ]"
            lazy-rules
            v-model="email"
            label="Email address*"
          />
        </div>
        <div class="input-container full-width flex justify-between q-pb-md">
          <q-input
            ref="phoneRef"
            v-model="phone"
            label="Phone number"
          />
          <q-input
            ref="companyRef"
            v-model="company"
            label="Company"
          />
        </div>
        <q-input
          ref="titleRef"
          v-model="title"
          label="Title*"
          :rules="[(val) => !!val || 'Please enter title']"
        />
        <q-input
          ref="messageRef"
          :rules="[(val) => !!val || 'Please enter your message']"
          lazy-rules
          v-model="message"
          label="Message*"
          type="textarea"
        />
        <div class="btn-container">
          <q-btn
            class="btn"
            label="Submit"
            padding="10px 80px"
            square
            type="submit"
          />
        </div>
      </q-form>
      <div class="contact-container full-width">
        <q-card class="my-card">
          <q-card-section class="flex column q-pa-xs">
            <div class="text-h6">London, UK</div>
            <span> Vlaska ulica, 70E </span>
            <span> hello@asynclabs.vo </span>
            <span> +385 99 4936071 </span>
          </q-card-section>
        </q-card>
        <q-card class="my-card">
          <q-card-section class="flex column q-pa-xs">
            <div class="text-h6">Zagreb, Croatia</div>
            <span> Vlaska ulica, 70E </span>
            <span> hello@asynclabs.vo </span>
            <span> +385 99 4936071 </span>
          </q-card-section>
        </q-card>
        <q-card class="my-card dark-bg">
          <q-card-section class="flex column q-pa-xs">
            <div class="text-h6">Zagreb, Croatia</div>
            <span>Lipovečka, 1</span>
            <span> hello@asynclabs.vo </span>
            <span> +385 99 4936071 </span>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// import FooterContainer from "components/FooterContainer";
// import Toolbar from "components/Toolbar";
export default {
  name: "ContactForm",
  // components: { Toolbar, FooterContainer },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      company: "",
      title: "",
      message: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.title);
      console.log(this.message);
    },
  },
};
</script>

<style scoped lang="scss" src="./ContactForm.scss"></style>
