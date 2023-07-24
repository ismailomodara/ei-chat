<template>
  <div>
    <h1>Ei Home</h1>
		<input type="radio" v-model="view" name="Login" value="login" />
		<input type="radio" v-model="view" name="Register" value="register" />

		<div v-if="view === 'login'">
			<input v-model="form.username" type="text" />
			<input v-model="form.key" type="password" />
			<button type="button" @click="login">Login</button>
		</div>
		<div v-else>
			<input v-model="form.username" type="text" />
			<input v-model="form.key" type="text" />
			<button type="button" @click="register">Create</button>
		</div>
		<div style="margin-top: 40px">
			<input v-model="updateF.name" type="text" />
			<input v-model.number="updateF.image" type="number" min="1" />
			<button type="button" @click="update">Update</button>
		</div>

		<button type="button" @click="logout">Logout</button>
  </div>
</template>

<script>
import auth from "@/services/auth";
import users from "@/services/users";

export default {
  name: "Home",
  data() {
    return {
			view: "create",
			form: {
				username: "",
				key: null
			},
			updateF: {
				name: "",
				image: null
			}
    }
  },

  methods: {
    register() {
			auth.register(this.form).then(response => {
				console.log(response)
      }).catch(error => {
				console.log(error)
      })
    },
    login() {
			auth.login(this.form).then(response => {
        console.log({ login: response})
      }).catch(error => {
        console.log(error)
      })
    },
    update() {
			users.update({
				...this.updateF,
				username: this.form.username
			}).then(response => {
        console.log({ update: response})
      }).catch(error => {
        console.log(error)
      })
    },
		logout() {
			auth.logout().then(response => console.log(response))
		}
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  width: 100%;
  background: var(--brand-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--brand-white);
    font-size: 5rem;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    margin-bottom: 10px;
  }
  button {
    background-color: var(--brand-white);
    color: var(--text-primary);
  }
}
</style>
