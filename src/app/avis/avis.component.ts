import { Component, OnInit } from '@angular/core';
import { Avis } from '../models/avis';
import { AvisService } from '../services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit{

    // Déclaration d'un tableau d'utilisateurs
    // ! : le tableau n'est pas initialisé
    users!:any[]; // any : n'importe quel type de données
    user:Avis=new Avis();
    // DI : par constructeur  
    constructor(private utilisateurService:AvisService){
    }
    ngOnInit(): void {
      this.findAllUtilisateurs();
    }
    findAllUtilisateurs(){
      // data : les données qui se trouvent dans le cache du navigateur
      this.utilisateurService.findAll().subscribe((data: any[]) => {this.users = data});
    }
    saveUtilisateur(){
      this.utilisateurService.save(this.user).subscribe(
        () => {
          // MAJ la liste des utilisateurs
          this.findAllUtilisateurs();
          // Vider le formulaire
          this.user = new Avis();
        }
      )
    }
    deleteUtilisateur(id:number){
      this.utilisateurService.delete(id).subscribe(
        () => {
          this.findAllUtilisateurs();
        }
      )
    }
}
