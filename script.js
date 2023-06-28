// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (response) {
            console.log(response);
            let sortedAstronauts = response.sort(function(a, b){
               return b.hoursInSpace - a.hoursInSpace
            });
            const container = document.getElementById("container");
            container.innerHTML = `
            <h2>Total Astronauts: ${sortedAstronauts.length}
            `
            for (let i = 0; i < sortedAstronauts.length; i++) {
                // console.log(response[i]);
                container.innerHTML +=`
                <div class="astronaut">
                    <div class="bio">
                        <h3>${sortedAstronauts[i].firstName} ${sortedAstronauts[i].lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${sortedAstronauts[i].hoursInSpace}</li>
                            <li>Active: ${sortedAstronauts[i].active}</li>
                            <li>Skills: ${sortedAstronauts[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src= "${sortedAstronauts[i].picture}">
            </div>`;
            }

                // const container = document.getElementById("container");
                // function printSkills(skills) {
                //     for (let i = 0; i < skills.length; i++) {
                //         console.log(skills[i]);
                //     };
                // };
                // container.addEventListener("load", function () {
                //     container.innerHTML = `
                // <div class ="astronaut">
                //     <div class = "bio">
                //         <h3>${json[0].firstName} ${json[0].lastName}</h3>
                //         <ul>
                //             <li>${json[0].hoursInSpace}</li>
                //             <li>${json[0].active}</li>
                //             <li>${printSkills(json[0].skills)}</li>
                //         </ul>
                //     </div>
                //     <img class = "avatar" src = ${json[0].picture}
                // </div>`
                // });
            });
    });
});