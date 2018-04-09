import React from "react";
import PropTypes from 'prop-types';
import {TacheListe} from "../presentational/TacheListe";

class ListeTaches extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
        <div className={this.props.typeSection.conteneurClassName}>
                <p className={this.props.typeSection.titreSectionClassName}>{this.props.typeSection.libelle}</p>
                <ul className="taches-list">
                    {this.props.taches.map( (tache, index) => {
                        return (
                            <TacheListe key={index}
                                        tache={tache}
                                        etat={this.props.typeSection}
                                        onModifierEtatTache={this.props.onModifierEtatTache}
                                        onBloquerTache={this.props.onBloquerTache}
                                        onDetailTache={this.props.onDetailTache}
                                        onSupprimerTache={this.props.onSupprimerTache}/>
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
    onModifierEtatTache: PropTypes.func,
    onClickBloquerTache: PropTypes.func,
    onClickDetailTache: PropTypes.func,
    onClickSupprimerTache: PropTypes.func
};

export default ListeTaches;
