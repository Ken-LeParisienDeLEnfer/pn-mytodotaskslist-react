import React from "react";
import classNames from "classnames";

export const Tache = (props) => {
    var btnBloqueClassName = classNames('bloque-bouton', {'est-bloquee' : props.tache.bloque});
    return <div className="tache">
        <div className="prec">
            { !props.tache.bloque && <button type="button" className={props.etat.btnPrecClassName} onClick={() => props.onClickModifierEtat(props.tache, props.tache.etat, props.etat.etatPrecedent)}>
                <i className="fa fa-angle-left"/>
            </button>}
        </div>
        <div className="info-tache-list">
            <div className="titre-tache-list">
                <p className="titre">
                    {props.tache.titre}
                </p>
            </div>
            <div className="boutons-tache-list">
                <button type="button" className={btnBloqueClassName} onClick={() => props.onClickBloquerTache(props.tache)}>
                    <i className="fa fa-ban"/>
                </button>
                <button type="button" className="plus-bouton" onClick={() => props.onClickDetailTache(props.tache)}>
                    <i className="fa fa-plus"/>
                </button>
                <button type="button" className="suppr-bouton" onClick={() => props.onClickSupprimerTache(props.tache)}>
                    <i className="fa fa-times"/>
                </button>
            </div>
        </div>
        <div className="suiv">
            { !props.tache.bloque && <button type="button" className={props.etat.btnSuivClassName} onClick={() => props.onClickModifierEtat(props.tache, props.tache.etat, props.etat.etatSuivant)}>
                <i className="fa fa-angle-right"/>
            </button>}
        </div>
    </div>
};