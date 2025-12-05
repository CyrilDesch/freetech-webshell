const TUTORIAL_KEY = 'nird_tutorial_completed';

const TUTORIAL_STEPS = [
    {
        title: "Bienvenue dans le terminal NIRD",
        content: `Vous êtes sur le point de découvrir la démarche NIRD :
        
<span style="color: #00ff41;">N</span>umérique <span style="color: #00ff41;">I</span>nclusif, <span style="color: #00ff41;">R</span>esponsable et <span style="color: #00ff41;">D</span>urable

Cette initiative vise à libérer les établissements scolaires
de la dépendance aux Big Tech et à promouvoir un numérique
éthique, durable et accessible à tous.`,
        hint: "Cliquez sur Suivant pour continuer"
    },
    {
        title: "Comment utiliser ce terminal ?",
        content: `Ce terminal est votre outil d'exploration de la démarche NIRD.

<span style="color: #00d9ff;">→ Tapez une commande</span> dans la zone de saisie en bas
<span style="color: #00d9ff;">→ Appuyez sur ENTRÉE</span> pour l'exécuter
<span style="color: #00d9ff;">→ Lisez les informations</span> affichées

Exemple : tapez <span style="color: #00ff41;">help</span> pour voir toutes les commandes disponibles`,
        hint: "Essayons ensemble !"
    },
    {
        title: "Commandes principales",
        content: `Voici les commandes essentielles pour commencer :

<span style="color: #00ff41;">nird</span>       - Découvrir la démarche NIRD
<span style="color: #00ff41;">contexte</span>   - Comprendre pourquoi NIRD existe
<span style="color: #00ff41;">piliers</span>    - Les 3 piliers : Inclusif, Responsable, Durable
<span style="color: #00ff41;">actions</span>    - Que fait concrètement NIRD ?
<span style="color: #00ff41;">etapes</span>     - Comment démarrer dans votre établissement

<span style="color: #ffff00;">Conseil :</span> Commencez par <span style="color: #00ff41;">nird</span> puis <span style="color: #00ff41;">contexte</span> pour comprendre les enjeux`,
        hint: "Prêt à explorer ?"
    }
];

class Tutorial {
    constructor() {
        this.currentStep = 0;
        this.modal = null;
        this.isCompleted = localStorage.getItem(TUTORIAL_KEY) === 'true';
    }

    shouldShow() {
        return !this.isCompleted;
    }

    start() {
        if (!this.shouldShow()) return;
        
        this.createModal();
        this.showStep(0);
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.id = 'tutorial-modal';
        this.modal.innerHTML = `
            <div class="tutorial-overlay"></div>
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <div class="tutorial-step-indicator">
                        <span class="tutorial-step-current">1</span>
                        <span class="tutorial-step-separator">/</span>
                        <span class="tutorial-step-total">${TUTORIAL_STEPS.length}</span>
                    </div>
                    <button class="tutorial-skip" id="tutorial-skip">Passer le tutoriel</button>
                </div>
                <div class="tutorial-body">
                    <h2 class="tutorial-title"></h2>
                    <div class="tutorial-text"></div>
                    <p class="tutorial-hint"></p>
                </div>
                <div class="tutorial-footer">
                    <button class="tutorial-btn tutorial-prev" id="tutorial-prev" style="display: none;">
                        ← Précédent
                    </button>
                    <button class="tutorial-btn tutorial-next" id="tutorial-next">
                        Suivant →
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(this.modal);

        document.getElementById('tutorial-skip').addEventListener('click', () => this.skip());
        document.getElementById('tutorial-prev').addEventListener('click', () => this.prevStep());
        document.getElementById('tutorial-next').addEventListener('click', () => this.nextStep());
    }

    showStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= TUTORIAL_STEPS.length) return;
        
        this.currentStep = stepIndex;
        const step = TUTORIAL_STEPS[stepIndex];

        this.modal.querySelector('.tutorial-title').textContent = step.title;
        this.modal.querySelector('.tutorial-text').innerHTML = step.content;
        this.modal.querySelector('.tutorial-hint').textContent = step.hint;
        
        this.modal.querySelector('.tutorial-step-current').textContent = stepIndex + 1;

        const prevBtn = document.getElementById('tutorial-prev');
        const nextBtn = document.getElementById('tutorial-next');

        prevBtn.style.display = stepIndex > 0 ? 'inline-block' : 'none';
        
        if (stepIndex === TUTORIAL_STEPS.length - 1) {
            nextBtn.textContent = 'Terminer ✓';
        } else {
            nextBtn.textContent = 'Suivant →';
        }
    }

    nextStep() {
        if (this.currentStep < TUTORIAL_STEPS.length - 1) {
            this.showStep(this.currentStep + 1);
        } else {
            this.complete();
        }
    }

    prevStep() {
        if (this.currentStep > 0) {
            this.showStep(this.currentStep - 1);
        }
    }

    complete() {
        localStorage.setItem(TUTORIAL_KEY, 'true');
        this.close();
    }

    skip() {
        if (confirm('Êtes-vous sûr de vouloir passer le tutoriel ? Vous pouvez toujours taper "help" pour obtenir de l\'aide.')) {
            this.complete();
        }
    }

    close() {
        if (this.modal) {
            this.modal.remove();
            this.modal = null;
        }
        const commandInput = document.getElementById('command-input');
        if (commandInput) {
            commandInput.focus();
        }
    }

    static reset() {
        localStorage.removeItem(TUTORIAL_KEY);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const tutorial = new Tutorial();
        tutorial.start();
    }, 500);
});

window.resetTutorial = () => {
    Tutorial.reset();
    location.reload();
};
