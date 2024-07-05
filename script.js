function calculateROI() {
    // Récupérer les valeurs des champs du formulaire
    const numEmployees = parseInt(document.getElementById('num-employees').value);
    const numHR = parseInt(document.getElementById('num-hr').value);
    const hoursAdmin = parseInt(document.getElementById('hours-admin').value);
    const errorRate = parseFloat(document.getElementById('error-rate').value) / 100;
    const costPerHour = parseFloat(document.getElementById('cost-per-hour').value);
    const annualSIRHCost = parseFloat(document.getElementById('annual-sirh-cost').value);
    const payroll = parseFloat(document.getElementById('payroll').value);

    // Calculer les économies potentielles
    const adminHoursSaved = hoursAdmin * 52; // Heures économisées par an
    const costSavedByAutomation = adminHoursSaved * costPerHour;
    const errorCostSaved = payroll * errorRate; // Risque d'erreur sur la masse salariale

    // Calculer le coût total du SIRH
    const totalSIRHCost = numEmployees * annualSIRHCost;

    // Calculer le ROI
    const totalSavings = costSavedByAutomation + errorCostSaved;
    const roi = (totalSavings - totalSIRHCost) / totalSIRHCost * 100;

    // Afficher le résultat
    document.getElementById('result').innerHTML = `
        <h2>Résultats du ROI</h2>
        <p>Économies réalisées grâce à l'automatisation : €${costSavedByAutomation.toFixed(2)}</p>
        <p>Économies réalisées grâce à la réduction des erreurs : €${errorCostSaved.toFixed(2)}</p>
        <p>Coût total du SIRH : €${totalSIRHCost.toFixed(2)}</p>
        <p>ROI : ${roi.toFixed(2)}%</p>
    `;

    // Expliquer le calcul du ROI
    document.getElementById('explanation').innerHTML = `
        <h2>Explication du Calcul du ROI</h2>
        <p>Le ROI (Retour sur Investissement) est calculé en utilisant la formule suivante :</p>
        <p><strong>ROI = (Économies Réalisées - Coût Total du SIRH) / Coût Total du SIRH * 100</strong></p>
        <p>Les économies réalisées comprennent les économies dues à l'automatisation et la réduction des erreurs.</p>
    `;
}
