/* js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    carregarUsuario();
    carregarDiarios();
    carregarViagens();
});

function carregarUsuario() {
    // Atualiza cabeçalho
    const headerProfile = document.getElementById('user-header');
    headerProfile.innerHTML = `
        <span>${usuarioLogado.user_nome}</span>
        <img src="${usuarioLogado.foto}" alt="Perfil" class="avatar">
    `;

    // Atualiza Saudação
    document.getElementById('welcome-msg').innerText = `Olá, ${usuarioLogado.nome.split(' ')[0]}!`;

    // Atualiza Estatísticas (Requisito do Projeto)
    const statsPanel = document.getElementById('stats-panel');
    statsPanel.innerHTML = `
        <div class="stat-card">
            <i class="fa-solid fa-users stat-icon"></i>
            <div class="stat-info">
                <strong>${usuarioLogado.seguidores}</strong>
                <span>Seguidores</span>
            </div>
        </div>
        <div class="stat-card">
            <i class="fa-solid fa-passport stat-icon"></i>
            <div class="stat-info">
                <strong>${diariosMock.length}</strong>
                <span>Diários Ativos</span>
            </div>
        </div>
        <div class="stat-card">
            <i class="fa-solid fa-map-pin stat-icon"></i>
            <div class="stat-info">
                <strong>${viagensMock.length}</strong>
                <span>Viagens Registradas</span>
            </div>
        </div>
    `;
}

function carregarDiarios() {
    const container = document.getElementById('diarios-list');
    
    diariosMock.forEach(diario => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${diario.capa}" alt="${diario.nome}" class="card-img">
                <span class="card-badge">
                    ${diario.isPublico ? '<i class="fa-solid fa-earth-americas"></i> Público' : '<i class="fa-solid fa-lock"></i> Privado'}
                </span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${diario.nome}</h3>
                <p class="card-desc">${diario.descricao}</p>
                <div class="card-footer">
                    <span><i class="fa-solid fa-layer-group"></i> ${diario.qtd_viagens} viagens</span>
                    <a href="#" style="color:var(--primary); text-decoration:none; font-weight:600">Abrir</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function carregarViagens() {
    const container = document.getElementById('viagens-list');

    viagensMock.forEach(viagem => {
        // Formatar data (ex: 2025-02-10 -> 10/02/2025)
        const dataFormatada = new Date(viagem.data_inicio).toLocaleDateString('pt-BR');

        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${viagem.img}" alt="${viagem.nome}" class="card-img">
                <span class="card-badge" style="background:var(--primary)">${viagem.categoria}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${viagem.nome}</h3>
                <p class="card-desc">${viagem.descricao}</p>
                <div class="card-footer">
                    <span><i class="fa-regular fa-calendar"></i> ${dataFormatada}</span>
                    <button class="btn-icon">
                        <i class="fa-regular fa-heart"></i> ${viagem.curtidas}
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}