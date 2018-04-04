import React from "react";
import PropTypes from 'prop-types';

class ListeTaches extends React.Component {

    constructor(props) {
        super(props);

    }


    handleClickChangerEtat(tache, etatSource, etatCible) {
        this.props.onClickChangerEtat(tache, etatSource, etatCible);
}


    render() {
        console.log(this.props.taches);
        return (
        <div className={this.props.typeSection.conteneurClassName}>
                <p className={this.props.typeSection.titreSectionClassName}>{this.props.typeSection.libelle}</p>
                <ul className="taches-list">
                    {this.props.taches.map( (tache, index) => {
                        return (
                            <li className="tache-list" key={index}>
                                <div className="prec">
                                    <button type="button" className={this.props.typeSection.btnPrecClassName} onClick={() => this.handleClickChangerEtat(tache, tache.etat, this.props.typeSection.etatPrecedent)}>
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                </div>
                                <div className="info-tache-list">
                                    <div className="titre-tache-list">
                                        <p className="titre">
                                        {tache.titre}
                                        </p>
                                    </div>
                                    <div className="boutons-tache-list">
                                        <button type="button" className="bloque-bouton" onClick={() => this.handleClickChangerEtat(tache, tache.etat, this.props.typeSection.etatPrecedent)}>
                                            <i className="fa fa-ban"></i>
                                        </button>
                                        <button type="button" className="plus-bouton" onClick={() => this.handleClickChangerEtat(tache, tache.etat, this.props.typeSection.etatPrecedent)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                        <button type="button" className="suppr-bouton" onClick={() => this.handleClickChangerEtat(tache, tache.etat, this.props.typeSection.etatPrecedent)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="suiv">
                                    <button type="button" className={this.props.typeSection.btnSuivClassName} onClick={() => this.handleClickChangerEtat(tache, tache.etat, this.props.typeSection.etatSuivant)}>
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </div>
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
    }
}

ListeTaches.propTypes = {
    taches: PropTypes.array.isRequired,
    typeSection: PropTypes.object.isRequired,
    onClickChangerEtat: PropTypes.func
};

export default ListeTaches;
