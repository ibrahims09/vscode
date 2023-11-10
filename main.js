

 const mylist = document.getelementByid("mylist");
 async function getlist(){
  const response = await fetch ("data.json");
  if (response.ok){

    const list  = await response.json();
    console.log(list)
    list.foreach(function(list){
      const listelement = document.createElement("i");
      listelement.innerhtml = listitem.titel;
      mylist.appendchild(listelement);
      const listBtn = document.createElement('button');
      listBtn.textContent = "cross off";
      listelement.appendchild(listBtn);

      listBtn.addEventListener('click'), function(){
        if (listitem.complete === false){
          listitem.complete = true;
          console.log(listitem.complete);
          listelement.style.textDecoration = "none";
          listBtn.textContent = 'cross off';
        }
      }
      })
      
    }
  }
 

