// Fetch data and populate the list
window.onload = function() {
  fetch('/laptops.json')
    .then(response => response.json())
    .then(data => {
      const laptopList = document.getElementById('laptop-list');
      data.slice(0, 10).forEach(laptop => {
        const li = document.createElement('li');
        li.innerHTML = `
          <h2>${laptop.name}</h2>
          <p>Price: ${laptop.price}</p>
          <p>Processor: ${laptop.processor}</p>
          <p>RAM: ${laptop.ram}</p>
          <p>Storage: ${laptop.storage}</p>
        `;
        laptopList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
};
