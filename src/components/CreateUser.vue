<template>
  <form>
    <div>
      <label for="firstName"> First Name: </label>
      <input type="text" id="firstName" v-model="firstName" />
    </div>
    <div>
      <label for="lastName"> Last Name: </label>
      <input type="text" id="lastName" v-model="lastName" />
    </div>
    <div>
      <label for="email"> Email: </label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div>
      <label for="password"> Password: </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <div>
      <label for="confirmPassword"> Confirm Password: </label>
      <input type="text" id="confirmPassword" v-model="confirmPassword" />
    </div>
    <p>{{ firstName }}</p>
    <button type="button" @click.prevent="submitUser">Submit</button>
  </form>
</template>

<script>
export default {
  name: "CreateUser",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitUser() {
      console.log("submitUser");
      fetch("https://dev-9054087.okta.com/api/v1/users?activate=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "SSWS 00bTHFFEJMA5Nd1CkMgVhAAd9giauW4rB2WtI0ZOoc",
        },
        body: JSON.stringify({
          profile: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
          },
        }),
        credentials: {
          password: { value: this.password },
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("Error ", err);
        });
    },
  },
};
</script>
