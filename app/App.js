import React from 'react';
import { render } from 'react-dom';
import TachesContainer from "./containers/TachesContainer";
import "../assets/my-todo-tasks-list.css";
import FormulaireTache from "./containers/FormulaireTache";
import "../assets/favicon.ico";


class App extends React.Component {

    constructor() {
        super();
        this.state = { taches: [] } ;
        this.handleTacheEnregistree = this.handleTacheEnregistree.bind(this);
        this.handleModifierEtatTache = this.handleModifierEtatTache.bind(this);
    }



    componentDidMount() {
        var obj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        fetch('http://127.0.0.1:3000/tache/', obj).then(function (response) {
            return response.json();
        }).then((result) => {
            this.setState((previousState) => {
                previousState.taches = result;
                return previousState;
            });
        }).catch((err) => {
            console.log('Erreur lors de la récupération des tâches' + err);
        });
    }

    handleModifierEtatTache(tacheModifiee, etatSource, etatCible) {
        console.log("Tache Modifiée :" + tacheModifiee);
        console.log("Tache Modifiée : etat source : " + etatSource);
        console.log("Tache Modifiée : etat cible : " + etatCible);
        let endPoint = 'http://127.0.0.1:3000/tache/' + tacheModifiee._id;
        var obj = {
            method: 'PUT',
            mode: 'CORS',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                etat : etatCible
            })
        };
        debugger
        fetch(endPoint, obj).then(function (response) {
            console.log(response);
            return response.json();
        }).then((result) => {
            let tachesMisesAJour = this.state.taches
            debugger;
            tachesMisesAJour = tachesMisesAJour.filter((tache) => tache._id !== result._id);
            tachesMisesAJour.push(result);
            this.setState((previousState) => {
                previousState.taches = tachesMisesAJour;
                return previousState;
            });
            console.log(result);
        }).catch((err) => {
            console.log("Erreur lors de la mise à jour de la tâche" + err);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3 form-task">
                    <FormulaireTache onTacheEnregistree={this.handleTacheEnregistree} />
                </div>
                <TachesContainer taches={this.state.taches} onModifierEtatTache={this.handleModifierEtatTache}/>
                {/*
                <ListeTaches classNameConteneur={ETATS[etat].conteneurClassName}
                                 typeSection={ETATS[etat]}
                                 taches={taches}
                                 onClickChangerEtat={this.handleEtatSuivant}/>

                <ListeTaches classNameConteneur="col-sm-3 todo-tasks"
                                 typeSection={ETATS.TODO}
                                 taches={this.state.tachesTODO}
                                 onClickChangerEtat={this.handleEtatSuivant}/>

                    <ListeTaches classNameConteneur="col-sm-3 wip-tasks"
                                 typeSection={ETATS.WIP}
                                 taches={this.state.tachesWIP}
                                 onClickChangerEtat={this.handleEtatSuivant}/>

                    <ListeTaches typeSection={ETATS.DONE}
                                 taches={this.state.tachesDONE}
                                 onClickChangerEtat={this.handleEtatSuivant}/> */}
            </div>
        );
    }


    handleTacheEnregistree(tacheEnregistree) {
        console.log("Tache enregistree : ");
        console.log(tacheEnregistree);
        let tachesMisesAJour = this.state.taches
        tachesMisesAJour.push(tacheEnregistree);
        this.setState((previousState) => {
            previousState.taches = tachesMisesAJour;
            return previousState;
        });
    }
}

render(<App />, window.document.getElementById('app'));