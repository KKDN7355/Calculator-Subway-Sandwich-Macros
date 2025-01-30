function calculateMacros() {
    const bread = document.getElementById("bread").value;
    const protein = document.getElementById("protein").value;
    const toppings = document.querySelectorAll("input[type=checkbox]:checked");

    let totalMacros = { calories: 0, protein: 0, carbs: 0, fat: 0 };

    // Add selected bread macros
    Object.keys(totalMacros).forEach(key => {
        totalMacros[key] += ingredientData.bread[bread][key];
    });

    // Add selected protein macros
    Object.keys(totalMacros).forEach(key => {
        totalMacros[key] += ingredientData.protein[protein][key];
    });

    // Add selected toppings macros
    toppings.forEach(topping => {
        let toppingValue = topping.value;
        Object.keys(totalMacros).forEach(key => {
            totalMacros[key] += ingredientData.toppings[toppingValue][key];
        });
    });

    // Display results
    document.getElementById("results").innerHTML = `
        Calories: ${totalMacros.calories} kcal<br>
        Protein: ${totalMacros.protein} g<br>
        Carbs: ${totalMacros.carbs} g<br>
        Fat: ${totalMacros.fat} g
    `;
}
