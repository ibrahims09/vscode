

 const mylist = document.getElementById("mylist");
 async function getlist(){
  const response = await fetch ("data.json");
  if (response.ok){

    const list  = await response.json();
  }}
