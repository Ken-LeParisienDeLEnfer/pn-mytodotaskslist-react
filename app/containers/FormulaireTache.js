import React from "react";
import PropTypes from 'prop-types';

class FormulaireTache extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tache : {
                titre : ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitre = this.handleChangeTitre.bind(this);

    }

    handleChangeTitre(event) {
        console.log("handleChangeTitre: " + event);
        this.setState({
            tache : {
                titre :event.target.value
            }
        });
    }

    handleSubmit(event) {
        var obj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                titre : this.state.tache.titre
            })
        };
        fetch('http://127.0.0.1:3000/tache/', obj).then(function (response) {
            console.log(response);
            return response.json();
        }).then((result) => {
            console.log(result);
            this.setState({
                tache: {
                    titre: ''
                }
            })
            this.props.onTacheEnregistree(result);
        }).catch((err) => {
            console.log("Erreur lors de l'enregistrement de la tâche" + err);
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="tache-form">
                <label className="col-sm-2 control-label" htmlFor="label-titre-formulaire">Titre</label>
                    <form className="col-sm-10" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        label="label-titre-formulaire"
                        className="form-control"
                        id="titre"
                        value={this.state.tache.titre}
                        onChange={this.handleChangeTitre}
                    />
                    <input className="btn btn-primary" type="submit" value="Enregistrer"/>
                </form>
            </div>
        )
    }
};

FormulaireTache.propTypes = {
    onTacheEnregistree: PropTypes.func.isRequired
};

export default FormulaireTache;