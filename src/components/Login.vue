<template>
  <div class="login-main-container">
    <div
      class="login-container"
      v-if="newUser === false && passwordForget === true"
    >
      <div class="img-container">
        <img
          alt="memokemon img"
          src="../assets/logo_memokemon.png"
          class="welcome-img"
        />
      </div>
      <b-form class="login-form">
        <b-form-group
          class="form-control text-start border-0 bg-transparent"
          label="Ingresa tu email para recuperar tu password"
          label-for="emailForgot"
        >
          <b-form-input
            id="emailForgot"
            v-model="emailForgot"
            type="email"
            placeholder="Ingrese su email"
            required
          ></b-form-input>
        </b-form-group>
        <button @click="restorePass" class="login-button mt-3 p-3">
          Reestablecer contraseña
        </button>
        <a href="#" @click="forgotedPass()" class="text-decoration-none"
          >Volver al login</a
        >
      </b-form>
    </div>
    <div
      class="login-container"
      v-if="newUser === false && passwordForget === false"
    >
      <div class="img-container">
        <img
          alt="memokemon img"
          src="../assets/logo_memokemon.png"
          class="welcome-img"
        />
      </div>
      <b-form class="login-form">
        <b-form-group
          class="form-control text-start border-0 bg-transparent"
          label="Email"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="usermail"
            type="email"
            placeholder="Ingrese su email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="form-control text-start border-0 mt-2 bg-transparent"
          label="Password"
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="userpass"
            type="password"
            placeholder="Ingrese su Contraseña"
            required
          ></b-form-input>
        </b-form-group>
        <p class="text-end small">
          Olvidaste tu contraseña? Recuperala
          <a href="#" @click="forgotedPass()" class="text-decoration-none"
            >Aquí</a
          >
        </p>
        <button @click="login" class="login-button mt-3 p-3">
          Iniciar sesión
        </button>
      </b-form>
      <p class="text-center small mt-4">
        No tienes una cuenta aún?
        <a href="#" @click="changeForm()" class="text-decoration-none"
          >Regístrate</a
        >
      </p>
    </div>
    <div
      class="login-container"
      v-if="newUser === true && passwordForget === false"
    >
      <div class="img-container">
        <img
          alt="memokemon img"
          src="../assets/logo_memokemon.png"
          class="welcome-img"
        />
      </div>
      <b-form class="login-form">
        <b-form-group
          class="form-control text-start border-0 bg-transparent"
          label="Name"
          label-for="name"
        >
          <b-form-input
            id="name"
            v-model="newUserName"
            type="text"
            placeholder="Ingrese su Nombre"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="form-control text-start border-0 bg-transparent"
          label="LastName"
          label-for="lastname"
        >
          <b-form-input
            id="lastname"
            v-model="newUserLastName"
            type="text"
            placeholder="Ingrese su email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="form-control text-start border-0 bg-transparent"
          label="Email"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="newUserMail"
            type="email"
            placeholder="Ingrese su email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="form-control text-start border-0 mt-2 bg-transparent"
          label="Password"
          label-for="newPassword"
        >
          <b-form-input
            id="newPassword"
            v-model="newUserPass"
            type="password"
            placeholder="Ingrese su Contraseña"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="form-control text-start border-0 mt-2 bg-transparent"
          label="Repeat Password"
          label-for="repeatPass"
        >
          <b-form-input
            id="repeatPass"
            v-model="newUserPassRepeat"
            type="password"
            placeholder="Repita su Contraseña"
            required
          ></b-form-input>
        </b-form-group>
        <button @click="register" class="login-button mt-3 p-3">
          Registrarse
        </button>
      </b-form>
      <p class="text-center small mt-4">
        Ya tienes un usuario?
        <a href="#" @click="changeForm()" class="text-decoration-none"
          >Iniciá sesión</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { backendUrl } from "../config/index";
