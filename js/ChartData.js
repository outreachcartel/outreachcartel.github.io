var ctx = document.getElementById("myChart");
var chart = new Chart.Line(ctx,{
  type: 'bar',
  color: 'none',
  data: {
    labels : ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      datasets: [
        {
        label: "My First",
        fill: false,
        pointHoverRadius: 4,
        borderColor: 'red',
        data: [455, 440, 447,350, 480, 400, 100]
      },
      {
        label: "My Second",
        fill: false,
        pointHoverRadius: 4,
        borderColor: 'blue',
        data: [130, 240, 200, 100, 210, 15, 10]
      }
    ]
   },
  options:{
    responsive: true,
    responsiveAnimationDuration: 400
  }
})


var ctx = document.getElementById("device").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Mobile","Tablet","Desktop"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
      ],
      data: [7240, 1408, 4800]
    }]
  }
});

var ctx = document.getElementById("mobile").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Android","IOS","Windows","BlackBerry","Tizen"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f"
      ],
      data: [3090, 1410, 941,747,255]
    }]
  }
});

var ctx = document.getElementById("desktop").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Windows","Mac","Linux","Solaris"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
      ],
      data: [790, 510, 221,147]
    }]
  }
});
var ctx = document.getElementById("gender").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["male","female"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
      ],
      data: [4790, 3410,]
    }]
  }
});



var ctx = document.getElementById("device1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Mobile","Tablet","Desktop"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
      ],
      data: [7240, 1408, 4800]
    }]
  }
});

var ctx = document.getElementById("mobile1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Android","IOS","Windows","BlackBerry","Tizen"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f"
      ],
      data: [3090, 1410, 941,747,255]
    }]
  }
});

var ctx = document.getElementById("desktop1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Windows","Mac","Linux","Solaris"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
      ],
      data: [790, 510, 221,147]
    }]
  }
});
var ctx = document.getElementById("gender1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["male","female"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
      ],
      data: [4790, 3410,]
    }]
  }
});
