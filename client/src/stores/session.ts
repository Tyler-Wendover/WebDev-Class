import { reactive } from "vue";

const session = reactive({
  //use ref when the value changes frequently
  user: null as User | null, //can put more in here
});

export function login(name: string, email: string, password: string) {
  session.user = {
    name,
    email,
  };
}

export function logout() {
  session.user = null;
}

export interface User {
  name?: string; // ? means optional
  email: string;
}

export default session;

