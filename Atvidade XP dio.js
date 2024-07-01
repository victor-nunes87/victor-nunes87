/// Exercicio da Dio (Game)

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante



let i = 1;
let XP = 99999999;
var nome = 'Björn Ironside';

while (i <= 1) {
    // Solicita ao usuário para adicionar um número!
    let nivel;

    switch (true) {
        case (XP < 1000):
            nivel = 'ferro';
            break;
             case (XP > 1000 && XP <= 2000):
            nivel = 'Bronze';
            break;
                 case (XP > 2000 && XP <= 5000):
                nivel = 'prata';
                break;
                    case (XP > 5000 && XP <= 7000):
                nivel = 'ouro';
                break;
                        case (XP > 7000 && XP <= 8000):
                nivel = 'platina';
                break;
                             case (XP > 8000 && XP <= 9000):
                nivel = 'ascendente';
                break;
                                case (XP > 9000 && XP <= 10000):
                nivel = 'imortal';
                break;
                                    default:
                nivel = 'radiante';
                break;

    }

    console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
    i = i + 1;
}


