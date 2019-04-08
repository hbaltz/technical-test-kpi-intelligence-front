import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid';

/**
 * Manage data config for the grid
 *
 * @export
 * @class GetConfigService
 */
@Injectable()
export class GetConfigService {
  /**
   * Constructor
   *
   * @memberof GetConfigService
   */
  constructor(
  ) {}

  /**
   * Create the configuration for the data grid
   *
   * @param {string} type
   * @returns {ColDef[]}
   * @memberof GetConfigService
   */
  public getConfig(): ColDef[] {
    const columnDefs = [];

    columnDefs.push(this.getColNumbConfig('Identifiant','id',true));
    columnDefs.push(this.getStringConfig('Code UAI','codeuai'));
    columnDefs.push(this.getStringConfig('Opération', 'titreoperation'));
    columnDefs.push(this.getStringConfig('Entreprise', 'entreprise'));
    columnDefs.push(this.getColNumbConfig('Année de livraison','annee_de_livraison'));
    columnDefs.push(this.getStringConfig('Ville','ville'));
    columnDefs.push(this.getStringConfig('Mandataire','mandataire'));
    columnDefs.push(this.getStringConfig('PPI','ppi'));
    columnDefs.push(this.getStringConfig('Lycée','lycee'));
    columnDefs.push(this.getStringConfig('Notification du marché','notification_du_marche'));
    columnDefs.push(this.getColNumbConfig('Latitude','latitude'));
    columnDefs.push(this.getColNumbConfig('Longitude','longitude'));
    columnDefs.push(this.getStringConfig('Etat d\'avancement', 'etat_d_avancement'));
    columnDefs.push(this.getStringConfig('Montant des AP votés en M€', 'montant_des_ap_votes_en_meu'));
    columnDefs.push(this.getStringConfig('CAO attribution' ,'cao_attribution'));
    columnDefs.push(this.getStringConfig('Maîtrise d\'œuvre', 'maitrise_d_oeuvre'));
    columnDefs.push(this.getStringConfig('Mode de dévolution', 'mode_de_devolution'));
    columnDefs.push(this.getStringConfig('Année d\'individualisation', 'annee_d_individualisation'));
    columnDefs.push(this.getStringConfig('Enveloppe prév en M€', 'enveloppe_prev_en_meu'));

    return columnDefs;
  }

  /**
   * Create the configuration for a numeric field
   *
   * @param {string} headername
   * @param {string} field
   * @param {boolean} [sorted]
   * @returns {ColDef}
   * @memberof GetConfigService
   */
  public getColNumbConfig(headername: string, field: string, sorted?: boolean): ColDef {
    return {
      headerName: headername,
      field: field,
      sort: sorted ? 'asc' : null,
      filter: 'agNumberColumnFilter'
    };
  }

  /**
   * Create the configuration for a string field
   *
   * @param {string} headername
   * @param {string} field
   * @param {boolean} [sorted]
   * @returns {ColDef}
   * @memberof GetConfigService
   */
  public getStringConfig(headername: string, field: string, sorted?: boolean): ColDef {
    return {
      headerName: headername,
      field: field,
      sort: sorted ? 'asc' : null,
      filter: 'agStringColumnFilter'
    };
  }
}
