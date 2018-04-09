import {Tache} from "./Tache";
import React from "react";


export const TacheListe = (props) => {
    let key = props.tache._id;
    return <li className="tache-list" key={key}>
        <Tache tache={props.tache}
               etat={props.etat}
               onClickModifierEtat={props.onModifierEtatTache}
               onClickBloquerTache={props.onBloquerTache}
               onClickDetailTache={props.onDetailTache}
               onClickSupprimerTache={props.onSupprimerTache}/>
    </li>
};

