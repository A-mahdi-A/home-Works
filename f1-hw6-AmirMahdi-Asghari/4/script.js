const table = document.createElement('table');

for(let i = 1; i <= 5; i++) {

  const row = document.createElement('tr');

  for(let j = 1; j <= 5; j++) {

    const cell = document.createElement('td');

    cell.innerHTML = i + "." + (j);

    row.appendChild(cell);

  }

  table.appendChild(row);

}

document.body.appendChild(table);
