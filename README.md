<p align="center" style="font-size:28px;"><strong><em>Documentação do Projeto Interdisciplinar</em></strong></p>

<div align="center" id="inicio">

# ERP Essense SPA - Sistema de Agendamento para Clínica de Estética  
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

# Projeto Interdisciplinar - Fatec Jahu
Projeto desenvolvido com apoio dos conteúdos das disciplinas do 1º Semestre do curso de DSM – Fatec Jahu, especificamente:

- Design Digital  
- Design Web  
- Engenharia de Software  

# *Documentação do Projeto Interdisciplinar (PI)*  

<details>
  <summary><strong>Sumário</strong></summary>

- [1. Introdução](#1-introdução)
  - [Objetivos](#-objetivos)
  - [Metodologia](#-metodologia)
- [2. Requisitos](#2-requisitos)
  - [Requisitos funcionais](#-requisitos-funcionais)
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
O mercado de estética no Brasil tem apresentado crescimento expressivo e resiliência.  
A crescente demanda por serviços estéticos e a profissionalização do setor exigem que as clínicas adotem ferramentas de gestão cada vez mais eficientes e integradas.

## 🎯 Objetivos  

**Objetivo Geral:**  
Desenvolver um sistema ERP intuitivo para otimizar a gestão de clínicas de estética de pequeno e médio porte.

**Objetivos Específicos:**  
- Centralizar a gestão de agendamentos  
- Automatizar o controle financeiro  
- Automatizar o controle de estoque  
- Oferecer ferramenta CRM integrada  
- Gerar relatórios e dashboards gerenciais  

---

## 🛠️ Metodologia  

Para o desenvolvimento do sistema, utilizamos métodos, ferramentas e tecnologias que facilitaram a organização do time e a construção das funcionalidades.

### 🔹 Como trabalhamos (Métodos e Processo)

- Aplicação do modelo ágil (Scrum simplificado)  
- Reuniões frequentes de alinhamento  
- Sprints semanais com metas individuais  
- Kanban no GitHub Projects  
- Registro de decisões via Issues  

### 🔹 Com o quê desenvolvemos (Tecnologias e Ferramentas)

- **Frontend:** HTML5, CSS3 e JavaScript  
- **Design e prototipação:** Figma  
  - <a href="https://www.figma.com/proto/1Le26sngVuPy61TJzUhlfK/TelasLuhan?node-id=670-1431&t=h7rONkitrp9DdYNM-1">Protótipo Figma</a>  
- **Versionamento:** Git e GitHub  
- **Documentação:** Markdown  
- **Comunicação:** WhatsApp e reuniões presenciais/online  
- **Apresentação:** PowerPoint  

### 🔹 Onde e quando aplicamos

O desenvolvimento ocorreu de forma híbrida durante o 2º semestre de 2025, com ajustes finais realizados nos últimos encontros da equipe.

---

# 2. Requisitos  

## ⚙️ Requisitos Funcionais <br> 

### 🔷 Requisitos de Agendamento <br> 
- **RF01** Cancelar e remarcar agendamento pelo cliente <br> 
- **RF02** Cancelar e remarcar agendamento pelo profissional <br> 
- **RF03** Controlar agenda individual do esteticista <br> 
- **RF04** Enviar formulário de agendamento  <br>

### 🔷 Requisitos de Preferência e Seleção  <br>
- **RF05** Escolher esteticista durante o agendamento  <br>

### 🔷 Requisitos de Relatórios  <br>
- **RF06** Emitir relatórios gerenciais <br>  
- **RF07** Emitir relatórios de clientes <br> 

### 🔷 Requisitos de Comunicação <br> 
- **RF08** Enviar notificações e lembretes <br> 

### 🔷 Requisitos de Identificação <br>  
- **RF09** Realizar login  <br>
- **RF10** Realizar cadastro <br> 

---

## 🧩 Requisitos Não Funcionais  <br>

### 🔷 Requisitos de Produto  <br> 
- **RNF01** Garantir autenticação segura  <br>
- **RNF02** Assegurar alto desempenho  <br>
- **RNF03** Permitir personalização da interface <br> 
- **RNF04** Garantir usabilidade  <br>
- **RNF05** Proporcionar boa experiência do usuário  <br>
- **RNF06** Garantir responsividade  <br>

### 🔷 Requisitos de Confiabilidade  <br>
- **RNF07** Proteger dados sensíveis  <br>
- **RNF08** Implementar lembretes automáticos  <br>
- **RNF09** Manter histórico da agenda  <br>
- **RNF10** Garantir restrições de acesso  <br>

### 🔷 Requisitos de Organização  <br>
- **RNF11** Oferecer autonomia ao administrador  <br>
- **RNF12** Disponibilizar controle financeiro  <br>
- **RNF13** Registrar cancelamentos do cliente  <br>
- **RNF14** Registrar cancelamentos do esteticista  <br>

### 🔷 Requisitos de Implementação  <br>
- **RNF15** Implementar pré-pagamento  <br>
- **RNF16** Implementar seleção de esteticista <br> 

### 🔷 Requisitos de Interoperabilidade  <br>
- **RNF17** Habilitar marketing automatizado <br> 

---

# 7. Estudo de viabilidade  

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
A identidade visual do projeto foi desenvolvida para transmitir leveza, bem-estar e confiança, alinhada ao contexto de uma clínica de estética.
A seguir estão os principais elementos que compõem o design do sistema:

🎨 **Paleta de Cores**

A paleta transmite leveza, bem-estar e equilíbrio:

<table>
  <tr>
    <td bgcolor="#C8E6E2" width="80" height="80"></td>
    <td bgcolor="#9ED5D1" width="80" height="80"></td>
    <td bgcolor="#63C1BB" width="80" height="80"></td>
    <td bgcolor="#3A9295" width="80" height="80"></td>
    <td bgcolor="#105F68" width="80" height="80"></td>
  </tr>
  <tr>
    <td align="center"><strong>#C8E6E2</strong></td>
    <td align="center"><strong>#9ED5D1</strong></td>
    <td align="center"><strong>#63C1BB</strong></td>
    <td align="center"><strong>#3A9295</strong></td>
    <td align="center"><strong>#105F68</strong></td>
  </tr>
</table>

✍️ **Tipografia**  
- Roboto Bold — Títulos  
- Roboto Regular — Corpo de texto  

🔖 **Logo**  
<img width="250" src="https://github.com/user-attachments/assets/5cd46f2f-8d26-4cee-8da1-9b93c9baa8a2">

---

# 10. Protótipo  

Antes do desenvolvimento, as telas foram planejadas e testadas através de um protótipo navegável no Figma.

👉 **Acesse o protótipo:**  
<a href="https://www.figma.com/proto/1Le26sngVuPy61TJzUhlfK/TelasLuhan?node-id=670-1431&t=h7rONkitrp9DdYNM-1" target="_blank"><strong>Protótipo no Figma</strong></a>

---

# 11. Aplicação  

Nesta seção apresentamos a versão final da aplicação hospedada, permitindo navegar e visualizar o ERP funcionando.

👉 **Acessar aplicação:**  
<a href="https://projeto-integrador-ashen-omega.vercel.app/index.html" target="_blank"><strong>ERP Essense SPA</strong></a>
















