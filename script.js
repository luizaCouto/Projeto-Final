document.addEventListener("DOMContentLoaded", function (){
    const nome = document.getElementById("nome");
    const data = document.getElementById("data");
    const descricao = document.getElementById("descricao");
    const personageUm = document.getElementById("personagem-um");
    const imagemP1 = document.getElementById("imagem-p1");
    const personageDois = document.getElementById("personagem-dois");
    const imagemP2 = document.getElementById("imagem-p2");
    const modal = document.getElementById("modal");
    const botaoModal = document.getElementById("abrir-modal");
    const botaoEnviar = document.getElementById("novo-filme");

    function form(event){
        event.preventDefault();
        const novoNome = document.getAElementById("novo-nome").value;
        const novaData = document.getAElementById("nova-data").value;
        const [ano, mes, dia] = novaData.split("-");
        const novaDescricao = document.getAElementById("nova-descricao").value;
        const novoP1 = document.getAElementById("novo-p1").value;
        const novoP2= document.getAElementById("novo-p2").value;
        const novaImagemP1 = document.getElementById("nova-imagem-p1").files[0];
        const novaImagemP2 = document.getElementById("nova-imagem-p2").files[0];
    
        if(novaImagemP1){
            const leitor = new FileReader();
            leitor.onload = function(e){
                imagemP1.scr = e.target.result;
            };
            leitor.readAsDataURL(novaImagemP1)
        }
        if(novaImagemP2){
            const leitor = new FileReader();
            leitor.onload = function(e){
                imagemP2.scr = e.target.result;
            };
            leitor.readAsDataURL(novaImagemP2)
        }

        nome.textContent = novoNome;
        data.textContent = `${dia}/${mes}/${ano}`;
        descricao.textContent = novaDescricao;
        personageUm.textContent = novoP1;
        personageDois.textContent = novoP2;
        modal.classList.add("escondida");
    }

    botaoModal.addEventListener("click", () =>{
        modal.classList.remove("escondida");
    })

    window.addEventListener("click", (event) =>{
        if(event.target == modal){
            modal.classList.add("escondida");
        }
    })

    botaoEnviar.addEventListener("submit", form);
});