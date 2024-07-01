const startDateBotas = new Date('2023-01-01');
const amountBotasPerDay = 9.145 * 53_200 * 1.83; // leva per day
const amountPerSecond = amountBotasPerDay / (24 * 60 * 60); // leva per second
const amountNrrp = 1_300_000_000;
const bgPopulation = 6_519_789;

document.addEventListener('DOMContentLoaded', () => {
    // Set the amount of NRRP
    const divNppr = document.getElementById('amount-nrrp');
    if (divNppr) {
        divNppr.innerHTML = amountNrrp.toLocaleString();
    }

    // Set the amount of Green Highway
    const divGreenHighway = document.getElementById('amount-green-highway');
    if (divGreenHighway) {
        divGreenHighway.innerHTML = Math.round(amountNrrp / 30000).toLocaleString();
    }

    // Set amount for pensioners
    const divBotasPensioners = document.getElementById('botas-pensioners');
    if (divBotasPensioners) {
        const pensioners = Math.round((amountBotasPerDay * 365) / 500_000);
        divBotasPensioners.innerHTML = pensioners.toLocaleString();
    }
    // Set amount for pensioners
    const divNrrpPensioners = document.getElementById('nnrp-pensioners');
    if (divNrrpPensioners) {
        const pensioners = Math.round(amountNrrp / 2_100_000);
        divNrrpPensioners.innerHTML = pensioners.toLocaleString();
    }
    // Set amount per capita
    const divNrrpPerCapita = document.getElementById('nrrp-per-capita');
    if (divNrrpPerCapita) {
        const perNnrpCapita = Math.round(amountNrrp * 100 / bgPopulation) / 100;
        divNrrpPerCapita.innerHTML = perNnrpCapita.toLocaleString();
    }

    setInterval(() => {
        const currentBotasAmount = calculateBotasAmounts();

        // Set the amount of BOTAS
        const divCounter = document.getElementById('botas-total');
        if (divCounter) {
            divCounter.innerHTML = currentBotasAmount.toLocaleString();
        }
        // Set the amount of medication
        const divMedication = document.getElementById('botas-medication');
        if (divMedication) {
            const medicationUnits = Math.round(currentBotasAmount / 17.5);
            divMedication.innerHTML = medicationUnits.toLocaleString();
        }
        // Set the amount of sidewalks
        const divSidewalks = document.getElementById('botas-sidewalks');
        if (divSidewalks) {
            const sidewalks = Math.round(currentBotasAmount / 37);
            divSidewalks.innerHTML = sidewalks.toLocaleString();
        }
        // Set the amount per capita
        const divPerCapita = document.getElementById('botas-per-capita');
        if (divPerCapita) {
            const perCapita = Math.round(currentBotasAmount * 100 / bgPopulation) / 100;
            divPerCapita.innerHTML = perCapita.toLocaleString();
        }
    }, 200);

    const calculateBotasAmounts = () => {
        const now = new Date();
        const elapsedSeconds = Math.abs(now.getTime() - startDateBotas.getTime()) / 1000;

        return Math.round(amountPerSecond * elapsedSeconds);
    };

});
