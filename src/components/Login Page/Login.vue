<template>
    <span>
        <section class="overlay"></section>
        <section class="wrapper">
            <form v-if="signUpPage" class="signup-page">
                <h1 class="signup-title">Sign up</h1>
                <input
                    class="input-box signup-email-input"
                    type="email"
                    placeholder="Email"
                    required
                    v-model="signupEmail"
                />
                <span class="input-box pass-box">
                    <input
                        class="signup-password"
                        type="password"
                        placeholder="Password"
                        minlength="6"
                        required
                        ref="signupPass"
                        v-model="signupPassword"
                    />
                    <span v-if="!showPass" class="material-symbols-outlined" @click="toggleSignupPassVisibility">
                        visibility_off
                    </span>
                    <span v-if="showPass" class="material-symbols-outlined" @click="toggleSignupPassVisibility">
                        visibility
                    </span>
                </span>
                <button class="signup-btn" type="submit" @click="registerNewUser">Sign up</button>
                <button class="login-nav-btn" type="button"  @click="togglePage">Login</button>
                <p class="login-text">Already have an account?</p>
            </form>
            <form v-if="!signUpPage" class="login-page">
                <h1 class="login-title">Login</h1>
                <input
                    class="input-box login-email-input"
                    type="email"
                    placeholder="Email"
                    required
                    v-model="loginEmail"
                />
                <span class="input-box pass-box">
                    <input
                        class="login-password"
                        type="password"
                        placeholder="Password"
                        minlength="6"
                        required
                        ref="loginPass"
                        v-model="loginPassword"
                    />
                    <span v-if="!showPass" class="material-symbols-outlined" @click="toggleLoginPassVisibility">
                        visibility_off
                    </span>
                    <span v-if="showPass" class="material-symbols-outlined" @click="toggleLoginPassVisibility">
                        visibility
                    </span>
                </span>
                <button class="login-btn" type="submit" @click="loginOldUser">Login</button>
                <button class="signup-nav-btn" type="button" @click="togglePage">Sign up</button>
                <p>New user?</p>
            </form>
        </section>
    </span>
</template>

<script lang="ts">
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, get, ref as sRef, child } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCQ_dTBygFaT1UIVEzt1NjC1bbB7UkoJ70",
    authDomain: "notes-app-313.firebaseapp.com",
    databaseURL: "https://notes-app-313-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "notes-app-313",
    storageBucket: "notes-app-313.appspot.com",
    messagingSenderId: "582621094801",
    appId: "1:582621094801:web:94fc5a40b12aac1e217030"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();
const databaseRef = sRef(database);

type DataType = {
    email: string,
    password: string,
    signupEmail: string;
    signupPassword: string;
    loginEmail: string;
    loginPassword: string;
    userId: string;
    signUpPage: boolean;
    showPass: boolean;
};
export default {
    name: "LoginPage",
    emits: ["user-info"],
    data: function (): DataType {
        return {
            email: "",
            password: "",
            signupEmail: "",
            signupPassword: "",
            loginEmail: "",
            loginPassword: "",
            userId: "",
            signUpPage: false,
            showPass: false
        };
    },
    methods: {
        togglePage: function() {
            this.signUpPage = !this.signUpPage;
            this.signupEmail = "";
            this.signupPassword = "";
            this.loginEmail = "";
            this.loginPassword = "";
            this.showPass = false;
        },
        toggleLoginPassVisibility: function() {
            const loginPass = this.$refs.loginPass as HTMLInputElement;
            if(!this.showPass) {
                loginPass.type = "text";
            } else {
                loginPass.type = "password";
            }
            this.showPass = !this.showPass;
        },
        toggleSignupPassVisibility: function() {
            const signupPass = this.$refs.signupPass as HTMLInputElement;
            if(!this.showPass) {
                signupPass.type = "text";
            } else {
                signupPass.type = "password";
            }
            this.showPass = !this.showPass;
        },
        registerNewUser: function(e: Event) {
            e.preventDefault();
            createUserWithEmailAndPassword(auth, this.signupEmail, this.signupPassword)
            .then((credentials) => {
                set(sRef(database, "UsersAuthList/" + credentials.user.uid), {
                    Email: this.signupEmail
            }).then(() => {
                this.email = this.signupEmail;
                this.password = this.signupPassword;
                this.togglePage();
                this.loginEmail = this.email;
                this.loginPassword = this.password;
            })
            })
            .catch((error) => {
                alert(error.code);
                alert(error.message);
            })
        },
        loginOldUser: function(e: Event) {
            e.preventDefault();
            signInWithEmailAndPassword(auth, this.loginEmail, this.loginPassword)
            .then((credentials) => {
                get(child(databaseRef, "UsersAuthList/" + credentials.user.uid))
                .then((snapshot) => {
                    if(snapshot.exists()) {
                        console.log(snapshot.val());
                        
                        this.$emit("user-info", credentials.user.uid, snapshot.val().Email, snapshot.val().Notes)
                    }
                })
            })
            .catch((error) => {
                alert(error.code);
                alert(error.message);
            })
        }
    },
};
</script>

<style lang="scss">
    @import "./Login.scss";
</style>