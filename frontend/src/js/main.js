document.addEventListener('DOMContentLoaded', () => {
    const urlPrefix = "http://localhost:3000/";

    const getData = async (url) => {
        return (await fetch(url)).json();
    } 

    const table = document.getElementById("table-attributes");

    getData(`${urlPrefix}attributes`).then((attributes) => {
        const attr = `<tr class="table-head-row">${attributes.map((el) => `<th>${el}</th>`).join("\n")}<tr>`;
        
        getData(`${urlPrefix}contragents`).then((contragents) => {
            const contr = contragents.map((data) => `<tr class="table-content-row">${Object.values(data).map((el) => `<td>${el}</td>`)}</tr>`).join("\n");

            table.innerHTML = attr + contr;
        });
    });
})