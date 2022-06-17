<template>
  <div class="login-main-container">
    <div class="login-container" v-if="newUser === false">
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
    <div class="login-container" v-else>
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
    };
  },
  methods: {
    async login(e) {
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
            alert(`${resp.data.msg}`);
          } else {
            alert(`${resp.data.msg}`);
          }
        } catch (error) {
          alert(error.response.data.msg);
        }
      } else {
        alert("debes ingresar usuario y contraseña");
      }
      return false;
    },
    changeForm() {
      this.newUser = !this.newUser;
    },
    async register(e) {
      e.preventDefault();
      if (
        this.newUserName !== "" &&
        this.newUserLastName !== "" &&
        this.newUserMail !== "" &&
        this.newUserPass !== "" &&
        this.newUserPassRepeat !== ""
      ) {
        if (this.newUserPass !== this.newUserPassRepeat) {
          alert("Las contraseñas deben coincidir");
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
              alert(`${resp.data.msg}`);
              this.newUserName = "";
              this.newUserLastName = "";
              this.newUserMail = "";
              this.newUserPass = "";
              this.newUserPassRepeat = "";
            } else {
              alert(`${resp.data.msg}`);
            }
          } catch (error) {
            alert(error.response.data.msg);
          }
        }
      }
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
