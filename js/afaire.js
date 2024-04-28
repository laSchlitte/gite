let currentStep = 1;
    const steps = document.querySelectorAll('.step');

    function showStep(step,dir) {
        steps.forEach((step) => {
            step.classList.remove('active');
            step.classList.remove('gauche');
            step.classList.remove('droite');
        });
        steps[step - 1].classList.add('active');
        if (dir=="droite"){
            steps[step - 1].classList.add('droite');
        }
        if (dir=="gauche"){
            steps[step - 1].classList.add('gauche');
        }
        
    }

    function nextStep() {
        if (currentStep < steps.length) {
            currentStep++;
            showStep(currentStep,"droite");
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep,"gauche");
        }
    }
