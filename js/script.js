
document.addEventListener("DOMContentLoaded", () => {

  const esteticistaSelect = document.getElementById("esteticista");
  const dataInput = document.getElementById("data-agendamento");
  const horaSelect = document.getElementById("hora-agendamento");

  // Horários por esteticista
  const horarios = {
    daniele: ["08:00", "09:00", "10:00", "14:00", "15:00"],
    eliana: ["09:00", "11:00", "13:00", "16:00"],
    silvia: ["10:00", "12:00", "14:00", "17:00"]
  };

  // Impedir datas anteriores
  const hoje = new Date().toISOString().split("T")[0];
  dataInput.min = hoje;

  // Ativa a data quando escolher esteticista
  esteticistaSelect.addEventListener("change", () => {
    dataInput.disabled = false;
    horaSelect.disabled = true;
    horaSelect.innerHTML = `<option disabled selected>Selecione um horário</option>`;
  });

  // Ativa horarios quando escolher a data
  dataInput.addEventListener("change", () => {
    horaSelect.disabled = false;
    horaSelect.innerHTML = "";

    const selecionada = esteticistaSelect.value;

    horarios[selecionada].forEach(h => {
      horaSelect.innerHTML += `<option>${h}</option>`;
    });
  });
});

document.getElementById("formAgendamento").addEventListener("submit", function (e) {
    e.preventDefault();

    // Capturar dados pessoais
    const nome = document.querySelector("input[placeholder='Seu Nome']").value;
    const celular = document.querySelector("input[placeholder='Seu Celular (WhatsApp)']").value;
    const email = document.querySelector("input[type=email]")?.value || "Não informado";
    const cpf = document.querySelector("input[placeholder='Seu CPF']")?.value || "Não informado";

    // Capturar dados do agendamento
    const procedimento = document.querySelector("select.form-select").value;
    const esteticista = document.getElementById("esteticista").selectedOptions[0].textContent;
    const data = document.getElementById("data-agendamento").value.split("-").reverse().join("/");
    const hora = document.getElementById("hora-agendamento").value;

    // Preencher modal
    document.getElementById("confNome").textContent = nome;
    document.getElementById("confCelular").textContent = celular;
    document.getElementById("confEmail").textContent = email;
    document.getElementById("confCPF").textContent = cpf;

    document.getElementById("confProcedimento").textContent = procedimento;
    document.getElementById("confEsteticista").textContent = esteticista;
    document.getElementById("confData").textContent = data;
    document.getElementById("confHora").textContent = hora;

    // Abrir modal
    const modal = new bootstrap.Modal(document.getElementById("modalConfirmacao"));
    modal.show();
});

