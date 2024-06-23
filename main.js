const startDate = new Date('2023-01-01');
const annualAmount = ((9.145 * 53200) / (24 * 60 * 60)) * 1.83;
const amountNrrp = 1_300_000_000;

document.addEventListener('DOMContentLoaded', (event) => {
    const divNppr = document.getElementById('amount-nrrp');
    if (divNppr) {
        divNppr.innerHTML = amountNrrp.toLocaleString();
    }
    const divGreenHighway = document.getElementById('amount-green-highway');
    if (divGreenHighway) {
        divGreenHighway.innerHTML = Math.round(amountNrrp / 30000).toLocaleString();
    }

    setInterval(() => {
        const annualAmount = calculateAnnualAmount();

        const divCounter = document.getElementById('amount-botas');
        if (divCounter) {
            divCounter.innerHTML = annualAmount.toLocaleString();
        }

        const divMedication = document.getElementById('botas-medication');
        if (divMedication) {
            const medicationUnits = calculateMedicationUnits(annualAmount);
            divMedication.innerHTML = medicationUnits.toLocaleString();
        }
    }, 200);

    const calculateAnnualAmount = () => {
        const now = new Date();
        const elapsedSeconds = Math.abs(now.getTime() - startDate.getTime()) / 1000;

        return Math.round(annualAmount * elapsedSeconds);
    };

    const calculateMedicationUnits = (amount) => {
        return Math.round(amount / 17.5);
    };

});
