import React from 'react';
import PropTypes from 'prop-types';


export const RadioBoutonsPriorite = (props) => (
    <div className="form-group">
        <label className="control-label col-sm-2">{props.libelle}</label>
        <div className="col-sm-10">
            {props.optionsPriorite.map(opt => {
                console.log(props.selectedOptions);
                return (
                    <label key={opt.libelle} className="radio-inline container-priorite">
                        <input
                            name="priorite"
                            onChange={props.handleChangePriorite}
                            value={opt.valeur}
                            checked={ props.selectedOptions.indexOf(opt.valeur) > -1 }
                            type="radio" /> {opt.libelle}
                        <span className={opt.className}></span>
                    </label>
                );
            })}
        </div>
    </div>
);

RadioBoutonsPriorite.propTypes = {
    selectedOptions: PropTypes.string,
    optionsPriorite: PropTypes.array.isRequired,
    handleChangePriorite: PropTypes.func.isRequired,
    libelle: PropTypes.string.isRequired
};

