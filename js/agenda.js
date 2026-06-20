// ══════════════════════════════════════════════════════════════
//  SISTEMA DE AGENDA MINISTERIAL — FORMULÁRIO
//  gladstonfreire.com.br
// ══════════════════════════════════════════════════════════════

// ── Gerador de UUID ──────────────────────────────────────────

function gerarUUID() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// ── Supabase via REST ────────────────────────────────────────

async function salvarSupabase(payload) {
    const { url, anonKey } = MINISTERIO_CONFIG.supabase;
    if (!url || url.includes('XXXXX')) {
        console.info('Supabase não configurado — salvar em js/config.js.');
        return false;
    }
    try {
        const res = await fetch(`${url}/rest/v1/convites_ministeriais`, {
            method: 'POST',
            headers: {
                'Content-Type':  'application/json',
                'apikey':         anonKey,
                'Authorization': `Bearer ${anonKey}`,
                'Prefer':        'return=minimal'
            },
            body: JSON.stringify(payload)
        });
        return res.ok;
    } catch (e) {
        console.error('Erro Supabase:', e);
        return false;
    }
}

// ── EmailJS ──────────────────────────────────────────────────

async function enviarEmailJS(dados) {
    if (!window.emailjs || MINISTERIO_CONFIG.emailjs.serviceId.includes('XXXXX')) {
        console.info('EmailJS não configurado — configurar em js/config.js.');
        return false;
    }
    try {
        await emailjs.send(
            MINISTERIO_CONFIG.emailjs.serviceId,
            MINISTERIO_CONFIG.emailjs.templateId,
            {
                to_email:           MINISTERIO_CONFIG.emailDestino,
                id_solicitacao:     dados.id_solicitacao,
                data_solicitacao:   new Date(dados.data_solicitacao).toLocaleString('pt-BR'),
                nome_igreja:        dados.nome_igreja,
                pastor_responsavel: dados.pastor_responsavel,
                cidade:             dados.cidade,
                estado:             dados.estado,
                nome_evento:        dados.nome_evento,
                data_evento:        dados.data_evento   || '—',
                quantidade_dias:    dados.quantidade_dias || '—',
                publico_estimado:   dados.publico_estimado || '—',
                telefone:           dados.telefone       || '—',
                whatsapp_contato:   dados.whatsapp_contato || '—',
                email:              dados.email,
                mensagem:           dados.mensagem       || '(não informado)'
            }
        );
        return true;
    } catch (e) {
        console.error('Erro EmailJS:', e);
        return false;
    }
}

// ── Mensagem WhatsApp ────────────────────────────────────────

function montarMsgWhatsApp(d) {
    return encodeURIComponent(
        `🔔 *NOVA SOLICITAÇÃO DE AGENDA RECEBIDA PELO SITE OFICIAL*\n\n` +
        `📋 ID: ${d.id_solicitacao}\n` +
        `🗓 Data: ${new Date(d.data_solicitacao).toLocaleString('pt-BR')}\n\n` +
        `🏛 *Igreja:* ${d.nome_igreja}\n` +
        `👤 *Pastor:* ${d.pastor_responsavel}\n` +
        `📍 *Local:* ${d.cidade} – ${d.estado}\n` +
        `🎤 *Evento:* ${d.nome_evento}\n` +
        `📅 *Data prevista:* ${d.data_evento || '—'}\n` +
        `⏱ *Duração:* ${d.quantidade_dias || '—'} dia(s)\n` +
        `👥 *Público estimado:* ${d.publico_estimado || '—'}\n` +
        `📞 *Telefone:* ${d.telefone || '—'}\n` +
        `📱 *WhatsApp:* ${d.whatsapp_contato || '—'}\n` +
        `✉️ *E-mail:* ${d.email}\n\n` +
        `💬 *Mensagem:* ${d.mensagem || '(não informado)'}\n\n` +
        `_Solicitação recebida através do site oficial de Gladston Freire._`
    );
}

// ── Inicialização ────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    if (window.emailjs && !MINISTERIO_CONFIG.emailjs.publicKey.includes('XXXXX')) {
        emailjs.init(MINISTERIO_CONFIG.emailjs.publicKey);
    }
    inicializarModal();
});

// ── Modal ────────────────────────────────────────────────────

function inicializarModal() {
    const overlay  = document.getElementById('modalAgenda');
    const btnAbrir = document.getElementById('btnAbrirAgenda');
    const btnFechar = document.getElementById('modalFechar');
    const form     = document.getElementById('agendaForm');

    if (!overlay) return;

    function abrirModal() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Analytics
        if (window.gtag) gtag('event', 'agenda_form_open', { event_category: 'agenda' });
        if (window.fbq)  fbq('trackCustom', 'agenda_form_open');
    }

    function fecharModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            if (window.gtag) gtag('event', 'agenda_click', { event_category: 'agenda' });
            if (window.fbq)  fbq('trackCustom', 'agenda_click');
            abrirModal();
        });
    }

    if (btnFechar) btnFechar.addEventListener('click', fecharModal);

    overlay.addEventListener('click', e => {
        if (e.target === overlay) fecharModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') fecharModal();
    });

    // Submissão
    if (form) {
        form.addEventListener('submit', async e => {
            e.preventDefault();

            const btn = form.querySelector('.btn-submit-agenda');
            const textoOriginal = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            btn.disabled  = true;

            const dados = {
                id_solicitacao:    gerarUUID(),
                origem:            'SITE OFICIAL',
                data_solicitacao:  new Date().toISOString(),
                nome_igreja:       form.nome_igreja.value.trim(),
                pastor_responsavel: form.pastor_responsavel.value.trim(),
                cidade:            form.cidade.value.trim(),
                estado:            form.estado.value,
                nome_evento:       form.nome_evento.value.trim(),
                data_evento:       form.data_evento.value,
                quantidade_dias:   form.quantidade_dias.value,
                publico_estimado:  form.publico_estimado.value.trim(),
                telefone:          form.telefone.value.trim(),
                whatsapp_contato:  form.whatsapp_contato.value.trim(),
                email:             form.email.value.trim(),
                mensagem:          form.mensagem.value.trim(),
                status:            'Novo'
            };

            await Promise.allSettled([
                salvarSupabase(dados),
                enviarEmailJS(dados)
            ]);

            // Tela de sucesso
            const conteudo = document.getElementById('agendaFormContent');
            const sucesso  = document.getElementById('agendaFormSucesso');
            const linkWpp  = document.getElementById('linkWhatsAppAgenda');

            if (conteudo) conteudo.style.display = 'none';
            if (sucesso)  sucesso.style.display  = 'block';
            if (linkWpp)  linkWpp.href = `https://wa.me/${MINISTERIO_CONFIG.whatsapp}?text=${montarMsgWhatsApp(dados)}`;

            // Analytics
            if (window.gtag) gtag('event', 'agenda_form_submit', { event_category: 'agenda' });
            if (window.fbq)  fbq('trackCustom', 'agenda_form_submit');
        });
    }
}
