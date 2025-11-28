<p align="center" style="font-size:28px;"><strong><em>Documentação do Projeto Interdisciplinar</em></strong></p>

<div align="center" id="inicio">

### Essense Spa – Sistema de Gestão para Clínica de Estética  
### Centro Paula Souza  
### Faculdade de Tecnologia de Jahu  
### Curso de Tecnologia em Desenvolvimento de Software Multiplataforma  
### Jaú, SP, BR  
### Início 2º Semestre / 2025

</div>

<br>

<h3 align="center">Autores</h3>

<h3 align="center">
  <a href="#"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" align="center" width="35"></a> &nbsp;
  <a href="https://www.linkedin.com/in/tainaravit-santos2025/" target="_blank" >Tainara Santos</a>;
  <a href="https://www.linkedin.com/in/aline-canola-antonio-rocha-3a881b369/" target="_blank">Aline C. A. Rocha</a>;
  <a href="https://www.linkedin.com/in/evellyn-santana-a09273287/" target="_blank" >Evellyn Santana</a>.
   <a href="https://www.linkedin.com/in/luhan-de-paula-ribeiro-23b019315">Lucas Ribeiro</a>.
    <a href="https://www.linkedin.com/in/lucas-ribeiro-926785246/">Luhan De Paula</a>.
</h3>

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
A criação do sistema de gestão para a Essense Spa surgiu da necessidade de modernizar e otimizar os processos internos da clínica, garantindo mais organização, agilidade e qualidade no atendimento. No cotidiano de uma clínica de estética, é comum que agendamentos, históricos de procedimentos, registros financeiros e controle de produtos sejam realizados de forma manual ou em sistemas separados. Essa realidade gera falhas de comunicação, retrabalho e perda de informações essenciais para uma boa experiência do cliente. A partir de uma análise interna e de conversas com profissionais da área, identificou-se que mais de 80% das clínicas enfrentam dificuldades na gestão de horários, acompanhamento de clientes e controle de estoque — fatores que impactam diretamente na produtividade e na fidelização. Da mesma forma, foi constatado que a centralização desses processos em um sistema digital seria altamente benéfica tanto para os colaboradores quanto para os gestores. Com base nesses resultados, o sistema de gestão Essense Spa foi idealizado como uma solução completa para integrar e digitalizar os principais processos da clínica. O objetivo é proporcionar um sistema intuitivo, eficiente e seguro, capaz de melhorar o fluxo de trabalho, reduzir erros, facilitar a comunicação e elevar o padrão de atendimento, refletindo os valores de cuidado, bem-estar e excelência da Essense Spa. 

 

## Objetivos  

**Objetivo Geral:**  
O sistema de gestão Essense Spa tem como objetivo otimizar os processos administrativos e operacionais da clínica de estética, garantindo maior organização, eficiência e qualidade no atendimento. Por meio de um sistema digital seguro e intuitivo, busca-se centralizar informações, automatizar rotinas e oferecer suporte à tomada de decisões, elevando o padrão de serviço oferecido aos clientes e facilitando o trabalho diário dos profissionais. 

**Objetivos Específicos:**  
- Otimizar o Agendamento de Procedimentos: 
Desenvolver um sistema integrado de agendamentos que permita organizar horários, evitar conflitos, reduzir atrasos e facilitar a visualização da agenda dos profissionais.   
- Facilitar o Controle de Clientes e Histórico de Atendimentos: 
Criar um módulo para registrar informações completas dos clientes, incluindo histórico de procedimentos, preferências e observações, permitindo um atendimento mais personalizado e eficiente.  
- Gerenciar Estoque e Produtos Utilizados: 
Implementar funcionalidades para monitorar níveis de estoque, controlar entradas e saídas de produtos e gerar alertas de reposição, evitando faltas e desperdícios. 
- Automatizar Processos Financeiros: 
Oferecer ferramentas para registrar pagamentos, controlar contas, emitir relatórios financeiros e acompanhar o faturamento, contribuindo para uma gestão mais profissional e organizada. 
- Automatizar Processos Financeiros: 
Oferecer ferramentas para registrar pagamentos, controlar contas, emitir relatórios financeiros e acompanhar o faturamento, contribuindo para uma gestão mais profissional e organizada.
- Aprimorar a Experiência do Cliente: 
Construir um sistema que contribua para um atendimento mais rápido, organizado e personalizado, aumentando a satisfação, fidelização e percepção de qualidade dos serviços prestados.  



