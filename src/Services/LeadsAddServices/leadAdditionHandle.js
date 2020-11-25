const addLead = ([title, phone, email], [checkAll, rpaCheck, digitalProductsCheck, analyticsCheck, bpmCheck]) => {
  const checkList = [rpaCheck, digitalProductsCheck, analyticsCheck, bpmCheck];
  let output = {};
  if (!checkAll.checked) {
    output = {
      title,
      phone,
      email,
      oportunities: checkList.filter(item => item.checked ? item.name : null)
    }
  } else {
    output = {
      title,
      phone,
      email,
      oportunities: checkList.map(item => item.name)
    }
  }
  return output;
}

export default addLead