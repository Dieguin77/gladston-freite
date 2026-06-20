# MANUAL DO ADMINISTRADOR
## Site Oficial — Gladston Freire
### gladstonfreire.com.br

> Documento gerado após auditoria técnica completa do projeto.
> Data da auditoria: Junho de 2026.

---

## ÍNDICE

1. [Visão Geral](#1-visão-geral)
2. [Área Administrativa](#2-área-administrativa)
3. [Sanity CMS](#3-sanity-cms)
4. [Gerenciamento de Artigos](#4-gerenciamento-de-artigos)
5. [Agenda Ministerial](#5-agenda-ministerial)
6. [Origem das Agendas](#6-origem-das-agendas)
7. [Media Kit](#7-media-kit)
8. [Blog](#8-blog)
9. [SEO](#9-seo)
10. [Google Analytics e Meta Pixel](#10-google-analytics-e-meta-pixel)
11. [WhatsApp](#11-whatsapp)
12. [E-mail](#12-e-mail)
13. [Formulários](#13-formulários)
14. [Páginas do Site](#14-páginas-do-site)
15. [Banco de Dados](#15-banco-de-dados)
16. [O Que Gladston Pode Fazer Hoje](#16-o-que-gladston-pode-fazer-hoje)
17. [Recursos Futuros](#17-recursos-futuros)
18. [Resumo da Auditoria](#18-resumo-da-auditoria)

---

## 1. VISÃO GERAL

### Tecnologias Utilizadas

| Tecnologia | Versão / Detalhes | Função |
|---|---|---|
| HTML5 | Puro (sem framework) | Estrutura de todas as páginas |
| CSS3 | Arquivo único `style.css` (~2.300 linhas) | Estilos, animações, responsividade |
| JavaScript | Vanilla JS (sem framework) | Interatividade, formulários, lógica |
| Google Fonts | Inter + Playfair Display | Tipografia |
| Font Awesome | 6.4.0 via CDN | Ícones |

### Hospedagem

| Item | Valor |
|---|---|
| Domínio | `gladstonfreire.com.br` |
| Hospedagem | **GitHub Pages** (gratuito) |
| Arquivo de configuração | `CNAME` — aponta o domínio para o GitHub |
| Deploy | Automático — basta fazer push para o repositório GitHub |

### Integrações Existentes

| Serviço | Status | Para que serve |
|---|---|---|
| **Sanity CMS** | ✅ Ativo e configurado | Blog / Artigos |
| **Supabase** | ⚠️ Configurado, aguarda credenciais | Banco de dados da Agenda |
| **EmailJS** | ⚠️ Configurado, aguarda credenciais | Envio de e-mails automáticos |
| **YouTube** | ✅ Ativo | Vídeos de pregações incorporados |
| **Hotmart** | ✅ Ativo | Venda do livro |
| **WhatsApp** | ✅ Ativo | Contato direto |
| **Google Analytics 4** | ⚠️ Preparado, aguarda ativação | Monitoramento de acessos |
| **Meta Pixel** | ⚠️ Preparado, aguarda ativação | Rastreamento para anúncios |

### Arquivos do Projeto

```
gladstonfreire.com.br/
├── index.html            ← Página inicial
├── sobre.html            ← Sobre o Ministério
├── contato.html          ← Formulário de contato
├── post.html             ← Visualização de artigos
├── media-kit.html        ← Media Kit oficial
├── admin.html            ← Painel administrativo
├── style.css             ← Todos os estilos do site
├── sitemap.xml           ← Mapa do site para Google
├── robots.txt            ← Instruções para robôs de busca
├── CNAME                 ← Configuração do domínio
├── package.json          ← Dependências
├── js/
│   ├── sanityClient.js   ← Conexão com Sanity CMS (blog)
│   ├── config.js         ← Configurações do sistema de agenda
│   ├── agenda.js         ← Lógica do formulário de agenda
│   └── admin.js          ← Lógica do painel administrativo
├── img/                  ← 11 imagens oficiais
│   ├── logo gladston2.png
│   ├── autor.jpg
│   ├── formal-terno-livro.jpg
│   ├── livro-rosto.jpg
│   ├── quem-e-gladston.jpg
│   ├── foto-fundo.jpg
│   ├── apresentando-livro.jpg
│   ├── entrgando-profecia.jpg
│   ├── altar-levantandomao.jpg
│   ├── imagem-efeito-fundo.JPG
│   ├── gladston-cheio.jpg
│   └── irmaos-levantando-mao.jpg
└── video/                ← 3 vídeos locais
    ├── abraão.mp4
    ├── pirraça.mp4
    └── recebendo-profecia.mp4
```

---

## 2. ÁREA ADMINISTRATIVA

### Existe uma área administrativa?

**Sim.** Foi implementada em `/admin.html`.

### Como acessar

| Item | Informação |
|---|---|
| **URL** | `https://gladstonfreire.com.br/admin.html` |
| **Autenticação** | Senha definida no arquivo `js/config.js` |
| **Senha padrão** | `Gladston@2024!` *(DEVE SER TROCADA antes de publicar)* |
| **Sessão** | Armazenada no navegador (sessionStorage) — expira ao fechar o navegador |
| **Indexação** | Protegida com `noindex, nofollow` — não aparece no Google |

### Como fazer login

1. Acesse `https://gladstonfreire.com.br/admin.html`
2. Digite a senha no campo "Senha de Acesso"
3. Clique em "Entrar"
4. O painel será exibido automaticamente

### Como redefinir a senha

A senha está armazenada no arquivo `js/config.js`, na linha:

```javascript
adminSenha: 'Gladston@2024!'
```

Para trocar:
1. Abra o arquivo `js/config.js` no seu editor de texto
2. Localize a linha `adminSenha:`
3. Substitua pelo valor desejado entre aspas simples
4. Salve e faça o push para o GitHub

> ⚠️ **Aviso de Segurança:** A senha atual é visível em qualquer pessoa que acesse `js/config.js` diretamente no navegador. Para máxima segurança, considere migrar para autenticação via Supabase Auth em uma futura versão.

### Recursos disponíveis no painel

| Recurso | Descrição |
|---|---|
| **Estatísticas em tempo real** | Total de solicitações, confirmadas, realizadas, última recebida |
| **Tabela de solicitações** | Lista completa com todos os dados de cada convite |
| **Atualizar status** | Dropdown para marcar cada solicitação como Novo / Em contato / Confirmado / Realizado / Cancelado |
| **Campo de observações** | Anotações livres por solicitação (salvas automaticamente ao sair do campo) |
| **Relatório de origem** | Mostra que 100% das solicitações vieram do Site Oficial |
| **Identificação de origem** | Badge verde "Via Site Oficial" em cada registro |
| **Mensagem de confirmação** | Para agendas Confirmadas ou Realizadas: *"Esta oportunidade foi gerada através do site oficial de Gladston Freire"* |
| **Contato direto** | Links clicáveis para ligar, WhatsApp e e-mail de cada solicitante |
| **Atualização manual** | Botão "Atualizar" para recarregar os dados do banco |
| **Sair** | Botão de logout que encerra a sessão |

---

## 3. SANITY CMS

### O projeto utiliza Sanity?

**Sim.** O Sanity CMS está ativo e é o sistema responsável por gerenciar todos os **artigos e estudos** publicados no site.

### Configurações do Projeto Sanity

| Configuração | Valor |
|---|---|
| **Project ID** | `eat9cs7j` |
| **Dataset** | `production` |
| **API Version** | `2023-05-03` |
| **Modo** | CDN ativado (`useCdn: true`) |
| **Arquivo de conexão** | `js/sanityClient.js` |

### URL do Sanity Studio

O Studio (painel de edição de conteúdo) do Sanity fica em:

```
https://eat9cs7j.sanity.studio/
```

> O acesso ao Studio requer login com a conta vinculada ao projeto no Sanity. Entre em `https://sanity.io` e acesse com as credenciais do e-mail cadastrado.

### Schemas / Tipos de Conteúdo

O site utiliza o tipo **`post`** com os seguintes campos mapeados:

| Campo | Tipo | Descrição |
|---|---|---|
| `title` | String | Título do artigo |
| `slug` | Slug | URL amigável (gerada automaticamente do título) |
| `publishedAt` | DateTime | Data de publicação |
| `mainImage` | Image | Imagem de capa/destaque |
| `body` | Portable Text | Corpo do artigo (texto rico) |

### Elementos suportados no corpo do artigo

O renderizador do site suporta os seguintes elementos:

| Elemento | Como aparece | Tag gerada |
|---|---|---|
| Parágrafo normal | Texto corrido | `<p>` |
| Título H2 | Título secundário | `<h2>` |
| Título H3 | Título terciário | `<h3>` |
| Citação | Bloco com borda vermelha | `<blockquote>` |
| Negrito | **texto em negrito** | `<strong>` |
| Itálico | *texto em itálico* | `<em>` |

---

## 4. GERENCIAMENTO DE ARTIGOS

### Gladston pode criar artigos sem alterar código?

**Sim.** Totalmente. O processo é feito inteiramente pelo painel do Sanity Studio.

### Passo a passo para publicar um artigo

**1. Acesse o Sanity Studio**
```
https://eat9cs7j.sanity.studio/
```

**2. Faça login** com a conta vinculada ao projeto

**3. Clique em "Post"** no menu lateral esquerdo

**4. Clique em "Create new Post"** (botão no canto superior direito)

**5. Preencha os campos:**

- **Title** → Digite o título do artigo
- **Slug** → Clique em "Generate" (gerado automaticamente do título)
- **Published At** → Selecione a data de publicação
- **Main Image** → Faça upload da imagem de capa
- **Body** → Digite e formate o conteúdo

**6. Formate o conteúdo** usando a barra de ferramentas do editor:
- `B` → Negrito
- `I` → Itálico
- `H2` → Título secundário
- `H3` → Título terciário
- `"` → Citação (blockquote)

**7. Clique em "Publish"** para publicar

O artigo aparecerá automaticamente na seção "Artigos e Estudos" do site em poucos segundos.

### O que é possível adicionar em cada artigo

| Recurso | Disponível | Observações |
|---|---|---|
| ✅ Imagem destacada | Sim | Campo `mainImage` |
| ✅ Texto formatado | Sim | Negrito, itálico, parágrafos |
| ✅ Citações | Sim | `blockquote` com estilo vermelho |
| ✅ Títulos H2 e H3 | Sim | Hierarquia de seções |
| ⚠️ Vídeos | Parcial | Não mapeado no renderizador atual — requer expansão do código |
| ⚠️ Links | Parcial | Não mapeado no renderizador atual — requer expansão do código |
| ⚠️ Categorias | Não | Campo não existe no schema atual |
| ⚠️ Tags | Não | Campo não existe no schema atual |
| ⚠️ SEO por artigo | Não | Não há campos de meta title/description por artigo |

> Os itens marcados com ⚠️ podem ser adicionados com expansão do schema no Sanity e atualização do `renderizarTexto()` em `post.html`.

---

## 5. AGENDA MINISTERIAL

### Existe um sistema de solicitação de agenda?

**Sim.** Foi implementado um sistema completo com:
- Formulário de convite (modal na página inicial)
- Banco de dados de registro (Supabase)
- Notificações por e-mail (EmailJS)
- Notificação por WhatsApp (link pré-preenchido)
- Painel administrativo (`/admin.html`)

### Campos do formulário de agenda

**Dados da Igreja:**
| Campo | Obrigatório | Tipo |
|---|---|---|
| Nome da Igreja | ✅ Sim | Texto |
| Nome do Pastor Responsável | ✅ Sim | Texto |
| Cidade | ✅ Sim | Texto |
| Estado | ✅ Sim | Lista (27 estados) |

**Dados do Evento:**
| Campo | Obrigatório | Tipo |
|---|---|---|
| Nome do Evento | ✅ Sim | Texto |
| Data Prevista | Não | Data |
| Quantidade de Dias | Não | Número |
| Público Estimado | Não | Texto |

**Contato:**
| Campo | Obrigatório | Tipo |
|---|---|---|
| Telefone | Não | Telefone |
| WhatsApp | ✅ Sim | Telefone |
| E-mail | ✅ Sim | E-mail |
| Mensagem Adicional | Não | Texto livre |

**Campos automáticos (ocultos):**
| Campo | Valor |
|---|---|
| `origem` | `SITE OFICIAL` (fixo) |
| `id_solicitacao` | UUID único gerado automaticamente |
| `data_solicitacao` | Data e hora do envio (ISO 8601) |
| `status` | `Novo` (padrão inicial) |

### Onde as informações são salvas

**Banco de dados:** Supabase (PostgreSQL)
- Tabela: `convites_ministeriais`
- As informações são salvas com data, hora e origem automaticamente

> ⚠️ **Atenção:** O Supabase ainda precisa ser configurado. Veja as instruções completas em `js/config.js`.

### Como visualizar as solicitações

1. Acesse `https://gladstonfreire.com.br/admin.html`
2. Faça login com a senha
3. A tabela completa é exibida automaticamente, ordenada da mais recente para a mais antiga

### Como alterar o status de uma agenda

Na tabela do painel administrativo, cada linha possui um **menu dropdown** na coluna "Status". Basta clicar e selecionar uma das opções:

| Status | Significado |
|---|---|
| 🔵 **Novo** | Solicitação recebida, ainda não analisada |
| 🟡 **Em contato** | Equipe entrou em contato com o solicitante |
| 🟢 **Confirmado** | Agenda confirmada com data e local |
| 🔷 **Realizado** | Evento já aconteceu com sucesso |
| 🔴 **Cancelado** | Agenda cancelada por qualquer motivo |

A alteração é salva automaticamente no banco de dados ao selecionar.

### Como adicionar observações

Cada linha da tabela possui um campo de texto livre "Observações". Basta clicar, digitar e clicar fora do campo — as observações são salvas automaticamente.

---

## 6. ORIGEM DAS AGENDAS

### Como saber que uma agenda veio pelo site?

Todas as solicitações feitas pelo formulário do site recebem automaticamente:

1. **Campo `origem`** → Valor fixo: `SITE OFICIAL`
2. **Campo `id_solicitacao`** → UUID único (ex: `a1b2c3d4-e5f6-...`)
3. **Campo `data_solicitacao`** → Data e hora exatas do envio
4. **Badge visual** no painel: *"Via Site Oficial"* (verde) em cada registro
5. **Mensagem de destaque** para agendas confirmadas: *"Esta oportunidade foi gerada através do site oficial de Gladston Freire"*

### Rastreamento por data e hora

Cada solicitação registra:
- Data completa (dia, mês, ano)
- Hora e minuto do envio
- Fuso horário UTC (convertido para horário de Brasília no painel)

### Métricas disponíveis no painel

O painel exibe, em tempo real:

| Métrica | Descrição |
|---|---|
| Total de Solicitações | Número absoluto de convites recebidos pelo site |
| Agendas Confirmadas | Quantas foram aceitas e confirmadas |
| Eventos Realizados | Quantos eventos já ocorreram |
| Última Solicitação | Nome da igreja e data da solicitação mais recente |
| Origem | 100% das solicitações identificadas como "SITE OFICIAL" |

### Métricas de comportamento (quando Analytics estiver ativo)

| Evento | Quando é disparado |
|---|---|
| `agenda_click` | Usuário clica em "Consultar Disponibilidade" |
| `agenda_form_open` | Modal do formulário é aberto |
| `agenda_form_submit` | Formulário é enviado com sucesso |
| `whatsapp_click` | Usuário clica no botão de WhatsApp flutuante |
| `media_kit_view` | Página Media Kit é acessada |

---

## 7. MEDIA KIT

### Existe uma página Media Kit?

**Sim.** A página foi criada e está disponível em:

```
https://gladstonfreire.com.br/media-kit.html
```

### Conteúdo da página

| Seção | O que contém |
|---|---|
| **Biografia oficial** | Texto completo sobre o ministério, formação e atuação |
| **Tags de identificação** | Pastor · Pregador · Conferencista · Expositor Bíblico · Escritor · Advogado · Assembleia de Deus |
| **Fotos oficiais** | 8 fotos de alta qualidade para uso em divulgação |
| **O Livro** | Capa, sinopse e link para compra na Hotmart |
| **Temas ministrados** | 8 áreas de atuação com descrição |
| **Vídeos de pregações** | 3 vídeos do YouTube + 3 vídeos locais |
| **CTA de contato** | Botões para agenda, WhatsApp e e-mail |

### Temas documentados na página

1. Exposição Bíblica
2. Congressos de Jovens
3. Congressos Missionários
4. Vida Cristã e Santidade
5. Família Cristã
6. Propósito e Chamado
7. Liderança Ministerial
8. Retiros Espirituais

### Fotos disponíveis para divulgação

| Arquivo | Descrição |
|---|---|
| `formal-terno-livro.jpg` | Foto formal com livro — ideal para flyers |
| `quem-e-gladston.jpg` | Foto oficial para imprensa |
| `gladston-cheio.jpg` | Foto completa em pé |
| `apresentando-livro.jpg` | Apresentação do livro |
| `altar-levantandomao.jpg` | Ministrando no altar |
| `entrgando-profecia.jpg` | Entregando palavra profética |
| `irmaos-levantando-mao.jpg` | Congregação em adoração |
| `autor.jpg` | Foto oficial do autor |

---

## 8. BLOG

### Existe um blog?

**Sim.** Os artigos aparecem na seção **"Artigos e Estudos"** da página inicial e são gerenciados pelo Sanity CMS.

### URL de acesso aos artigos

- **Listagem:** `https://gladstonfreire.com.br/#blog-section` (seção na página inicial)
- **Artigo individual:** `https://gladstonfreire.com.br/post.html?slug={slug-do-artigo}`

> Exemplo: `https://gladstonfreire.com.br/post.html?slug=a-fe-de-abraao`

### Sistema de categorias

**Não existe.** O schema atual não possui campo de categorias.

### Sistema de busca

**Não existe.** Pode ser implementado como recurso futuro usando a API do Sanity.

### Artigos publicados

Os artigos são listados diretamente do Sanity CMS. Para saber quantos existem, acesse:
```
https://eat9cs7j.sanity.studio/
```

### Aparência dos artigos

Cada artigo na lista exibe:
- Imagem de capa
- Título
- Data de publicação
- Botão "Ler Artigo"

---

## 9. SEO

### Meta tags implementadas

#### Página inicial (`index.html`)

| Meta Tag | Valor |
|---|---|
| `<title>` | Gladston Freire \| Ministro, Escritor e Advogado |
| `description` | Texto descritivo do ministério |
| `keywords` | Pastor Gladston Freire, pregador Assembleia de Deus, conferencista cristão, expositor bíblico, autor livro Não Desça Mais Nenhum Degrau, pregações sobre Sansão, congresso de jovens, congresso missionário, e mais |
| `author` | Gladston Freire |
| `canonical` | `https://gladstonfreire.com.br/` |

#### Open Graph (compartilhamento em redes sociais)

| Propriedade | Valor |
|---|---|
| `og:type` | website |
| `og:url` | https://gladstonfreire.com.br |
| `og:title` | Gladston Freire — Ministro, Escritor e Advogado |
| `og:description` | Restaurando vidas através da verdade das Escrituras... |
| `og:image` | /img/autor.jpg |
| `og:locale` | pt_BR |
| `og:site_name` | Gladston Freire |

#### Twitter Card

| Propriedade | Valor |
|---|---|
| `twitter:card` | summary_large_image |
| `twitter:title` | Gladston Freire — Ministro, Escritor e Advogado |
| `twitter:description` | Restaurando vidas através da verdade das Escrituras... |
| `twitter:image` | /img/autor.jpg |

### Schema.org — Dados Estruturados

**Tipo Person:**
```json
{
  "@type": "Person",
  "name": "Gladston Freire",
  "jobTitle": ["Pastor", "Pregador", "Conferencista Cristão", "Expositor Bíblico", "Escritor", "Advogado"],
  "knowsAbout": ["Exposição Bíblica", "Pregações sobre Sansão", "Congresso de Jovens", "Congresso Missionário"],
  "contactPoint": { "telephone": "+55-27-99500-4900" }
}
```

**Tipo Book:**
```json
{
  "@type": "Book",
  "name": "Não Desça Mais Nenhum Degrau",
  "author": "Gladston Freire",
  "genre": "Teologia Cristã",
  "inLanguage": "pt-BR"
}
```

### Sitemap XML

**Arquivo:** `sitemap.xml` ✅

| URL | Prioridade | Frequência |
|---|---|---|
| `https://gladstonfreire.com.br/` | 1.0 | Semanal |
| `https://gladstonfreire.com.br/sobre.html` | 0.8 | Mensal |
| `https://gladstonfreire.com.br/contato.html` | 0.8 | Mensal |
| `https://gladstonfreire.com.br/post.html` | 0.6 | Semanal |

> ⚠️ As páginas `media-kit.html` e `admin.html` ainda não foram adicionadas ao sitemap. Recomenda-se adicionar `media-kit.html` (não adicionar `admin.html` por ser restrita).

### Robots.txt

**Arquivo:** `robots.txt` ✅

```
User-agent: *
Allow: /
Disallow: /js/
Sitemap: https://gladstonfreire.com.br/sitemap.xml
```

> O arquivo proíbe corretamente que robôs indexem a pasta `/js/` (onde ficam as configurações). A página `/admin.html` já contém `noindex, nofollow` no `<head>`.

### Como o SEO ajuda o site

O conjunto de otimizações implementadas faz com que:
- O Google entenda que Gladston é um **pastor, pregador e conferencista** (Person schema)
- Buscas por **"Pastor Gladston Freire"**, **"pregador Assembleia de Deus"**, **"livro Não Desça Mais Nenhum Degrau"** encontrem o site
- Compartilhamentos no WhatsApp, Instagram e Facebook exibam imagem, título e descrição automaticamente (Open Graph)
- O livro apareça com destaque em resultados do Google (Book schema)

---

## 10. GOOGLE ANALYTICS E META PIXEL

### Google Analytics 4

**Status:** ⚠️ Preparado mas **não ativo**

O código está presente no `index.html` como comentário, aguardando apenas o Measurement ID:

```html
<!-- Google Analytics 4 — substitua G-XXXXXXXXXX pelo seu Measurement ID -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> -->
```

**Para ativar:**
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Crie uma propriedade GA4
3. Copie o Measurement ID (formato: `G-XXXXXXXXXX`)
4. Abra `index.html`, localize o bloco comentado e substitua `G-XXXXXXXXXX` pelo ID real
5. Remova os comentários `<!--` e `-->`
6. Repita nos demais arquivos HTML

### Meta Pixel (Facebook/Instagram)

**Status:** ⚠️ Preparado mas **não ativo**

```html
<!-- Meta Pixel — substitua XXXXXXXXXXXXXXX pelo seu Pixel ID -->
<!-- <script> fbq('init', 'XXXXXXXXXXXXXXX'); ... </script> -->
```

**Para ativar:**
1. Acesse o [Gerenciador de Eventos do Facebook](https://business.facebook.com)
2. Crie um Pixel ou use o existente
3. Copie o Pixel ID (formato: 15 dígitos numéricos)
4. Substitua `XXXXXXXXXXXXXXX` pelo ID real e remova os comentários

### Eventos configurados e prontos

Os eventos abaixo já estão programados no código e serão disparados automaticamente quando Analytics e Pixel forem ativados:

| Evento | Onde é disparado | Por que é importante |
|---|---|---|
| `agenda_click` | Clique em "Consultar Disponibilidade" | Mede interesse em agenda |
| `agenda_form_open` | Abertura do modal de agenda | Mede intenção de solicitar |
| `agenda_form_submit` | Envio do formulário | Mede conversões reais |
| `whatsapp_click` | Clique no botão WhatsApp flutuante | Mede contatos via WhatsApp |
| `media_kit_view` | Acesso à página Media Kit | Mede interesse ministerial |

---

## 11. WHATSAPP

### Número configurado

```
+55 (27) 99500-4900
```

### Pontos de contato pelo WhatsApp no site

| Local | Mensagem pré-preenchida |
|---|---|
| Botão flutuante (todas as páginas) | "Olá, vim pelo site e gostaria de mais informações." |
| Botão no Hero (início) | "Olá, vim pelo site e gostaria de solicitar uma agenda." |
| Botão no rodapé | Link direto para o número |
| Página de contato | Link com mensagem de agenda |
| Página Media Kit | "Olá, vim pelo Media Kit e gostaria de solicitar uma agenda." |
| Após formulário de agenda | Mensagem completa com todos os dados do formulário (incluindo "NOVA SOLICITAÇÃO DE AGENDA RECEBIDA PELO SITE OFICIAL") |
| Painel Admin | Link para WhatsApp de cada solicitante |

### Eventos rastreados

- `whatsapp_click` disparado no botão flutuante e no Media Kit (quando Analytics estiver ativo)

---

## 12. E-MAIL

### Sistema de envio por e-mail

O site possui **dois sistemas** de e-mail:

#### 1. Formulário de Contato (`contato.html`)
- **Método:** `mailto:` — abre o aplicativo de e-mail do usuário
- **Destino:** `gladston.freire@hotmail.com`
- **Campos enviados:** Nome, e-mail, WhatsApp, se solicita agenda, mensagem
- **Limitação:** Requer que o usuário confirme o envio no app de e-mail. Não salva nada no banco de dados.

#### 2. Formulário de Agenda (Modal no `index.html`)
- **Método:** EmailJS (envio automático, sem abrir app de e-mail)
- **Destino:** `gladston.freire@hotmail.com`
- **Status:** ⚠️ Aguarda configuração no `js/config.js`
- **Campos enviados:** Todos os 12 campos do formulário + ID + data

**Para ativar o EmailJS:**
1. Acesse [emailjs.com](https://www.emailjs.com) e crie uma conta gratuita
2. Em "Email Services", conecte o Gmail ou Outlook
3. Em "Email Templates", crie um template e use as variáveis:
   ```
   {{nome_igreja}}, {{pastor_responsavel}}, {{cidade}}, {{estado}},
   {{nome_evento}}, {{data_evento}}, {{publico_estimado}}, {{email}},
   {{telefone}}, {{mensagem}}, {{id_solicitacao}}, {{data_solicitacao}}
   ```
4. Copie `publicKey`, `serviceId` e `templateId`
5. Cole em `js/config.js` nos campos correspondentes

### Templates existentes

- O template é criado pelo próprio usuário no painel do EmailJS
- Não existe um template visual pré-pronto — precisa ser criado

---

## 13. FORMULÁRIOS

### Formulário 1 — Contato Geral (`contato.html`)

| Item | Detalhe |
|---|---|
| **URL** | `/contato.html` |
| **Campos** | Nome, E-mail, WhatsApp (opcional), Checkbox "solicitar agenda", Mensagem |
| **Processamento** | JavaScript no próprio navegador |
| **Destino** | `mailto:gladston.freire@hotmail.com` — abre o app de e-mail |
| **Salva no banco?** | ❌ Não |
| **Confirmação** | Exibe mensagem de sucesso na tela + botão WhatsApp |

### Formulário 2 — Solicitação de Agenda (Modal em `index.html`)

| Item | Detalhe |
|---|---|
| **Como abrir** | Botão "Consultar Disponibilidade" na seção Agenda Ministerial |
| **Campos** | 12 campos + 3 automáticos (origem, ID, data) |
| **Processamento** | JavaScript → Supabase + EmailJS (paralelo) |
| **Salva no banco?** | ✅ Sim — Supabase (quando configurado) |
| **Notificação** | E-mail via EmailJS + link WhatsApp pré-preenchido |
| **Após envio** | Tela de sucesso com botão "Confirmar pelo WhatsApp" |
| **Rastreamento** | `id_solicitacao` único + `data_solicitacao` + `origem = "SITE OFICIAL"` |

### Fluxo completo do formulário de agenda

```
1. Usuário clica em "Consultar Disponibilidade"
      ↓
2. Modal é aberto (evento analytics: agenda_form_open)
      ↓
3. Usuário preenche os campos obrigatórios
      ↓
4. Clica em "Enviar Solicitação"
      ↓
5. Sistema gera ID único + data/hora automáticos
      ↓
6. Salva no Supabase (banco de dados) ← paralelo →  Envia e-mail via EmailJS
      ↓
7. Exibe tela de sucesso
      ↓
8. Usuário pode clicar "Confirmar pelo WhatsApp"
   (abre WhatsApp com mensagem: "NOVA SOLICITAÇÃO DE AGENDA...")
      ↓
9. Solicitação aparece no painel /admin.html em "Novo"
```

---

## 14. PÁGINAS DO SITE

### Páginas públicas

| URL | Arquivo | Descrição |
|---|---|---|
| `https://gladstonfreire.com.br/` | `index.html` | Página inicial com todas as seções |
| `https://gladstonfreire.com.br/sobre.html` | `sobre.html` | Sobre o ministério |
| `https://gladstonfreire.com.br/contato.html` | `contato.html` | Formulário de contato |
| `https://gladstonfreire.com.br/post.html?slug=X` | `post.html` | Leitura de artigo individual |
| `https://gladstonfreire.com.br/media-kit.html` | `media-kit.html` | Media Kit oficial *(novo)* |

### Páginas restritas

| URL | Arquivo | Descrição |
|---|---|---|
| `https://gladstonfreire.com.br/admin.html` | `admin.html` | Painel administrativo *(protegido por senha)* |

### Serviços externos

| URL | Serviço | Descrição |
|---|---|---|
| `https://eat9cs7j.sanity.studio/` | Sanity Studio | Gerenciamento de artigos |

### Seções da página inicial

| Âncora | Seção |
|---|---|
| `#videos` | Mensagens de Renovo (pregações em vídeo) |
| `#livro` | Livro "Não Desça Mais Nenhum Degrau" |
| `#agenda` | Agenda Ministerial *(nova)* |
| `#ministerios` | Por onde temos ministrado *(nova)* |
| `#blog-section` | Artigos e Estudos |

---

## 15. BANCO DE DADOS

### Banco 1 — Sanity (Conteúdo / Blog)

| Tipo de dado | Coleção / Tipo | Campos |
|---|---|---|
| Artigos | `post` | title, slug, publishedAt, mainImage, body |

O Sanity é um banco de dados de conteúdo (headless CMS). Não é um banco relacional — funciona como um conjunto de documentos JSON gerenciados visualmente.

### Banco 2 — Supabase (Agenda / Convites)

**Status:** ⚠️ Estrutura pronta, aguarda configuração de credenciais

**Tabela:** `convites_ministeriais`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | UUID (PK) | Identificador único gerado pelo Supabase |
| `id_solicitacao` | Text | UUID gerado pelo site no momento do envio |
| `origem` | Text | `"SITE OFICIAL"` (sempre) |
| `data_solicitacao` | Timestamp | Data e hora do envio |
| `nome_igreja` | Text | Nome da igreja solicitante |
| `pastor_responsavel` | Text | Nome do pastor |
| `cidade` | Text | Cidade do evento |
| `estado` | Text | UF do estado |
| `nome_evento` | Text | Nome do evento/conferência |
| `data_evento` | Text | Data prevista do evento |
| `quantidade_dias` | Text | Duração em dias |
| `publico_estimado` | Text | Estimativa de público |
| `telefone` | Text | Telefone do pastor |
| `whatsapp_contato` | Text | WhatsApp para contato |
| `email` | Text | E-mail do pastor |
| `mensagem` | Text | Mensagem adicional |
| `status` | Text | Novo / Em contato / Confirmado / Realizado / Cancelado |
| `observacoes` | Text | Anotações do administrador |

**SQL para criar a tabela** (já documentado em `js/config.js`):
```sql
CREATE TABLE convites_ministeriais (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  id_solicitacao TEXT,
  origem TEXT DEFAULT 'SITE OFICIAL',
  data_solicitacao TIMESTAMPTZ DEFAULT NOW(),
  nome_igreja TEXT, pastor_responsavel TEXT,
  cidade TEXT, estado TEXT, nome_evento TEXT,
  data_evento TEXT, quantidade_dias TEXT,
  publico_estimado TEXT, telefone TEXT,
  whatsapp_contato TEXT, email TEXT, mensagem TEXT,
  status TEXT DEFAULT 'Novo', observacoes TEXT
);
```

---

## 16. O QUE GLADSTON PODE FAZER HOJE

### ✅ Funcionando agora (sem configuração adicional)

✅ **Publicar artigos e estudos bíblicos** — pelo Sanity Studio, sem tocar em código

✅ **Editar artigos existentes** — alterar título, texto, data, imagem

✅ **Exibir vídeos de pregações** — YouTube e vídeos locais já integrados

✅ **Apresentar o livro** — capa, descrição e link para compra (Hotmart)

✅ **Receber mensagens de contato** — formulário da página /contato.html envia por e-mail

✅ **Ser encontrado no Google** — SEO implementado com Schema.org, sitemap e meta tags

✅ **Ser compartilhado nas redes sociais** — Open Graph configurado com imagem e texto

✅ **Exibir fotos e galeria** — todas as seções de fotos estão funcionando

✅ **Ser contatado pelo WhatsApp** — botão flutuante em todas as páginas

✅ **Apresentar o Media Kit** — página completa em /media-kit.html

✅ **Capturar solicitações de agenda** — formulário modal funciona e coleta todos os dados

### ⚠️ Quase pronto (requer apenas configuração, sem programar)

⚠️ **Salvar solicitações de agenda no banco de dados** — requer configuração do Supabase

⚠️ **Receber notificação por e-mail de cada nova agenda** — requer configuração do EmailJS

⚠️ **Acessar o painel administrativo com dados reais** — requer configuração do Supabase

⚠️ **Monitorar acessos e visitantes do site** — requer ativação do Google Analytics

⚠️ **Rastrear conversões para anúncios** — requer ativação do Meta Pixel

---

## 17. RECURSOS FUTUROS

Com a estrutura atual, os seguintes recursos podem ser implementados:

### De fácil implementação

| Recurso | O que requer |
|---|---|
| Adicionar links nos artigos | Expandir `renderizarTexto()` em `post.html` |
| Adicionar vídeos embed nos artigos | Expandir `renderizarTexto()` e schema do Sanity |
| Categorias de artigos | Novo campo no schema do Sanity + filtro no site |
| Busca por artigos | Query GROQ no Sanity + campo de busca no HTML |
| SEO por artigo | Campo `seoDescription` no Sanity + meta dinâmica em `post.html` |
| Mais páginas no sitemap | Adicionar entradas em `sitemap.xml` |
| Notificação WhatsApp automática | Webhook do Supabase + Make.com/Zapier |
| Segundo e-mail de notificação (secretária) | Adicionar campo `to_email_2` no template EmailJS |
| Filtro de agenda por status no admin | Dropdown de filtro na tabela do painel |
| Exportar solicitações em CSV | Botão de exportação no painel admin |
| Página de depoimentos dedicada | Nova página com todos os depoimentos |
| Sistema de agendamento com calendário | Integração com Google Calendar |
| Loja online de livros e recursos | Integração com Hotmart ou Kiwify |

### De implementação mais complexa

| Recurso | O que requer |
|---|---|
| Newsletter/lista de e-mails | Integração com Mailchimp ou RD Station |
| Área de membros | Supabase Auth + páginas protegidas |
| Transmissão ao vivo | YouTube Live embed na página inicial |
| Mapa de ministração | Google Maps API com pins de locais visitados |
| App mobile | React Native ou PWA sobre a estrutura atual |

---

## 18. RESUMO DA AUDITORIA

### Arquivos analisados

| Arquivo | Linhas | Função |
|---|---|---|
| `index.html` | ~600 | Página inicial completa |
| `sobre.html` | ~180 | Página Sobre |
| `contato.html` | ~340 | Formulário de contato |
| `post.html` | ~545 | Visualizador de artigos |
| `media-kit.html` | ~260 | Media Kit oficial |
| `admin.html` | ~180 | Painel administrativo |
| `style.css` | ~2.300 | Todos os estilos |
| `js/sanityClient.js` | 7 | Conexão com Sanity |
| `js/config.js` | ~80 | Configurações do sistema |
| `js/agenda.js` | ~160 | Lógica do formulário de agenda |
| `js/admin.js` | ~190 | Lógica do painel admin |
| `sitemap.xml` | 32 | Mapa do site |
| `robots.txt` | 7 | Instruções para Google |
| `package.json` | 5 | Dependências Node.js |

### Rotas encontradas

| Rota | Status |
|---|---|
| `/` (index.html) | ✅ Ativa |
| `/sobre.html` | ✅ Ativa |
| `/contato.html` | ✅ Ativa |
| `/post.html?slug={slug}` | ✅ Ativa |
| `/media-kit.html` | ✅ Ativa (nova) |
| `/admin.html` | ✅ Ativa, protegida (nova) |
| `/studio` | Externo: `eat9cs7j.sanity.studio` |

### Funcionalidades implementadas ✅

- Apresentação do ministério com múltiplas seções
- Blog com artigos gerenciados pelo Sanity CMS
- Visualização completa de artigos com formatação
- Galeria de fotos e vídeos
- Seção do livro com link para compra (Hotmart)
- Formulário de contato (via mailto)
- Modal de solicitação de agenda com 12 campos
- Rastreamento de origem (SITE OFICIAL)
- Depoimentos reais de pastores
- Seção "Por onde temos ministrado"
- Media Kit profissional
- Painel administrativo com login e tabela de solicitações
- Atualização de status no painel (Novo → Realizado)
- Campo de observações por solicitação
- Estatísticas em tempo real no painel
- SEO completo: meta tags, Open Graph, Twitter Card, Schema.org Person + Book
- Sitemap XML e robots.txt
- Design responsivo: desktop, tablet, mobile
- Animações de entrada (scroll reveal)
- Botão WhatsApp flutuante com pulse animado
- Botão voltar ao topo
- Menu hambúrguer para mobile
- Lazy loading de imagens
- Acessibilidade: skip link, aria-labels, roles

### Funcionalidades parcialmente implementadas ⚠️

| Funcionalidade | O que falta |
|---|---|
| Sistema de agenda completo | Configurar credenciais do Supabase em `js/config.js` |
| E-mail automático de notificação | Configurar credenciais do EmailJS em `js/config.js` |
| Painel admin com dados reais | Depende do Supabase acima |
| Google Analytics | Descomentar código e inserir Measurement ID |
| Meta Pixel | Descomentar código e inserir Pixel ID |
| Sitemap atualizado | Adicionar `media-kit.html` ao `sitemap.xml` |

### Funcionalidades ainda inexistentes ❌

| Funcionalidade | Observação |
|---|---|
| Sistema de categorias no blog | Requer expansão do schema no Sanity |
| Busca por artigos | Requer implementação de query de busca |
| Links e vídeos dentro de artigos | Requer expansão do renderizador em `post.html` |
| SEO individual por artigo | Requer campos `seoTitle`/`seoDescription` no Sanity |
| Newsletter / lista de e-mails | Requer integração com serviço externo (Mailchimp, etc.) |
| Notificação WhatsApp 100% automática | Requer backend ou automação (Make.com/Zapier + webhook) |
| Exportação de relatórios em CSV | Requer implementação no painel admin |
| Área de membros | Requer Supabase Auth |

---

> **Documento gerado por:** Diego Batista (Desenvolvedor Responsável)
> **Site:** [gladstonfreire.com.br](https://gladstonfreire.com.br)
> **Data da auditoria:** Junho de 2026
> **Versão:** 1.0
