/* Your data here */
import matchamisu from "./assets/matchamisu.jpg";
import coffeemisu from "./assets/coffeemisu.jpg";
import wickedMatcha from "./assets/wicked.jpg";
import matchaLatte from "./assets/matchalatte.jpg";
import matchaMochi from "./assets/matchamochi.jpg";
import tiramisu from "./assets/tiramisujpg.jpg";

export const matchaMenu = [
    {
        id: "e1",
        name: "MatchaMisu",
        price: "3.50",
        image: {
            src: matchamisu,
            alt: "MatchaMisu",
        }
    },

    {
        id: "e2",
        name: "CoffeeMisu",
        price: "3.50",
        image: {
            src: coffeemisu,
            alt: "CoffeeMisu",
        },
    },

    {
        id: "e3",
        name: "Wicked Matcha",
        price: "4.00",
        image: {
            src: wickedMatcha,
            alt: "Wicked Matcha",
        },
    },
    {
        id: "e4",
        name: "Ceremonial Grade Matcha Latte",
        price: "4.00",
        image: {
            src: matchaLatte,
            alt: "Ceremonial Grade Matcha Latte",
        },
    },
    {
        id: "e5",
        name: "Matcha Mochi",
        price: "2.00",
        image: {
            src: matchaMochi,
            alt: "Matcha Mochi",
        },
    },
    {
        id: "e6",
        name: "Tiramisu",
        price: "3.50",
        image: {
            src: tiramisu,
            alt: "Tiramisu",
        },
    },
];
