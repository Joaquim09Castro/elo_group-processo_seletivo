let currElementId;

const drag = ( event ) => {
  const lead = event.target;
  if ( lead.innerText !== '' ) {
    event.dataTransfer.setData( "text" , lead.innerText );
    event.dataTransfer.setData( "id" , lead.id );
    currElementId = lead.id;
  }

}

const allowDrop = ( event ) => {
  if ( !event.target.dataset.delete ) {
    const draggedElementState = currElementId.split('-')[0].split('_')[1];
    const draggedElementRow = currElementId.split('-')[1].split('_')[1];
    const eventElementState = event.target.id.split('-')[0].split('_')[1];
    const eventElementRow = event.target.id.split('-')[1].split('_')[1];

    if( (draggedElementRow === eventElementRow && draggedElementState === ( parseInt(eventElementState) - 1 ).toString()) )
      event.preventDefault();
  } else {
    event.preventDefault();
  }
  
}

const drop = ( event ) => {
  event.preventDefault();

  const data = event.dataTransfer.getData("text");
  const id = event.dataTransfer.getData("id");

  event.target.innerText = data;
  event.target.classList.add("contentTd");
  event.target.draggable = true;
  document.getElementById(id).innerText = "";
  document.getElementById(id).classList = "";
  document.getElementById(id).draggable = false;
}

module.exports = {
  drag,
  allowDrop,
  drop
};