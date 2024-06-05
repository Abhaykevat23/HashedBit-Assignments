async function logMovies() {
    const response = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
    const Ipldata = await response.json();
    // console.log(Ipldata);
    let data=Ipldata[0];
    // console.log(data);
    Ipldata.forEach(data => {
        let showInTable ="<tr> <td>" + data.No + "</td> <td>" + data.Team + "</td> <td>" + data.Matches + "</td> <td>" + data.Won + "</td> <td>" + data.Lost + "</td> <td>" + data.Tied + "</td> <td>" + data.NRR + "</td> <td>" + data.Points + "</td> </tr>";
    
        document.getElementById("table-body").innerHTML+=showInTable;
    });
}
logMovies();
