// --- FUNCIONALIDADE 1: Alternar Tema (Modo Claro / Modo Escuro) ---
function alternarTema() {
    // Adiciona ou remove a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');

    // Pega o botão para mudar o texto dele conforme o tema atual
    const botaoTema = document.getElementById('btn-tema');

    if (document.body.classList.contains('dark-mode')) {
        botaoTema.innerText = "☀️ Modo Claro";
    } else {
        botaoTema.innerText = "🌙 Modo Escuro";
    }
}

// --- FUNCIONALIDADE 2: Simulador de Orçamento de Viagem ---
function calcularViagem() {
    const dias = document.getElementById('dias').value;
    const pessoas = document.getElementById('pessoas').value;
    const custoDiario = 200;

    if (dias === "" || pessoas === "") {
        alert("Por favor, preencha os dias e o número de pessoas!");
        return;
    }

    const total = dias * pessoas * custoDiario;

    document.getElementById('resultado').innerText = 
        `Estimativa total: R$ ${total},00 (para ${pessoas} pessoa(s) em ${dias} dias).`;
}

// --- FUNCIONALIDADE 3: Validação do Formulário de Contato ---
const formulario = document.getElementById('meuForm');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const nomeCliente = document.getElementById('nome').value;
        alert(`Obrigado pela mensagem, ${nomeCliente}! Sua solicitação foi enviada com sucesso.`);
        formulario.reset();
    });
}