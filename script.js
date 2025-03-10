document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (!macrosData || typeof macrosData !== "object") {
            alert("Error: macrosData is undefined or not an object.");
            return;
        }
    }, 200);
});

function randomise() {
    // Ensure macro data is loaded.
    if (!macrosData) {
        alert("Error: Macro data not loaded correctly.");
        return;
    }

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Randomly select a bread size.
    const breadSizes = ["none", "single", "double"];
    document.querySelector(`input[name="bread_amount"][value="${getRandomElement(breadSizes)}"]`).checked = true;

    // Randomly select a bread type.
    const breadOptions = Array.from(document.querySelectorAll("#bread_type option"));
    document.getElementById("bread_type").value = getRandomElement(breadOptions.map(option => option.value));

    // Randomly select a meat size.
    const meatSizes = ["none", "single", "double"];
    document.querySelector(`input[name="meat_amount"][value="${getRandomElement(meatSizes)}"]`).checked = true;

    // Randomly select a meat type.
    const meatOptions = Array.from(document.querySelectorAll("#meat_type option"));
    document.getElementById("meat_type").value = getRandomElement(meatOptions.map(option => option.value));

    // Randomly select meat extras.
    const meatExtras = Array.from(document.querySelectorAll('input[name="meat_extra"]'));
    meatExtras.forEach(meat => meat.checked = Math.random() < 0.5);

    // Randomly select a cheese size.
    const cheeseSizes = ["none", "single", "double"];
    document.querySelector(`input[name="cheese_amount"][value="${getRandomElement(cheeseSizes)}"]`).checked = true;

    // Randomly select a cheese type.
    const cheeseOptions = Array.from(document.querySelectorAll("#cheese_type option"));
    document.getElementById("cheese_type").value = getRandomElement(cheeseOptions.map(option => option.value));

    // Randomly select salads.
    const saladOptions = Array.from(document.querySelectorAll('input[name="salads_type"]'));
    saladOptions.forEach(salad => salad.checked = Math.random() < 0.5);

    // Randomly select salad extras.
    const saladExtras = Array.from(document.querySelectorAll('input[name="salads_extra"]'));
    saladExtras.forEach(extra => extra.checked = Math.random() < 0.5);

    // Randomly select a sauce.
    const sauceOptions = Array.from(document.querySelectorAll("#sauce_type option"));
    document.getElementById("sauce_type").value = getRandomElement(sauceOptions.map(option => option.value));
}

