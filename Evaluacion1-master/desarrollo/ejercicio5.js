const personajes = [
    {
        "id": 1,
        "name": "Goku",
        "race": "Saiyan",
        "attack": 50000,
        "defense": 50000,
        "abilities": [
        "Transformaciones de Super Saiyan",
        "Super Kamehameha",
        "Super Dragon Fist"
        ] 
    },
    {
        "id":2,
        "name": "Vegeta",
        "race": "Saiyan",
        "attack": 49000,
        "defense": 49000,
        "abilities": [
        "Super Saiyan Transformations",
        "Final Flash",
        "Big Bang Attack"
        ]
    },
    {
        "id": 3,
        "name": "Gohan",
        "race": "Humano/Saiyan",
        "attack": 38000,
        "defense": 38000,
        "abilities": [
        "Super Saiyan Transformations",
        "Super Kamehameha",
        "Masenko"
        ]
    },
    
    {
        "id": 4,
        "name": "Freezer",
        "race": "Unknown",
        "attack": 47000,
        "defense": 47000,
        "abilities": [
        "Eye Laser",
        "Death Beam",
        "Death Ball"
        ]
    },
    {
        "id": 5,
        "name": "Cell",
        "race": "Android",
        "attack": 20000,
        "defense": 20000,
        "abilities": [
        "Energy Shield",
        "Super Kamehameha",
        "Destructo Disk"
        ]
    },
    {
        "id": 6,
        "name": "Buu",
        "race": "Majin",
        "attack": 29000,
        "defense": 29000,
        "abilities": [
        "Absorption",
        "Healing",
        "Chocolate Beam"
        ]
    }
]


//Desarrollo

// 1. Ataque mas alto
function poderAlto() {
    return personajes.reduce((max, personaje) => personaje.attack > max.attack ? personaje : max, personajes[0]);
}

console.log("Personaje con mayor ataque", poderAlto());


// 2. Los Sayayines
function sayayines() {
    return personajes.filter(personaje => personaje.race === "Saiyan");
}

console.log("Los Sayayines en el planeta tierra son", sayayines());


// 3. poder de todos
function poderTodos() {
    return personajes.reduce((total, personaje) => total + personaje.attack, 0);
}

console.log("El poder de ataque de todos es", poderTodos());


// 4. solo nombres
function soloNombres() {
    return personajes.map(personaje => personaje.name);
}

console.log("Nombres de los guerreros", soloNombres());