## Metodologia  

Para o desenvolvimento do sistema Essense Spa, foram adotados métodos, ferramentas e tecnologias que garantiram organização, colaboração eficiente e agilidade na construção das funcionalidades.

### Métodos e Processo

- Aplicação de um modelo ágil baseado no Scrum (versão simplificada)  
- Reuniões frequentes para alinhamento e definição de prioridades 
- Sprints semanais com metas individuais e coletivas  
- Controle de tarefas utilizando Trello, organizado em listas no estilo Kanban  
- Registro de decisões e histórico de desenvolvimento por meio de Issues 

### Tecnologias e Ferramentas

- **Frontend:** HTML5, CSS3 e JavaScript  
- **Design e prototipação:** Figma  
  - <a href="https://www.figma.com/proto/1Le26sngVuPy61TJzUhlfK/TelasLuhan?node-id=670-1431&t=h7rONkitrp9DdYNM-1">Protótipo Figma</a>  
- **Versionamento:** Git e GitHub  
- **Documentação:** Markdown  
- **Comunicação:** WhatsApp e reuniões presenciais/online  
- **Apresentação:** PowerPoint  

###  Onde e quando aplicamos

O desenvolvimento do sistema ocorreu de forma híbrida, combinando encontros presenciais e atividades remotas. O projeto foi desenvolvido ao longo do 2º semestre de 2025, com ajustes finais realizados nos últimos encontros da equipe.


# 2. Requisitos  

## Requisitos Funcionais 
Um documento de requisitos de sistema descreve o que o sistema deve fazer, suas funções, regras e limitações. Ele serve como guia para o desenvolvimento, ajudando a garantir que o sistema atenda às necessidades dos usuários e funcione corretamente.

## 2.1 Requisitos funcionais

### RF01 – Cancelar Sessão pelo Cliente: 
O sistema deve permitir que o cliente cancele uma sessão com antecedência mínima de 24 horas. 

### RF02 – Cancelar Sessão pela Esteticista: 
O sistema deve permitir que a esteticista cancele o horário de um cliente, notificando o cliente automaticamente. 

### RF03 – Acessar Agenda Individual: 
O sistema deve permitir que cada esteticista possua login individual, com acesso apenas à sua própria agenda. 

### RF04 – Escolher Esteticista: 
O sistema deve permitir que o cliente escolha a esteticista desejada no momento do agendamento. 

### RF05 – Enviar Notificações e Lembretes: 
O sistema deve enviar notificações/lembretes de consultas aos clientes. 

### RF06 – Integrar com Redes Sociais e Aplicativos: 
O sistema deve permitir integração com redes sociais e whatsapp. 

### RF07– Permitir Autonomia da Administradora: 
O sistema deve permitir que a administradora tenha autonomia para realizar alterações, como ajustes em funcionalidades, regras ou conteúdos. 

### RF08 – Agendar  e Pagar Online: 
O sistema deve permitir agendamento e pagamentos online. 
 
 
## 2.2. Requisitos não funcionais
 
 ### RNF01 – Segurança (Autenticação):
O sistema deve exigir login e senha válidos para acesso, garantindo a proteção
dos dados do usuário.

### RNF02 – Desempenho:
As páginas do sistema devem carregar em no máximo 3 segundos, mesmo em condições de internet limitada.

### RNF03 – Usabilidade:
Um novo usuário deve conseguir realizar um agendamento em até 3 minutos, sem necessidade de treinamento prévio.

### RNF04 – Personalização da Interface:
A interface deve ser personalizada e detalhada, sem comprometer a clareza e a
facilidade de uso.

### RNF05 – Experiência do Usuário:
O sistema deve proporcionar uma experiência agradável e intuitiva, incentivando
o retorno e a fidelização dos clientes.

### RNF06 – Segurança (Dados Sensíveis):
Os dados de pagamento devem ser armazenados e transmitidos de forma
criptografada, seguindo boas práticas de segurança.

### RNF07 – Responsividade:
O sistema deve ser responsivo, funcionando corretamente em dispositivos
desktop e mobile.

# 7. Estudo de viabilidade  

## Viabilidade Técnica:
A viabilidade técnica do Essense Spa demonstra que o projeto pode ser desenvolvido e mantido com os recursos tecnológicos e conhecimentos atualmente disponíveis pela equipe. As tecnologias selecionadas para a construção da plataforma — como HTML, CSS, JavaScript e Bootstrap — são amplamente utilizadas, possuem documentação robusta e contam com grande suporte da comunidade, garantindo estabilidade e facilidade de implementação.

