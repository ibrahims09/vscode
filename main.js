function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
  
 }

 const mylist = docement.getelementBYid("mylist");
 async function getlist(){
  const response = await fetch ("data.json");
  if (response.ok){

    const list =await response.json();
    console.log(list)
    list.foreach(function(list){
      const listelement = document.createElement("i");
      listelement.innerhtml = listitem.titel;
      mylist.appendchild(listelement);
      const listBtn = document.createElement('button');
      listBtn.textContent = "cross off";
      listelement.appendchild(listBtn);
      
    }
  }
 }

