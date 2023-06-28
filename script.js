// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (repsonse) {
        repsonse.json().then(function (json) {
            console.log(json);
            let sortedAstronauts = json.sort(function (a, b) {
                return b.hoursInSpace - a.hoursInSpace
            });
            console.log(sortedAstronauts);
            // let greenColor = function(sortedAstronauts.active) {
            //     if(sortedAstronauts.active){ add script style to change color}
            // }

            const container = document.getElementById("container");
            container.innerHTML = `
            <h2>Total Astronauts: ${sortedAstronauts.length}
            `
            for (let i = 0; i < sortedAstronauts.length; i++) {
                container.innerHTML += `
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
        })
    })
})


//     .then(function (response) {
//         response.json().then(function (response) {
//             console.log(response);
//             let sortedAstronauts = response.sort(function (a, b) {
//                 return b.hoursInSpace - a.hoursInSpace
//             });
//             // function colorGreen (sortedAstronauts) {
//             //     if(sortedAstronauts.active) {
//             //         create a style tag to change text to green
//             //     }}
//             const container = document.getElementById("container");
//             container.innerHTML = `
//             <h2>Total Astronauts: ${sortedAstronauts.length}
//             `
//             for (let i = 0; i < sortedAstronauts.length; i++) {
//                 // console.log(response[i]);
//                 container.innerHTML += `
//                 <div class="astronaut">
//                     <div class="bio">
//                         <h3>${sortedAstronauts[i].firstName} ${sortedAstronauts[i].lastName}</h3>
//                         <ul>
//                             <li>Hours in Space: ${sortedAstronauts[i].hoursInSpace}</li>
//                             <li>Active: ${sortedAstronauts[i].active}</li>
//                             <li>Skills: ${sortedAstronauts[i].skills.join(", ")}</li>
//                         </ul>
//                     </div>
//                     <img class="avatar" src= "${sortedAstronauts[i].picture}">
//             </div>`;
//             }
//             // .then(function(response){
//             // return response.json()
//             // // return console.log(response)
//             // }).then(function(repsonse){
//             //     console.log(repsonse);
//             //
//             // const container = document.getElementById("container");
//             // function printSkills(skills) {
//             //     for (let i = 0; i < skills.length; i++) {
//             //         console.log(skills[i]);
//             //     };
//             // };
//             // container.addEventListener("load", function () {
//             //     container.innerHTML = `
//             // <div class ="astronaut">
//             //     <div class = "bio">
//             //         <h3>${json[0].firstName} ${json[0].lastName}</h3>
//             //         <ul>
//             //             <li>${json[0].hoursInSpace}</li>
//             //             <li>${json[0].active}</li>
//             //             <li>${printSkills(json[0].skills)}</li>
//             //         </ul>
//             //     </div>
//             //     <img class = "avatar" src = ${json[0].picture}
//             // </div>`
//             // });
//         });
//     });
// });