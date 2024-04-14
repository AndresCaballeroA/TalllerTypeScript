function mostrarSeries(series) {
    var table = document.createElement('table');
    table.classList.add('table');
    var headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = '<th>ID</th><th>Nombre</th><th>Canal</th><th>Temporadas</th>';
    series.forEach(function (serie) {
        var row = table.insertRow();
        row.classList.add('data-row'); // Añadir clase a la fila de datos
        row.innerHTML = "<td>".concat(serie.id, "</td><td class='name'>").concat(serie.name, "</td><td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td>");
    });
    var totalSeasons = series.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    var averageRow = table.insertRow();
    averageRow.innerHTML = "<td colspan=\"3\"><strong>Promedio de temporadas:</strong></td><td>".concat(averageSeasons.toFixed(2), "</td>");
    var seriesTable = document.getElementById("seriesTable");
    if (seriesTable) {
        seriesTable.appendChild(table);
    }
    else {
        console.error("No se encontró ningún elemento con el ID 'seriesTable'.");
    }
}
var series = [
    { id: 1, name: "Breaking Bad", channel: "AMC", seasons: 5 },
    { id: 2, name: "Orange Is the New Black", channel: "Netflix", seasons: 6 },
    { id: 3, name: "Game of Thrones", channel: "HBO", seasons: 7 },
    { id: 4, name: "The Big Bang Theory", channel: "CBS", seasons: 12 },
    { id: 5, name: "Sherlock", channel: "BBC", seasons: 4 },
    { id: 6, name: "A Very English Scandal", channel: "BBC", seasons: 2 }
];
mostrarSeries(series);
