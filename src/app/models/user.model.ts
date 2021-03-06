import { Profile } from "./profile.model";

export class User {
    id?: string;
    name: string = '';
    email: string = '';
    token?: string = '';
    password: string = '';
    confirmPassword?: string = '';
    profile: Profile = new Profile();
}
