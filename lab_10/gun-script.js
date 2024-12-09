const key = window.location.hash.substring(1);
const weapons = {
    Zeus: {
        name: "Zeus",
        image: "assets/Zeus.jpg",
        details: {
            Info: "Зброя для пострілів на малій дистанції з одним патроном у магазині.",
        }
    },
    DesertEagle: {
        name: "Desert-Eagle",
        image: "assets/Desert Eagle.jpg",
        details: {
            Info: "Самозарядний пістолет великого калібру (до 12,7 мм).",
        }
    },
    Tec9: {
        name: "Tec-9",
        image: "assets/Tec-9.jpg",
        details: {
            Info: "Самозарядний пістолет заснований на принципі вільного затвора.",
        }
    },
    FiveseveN: {
        name: "Five-seveN",
        image: "assets/Five-seveN.jpg",
        details: {
            Info: "Бельгійський самозарядний пістолет.",
        }
    },
    DualBerettas: {
        name: "Dual-Berettas",
        image: "assets/Dual Berettas.jpg",
        details: {
            Info: "Серія напівавтоматичних пістолетів, розроблених Beretta.",
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('weapon');

    if (key && weapons[key]) {
        showDetails(key);
    } else {
        document.getElementById("Content").innerHTML = "<p>Weapon not found!</p>";
    }
});

function showDetails(key) {
    const weapon = weapons[key];
    const weaponContent = `
        <h1>${weapon.name}</h1>
        <img src="${weapon.image}" alt="${weapon.name}" class="details-image">
        <div class="info">
            ${Object.entries(weapon.details)
                .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                .join('')}
        </div>
    `;
    document.getElementById("Content").innerHTML = weaponContent;
}
