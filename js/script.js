
document.addEventListener("DOMContentLoaded", () => {

  const esteticistaSelect = document.getElementById("esteticista");
  const dataInput = document.getElementById("data-agendamento");
  const horaSelect = document.getElementById("hora-agendamento");

  // Horários por esteticista
  const horarios = {
    ana: ["08:00", "09:00", "10:00", "14:00", "15:00"],
    carla: ["09:00", "11:00", "13:00", "16:00"],
    julia: ["10:00", "12:00", "14:00", "17:00"]
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

  // Submit
  document.getElementById("formAgendamento").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Consulta marcada com sucesso!");
  });

});
