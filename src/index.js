window.addEventListener("DOMContentLoaded", () => {
    let tableData = [
        {id: 1, location: "Region", previousPopulation: 3283802, currentPopulation: 3283802, totalPopulation: 33944},
        {id: 2, location: "Cities", previousPopulation: undefined, currentPopulation: undefined, totalPopulation: undefined},
        {id: 3, location: "Andijan", previousPopulation: 463205, currentPopulation: 480800, totalPopulation: 103.8},
        {id: 4, location: "Khanabad", previousPopulation: 44407, currentPopulation: 45800, totalPopulation: 103.15},
        {id: 5, location: "Districts", previousPopulation: undefined, currentPopulation: undefined, totalPopulation: undefined},
        {id: 6, location: "Altinkul", previousPopulation: 186605, currentPopulation: 192100, totalPopulation: 102.7},
        {id: 7, location: "Andijan", previousPopulation: 276818, currentPopulation: 286100, totalPopulation: 102.1},
        {id: 8, location: "Balikchi", previousPopulation: 208746, currentPopulation: 215800, totalPopulation: 103.4},
        {id: 9, location: "Bustоn", previousPopulation: 75404, currentPopulation: 77900, totalPopulation: 103.3},
        {id: 10, location: "Bulakbashi", previousPopulation: 148199, currentPopulation: 153100, totalPopulation: 102.0},
        {id: 11, location: "Jalakuduk", previousPopulation: 193150, currentPopulation: 198800, totalPopulation: 102.9},
        {id: 12, location: "Izbaskan", previousPopulation: 247402, currentPopulation: 255300, totalPopulation: 102.0},
        {id: 13, location: "Ulugnоr", previousPopulation: 62276, currentPopulation: 63800, totalPopulation: 101.9},
        {id: 14, location: "Kurgantepe", previousPopulation: 223914, currentPopulation: 230400, totalPopulation: 101.8},
        {id: 15, location: "Asaka", previousPopulation: 343273, currentPopulation: 35500, totalPopulation: 102.1},
        {id: 16, location: "Marhamat", previousPopulation: 180398, currentPopulation: 186400, totalPopulation: 102.1},
        {id: 17, location: "Shahrikhan", previousPopulation: 312995, currentPopulation: 324400, totalPopulation: 102.3},
        {id: 18, location: "Pahtaabad", previousPopulation: 201565, currentPopulation: 208700, totalPopulation: 102.3},
        {id: 19, location: "Khudjaabad", previousPopulation: 115445, currentPopulation: 120000, totalPopulation: 103.9},
    ];

    let tableBody = document.querySelector("#table tbody");

    tableData.forEach(item => {
        let tr = document.createElement("tr");

        let locationTd = document.createElement("td");
        locationTd.innerHTML = item.location;
        tr.appendChild(locationTd);

        let previousPopulationTd = document.createElement("td");
        previousPopulationTd.innerHTML = item.previousPopulation !== undefined ? item.previousPopulation : "N/A";
        tr.appendChild(previousPopulationTd);

        let currentPopulationTd = document.createElement("td");
        currentPopulationTd.innerHTML = item.currentPopulation !== undefined ? item.currentPopulation : "N/A";
        tr.appendChild(currentPopulationTd);

        let totalPopulationTd = document.createElement("td");
        totalPopulationTd.innerHTML = item.totalPopulation !== undefined ? item.totalPopulation : "N/A";
        tr.appendChild(totalPopulationTd);

        let populationGrowthTd = document.createElement("td");
        let populationGrowth = item.previousPopulation !== undefined && item.currentPopulation !== undefined ?
            ((item.currentPopulation - item.previousPopulation) / item.previousPopulation * 100).toFixed(2) + "%" : "N/A";
        populationGrowthTd.innerHTML = populationGrowth;
        tr.appendChild(populationGrowthTd);

        tableBody.appendChild(tr);
    });


    let navbarMenuIcon = document.getElementById("navbar_icon");


    navbarMenuIcon.addEventListener("click",() =>{
        
        navbarMenuIcon.classList.toggle = "click"

    })



});