function calculateMacros() {
    // Ensure macro data is loaded.
    if (!macrosData) {
        alert("Error: Macro data not loaded correctly.");
        return;
    }

    // Multipliers
    const bread_amount  = document.querySelector('input[name="bread_amount"]:checked')?.value || "none";
    const meat_amount   = document.querySelector('input[name="meat_amount"]:checked')?.value || "none";
    const cheese_amount = document.querySelector('input[name="cheese_amount"]:checked')?.value || "none";

    // Dropdowns
    const bread_type    = document.getElementById("bread_type").value;
    const meat_type     = document.getElementById("meat_type").value;
    const cheese_type   = document.getElementById("cheese_type").value;
    const sauce_type    = document.getElementById("sauce_type").value;
    
    // Additional Meats
    const meat_extra = Array.from(document.querySelectorAll('input[name="meat_extra"]:checked'))
        .map(meat => meat.value);

    // Salads
    const salads = Array.from(document.querySelectorAll('input[name="salads_type"]:checked'))
        .map(salad => salad.value);

    // Additional Salads
    const salads_extra = Array.from(document.querySelectorAll('input[name="salads_extra"]:checked'))
        .map(salad => salad.value);    

    // Initialise macro totals.
    let totalMacros = { cal: 0, pro: 0, fat: 0, sat_fat: 0, car: 0 };

    // Debugging output.
    console.log("Bread Amount Selected:  ", bread_amount);
    console.log("Bread Type Selected:    ", bread_type);
    console.log("Meat Amount Selected:   ", meat_amount);
    console.log("Meat Type Selected:     ", meat_type);
    console.log("Selected Extra Meats:   ", meat_extra);
    console.log("Cheese Amount Selected: ", cheese_amount);
    console.log("Cheese Type Selected:   ", cheese_type);
    console.log("Salads Selected:        ", salads);
    console.log("Salads Extras Selected: ", salads_extra);
    console.log("Sauce Type Selected:    ", sauce_type);

    // Add bread macros.
    if (bread_amount !== "none" && macrosData.bread_type.hasOwnProperty(bread_type)) {
        Object.keys(totalMacros).forEach(key => {
            totalMacros[key] += macrosData.bread_type[bread_type][key] * (bread_amount === "double" ? 2 : 1);
        });
    } else {
        console.error(`Error: Bread type '${bread_type}' not found in macrosData.bread_type.`);
    }

    // Add meat macros.
    if (meat_amount !== "none" && macrosData.meat_type.hasOwnProperty(meat_type)) {
        Object.keys(totalMacros).forEach(key => {
            totalMacros[key] += macrosData.meat_type[meat_type][key] * (meat_amount === "double" ? 2 : 1) * (bread_amount === "double" ? 2 : 1);
        });
    } else {
        console.error(`Error: Meat type '${meat_type}' not found in macrosData.meat_type.`);
    }

    // Add extra meats macros.
    meat_extra.forEach(meat => {
        if (macrosData.meat_extra.hasOwnProperty(meat)) {
            Object.keys(totalMacros).forEach(key => {
                totalMacros[key] += macrosData.meat_extra[meat][key] * (bread_amount === "double" ? 2 : 1);
            });
        } else {
            console.error(`Error: Extra meat '${meat}' not found in macrosData.meat_extra.`);
        }
    });

    // Add cheese macros.
    if (cheese_amount !== "none" && macrosData.cheese_type.hasOwnProperty(cheese_type)) {
        Object.keys(totalMacros).forEach(key => {
            totalMacros[key] += macrosData.cheese_type[cheese_type][key] * (cheese_amount === "double" ? 2 : 1) * (bread_amount === "double" ? 2 : 1);
        });
    } else {
        console.error(`Error: Cheese type '${cheese_type}' not found in macrosData.cheese_type.`);
    }

    // Add salad macros.
    salads.forEach(salad => {
        if (macrosData.salads && macrosData.salads.hasOwnProperty(salad)) {
            Object.keys(totalMacros).forEach(key => {
                totalMacros[key] += macrosData.salads[salad][key];
            });
        } else {
            console.error(`Error: Salad '${salad}' not found in macrosData.salad.`);
        }
    });

    // Add extra salads macros.
    salads_extra.forEach(salad_extra => {
        if (macrosData.salads_extra.hasOwnProperty(salad_extra)) {
            Object.keys(totalMacros).forEach(key => {
                totalMacros[key] += macrosData.salads_extra[salad_extra][key];
            });
        } else {
            console.error(`Error: Extra salad '${salad_extra}' not found in macrosData.salad_extra.`);
        }
    });

    // Add sauce macros.
    if (macrosData.sauce_type && macrosData.sauce_type.hasOwnProperty(sauce_type)) {
        Object.keys(totalMacros).forEach(key => {
            totalMacros[key] += macrosData.sauce_type[sauce_type][key];
        });
    } else {
        console.error(`Error: Sauce type '${sauce_type}' not found in macrosData.sauce_type.`);
    }

    // Round values to two decimal places and format to three digits with leading zeros.
    Object.keys(totalMacros).forEach(key => {
        totalMacros[key] = totalMacros[key].toFixed(2).padStart(6, '0');
    });

    // Results
    const resultDiv = document.createElement("div");
    resultDiv.className = "alert result-alert";

    resultDiv.innerHTML = `
        kCal: ${totalMacros.cal}
        <br>
        P (g): ${totalMacros.pro}
        <br>
        F (g): ${totalMacros.fat}
        <br>
        C (g): ${totalMacros.car}
    `;

    const form = document.getElementById("macro-form");
    const existingAlert = document.querySelector(".alert");
    if (existingAlert) existingAlert.remove();
    form.appendChild(resultDiv);
}