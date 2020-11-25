const checkboxAllInteraction = (array) => {
  let output = true;
  array.map(({ checked }) => {
    if (!checked)
      output = false;
    return "";
  })
  return output;
}

export default checkboxAllInteraction