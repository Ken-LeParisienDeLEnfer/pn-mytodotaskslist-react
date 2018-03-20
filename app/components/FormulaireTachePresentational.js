import React from "react";
import PropTypes from "prop-types";

const FormulaireTachePresentational = ({ tache, handleChange, handleCreateTask }) => {
    return (
        <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="label-titre-formulaire">Titre</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    label="label-titre-formulaire"
                    className="form-control"
                    id="titre"
                    value={tache.titre}
                    onChange={handleChange}
                    required
                />
                <button className="btn-primary" onClick={handleCreateTask}>Créer</button>
            </div>
        </div>
    )
};

FormulaireTachePresentational.propTypes = {
    tache: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
};
export default FormulaireTachePresentational;