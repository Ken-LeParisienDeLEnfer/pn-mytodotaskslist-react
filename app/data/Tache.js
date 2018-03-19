export class Tache {
    constructor(titre, priorite, projet, type, etat, porteurs, dateCreation,
                dateResolutionSouhaitee, dateResolution, urgent) {
        this.titre = titre;
        this.priorite = priorite;
        this.projet = projet;
        this.type = type;
        this.etat = etat;
        this.porteurs = porteurs;
        this.dateCreation = dateCreation;
        this.dateResolutionSouhaitee = dateResolutionSouhaitee;
        this.dateResolution = dateResolution;
        this.urgent = urgent;
    }
}