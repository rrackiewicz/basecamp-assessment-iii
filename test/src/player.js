import randa from './helpers.js';

export function getName(sex) {
  const boy = [
    "Aghon",
    "Boal",
    "Cydara",
    "Duba",
    "Eik",
    "Fyn",
    "Gryn",
    "Hacton",
    "Isen",
    "Jex",
    "Laderic",
    "Meowol",
    "Noford",
    "Ocarin",
    "Pyder",
    "Qupar",
    "Ryfar",
    "Syr",
    "Tuk",
    "Uerthe",
    "Volux",
    "Wyeth",
    "Xulo",
    "Y'reth",
    "Zio"
  ];

  const girl = [
    "Awnia",
    "Brana",
    "Calina",
    "Dylena",
    "Enoka",
    "Fayne",
    "Gvene",
    "Hildandi",
    "Jezzine",
    "Kassina",
    "Lyna",
    "Mylene",
    "Niraya",
    "Orwyne",
    "Peri'el",
    "Q'ara",
    "Ryiah",
    "Sina",
    "Tressa",
    "Useli",
    "Voladea",
    "Wyeta",
    "Xina",
    "Yysara",
    "Zephale"
  ];
  return (sex === 'boy') ? randa(boy) : randa (girl);
}
