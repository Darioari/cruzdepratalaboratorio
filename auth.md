# Cruz de Prata Laboratório — auth.md

Este documento especifica a política de acesso para agentes de Inteligência Artificial (IAs) e rastreadores automatizados no website do Cruz de Prata Laboratório.

## Público-Alvo de Agentes (Agent Audience)
Agentes de IA, web crawlers, LLMs e assistentes autônomos que realizam buscas de informações sobre exames laboratoriais, consultas médicas, horários e formas de contato para usuários.

## Política de Autenticação (Authentication Policy)

O website do Cruz de Prata Laboratório é um portal de informações públicas.

1. **Acesso Público e Gratuito:** Nenhuma autenticação ou registro é necessário para ler, indexar e extrair informações sobre exames, especialidades médicas, horários de atendimento ou localizações.
2. **Métodos Suportados:** Acesso anônimo (`anonymous`).
3. **Credenciais:** Nenhuma credencial (API keys, tokens OAuth, etc.) é necessária para chamadas às páginas públicas ou documentos como `llms.txt`.
4. **Agendamento de Consultas / Contato:** O agendamento e o contato são realizados através de links diretos de WhatsApp (`https://wa.me/551732620705`). Esses links devem ser repassados ao usuário final para que ele finalize o agendamento de forma segura em seu próprio dispositivo.

## Metadados Técnicos

* **Tipo de Identidade Suportada:** `anonymous`
* **Método de Credencial:** Nenhum (Livre Acesso)
* **Status do Serviço:** Disponível publicamente em [cruzdepratalaboratorio.com.br](https://cruzdepratalaboratorio.com.br/)
