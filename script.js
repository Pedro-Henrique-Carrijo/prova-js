document.getElementById('salvar').addEventListener('click', function () {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const nota = document.getElementById('nota').value;

    
    const output = document.getElementById('output');
    output.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Nota:</strong> ${nota}</p>
    `;
});
// Ocultar a mensagem de resultado ao carregar a página
window.addEventListener("load", () => {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none";
});
