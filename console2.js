

// const myChart = document.getElementById('myChart').textContent('2d');

// let myGraph = new Graph(myChart, {
//     type:'bar'
// })



//  const ctx = document.getElementById('myChart');    
//  new Chart(ctx, {
//    type: 'bar',
//    data: {
//      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//      datasets: [{
//        label: '# of Votes',
//        data: [12, 19, 3, 5, 2, 3],
//        borderWidth: 1
//      }]
//    },
//    options: {
//      scales: {
//        y: {
//          beginAtZero: true
//        }
//      }
//    }
//   });

const myChart1 = document.getElementById('myChart1').getContext('2d')
let graph1 = new Chart(myChart1, {
    type: 'bar',
    data: {
        labels: [
            "2020",
            "2021",
            "2022",
        ],
        datasets: [
            {
                label: "Cotisations en millier",
                data: [62.750, 18.5, 9.750]
            }
        ],
        Option: {
           titte: {
               display: true,
               text: "Evolution des cotisations",
               fontSize: 24,
           },
        },

    },
})

 const graph = document.getElementById('graph').getContext('2d')
 let myChart = new Chart(graph, {
     type: 'line',
     data: {
         labels: [
             "2020",
             "2021",
             "2022",
         ],
         datasets: [
             {
                 label: "Cotisations en millier",
                 data: [62.750, 18.5, 9.750]
             }
         ],
         Option: {
            titte: {
                display: true,
                text: "Evolution des cotisations",
                fontSize: 24,
            },
         },

     },
 });




//  const myChart1 = document.getElementById('myChart1').getContext('2d');
//  let graph1 = new Chart(myChart, {
//      type: 'bar',
//      data: {
//          labels: [
//              "2020",
//              "2021",
//              "2022",
//          ],
//          datasets: [
//              {
//                  label: "Cotisations en millier",
//                  data: [62.750, 18.5, 9.750]
//              }
//          ],
//          Option: {
//             titte: {
//                 display: true,
//                 text: "Evolution des cotisations",
//                 fontSize: 24,
//             },
//          },

//      },
//  });
 


var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
  


  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });