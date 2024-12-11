// Captura do botão de salvar e adição do evento de clique
document.getElementById("saveButton").addEventListener("click", function () {
    // Captura os valores dos campos do formulário
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const grade = document.getElementById("grade").value.trim();

    // Validação simples dos campos
    if (!name || !address || !phone || !email || !age || !grade) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Validação de idade e nota
    if (age <= 0 || grade < 0 || grade > 10) {
        alert("Por favor, insira uma idade válida e uma nota entre 0 e 10.");
        return;
    }

    // Formatação do telefone para melhor exibição (opcional)
    const formattedPhone = phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    // Criação do conteúdo de exibição
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Dados do Aluno:</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>Telefone:</strong> ${formattedPhone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${age}</p>
        <p><strong>Nota:</strong> ${grade}</p>
    `;

    // Estiliza o resultado para maior destaque
    resultDiv.style.display = "block";

    // Limpa os campos do formulário após salvar
    document.getElementById("studentForm").reset();
});

// Ocultar a mensagem de resultado ao carregar a página
window.addEventListener("load", () => {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none";
});