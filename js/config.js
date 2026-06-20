// ════════════════════════════════════════════════════════════════
//  SISTEMA DE AGENDA MINISTERIAL — CONFIGURAÇÕES
//  Site: gladstonfreire.com.br
// ════════════════════════════════════════════════════════════════
//
//  PASSO 1 — SUPABASE (banco de dados gratuito):
//    1. Acesse https://supabase.com e crie um projeto gratuito
//    2. Vá em Settings → API e copie a Project URL e a anon key
//    3. No SQL Editor do Supabase, execute:
//
//       CREATE TABLE convites_ministeriais (
//         id                UUID    DEFAULT gen_random_uuid() PRIMARY KEY,
//         id_solicitacao    TEXT,
//         origem            TEXT    DEFAULT 'SITE OFICIAL',
//         data_solicitacao  TIMESTAMPTZ DEFAULT NOW(),
//         nome_igreja       TEXT,
//         pastor_responsavel TEXT,
//         cidade            TEXT,
//         estado            TEXT,
//         nome_evento       TEXT,
//         data_evento       TEXT,
//         quantidade_dias   TEXT,
//         publico_estimado  TEXT,
//         telefone          TEXT,
//         whatsapp_contato  TEXT,
//         email             TEXT,
//         mensagem          TEXT,
//         status            TEXT DEFAULT 'Novo',
//         observacoes       TEXT
//       );
//       ALTER TABLE convites_ministeriais ENABLE ROW LEVEL SECURITY;
//       CREATE POLICY "insert_anon"  ON convites_ministeriais FOR INSERT WITH CHECK (true);
//       CREATE POLICY "select_anon"  ON convites_ministeriais FOR SELECT USING (true);
//       CREATE POLICY "update_anon"  ON convites_ministeriais FOR UPDATE USING (true);
//
//  PASSO 2 — EMAILJS (e-mail automático gratuito, 200/mês):
//    1. Acesse https://www.emailjs.com e crie uma conta
//    2. Em "Email Services", conecte seu e-mail
//    3. Em "Email Templates", crie um template usando as variáveis:
//       {{nome_igreja}}, {{pastor_responsavel}}, {{cidade}}, {{estado}},
//       {{nome_evento}}, {{data_evento}}, {{quantidade_dias}},
//       {{publico_estimado}}, {{telefone}}, {{whatsapp_contato}},
//       {{email}}, {{mensagem}}, {{id_solicitacao}}, {{data_solicitacao}}
//    4. Copie Public Key → serviceId → templateId e preencha abaixo
//
//  PASSO 3 — ADMIN:
//    Acesse /admin.html e use a senha definida em adminSenha abaixo.
//    TROQUE antes de publicar o site!
//
// ════════════════════════════════════════════════════════════════

const MINISTERIO_CONFIG = {

    // ── SUPABASE ─────────────────────────────────────────────────
    supabase: {
        url:     'https://XXXXX.supabase.co',
        anonKey: 'XXXXX'
    },

    // ── EMAILJS ───────────────────────────────────────────────────
    emailjs: {
        publicKey:  'XXXXX',
        serviceId:  'XXXXX',
        templateId: 'XXXXX'
    },

    // ── CONTATOS ──────────────────────────────────────────────────
    emailDestino: 'gladston.freire@hotmail.com',
    whatsapp:     '5527995004900',

    // ── ADMIN ─────────────────────────────────────────────────────
    // Senha de acesso ao painel /admin.html — TROQUE antes de publicar!
    adminSenha: 'Gladston@2024!'
};
