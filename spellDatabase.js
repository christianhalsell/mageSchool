var dbSpells = [
    
    // Fire spells
    {
        id: 1,
        name: "Fire 1",
        spellLevel: 1,
        discipline: "fire",
        damage: Math.floor(Math.random()* 6 + 1), // 1-6
        cooldown: 0,
        icon: "/images/iconFire1.jpg"
    },
    {
        id: 2,
        name: "Fire 2",
        spellLevel: 2,
        discipline: "fire",
        damage: Math.floor(Math.random()* 6 + 6), // 6-12
        cooldown: 1,
        icon: "/images/iconFire2.jpg"
    },
    {
        id: 3,
        name: "Fire 3",
        spellLevel: 3,
        discipline: "fire",
        damage: Math.floor(Math.random()* 6 + 12), // 12-16
        cooldown: 2,
        icon: "/images/iconFire3.jpg"
    },

    // Wood spells
    {
        id: 4,
        name: "Wood 1",
        spellLevel: 1,
        discipline: "wood",
        damage: Math.floor(Math.random()* 6 + 1), // 1-6
        cooldown: 0,
        icon: "/images/iconWood1.jpg"
    },
    {
        id: 5,
        name: "Wood 2",
        spellLevel: 2,
        discipline: "wood",
        damage: Math.floor(Math.random()* 6 + 6), // 6-12
        cooldown: 1,
        icon: "/images/iconWood2.jpg"
    },
    {
        id: 6,
        name: "Wood 3",
        spellLevel: 3,
        discipline: "wood",
        damage: Math.floor(Math.random()* 6 + 12), // 12-16
        cooldown: 2,
        icon: "/images/iconWood3.jpg"
    },

    // Water spells
    {
        id: 7,
        name: "Water 1",
        spellLevel: 1,
        discipline: "water",
        damage: Math.floor(Math.random()* 6 + 1), // 1-6
        cooldown: 0,
        icon: "/images/iconWater1.jpg"
    },
    {
        id: 8,
        name: "Water 2",
        spellLevel: 2,
        discipline: "water",
        damage: Math.floor(Math.random()* 6 + 6), // 6-12
        cooldown: 1,
        icon: "/images/iconWater2.jpg"
    },
    {
        id: 9,
        name: "Water 3",
        spellLevel: 3,
        discipline: "water",
        damage: Math.floor(Math.random()* 6 + 12), // 12-16
        cooldown: 2,
        icon: "/images/iconWater3.jpg"
    },

    // Metal spells
    {
        id: 10,
        name: "Metal 1",
        spellLevel: 1,
        discipline: "metal",
        damage: Math.floor(Math.random()* 6 + 1), // 1-6
        cooldown: 0,
        icon: "/images/iconMetal1.jpg"
    },
    {
        id: 11,
        name: "Metal 2",
        spellLevel: 2,
        discipline: "metal",
        damage: Math.floor(Math.random()* 6 + 6), // 6-12
        cooldown: 1,
        icon: "/images/iconMetal2.jpg"
    },
    {
        id: 12,
        name: "Metal 3",
        spellLevel: 3,
        discipline: "metal",
        damage: Math.floor(Math.random()* 6 + 12), // 12-16
        cooldown: 2,
        icon: "/images/iconMetal3.jpg"
    },

    // Earth spells
    {
        id: 13,
        name: "Earth 1",
        spellLevel: 1,
        discipline: "earth",
        damage: Math.floor(Math.random()* 6 + 1), // 1-6
        cooldown: 0,
        icon: "/images/iconEarth1.jpg"
    },
    {
        id: 14,
        name: "Earth 2",
        spellLevel: 2,
        discipline: "earth",
        damage: Math.floor(Math.random()* 6 + 6), // 6-12
        cooldown: 1,
        icon: "/images/iconEarth2.jpg"
    },
    {
        id: 15,
        name: "Earth 3",
        spellLevel: 3,
        discipline: "earth",
        damage: Math.floor(Math.random()* 6 + 12), // 12-16
        cooldown: 2,
        icon: "/images/iconEarth3.jpg"
    }
];

exports.spellDatabase = dbSpells;