A infraestrutura necessária para o funcionamento do sistema é simples e acessível, exigindo apenas um ambiente de hospedagem padrão, compatível com aplicações web estáticas ou dinâmicas. Além disso, o projeto utiliza ferramentas gratuitas ou de baixo custo, como plataformas de versionamento, bibliotecas front-end e serviços de integração, o que reduz barreiras técnicas e facilita o desenvolvimento.

A equipe envolvida possui domínio suficiente sobre as tecnologias empregadas, sendo capaz de desenvolver novas funcionalidades, realizar ajustes estruturais e aplicar boas práticas de design responsivo e usabilidade. Esse conhecimento técnico garante que o sistema possa ser implementado com qualidade, além de permitir futuras expansões sem comprometer a arquitetura inicial.

Outro ponto positivo é que a plataforma é flexível e pode ser integrada futuramente com APIs, serviços de agendamento online ou sistemas administrativos internos, caso o Essense Spa deseje ampliar suas operações digitais.

Dessa forma, conclui-se que o projeto apresenta alta viabilidade técnica, visto que os recursos tecnológicos necessários são acessíveis, as ferramentas selecionadas são adequadas e a equipe possui capacidade para desenvolver, testar e manter o sistema de forma eficiente.

## Viabilidade Operacional:
A viabilidade operacional do Essense Spa demonstra que o sistema proposto pode ser implementado e utilizado de forma eficiente pelos usuários finais. O funcionamento da plataforma é sustentado por uma estrutura simples, intuitiva e compatível com os recursos disponíveis pela equipe de desenvolvimento e pelos futuros administradores do sistema.

A interface foi planejada para ser clara e de fácil navegação, garantindo que clientes e colaboradores consigam acessar informações, realizar agendamentos e visualizar serviços sem necessidade de treinamento avançado. Além disso, o fluxo de navegação é objetivo, o que reduz a ocorrência de erros operacionais e facilita a adoção do sistema por parte dos usuários.

A equipe responsável pelo projeto possui o conhecimento técnico necessário para realizar atualizações, correções e melhorias contínuas, o que assegura a manutenção operacional da plataforma ao longo do tempo. Os recursos utilizados, como frameworks, bibliotecas e tecnologias de hospedagem, são amplamente conhecidos e possuem suporte constante da comunidade, fortalecendo a estabilidade do sistema.

Por fim, a estrutura operacional do Essense Spa permite fácil integração de novas funcionalidades no futuro, como sistemas de pagamento, gerenciamento de clientes ou módulos adicionais. Isso garante que o sistema possa evoluir conforme a necessidade do negócio sem comprometer seu desempenho.

Dessa forma, conclui-se que o Essense Spa apresenta alta viabilidade operacional, com capacidade de funcionar plenamente dentro do ambiente proposto e atender às demandas dos usuários de maneira eficiente e sustentável.

## Viabilidade Financeira:
A análise de viabilidade financeira do Essense Spa demonstra que o projeto é financeiramente executável com os recursos disponíveis e apresenta bom potencial de retorno. O investimento inicial envolve custos relacionados ao desenvolvimento do site, aquisição de infraestrutura tecnológica mínima, contratação de serviços de hospedagem e possíveis ferramentas complementares para otimizar a experiência do usuário. Esses valores se mantêm dentro de um orçamento acessível e proporcional ao porte do projeto.

Os custos operacionais também são reduzidos, uma vez que grande parte das ferramentas utilizadas no desenvolvimento é gratuita ou possui versões acessíveis. Além disso, a manutenção do sistema exige apenas atualizações periódicas e gerenciamento simples, o que reduz despesas a longo prazo.

Do ponto de vista de retorno financeiro, o Essense Spa tem potencial para gerar receita com a ampliação da visibilidade da marca, atração de novos clientes e otimização dos serviços oferecidos pelo spa. A plataforma pode futuramente incluir funcionalidades pagas, como agendamentos automáticos, venda de produtos ou pacotes exclusivos, aumentando ainda mais a rentabilidade.

Assim, considerando o baixo custo de implementação, a manutenção acessível e o potencial de retorno através do fortalecimento digital da marca, conclui-se que o projeto Essense Spa é financeiramente viável e apresenta perspectivas positivas para expansão futura.

