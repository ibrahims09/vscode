const infoContainer = document.getElementById('infoContainer');
const foodContainer = document.getElementById('foodContainer');
fetch("info.json")
  .then(response => response.json())
  .then(info => {
    info.forEach(item => {
        const infoItem = document.createElement('p');
        const foodItem = document.createElement('p');
        foodItem.textContent = `${item.eventFood}`; 
        infoItem.textContent = `${item.startInfo}`; 
        foodContainer.appendChild(foodItem);
        infoContainer.appendChild(infoItem);
    });


  })
  .catch(error => console.error('Error fetching data:', error));


  const dataContainer = document.getElementById('dataContainer');

  fetch("data.json")
    .then(response => response.json())
    .then(info => {
      info.forEach(item => {
          const dataItem = document.createElement('p');
          dataItem.textContent = `${item.eventName} - ${item.start} - ${item.end} ${item.eventInfo}`; 
          dataContainer.appendChild(dataItem);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
  

