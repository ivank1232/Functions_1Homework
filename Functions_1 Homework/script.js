let btnGetData = document.getElementById("btn1");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let box = document.getElementById("box");
let pageCounter = 1;

function loadPlanets(page){
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then(promise => promise.json())
    .then((response)=>{
        pritnData(response.results, box)
    } );
}
function pritnData(result, box){
    for(let data of result){
        box.innerHTML = "";
        box.innerHTML += `
        <table>
            <tr>
                <th>Name</th>
                <th>${data.name}</th>
            </tr>
            <tr>
                <th>Population</th>
                <th>${data.population}</th>
            </tr>
            <tr>
                <th>Climate:</th>
                <th>${data.climate}</th>
            </tr>
            <tr>
                <th>Gravity:</th>
                <th>${data.gravity}</th>
            </tr>
        </table><br><br>`;
    }
}
btnGetData.addEventListener("click",()=>{
    loadPlanets(pageCounter);
})
btnNext.addEventListener("click",()=>{
    pageCounter++;
    loadPlanets(pageCounter);
})
btnPrev.addEventListener("click", ()=>{
    pageCounter--;
    loadPlanets(pageCounter);
})