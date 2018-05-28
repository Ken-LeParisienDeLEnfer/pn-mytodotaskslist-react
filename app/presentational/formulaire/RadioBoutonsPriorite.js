import React from 'react';
import PropTypes from 'prop-types';


export const RadioBoutonsPriorite = (props) => (
    <div className="form-group">
        <label className="control-label col-sm-2">{props.libelle}</label>
        <div className="col-sm-10">
            {props.optionsPriorite.map(opt => {
                return (
                    <label key={opt.libelle} className="radio-inline container-priorite">
                        <input
                            name="priorite"
                            onChange={props.handleChangePriorite}
                            value={opt.valeur}
                            checked={ props.selectedOptions === opt.valeur }
                            type="radio" /> {opt.libelle}
                        <span className={opt.className}></span>
                    </label>
                );
            })}
        </div>
    </div>
);

RadioBoutonsPriorite.propTypes = {
    selectedOptions: PropTypes.number,
    optionsPriorite: PropTypes.array.isRequired,
    handleChangePriorite: PropTypes.func.isRequired,
    libelle: PropTypes.string.isRequired
};

