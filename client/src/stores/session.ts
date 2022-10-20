import { reactive } from "vue";

const session = reactive({//use ref when the value changes frequently
    user: null as User | null,//can put more in here 
});

export function login(firstname: string, lastname: string) {
    session.user = { 
        firstname, 
        lastname 
    };
}

export function logout() {
    session.user = null;
}

export class User {
    public firstname?: string;// ? means optional
    public lastname?: string;
}

export default session;


/////// MAke post goes in its own ts file and onMounted goes in the view file////////MAke post goes in a store as a reactive object