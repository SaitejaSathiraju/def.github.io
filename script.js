const categorySubcategories = {
    weapons: ['Firearms', 'Explosives', 'Melee Weapons', 'Artillery', 'Missiles'],
    armour: ['Body Armour', 'Vehicle Armour', 'Fortifications'],
    jets: ['Fighter Jets', 'Bomber Jets', 'Reconnaissance Jets'],
    naval: ['Battleships', 'Submarines', 'Aircraft Carriers'],
    missiles: ['Ballistic Missiles', 'Cruise Missiles'],
    artillery: ['Howitzers', 'Mortars'],
    drones: ['Recon Drones', 'Combat Drones'],
    cyber: ['Offensive Cyber Operations', 'Defensive Cyber Operations'],
    satellites: ['Communication Satellites', 'Reconnaissance Satellites'],
    vehicles: ['Tanks', 'Armored Personnel Carriers'],
    communications: ['Radio Systems', 'Satellite Communication'],
    radar: ['Air Defense Radar', 'Naval Radar'],
    bio: ['Biological Weapons', 'Defensive Measures'],
    chemical: ['Chemical Weapons', 'Defensive Measures'],
    nuclear: ['Nuclear Bombs', 'Nuclear Defense Systems'],
    engineering: ['Combat Engineering', 'Construction Engineering'],
    intelligence: ['Signal Intelligence', 'Human Intelligence'],
    training: ['Basic Training', 'Special Forces Training'],
    strategy: ['Military Strategy', 'Tactical Operations']
};

document.getElementById('category').addEventListener('change', function () {
    const category = this.value;
    const subcategorySelect = document.getElementById('subcategory');
    subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';

    if (categorySubcategories[category]) {
        categorySubcategories[category].forEach(subcategory => {
            const option = document.createElement('option');
            option.value = subcategory.toLowerCase().replace(/ /g, '_');
            option.text = subcategory;
            subcategorySelect.add(option);
        });
        document.getElementById('subcategory-div').classList.remove('hidden');
    } else {
        document.getElementById('subcategory-div').classList.add('hidden');
    }
});

document.getElementById('fetch-data').addEventListener('click', async () => {
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    let endpoint = `https://api.example.com/defense/${category}`;

    if (subcategory) {
        endpoint += `/${subcategory}`;
    }

    const response = await fetch(endpoint);
    const data = await response.json();
    document.getElementById('category-title').innerText = data.title;
    document.getElementById('category-content').innerHTML = data.description;
    document.getElementById('category-info').classList.remove('hidden');
});

document.getElementById('fetch-country-data').addEventListener('click', async () => {
    const country = document.getElementById('country').value;
    const endpoint = `https://api.example.com/defense/countries/${country}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    document.getElementById('country-title').innerText = data.title;
    document.getElementById('country-content').innerHTML = data.description;
    document.getElementById('country-info').classList.remove('hidden');
});

