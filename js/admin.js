// ══════════════════════════════════════════════════════════════
//  SISTEMA DE AGENDA MINISTERIAL — PAINEL ADMINISTRATIVO
//  gladstonfreire.com.br
// ══════════════════════════════════════════════════════════════

const loginScreen    = document.getElementById('adminLogin');
const dashboardScreen = document.getElementById('adminDashboard');
const loginForm      = document.getElementById('loginForm');
const btnLogout      = document.getElementById('btnLogout');
const btnRefresh     = document.getElementById('btnRefresh');

// Verificar sessão ativa
if (sessionStorage.getItem('admin_auth') === 'ok') {
    mostrarDashboard();
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const senha  = document.getElementById('adminSenha').value;
    const errMsg = document.getElementById('loginErro');

    if (senha === MINISTERIO_CONFIG.adminSenha) {
        sessionStorage.setItem('admin_auth', 'ok');
        errMsg.style.display = 'none';
        mostrarDashboard();
    } else {
        errMsg.style.display  = 'block';
        errMsg.textContent = 'Senha incorreta. Tente novamente.';
        document.getElementById('adminSenha').value = '';
    }
});

btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('admin_auth');
    dashboardScreen.style.display = 'none';
    loginScreen.style.display     = 'flex';
});

if (btnRefresh) {
    btnRefresh.addEventListener('click', carregarSolicitacoes);
}

function mostrarDashboard() {
    loginScreen.style.display    = 'none';
    dashboardScreen.style.display = 'block';
    carregarSolicitacoes();
}

// ── Supabase REST ────────────────────────────────────────────

function headers() {
    const key = MINISTERIO_CONFIG.supabase.anonKey;
    return {
        'apikey':         key,
        'Authorization': `Bearer ${key}`,
        'Content-Type':  'application/json'
    };
}

async function carregarSolicitacoes() {
    const tabela  = document.getElementById('tabelaSolicitacoes');
    const loading = document.getElementById('adminLoading');

    if (loading) loading.style.display = 'flex';
    if (tabela)  tabela.innerHTML = '';

    const { url, anonKey } = MINISTERIO_CONFIG.supabase;

    if (!url || url.includes('XXXXX')) {
        if (loading) loading.style.display = 'none';
        tabela.innerHTML = `
            <tr><td colspan="8" class="admin-td-info">
                <i class="fas fa-cog fa-2x" style="display:block;margin-bottom:10px;color:#b71c1c;"></i>
                <strong>Configure o Supabase</strong><br>
                Abra <code>js/config.js</code> e preencha a URL e a chave anon do seu projeto Supabase.
            </td></tr>`;
        atualizarEstatisticas([]);
        return;
    }

    try {
        const res = await fetch(
            `${url}/rest/v1/convites_ministeriais?order=data_solicitacao.desc`,
            { headers: headers() }
        );

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const dados = await res.json();
        if (loading) loading.style.display = 'none';
        atualizarEstatisticas(dados);
        renderizarTabela(dados);

    } catch (err) {
        if (loading) loading.style.display = 'none';
        tabela.innerHTML = `
            <tr><td colspan="8" class="admin-td-info" style="color:#c62828;">
                <i class="fas fa-exclamation-triangle fa-2x" style="display:block;margin-bottom:10px;"></i>
                Erro ao carregar dados: ${esc(err.message)}<br>
                Verifique a configuração do Supabase em <code>js/config.js</code>.
            </td></tr>`;
        atualizarEstatisticas([]);
    }
}

// ── Estatísticas ─────────────────────────────────────────────

function atualizarEstatisticas(dados) {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

    set('statTotal',       dados.length);
    set('statConfirmados', dados.filter(d => d.status === 'Confirmado').length);
    set('statRealizados',  dados.filter(d => d.status === 'Realizado').length);

    const ultima = dados[0];
    set('statUltima', ultima
        ? `${ultima.nome_igreja} — ${new Date(ultima.data_solicitacao).toLocaleDateString('pt-BR')}`
        : '—'
    );
}

// ── Tabela ───────────────────────────────────────────────────

