import React from 'react';
import PropTypes from 'prop-types';


export const InputTache = (props) => (
    <div className="form-group">
        <label className="control-label col-sm-2" htmlFor={props.id}>{props.libelle}</label>
        <div className="col-sm-10">
            <input
                type={props.inputType}
                className="form-control"
                id={props.id}
                value={props.value}
                onChange={props.handleChangeTitre}
                placeholder={props.libelle}
            />
        </div>
    </div>
);

InputTache.propTypes = {
    inputType: PropTypes.oneOf([
        'text',
        'number'
        ]).isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
        ]).isRequired,
    handleChangeTitre: PropTypes.func.isRequired,
    libelle: PropTypes.string.isRequired
};

