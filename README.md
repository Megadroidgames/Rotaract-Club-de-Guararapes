

## Principais áreas

- Página institucional responsiva;
- Apresentação completa das quatro etapas do projeto;
- Login institucional, Google e cadastro demonstrativos;
- Questionário inicial de personalização;
- Painel do aluno com XP, sequência, progresso e agenda;
- Catálogo de cursos;
- Área de aula com player de vídeo e lista de conteúdos;
- Atividade diária com correção e pontuação;
- Assistente demonstrativo de apoio ao vocabulário;
- Ranking e conquistas;
- Área de certificados com modelo para download;
- Área demonstrativa de videochamada, chat e denúncia;
- Agenda de encontros;
- Painel administrativo demonstrativo;
- Política de privacidade e termos de uso;
- Identidade própria, favicon e ícones para instalação como aplicativo.

## Tecnologias

- HTML5 semântico;
- CSS3 responsivo;
- JavaScript puro;
- Node.js 18 ou superior para o servidor local;
- `localStorage` para persistência dos dados de demonstração;
- Manifesto de aplicativo web.



## Como executar

### Opção recomendada — Node.js

1. Instale o Node.js 18 ou superior.
2. Extraia o ZIP.
3. Abra um terminal dentro da pasta `maos-que-conectam`.
4. Execute:

```bash
npm start
```

5. Abra no navegador:

```text
http://localhost:3000
```

### Verificar o código

```bash
npm run check
```


## Login de demonstração

- Use qualquer e-mail válido;
- A senha deve ter pelo menos quatro caracteres;
- O botão “Continuar com conta Google” cria um perfil local de demonstração;
- Nenhum dado é enviado para um serviço externo.

## Rotas

| Rota | Conteúdo |
|---|---|
| `#/` | Página inicial |
| `#/projeto` | Apresentação do projeto |
| `#/login` | Login |
| `#/cadastro` | Cadastro |
| `#/onboarding` | Questionário inicial |
| `#/dashboard` | Painel do aluno |
| `#/cursos` | Catálogo de cursos |
| `#/aula/fundamentos` | Área de aula |
| `#/atividades` | Atividade diária |
| `#/assistente` | Apoio de vocabulário |
| `#/ranking` | Ranking e conquistas |
| `#/certificados` | Certificados |
| `#/comunidade` | Prática em videochamada |
| `#/agenda` | Agenda |
| `#/admin` | Administração |

## Estrutura

```text
maos-que-conectam/
├── assets/
│   ├── brand/
│   │   ├── mark.svg
│   │   ├── mark-dark.svg
│   │   └── ícones PNG
│   ├── images/
│   └── videos/
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── data.js
├── index.html
├── manifest.webmanifest
├── package.json
├── server.js
└── README.md
```


# Estimativa para manter a plataforma

Os valores abaixo representam **custos mensais de operação**, não o preço de desenvolvimento inicial. São estimativas para planejamento, com base em preços públicos consultados em **17 de julho de 2026** e conversão aproximada de **US$ 1 = R$ 5,10**.

## 1. Somente esta demonstração

Esta versão pode funcionar como site estático, sem banco de dados real, videochamada real ou autenticação externa.

| Item | Estimativa |
|---|---:|
| Hospedagem estática | R$ 0/mês em plano gratuito compatível |
| Domínio `.br` | R$ 40/ano, aproximadamente R$ 3,33/mês |
| Infraestrutura total | **aproximadamente R$ 4/mês** |

Esse cenário serve para apresentações, validação do projeto e busca de parceiros. Não é adequado para armazenar dados reais de alunos.

## 2. Piloto em produção — até aproximadamente 500 usuários ativos

Exemplo de estrutura: hospedagem profissional, autenticação, banco de dados, envio de e-mails, vídeos sob demanda e poucas práticas ao vivo.

| Item | Estimativa mensal |
|---|---:|
| Hospedagem web profissional | R$ 100–150 |
| Banco de dados, autenticação e backups | R$ 125–250 |
| Hospedagem e entrega de videoaulas | R$ 30–180 |
| Videochamadas | R$ 0–300, conforme minutos utilizados |
| E-mails, logs e monitoramento | R$ 0–120 |
| Domínio | aproximadamente R$ 3,33 |
| **Infraestrutura estimada** | **R$ 260–1.000/mês** |
| Manutenção técnica terceirizada | **R$ 1.500–4.000/mês** |
| **Total técnico estimado** | **R$ 1.800–5.000/mês** |

A manutenção técnica normalmente cobre correções, atualizações, backups, suporte básico, pequenas melhorias e acompanhamento de segurança. Produção de aulas, instrutores, intérpretes, atendimento e moderação não estão incluídos.

## 3. Plataforma ativa — milhares de usuários

Quando há grande consumo de vídeo, várias chamadas simultâneas, moderação e suporte, o custo passa a depender muito do uso.

| Categoria | Estimativa mensal |
|---|---:|
| Infraestrutura, banco, vídeo, chamadas e monitoramento | R$ 1.200–7.000 |
| Desenvolvimento e manutenção contínua | R$ 3.000–8.000 |
| Conteúdo pedagógico, instrutores, atendimento e moderação | R$ 4.000–15.000 ou mais |
| **Operação estimada** | **R$ 8.000–30.000/mês ou mais** |

## O que mais influencia o valor

- Quantidade de usuários ativos;
- Minutos de videoaulas assistidos;
- Quantidade e duração das videochamadas;
- Gravação ou não das chamadas;
- Volume de certificados e e-mails enviados;
- Necessidade de atendimento humano e moderação;
- Frequência de publicação de novas aulas;
- Exigências jurídicas, de acessibilidade e proteção de menores;
- Nível de suporte e disponibilidade esperado.

## Referências públicas usadas na estimativa

- Registro.br — domínio `.br` por R$ 40 ao ano: `https://registro.br/dominio/`
- Vercel Pro — taxa base de US$ 20 por mês: `https://vercel.com/docs/plans/pro-plan`
- Supabase Pro — US$ 25 por mês: `https://supabase.com/pricing`
- Cloudflare Stream — armazenamento a partir de US$ 5 por 1.000 minutos e entrega a US$ 1 por 1.000 minutos: `https://www.cloudflare.com/products/stream/`
- Daily Video SDK — início com 10.000 minutos gratuitos por mês e cobrança conforme uso: `https://www.daily.co/pricing/`
- Banco Central do Brasil — referência cambial PTAX: `https://www.bcb.gov.br/estabilidadefinanceira/fechamentodolar`

Os fornecedores podem alterar preços e limites. Antes de contratar, refaça a simulação usando o número esperado de alunos, horas de vídeo e minutos de chamadas.

## O que ainda precisa ser feito para produção real

1. Backend com autenticação segura e controle de acesso;
2. Banco PostgreSQL ou equivalente;
3. Login Google OAuth e login institucional;
4. Armazenamento profissional de vídeos;
5. Integração real de videochamada por WebRTC ou serviço especializado;
6. Emissão verificável de certificados;
7. Painel de moderação e registros de auditoria;
8. Política de privacidade e termos revisados por profissional jurídico;
9. Adequação à LGPD e proteção especial de crianças e adolescentes;
10. Validação pedagógica por especialistas em Libras;
11. Testes de acessibilidade com pessoas surdas;
12. Monitoramento, backups, recuperação de falhas e suporte.

## Limites da demonstração

Login Google, banco de dados, IA, emissão de certificado, videochamada, moderação automática e administração são simulações de interface. Elas representam o fluxo do produto, mas precisam de serviços reais antes do uso público.
