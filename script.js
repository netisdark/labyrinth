



function game(){
    
var i,j;
for(i=0;i<11;i++){
  const div = document.createElement('div');
  if(i % 2 === 0) { div.setAttribute('class','row justify-center'); } else {  div.setAttribute('class','horizontal justify-center'); }
  for(j=0;j<11;j++){
    const subdiv = document.createElement('div');
    if( i % 2 === 0 ){
      if( j % 2 === 0){
        subdiv.setAttribute('class','grid-box rounded-md');
      }
      else{
        subdiv.setAttribute('class','grid-box border')
      }
    }
    else{
      if( j % 2 === 0){
        subdiv.setAttribute('class','grid-box');
      }
      else{
        subdiv.setAttribute('class','grid-box hid');
      }
    }
    subdiv.setAttribute('id',i+j);
    div.appendChild(subdiv);
  }
document.getElementById('container').appendChild(div);

}
} 

function message(message1, message2){
  document.getElementById('hidden').removeAttribute('class');
  document.getElementById('hidden').setAttribute('class','max-w-xl w-full mx-auto bg-gray-900 rounded-xl overflow-hidden');
  document.getElementById('message1').innerHTML = message1;
  document.getElementById('message2').innerHTML = message2;

}