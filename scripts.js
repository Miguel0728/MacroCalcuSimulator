document.getElementById('macroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value); // en lb
    let heightFt = parseFloat(document.getElementById('height').value); // en ft
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);
    const objective = parseInt(document.getElementById('objective').value);

    const heightIn = heightFt * 12; // Convert ft to inches

    let tmb;
    if (gender === 'male') {
        tmb = 66 + (6.23 * weight) + (7.7 * heightIn) - (6.8 * age);
    } else {
        tmb = 655 + (4.35 * weight) + (4.7 * heightIn) - (4.7 * age);
    }
    const caloriasMantenimiento = Math.round(tmb * activity);
    const calorias = caloriasMantenimiento + objective;
    const carbs = Math.round((calorias * 0.5) / 4);
    const protein = Math.round((calorias * 0.2) / 4);
    const fat = Math.round((calorias * 0.3) / 9);

    document.getElementById('resCalories').textContent = calorias;
    document.getElementById('resCarbs').textContent = carbs;
    document.getElementById('resProtein').textContent = protein;
    document.getElementById('resFat').textContent = fat;
    document.getElementById('result').style.display = 'block';
});