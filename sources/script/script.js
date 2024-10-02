// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;  // Variável para armazenar o nome do herói
        this.idade = idade;  // Variável para armazenar a idade do herói
        this.tipo = tipo;  // Variável para armazenar o tipo do herói
    }

    // Função que realiza o ataque
    atacar() {
        let ataque;
        // Estrutura de decisão (switch) para definir o ataque baseado no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'não realizou ataque';
        }
        // Retorna a frase correta com o tipo e o ataque
        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}

// Função auxiliar para validar os dados do herói
function validarHeroi(nome, idade, tipo) {
    return nome && idade && tipo; // Verifica se os campos foram preenchidos corretamente
}

// Função principal que processa a criação do herói e os ataques
function processarHeroi(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    // Capturando os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);  // Conversão de string para número
    const tipo = document.getElementById('tipo').value;
    const numeroDeAtaques = parseInt(document.getElementById('numeroDeAtaques').value); // Número de ataques

    // Validação dos dados
    if (validarHeroi(nome, idade, tipo)) {
        const heroi = new Heroi(nome, idade, tipo);  // Criação do objeto herói
        let resultados = '';  // Variável acumuladora para armazenar os resultados dos ataques

        // Laço de repetição para realizar o número de ataques
        for (let i = 0; i < numeroDeAtaques; i++) {
            resultados += heroi.atacar() + '\n';  // Acumula cada ataque em uma nova linha
        }

        document.getElementById('resultado').textContent = resultados;  // Exibe a mensagem no resultado
    } else {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos corretamente!';
    }
}

// Evento de submissão do formulário
document.getElementById('heroForm').addEventListener('submit', processarHeroi);