function renderizarTabela(dados) {
    const tabela = document.getElementById('tabelaSolicitacoes');

    if (dados.length === 0) {
        tabela.innerHTML = `
            <tr><td colspan="8" class="admin-td-info">
                <i class="fas fa-inbox fa-2x" style="display:block;margin-bottom:10px;color:#bbb;"></i>
                Nenhuma solicitação recebida até o momento.
            </td></tr>`;
        return;
    }

    tabela.innerHTML = dados.map(d => {
        const confirmado = d.status === 'Confirmado';
        const realizado  = d.status === 'Realizado';
        const wppNum     = (d.whatsapp_contato || '').replace(/\D/g, '');

        return `
        <tr class="${confirmado ? 'row-confirmado' : realizado ? 'row-realizado' : ''}">
            <td>
                <div style="font-size:.82rem;font-weight:600;color:#333">${new Date(d.data_solicitacao).toLocaleDateString('pt-BR')}</div>
                <div style="font-size:.75rem;color:#888">${new Date(d.data_solicitacao).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div>
                <div style="margin-top:4px"><span class="badge-origem"><i class="fas fa-globe"></i> Site Oficial</span></div>
            </td>
            <td>
                <strong style="color:#1a0000">${esc(d.nome_igreja)}</strong>
                <div style="font-size:.78rem;color:#888;margin-top:2px">${esc(d.cidade)} – ${esc(d.estado)}</div>
            </td>
            <td style="font-size:.85rem">${esc(d.pastor_responsavel)}</td>
            <td>
                <div style="font-size:.85rem;font-weight:600">${esc(d.nome_evento)}</div>
                <div style="font-size:.78rem;color:#888">${d.data_evento || '—'} ${d.quantidade_dias ? `· ${d.quantidade_dias} dia(s)` : ''}</div>
                <div style="font-size:.78rem;color:#888">Público: ${d.publico_estimado || '—'}</div>
            </td>
            <td style="font-size:.82rem">
                ${d.telefone ? `<div><a href="tel:${esc(d.telefone)}">${esc(d.telefone)}</a></div>` : ''}
                ${wppNum ? `<div><a href="https://wa.me/55${wppNum}" target="_blank" class="link-wpp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a></div>` : ''}
                <div><a href="mailto:${esc(d.email)}" style="color:#b71c1c">${esc(d.email)}</a></div>
            </td>
            <td>
                <select class="status-select" data-id="${esc(d.id_solicitacao)}" onchange="atualizarStatus(this)">
                    ${['Novo','Em contato','Confirmado','Realizado','Cancelado'].map(s =>
                        `<option value="${s}" ${d.status===s?'selected':''}>${s}</option>`
                    ).join('')}
                </select>
            </td>
            <td>
                <textarea class="obs-textarea"
                    data-id="${esc(d.id_solicitacao)}"
                    placeholder="Observações…"
                    onblur="salvarObservacao(this)">${esc(d.observacoes || '')}</textarea>
                ${confirmado || realizado ? `
                    <div class="badge-confirmado-msg">
                        <i class="fas fa-check-circle"></i>
                        Esta oportunidade foi gerada através do site oficial de Gladston Freire.
                    </div>` : ''}
            </td>
        </tr>`;
    }).join('');
}

// ── Atualizar Status ─────────────────────────────────────────

async function atualizarStatus(select) {
    const id     = select.dataset.id;
    const status = select.value;
    const { url } = MINISTERIO_CONFIG.supabase;

    select.disabled = true;

    try {
        const res = await fetch(
            `${url}/rest/v1/convites_ministeriais?id_solicitacao=eq.${encodeURIComponent(id)}`,
            {
                method: 'PATCH',
                headers: headers(),
                body: JSON.stringify({ status })
            }
        );

        if (res.ok) {
            await carregarSolicitacoes();
        } else {
            alert('Erro ao atualizar status.');
            select.disabled = false;
        }
    } catch (e) {
        alert('Erro de conexão.');
        select.disabled = false;
    }
}

// ── Salvar Observação ────────────────────────────────────────

async function salvarObservacao(textarea) {
    const id          = textarea.dataset.id;
    const observacoes = textarea.value;
    const { url }     = MINISTERIO_CONFIG.supabase;

    if (!url || url.includes('XXXXX')) return;

    try {
        await fetch(
            `${url}/rest/v1/convites_ministeriais?id_solicitacao=eq.${encodeURIComponent(id)}`,
            {
                method: 'PATCH',
                headers: headers(),
                body: JSON.stringify({ observacoes })
            }
        );
    } catch (e) {
        console.error('Erro ao salvar observação:', e);
    }
}

// ── Utilitário ───────────────────────────────────────────────

function esc(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
