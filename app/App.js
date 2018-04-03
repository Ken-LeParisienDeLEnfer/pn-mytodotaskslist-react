import React from 'react';
import { render } from 'react-dom';
import ListeTaches from "./containers/ListeTaches";
import "../assets/my-todo-tasks-list.css";
import { ETATS } from './constants/EtatsConstants';
import FormulaireTache from "./containers/FormulaireTache";


class App extends React.Component {

    constructor() {
        super();
        this.state = { tachesTODO: [],
                        tachesWIP: [],
                        tachesDONE: [],
                        tacheForm: {
                            titre: ""
                        } } ;
        this.handleTacheEnregistree = this.handleTacheEnregistree.bind(this);
    }

    componentDidMount() {
        var obj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        fetch('http://127.0.0.1:3000/tache/', obj).then(function (response) {
            console.log(response);
            return response.json();
        }).then((result) => {
            console.log(ETATS.TODO);

            this.setState({
                tachesTODO: result.filter(tache => tache.etat == ETATS.TODO.libelle),
                tachesWIP: result.filter(tache => tache.etat == ETATS.WIP.libelle),
                tachesDONE: result.filter(tache => tache.etat == ETATS.DONE.libelle)
            });
        }).catch((err) => {
            console.log('Erreur lors de la récupération des tâches' + err);
        });
    }

    handleEtatSuivant(event, etat) {
        console.log("event " + event);
        console.log("etat " + etat);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3 form-task">
                    <FormulaireTache onTacheEnregistree={this.handleTacheEnregistree} />
                </div>

                    <ListeTaches classNameConteneur="col-sm-3 todo-tasks"
                                 typeSection={ETATS.TODO}
                                 taches={this.state.tachesTODO}
                                 onEtatPrecedent={this.handleEtatSuivant}
                                 onEtatSuivant={this.handleEtatSuivant}/>

                    <ListeTaches classNameConteneur="col-sm-3 wip-tasks"
                                 typeSection={ETATS.WIP}
                                 taches={this.state.tachesWIP}
                                 onEtatPrecedent={this.handleEtatSuivant}
                                 onEtatSuivant={this.handleEtatSuivant}/>

                    <ListeTaches typeSection={ETATS.DONE}
                                 taches={this.state.tachesDONE}
                                 onEtatPrecedent={this.handleEtatSuivant}
                                 onEtatSuivant={this.handleEtatSuivant}/>
            </div>
        );
    }


    handleTacheEnregistree(tacheEnregistree) {
        console.log("Tache enregistree : ");
        debugger
        console.log(tacheEnregistree);
        this.setState({
            tachesTODO: [...this.state.tachesTODO, tacheEnregistree]
        })


    }
}

render(<App />, window.document.getElementById('app'));