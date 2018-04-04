import React from 'react';
import { ETATS } from '../constants/EtatsConstants';
import ListeTaches from './ListeTaches';
import PropTypes from 'prop-types';



class TachesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleEtatSuivant = this.handleEtatSuivant.bind(this);
    }

    handleEtatSuivant(tache, etatSource, etatCible) {
        console.log("Taches container : handleClickEtatSuivant");
        this.props.onModifierEtatTache(tache, etatSource, etatCible);
    }

    render() {
        let tachesList = [];
        let etats = [];
        Object.keys(ETATS).forEach((key) => {
            etats.push(ETATS[key]);
        });
        tachesList = this.props.taches;
        console.log(tachesList);
        return (
            <div>
                {etats.map((etat, index) => {
                    var tachesParEtat = [];
                    console.log(etat.libelle);
                    tachesParEtat = tachesList.filter( tache => tache.etat === etat.libelle);
                    return  <ListeTaches key={index} typeSection={etat}
                                         taches={tachesParEtat}
                                         onClickChangerEtat={this.handleEtatSuivant}/>
                })}
            </div>
        )

    }
}

TachesContainer.propTypes = {
    taches: PropTypes.array.isRequired,
    onModifierEtatTache: PropTypes.func
};

export default TachesContainer;