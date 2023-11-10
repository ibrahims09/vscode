 const mylist = document.getElementById("mylist");
 const listContainer = document.getElementById('list-container')

 async function getlist(){
  const response = await fetch ("data.json");
  if (response.ok){
    console.log('lyckat');
    const json  = await response.json();
   json.forEach(list => rendermyList(list));
  }else{
    console.log(response.status);
  }
} 


function rendermyList(list){
  const listItem = document.createElement('li');
  listItem.textContent = `${list.eventName || ''} - ${list.start || ''} - ${list.end || ''} - ${list.eventInfo || ''}`;

listContainer.appendChild(listItem);
}

getlist();