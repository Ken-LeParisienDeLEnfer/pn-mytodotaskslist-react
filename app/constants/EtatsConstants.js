export const ETATS = {
    TODO: {
        libelle : "TODO",
        conteneurClassName : "col-sm-3 todo-tasks",
        titreSectionClassName : "todo-task-titre",
        btnPrecClassName : "hide",
        btnSuivClassName : "btn etat-btn to-wip",
        etatPrecedent: "TODO",
        etatSuivant: "WIP"
    },
    WIP : {
        libelle : "WIP",
        conteneurClassName : "col-sm-3 wip-tasks",
        titreSectionClassName : "wip-task-titre",
        btnPrecClassName : "btn etat-btn to-todo",
        btnSuivClassName : "btn etat-btn to-done",
        etatPrecedent: "TODO",
        etatSuivant: "DONE"
    },
    DONE: {
        libelle : "DONE",
        conteneurClassName : "col-sm-3 done-tasks",
        titreSectionClassName : "done-task-titre",
        btnPrecClassName : "btn etat-btn to-wip",
        btnSuivClassName : "hide",
        etatPrecedent: "WIP",
        etatSuivant: "DONE"
    }
};