
function test(){
  const ativo = document.getElementsByClassName('ativo')[0];
  const desativo = document.getElementsByClassName('desativo')[0];
  ativo.className='desativo';
  desativo.className = 'ativo';
}