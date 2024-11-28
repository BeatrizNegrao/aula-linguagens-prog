// arquivo das automações do menu hamburger 

// selecionando o botão menu pelo seu ID utilizando 'const' para não modoficar posteriormente
const btnMobile = document.getElementById('btn-mobile');

/*função qye altera o estado do menu (aberto/fechado)
*@param {Event} - Evento que dispara a função, como 'click' ou 'touchstart'
*/ 

function toggleMenu(event) {
    // evita o comportamento padrão do evento 'tpuchstart', evitando bug em dispositivos móveis
    if (event.type === 'touchstart') event.preventDefault();

    //selecionma o elemento de navegação pelo ID
    const nav = document.getElementById('nav');

    // adiciona ou remve a classe 'active' no elemento de navegação, ativando ou desativando o menu
    nav.classList.toggle('active');

    // verifica se o menu está aberto ou não 
    const isActive = nav.classList.contains('active');

    //atualiza o atributo 'aria-expanded' para melhorar a acessibilidade ao menu
    event.currentTarget.setAttribute('aria-expanded', isActive);

    // define o texto do atributo 'aria-label' dependendo do estado do menu (aberto/fechado)
    if (isActive) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    }else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}
// adiciona eventos de 'click' e 'touchstart' para ativar a função toggleMenu ao interagir com o botão

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