export default {
  name: "Login",
  data() {
    return {
      usermail: "",
      userpass: "",
      newUser: false,
      newUserName: "",
      newUserLastName: "",
      newUserMail: "",
      newUserPass: "",
      newUserPassRepeat: "",
      passwordForget: false,
      emailForgot: "",
    };
  },
  methods: {
    async login(e) {
      this.$store.commit("changeLoading", true);
      e.preventDefault();
      if (this.usermail !== "" && this.userpass !== "") {
        const config = {
          method: "post",
          url: `${backendUrl}/users/login`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.usermail,
            password: this.userpass,
          },
        };
        try {
          const resp = await axios(config);
          if (resp.data.code === 2) {
            this.successToast(resp.data.msg);
            this.$store.commit("changeLoading", false);
            localStorage.setItem("user", JSON.stringify(resp.data.user));
            localStorage.setItem("token", resp.data.token);
            this.$router.push('/home')
          } else {
            this.errorToast(resp.data.msg);
            this.$store.commit("changeLoading", false);
          }
        } catch (error) {
          this.errorToast(error.response.data.msg);
          this.$store.commit("changeLoading", false);
        }
      } else {
        this.$store.commit("changeLoading", false);
        this.warnToast("Debes ingresar usuario y contraseña.");
      }
      return false;
    },
    changeForm() {
      this.newUser = !this.newUser;
    },
    async register() {
      this.$store.commit("changeLoading", true);
      if (
        this.newUserName !== "" &&
        this.newUserLastName !== "" &&
        this.newUserMail !== "" &&
        this.newUserPass !== "" &&
        this.newUserPassRepeat !== ""
      ) {
        if (this.newUserPass !== this.newUserPassRepeat) {
          this.$store.commit("changeLoading", false);
          this.warnToast("Las contraseñas deben coincidir");
        } else {
          const config = {
            method: "post",
            url: `${backendUrl}/users/register`,
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              name: this.newUserName,
              lastName: this.newUserLastName,
              email: this.newUserMail,
              password: this.newUserPass,
            },
          };
          try {
            const resp = await axios(config);
            if (resp.data.code === 2) {
              this.$store.commit("changeLoading", false);
              this.successToast(resp.data.msg);
              this.newUserName = "";
              this.newUserLastName = "";
              this.newUserMail = "";
              this.newUserPass = "";
              this.newUserPassRepeat = "";
              this.newUser = false;
            } else {
              this.$store.commit("changeLoading", false);
              this.errorToast(resp.data.msg);
            }
          } catch (error) {
            this.$store.commit("changeLoading", false);
            this.errorToast(error.response.data.msg);
          }
        }
      } else {
        this.$store.commit("changeLoading", false);
        this.warnToast("Debes completar todos los campos.");
      }
      return false;
    },
    forgotedPass() {
      this.passwordForget = !this.passwordForget;
    },
    async restorePass() {
      if (this.emailForgot !== "") {
        this.$store.commit("changeLoading", true);
        const config = {
          method: "post",
          url: `${backendUrl}/users/forgetpass`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.emailForgot,
          },
        };
        try {
          const resp = await axios(config);
          if (resp.data.code === 2) {
            this.$store.commit("changeLoading", false);
            this.successToast(resp.data.msg);
            this.passwordForget = false;
          } else {
            this.$store.commit("changeLoading", false);
            this.errorToast(resp.data.msg);
          }
        } catch (error) {
          this.$store.commit("changeLoading", false);
          this.emailForgot = "";
          this.errorToast(error.response.data.msg);
        }
      } else {
        this.warnToast("Debe ingresar el email para recuperar su contraseña.");
      }
      return false;
    },
    successToast(msg) {
      this.$toast.success(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
    errorToast(msg) {
      this.$toast.error(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
    warnToast(msg) {
      this.$toast.warning(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login-main-container {
  padding: 10px;
  min-height: 615px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-form {
  width: 80%;
}
.login-container {
  width: 45%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  background: #ababab;
  box-shadow: -29px -29px 53px #6a6a6a, 29px 29px 53px #ececec;
}
.img-container {
  width: 80%;
}
.login-button {
  background: #4a7488;
  color: #fff;
  border-radius: 20px;
  border: none;
}
.login-button:hover {
  background: #3f85a5;
  transition: 0.4s;
}
</style>
