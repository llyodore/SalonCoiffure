import { Role } from "./role";

export class Utilisateur {
    id!:number;
    nom!:string;
    prenom!:string;
    username!:string;
    password!:string;
    roles!:Role[];
}
