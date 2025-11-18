<p align="center" style="font-size:28px;"><strong><em>Documentação do Projeto Interdiciplinar</em></strong></p>

<div align="center" id="inicio">

# ERP Essense SPA - Sistema de Agendamento para Clinica de Estética  
### Centro Paula Souza  
### Faculdade de Tecnologia de Jahu  
### Curso de Tecnologia em Desenvolvimento de Software Multiplataforma  
### Jaú, SP, BR  
### Início 2º Semestre / 2025

</div>

<br>

<h3 align="center">Autores</h3>

<table align="center">
  <tr>
    <td align="center" style="padding: 15px;">
      <img src="https://github.com/user-attachments/assets/c24c1caf-82cc-49a1-8f84-700b133ec2ff" width="150" style="border-radius: 15px;" /><br>
      <strong>
        <a href="https://www.linkedin.com/in/aline-canola-antonio-rocha-3a881b369" target="_blank">Aline C. A. Rocha</a>
      </strong>
    </td>
    <td align="center" style="padding: 15px;">
      <img src="https://github.com/user-attachments/assets/5157d044-3c37-4041-a560-a86fc6525481" width="150" style="border-radius: 15px;" /><br>
      <strong>
        <a href="#">Evellyn Santana</a>
      </strong>
    </td>
    <td align="center" style="padding: 15px;">
      <img src="https://github.com/user-attachments/assets/9bc0f4bc-b4c5-4130-a62c-17d6b213d563" width="150" style="border-radius: 15px;" /><br>
      <strong>
        <a href="#">Lucas A. Ribeiro</a>
      </strong>
    </td>
    <td align="center" style="padding: 15px;">
      <img src="https://github.com/user-attachments/assets/9a7cd450-a2eb-4dd2-805f-c56960aec8c6" width="150" style="border-radius: 15px;" /><br>
      <strong>
        <a href="#">Luhan</a>
      </strong>
    </td>
    <td align="center" style="padding: 15px;">
      <img src="https://github.com/user-attachments/assets/e7a99a5f-e5f8-427f-9b33-d6b331ccd071" width="150" style="border-radius: 15px;" /><br>
      <strong>
        <a href="https://www.linkedin.com/in/tainaravit-santos2025/" target="_blank">Tainara Santos</a>
      </strong>
    </td>

  </tr>
</table>

# Projeto-Interdiciplinar-Fatec-Jau
Projeto desenvolvido com o apoio do conteúdo adquirido nas diciplicas do 1º Semestre do curso de DSM - Fatec Jahu, especificamente nas diciplinas chaves: 
- Design Digital
- Desing WEB
- Engenharia de Software

# *Documentação do Projeto Integrador (PI)*  

<details>
  <summary><strong>Sumário</strong></summary>

