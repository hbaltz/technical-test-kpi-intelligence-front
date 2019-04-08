import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rowData = [
    {"annee_d_individualisation": 1999, "annee_de_livraison": 2003, "cao_attribution": "26/11/2001", "codeuai": "0750558Z", "entreprise": "DBS/Societep/CPA", "enveloppe_prev_en_meu": 1.98, "etat_d_avancement": "Op\u00e9ration livr\u00e9e", "id": 2, "latitude": 48.8545587780001, "longitude": 2.37501781000003, "lycee": "Paul-Poiret", "maitrise_d_oeuvre": "Boiron", "mandataire": "SEMAEST", "mode_de_devolution": "Lots s\u00e9par\u00e9s", "montant_des_ap_votes_en_meu": 2.6, "notification_du_marche": "09/05/2000", "ppi": "2001/2006", "titreoperation": "Restructuration locaux lib\u00e9r\u00e9s par le CDES", "ville": "Paris 11\u00e8me"}
  ];
}