## Viabilidade de Mercado:
A viabilidade de mercado do Essense Spa demonstra que existe uma demanda crescente por serviços de bem-estar, cuidados estéticos e experiências de relaxamento, o que favorece a aceitação e utilização da plataforma proposta. O mercado de spas e clínicas estéticas tem apresentado expansão constante, impulsionado pela busca por qualidade de vida, autocuidado e serviços personalizados. Esse cenário cria um ambiente favorável para a adoção de ferramentas digitais que melhorem a visibilidade e o atendimento ao cliente.

A criação do site Essense Spa contribui diretamente para fortalecer a presença online da marca, ampliando seu alcance e atraindo novos clientes que pesquisam serviços estéticos pela internet. A plataforma também facilita o contato com o público-alvo, permitindo que usuários visualizem serviços, valores, profissionais e agendamentos de forma rápida e acessível, o que aumenta a competitividade do negócio em relação a concorrentes que ainda não possuem presença digital estruturada.

Além disso, o comportamento do consumidor moderno valoriza praticidade, informação imediata e facilidade na contratação de serviços. Nesse contexto, o Essense Spa atende às necessidades do mercado ao oferecer uma interface clara, intuitiva e compatível com dispositivos móveis, alinhada às tendências atuais de consumo digital.

O projeto também acompanha o crescimento das buscas online por tratamentos estéticos, procedimentos de bem-estar e experiências de spa, indicando que há espaço para expansão e fidelização de clientes por meio da plataforma. Com estratégias simples, como divulgação em redes sociais, campanhas de marketing digital e atualizações constantes no site, o Essense Spa possui grande potencial para conquistar maior participação no mercado local.

Diante desse cenário, conclui-se que o projeto apresenta alta viabilidade de mercado, pois responde às demandas atuais dos consumidores, fortalece a presença digital do negócio e amplia significativamente as oportunidades de crescimento e visibilidade da marca.



# 8. Regras de negócio (Modelo Canvas)  

Para compreender de forma clara a proposta de valor do Sistema de Gestão, Essense SPA e como o sistema se integra ao mercado de estética, desenvolvemos o Modelo de Negócio Canvas.
Esse quadro permite visualizar, de maneira objetiva, os principais elementos que sustentam o funcionamento do projeto, incluindo público-alvo, proposta de valor, canais, parcerias, estrutura de custos e fontes de receita.

O Canvas abaixo resume os principais pontos estratégicos do sistema, ajudando a alinhar a solução às necessidades reais das clínicas de estética e garantindo coerência entre o produto, o mercado e as operações:

<img width="1600" height="1131" alt="image" src="https://github.com/user-attachments/assets/f89b118f-3713-4f9a-a6d0-c61483c726c3" />



# 9. Design
A identidade visual do projeto foi desenvolvida para transmitir leveza, bem-estar e confiança, alinhada ao contexto de uma clínica de estética.
A seguir estão os principais elementos que compõem o design do sistema:

**Paleta de Cores**

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

 **Tipografia**  
- Roboto Bold — Títulos  
- Roboto Regular — Corpo de texto  

 **Logo**  
<img width="250" src="https://github.com/user-attachments/assets/5cd46f2f-8d26-4cee-8da1-9b93c9baa8a2">



# 10. Protótipo  

Antes do desenvolvimento, as telas foram planejadas e testadas através de um protótipo navegável no Figma.

**Acesse o protótipo:**  
<a href="https:https://www.figma.com/proto/1Le26sngVuPy61TJzUhlfK/TelasPI?node-id=467-726&t=a7sFhKZQunIZ2Za1-1" target="_blank"><strong>Protótipo no Figma</strong></a>


# 11. Aplicação  

Nesta seção apresentamos a versão final da aplicação hospedada, permitindo navegar e visualizar o ERP funcionando.

**Acessar aplicação:**  
<a href="https://projeto-integrador-fatec-jau.vercel.app/" target="_blank"><strong>Sistema de Gestão: Essense SPA</strong></a>

## Considerações Finais

O desenvolvimento do Sistema de Gestão: Essense SPA representou uma experiência completa de integração entre análise, design, prototipação e implementação.
A solução proposta busca facilitar o dia a dia das clínicas de estética, oferecendo agilidade, organização e ferramentas gerenciais que fortalecem a tomada de decisão.

O projeto permanece em evolução, e melhorias futuras poderão ser incorporadas conforme novas necessidades e feedbacks dos usuários surgirem.


























