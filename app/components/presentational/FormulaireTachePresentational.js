import React from "react";
import PropTypes from "prop-types";
import Tache from "../../data/Tache"

const FormulaireTachePresentational = ({ tache, handleChange }) => (
    <div className="form-group">
        <label class="col-sm-2 control-label" htmlFor="label-titre-formulaire">Titre</label>
        <div class="col-sm-10">
            <input
                type="text"
                label="label-titre-formulaire"
                className="form-control"
                id="titre-{tache.id}"
                value={tache.titre}
                onChange={handleChange}
                required
            />
        </div>
    </div>
);
FormulaireTachePresentational.propTypes = {
    tache: PropTypes.objectOf(Tache).isRequired,
    handleChange: PropTypes.func.isRequired
};
export default FormulaireTachePresentational;