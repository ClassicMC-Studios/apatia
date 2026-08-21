/* TO COPY 
    ___
    {
            "g": "",
            "e": "",
            "a": ["", true],
            "b": ["", false],
            "c": ["", false],
            "d": ["", false]
    },
*/
let language = JSON.parse(`
[
    [
        {
            "g": "O que você ___ em seguida?",
            "e": "What did you do then?",
            "a": ["fez", true],
            "b": ["faz", false],
            "c": ["disse", false],
            "d": ["teve", false]
        },

        {
            "g": "Tom poderia ___ aqui, se ele quisesse.",
            "e": "Tom could get here if he wanted to.",
            "a": ["vir", true],
            "b": ["ver", false],
            "c": ["ficar", false],
            "d": ["andar", false]
        },

        {
            "g": "Como ___ humano, preciso de respeito.",
            "e": "I as a human being, need respect.",
            "a": ["ser", true],
            "b": ["sou", false],
            "c": ["estar", false],
            "d": ["ficar", false]
        },

        {
            "g": "Senti tanto sua ___!",
            "e": "I missed you so much!",
            "a": ["falta", true],
            "b": ["presença", false],
            "c": ["voz", false],
            "d": ["saudade", false]
        },

        {
            "g": "A verdade ___!",
            "e": "The truth hurts.",
            "a": ["dói", true],
            "b": ["doeu", false],
            "c": ["custa", false],
            "d": ["arde", false]
        },

        {
            "g": "E ___ se eu for gay? Isso é um crime?",
            "e": "So what if I am gay? Is it a crime?",
            "a": ["daí", true],
            "b": ["aí", false],
            "c": ["então", false],
            "d": ["agora", false]
        },

        {
            "g": "Passei por um momento muito ___.",
            "e": "I went through a hard time.",
            "a": ["difícil", true],
            "b": ["forte", false],
            "c": ["pesado", false],
            "d": ["estranho", false]
        },

        {
            "g": "O seu ___ não é o melhor.",
            "e": "His mood is not the best.",
            "a": ["humor", true],
            "b": ["jeito", false],
            "c": ["estado", false],
            "d": ["sentimento", false]
        },
        {
            "g": "Nem mesmo Roma foi ___ num só dia.",
            "e": "Not even Rome was built in a single day.",
            "a": ["construída", true],
            "b": ["criada", false],
            "c": ["fundada", false],
            "d": ["terminada", false]
        },

        {
            "g": "Tom demonstra estar muito ___.",
            "e": "Tom appears to be very happy.",
            "a": ["feliz", true],
            "b": ["contente", false],
            "c": ["animado", false],
            "d": ["satisfeito", false]
        },

        {
            "g": "O problema é simples de ___.",
            "e": "The problem is simple to solve.",
            "a": ["resolver", true],
            "b": ["entender", false],
            "c": ["explicar", false],
            "d": ["evitar", false]
        }
    ]
]`);
language[0].sort(() => Math.random() - 0.5);
