const addLead = (leads, setLeads, setDisableAddLead) => {
  const newLead = {
    title: document.getElementById("lead-name").value,
    state: 1
  };

  setLeads([...leads, newLead]);
  document.getElementById("lead-name").value = "";
  setDisableAddLead(true);
}

export default addLead