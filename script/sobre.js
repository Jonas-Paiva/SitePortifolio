
function test(buttonN){

  const p = document.getElementById(`${buttonN}`);

  const ativo = document.getElementsByClassName('ativo')[0];

  ativo.className='desativo';
  
  p.className ='ativo';
}

//o botão envia um a valor quando clicado para avisar qual texto teve aparecer
// de acordo com o  botão 'value'  ativar o texto com a o id correspondente.