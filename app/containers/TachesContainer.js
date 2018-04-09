import React from 'react';
import { ETATS } from '../constants/EtatsConstants';
import ListeTaches from './ListeTaches';
import PropTypes from 'prop-types';



class TachesContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let tachesList = [];
        let etats = [];
        Object.keys(ETATS).forEach((key) => {
            etats.push(ETATS[key]);
        });
        tachesList = this.props.taches;
        return (
            <div>
                {etats.map((etat, index) => {
                    var tachesParEtat = tachesList.filter( tache => tache.etat === etat.libelle);
                    return  <ListeTaches key={index} typeSection={etat}
                                         taches={tachesParEtat}
                                         onModifierEtatTache={this.props.onModifierEtatTache}
                                         onBloquerTache={this.props.onBloquerTache}
                                         onDetailTache={this.props.onDetailTache}
                                         onSupprimerTache={this.props.onSupprimerTache}/>
                })}
            </div>
        )

    }
}

TachesContainer.propTypes = {
    taches: PropTypes.array.isRequired,
    onModifierEtatTache: PropTypes.func,
    onBloquerTache: PropTypes.func,
    onDetailTache: PropTypes.func,
    onSupprimerTache: PropTypes.func
};

export default TachesContainer;