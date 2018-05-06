import React from 'react';
import PropTypes from 'prop-types';


export const RadioBoutonsPriorite = (props) => (
    <div className="form-group">
        <label className="control-label col-sm-2">{props.libelle}</label>
        <div className="col-sm-10">
            {props.optionsPriorite.map(opt => {
                return (
                    <label key={opt} className="radio-inline">
                        <input
                            name="priorite"
                            onChange={props.handleChangePriorite}
                            value={opt}
                            checked={ props.selectedOptions.indexOf(opt) > -1 }
                            type="radio" /> {opt}
                    </label>
                );
            })}
        </div>
    </div>
);

RadioBoutonsPriorite.propTypes = {
    selectedOptions: PropTypes.string,
    optionsPriorite: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    handleChangePriorite: PropTypes.func.isRequired,
    libelle: PropTypes.string.isRequired
};