- [1. Introdução](#1-introdução)
  - [Objetivos](#-objetivos)
  - [Metodologia](#-metodologia)
- [2. Requisitos](#2-requisitos)
  - [Requisitos funcionais](-requisitos-funcionais)
  - [Requisitos não funcionais](#-requisitos-não-funcionais)
- [3. Modelo de casos de uso](#3-modelo-de-casos-de-uso)
- [4. Modelo do banco de dados](#4-modelo-do-banco-de-dados)
- [5. Banco de dados](#5-banco-de-dados)
- [6. Diagrama de classes](#6-diagrama-de-classes)
- [7. Estudo de viabilidade](#7-estudo-de-viabilidade)
- [8. Regras de negócio (Modelo Canvas)](#8-regras-de-negócio-modelo-canvas)
- [9. Design](#9-design)
- [10. Protótipo](#10-protótipo)
- [11. Aplicação](#11-aplicação)

</details>

---

# 1. Introdução  
 O mercado de estética no Brasil tem mostrado um crescimento expressivo e reseliência notável.
 A crescenta demanda por serviços estéticos e profissionalização no setor exigem que as clientes adotem ferramentas de gestão mais sofisticados. 

## 🎯 Objetivos  

Objetivo Geral:
Desenvolver um sistema ERP completo e intuitivo para otimizar a gestão de clínicas de estética de pequeno e médio porte.

Objetivos Especificos:
- Centralizar gestão de agendamentos
- Automatizar Controle Financeiro
- Automatizar Controle de Estoque
- Ferramenta CRM
- Relatórios e Dashboard gerenciais.

## 🛠️ Metodologia  
Para o desenvolvimento do Sistema de Agendamento para Clínica de Estética, utilizamos uma combinação de métodos, ferramentas e tecnologias que permitiram organizar o trabalho da equipe e garantir um fluxo claro de construção do projeto.

🔹 Como trabalhamos (Métodos e Processo)

- Aplicamos o modelo Ágil (Scrum simplificado) para organizar as tarefas.
- Realizamos reuniões frequentes no grupo para alinhamento de atividades.
- Criamos sprints semanais com metas específicas para cada integrante.
- Utilizamos Quadro Kanban no GitHub Projects para acompanhar progresso e pendências.
- Registramos decisões e mudanças na aba Issues do GitHub.

🔹 Com o quê desenvolvemos (Tecnologias e Ferramentas)

- Frontend: HTML5, CSS3 e JavaScript - Vide Código
- Design e prototipação: Figma (criação de telas, fluxos e padronização visual).
  <a herf= "https://www.figma.com/proto/1Le26sngVuPy61TJzUhlfK/TelasLuhan?node-id=670-1431&t=h7rONkitrp9DdYNM-1">Link Protótipo Figma</a>
- Controle de versão: Git e GitHub (branches, commits e pull requests).
- Documentação: Markdown e GitHub README.
- Comunicação da equipe: WhatsApp e reuniões presenciais/online.
- Apresentação: Power Point apresentação final.

🔹 Onde e Quando aplicamos
   
   O desenvolvimento foi realizado de forma híbrida (remoto e presencial).
   As atividades foram distribuídas ao longo do 2º semestre de 2025.
   As revisões e ajustes finais foram feitos nos últimos encontros do grupo.

---

# 2. Requisitos  

## ⚙️ Requisitos funcionais  <br>
🔷 Requisitos de Agendamento <br>
 RF01 Cancelar e remarcar agendamento pelo cliente <br>
 RF02 Cancelar e remarcar agendamento pelo profissional <br>
 RF03 Controlar agenda individual do esteticista <br>
 RF04 Enviar formulário de agendamento <br>

🔷 Requisitos de Preferência e Seleção <br>
 RF05 Escolher esteticista durante o agendamento <br>

🔷 Requisitos de Relatórios <br>
 RF06 Emitir relatórios gerenciais <br>
 RF07 Emitir relatatórios de clientes <br>

🔷 Requisitos de Comunicação e Notificações <br>
 RF08 Enviar notificações e lembretes automáticos <br>

🔷 Requisitos de Identificação do Usuário <br>
 RF09 Realizar login <br>
 RF10 – Realizar cadastro <br>

## 🧩 Requisitos não funcionais <br>  

🔷 Requisitos de Produto: Características diretamente ligadas à experiência de uso e desempenho. <br>
 RNF01 Garantir autenticação segura <br>
 RNF02 Assegurar alto desempenho do sistema <br>
 RNF03 Permitir personalizar a interface conforme necessidade da clínica <br>
 RNF04 Garantir usabilidade intuitiva <br>
 RNF05 Proporcionar boa experiência ao usuário <br>
 RNF06 Assegurar responsividade em diferentes dispositivos <br>

🔷 Requisitos de Confiabilidade: Segurança, proteção e integridade de dados. <br>
 RNF07 Proteger dados sensíveis dos usuários <br>
 RNF08 Implementar lembretes automáticos de agendamentos <br>
 RNF09 Manter histórico confiável da agenda do esteticista <br>
 RNF10 Garantir restrições de acesso conforme perfil de usuário <br>

🔷 Requisitos de Organização: Alinhamento com necessidades administrativas e operacionais. <br>
 RNF11 Permitir autonomia ao administrador para gerenciar configurações do sistema <br>
 RNF12 Oferecer controle financeiro integrado <br>
 RNF13 Registrar cancelamentos realizados pelo cliente <br>
 RNF14 Registrar cancelamentos realizados pelo esteticista <br>

🔷 Requisitos de Implementação: Aspectos técnicos necessários para desenvolvimento. <br>
 RNF15 Implementar mecanismo para pré-pagamento de serviços <br>
 RNF16 Implementar seleção de esteticista pelo cliente no agendamento <br>

🔷 Requisitos de Interoperabilidade: Integração com outros serviços e ferramentas. <br>
 RFN17 Habilitar marketing automatizado integrado (MKT Automation) <br>



# 7. Estudo de viabilidade  

<h1> Sistema ERP para Clínica de Estética </h1>

## Viabilidade Técnica:
  A análise sobre a viabilidade técnica do sistema ERP mostrou que sua criação e funcionamento é possível com os recursos disponíveis. O time de desenvolvimento possui e está evoluindo em níveis de programação, gerenciamento e conhecimento técnico nos recursos necessários. A infraestrutura do projeto permite fácil integração e manuseio por parte do usuário.

## Viabilidade Operacional:
Fluxo operacional:
-	O cliente acessa o site e agenda o horário.
-	O sistema envia automaticamente um lembrete por WhatsApp ou e-mail.
-	Profissional confirma o agendamento.
-	O sistema financeiro integrado faz o controle das cobranças.

Usuários principais:
-	Esteticistas.
-	Gestores da clínica.
-	Clientes.

Benefícios esperados:
-	Redução de erros como agendamentos duplicados ou esquecidos.
-	Fidelização dos clientes com programas de assinatura e promoções.
-	Comunicação automática.
-	Melhor tomada de decisão com base nos relatórios.

Conclusão operacional:
O sistema vai se integrar de forma natural às rotinas da clínica. A equipe só precisará de um treinamento curto, para aprender a utilizar todas as funções.

## Viabilidade Financeira:
Custos estimados:
O projeto não terá custo de desenvolvimento, pois será elaborado com apoio academico dos alunos e professores do curso DSM – Fatec Jahu

Modelos de receita possíveis:
-	SaaS: a clínica paga valor mensal de R$ 149,90. 

Exemplo de retorno no modelo SaaS:
Se 10 clínicas assinarem o sistema por R$ 149,900/mês, o faturamento será de R$ 1.499,00/mês.
Com isso, o investimento inicial pode ser recuperado em 7 meses.

Conclusão financeira:
O projeto é financeiramente viável. O modelo de mensalidade SaaS é mais vantajoso, pois garante retorno contínuo e sustentável.

## Viabilidade de Mercado:
O setor de estética no Brasil está em crescimento e muitas clínicas ainda utilizam métodos manuais, como planilhas ou cadernos, o que causa falhas na gestão. Isso mostra uma grande oportunidade de digitalização.
Concorrentes identificados:
-	MP Sistemas Jaú
-	STi3 Sistemas (localizado em Jaú)
-	Gestek (Goiania, porém é um sistema online totalmente focado em atender clinicas de estética)

Diferenciais do projeto:
-	Maior facilidade de acesso
-	Mais flexível
-	Maior adaptabilidade

Conclusão de mercado:
Existe uma demanda crescente no setor. O diferencial do projeto está no foco exclusivo em clínicas de estética e na personalização, indo além do básico oferecido pelos concorrentes.

Resumo Final
O estudo mostrou que o projeto é: 
-	Tecnicamente viável: os recursos necessários foram adquiridos.
-	Operacionalmente aplicável: simples de usar, exigindo pouco treinamento.
-	Financeiramente sustentável: com possibilidade de retorno rápido no modelo SaaS.


---

# 8. Regras de negócio (Modelo Canvas)  

<a href="IMGS/ModeloCANVA.jpg" class="image fit"><img src="IMGS/ModeloCANVA.jpg" alt="Modelo de negocio canva"></a>

---

# 9. Design  
- 🎨 Paleta de cores  
- ✍️ Tipografia  
- 🔖 Logo  
- 🧩 Wireframes  
- 🗺️ Modelo de navegação  

---

# 10. Protótipo  
*(Protótipo funcional no Figma ou outra ferramenta. Colocar o link aqui)*  

---

# 11. Aplicação











