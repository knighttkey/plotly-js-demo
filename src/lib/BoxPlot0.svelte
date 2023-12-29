<script>
  import { onMount } from "svelte";
  import { faker } from "@faker-js/faker";
  let inputElement;
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.plot.ly/plotly-2.27.0.min.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      // 在 Plotly.js 載入完成後，初始化盒形圖
      createBoxPlot();
    };
    inputElement.focus();
    document.head.appendChild(script);
  });

  function createBoxPlot() {
    var x = [
      "2023-12-19",
      "2023-12-19",
      "2023-12-19",
      "2023-12-19",
      "2023-12-19",
      "2023-12-19",
      "2023-12-20",
      "2023-12-20",
      "2023-12-20",
      "2023-12-20",
      "2023-12-20",
      "2023-12-20",
    ];
    var trace1 = {
      y: new Array(12000)
        .fill(0)
        .map(() => faker.number.int({ min: 0, max: 100 })),
      x: x,
      name: "Rack01",
      marker: { color: "#3D9970" },
      type: "box",
    };

    var trace2 = {
      y: new Array(12000)
        .fill(0)
        .map(() => faker.number.int({ min: 0, max: 100 })),
      x: x,
      name: "Rack02",
      marker: { color: "#FF4136" },
      type: "box",
    };

    var trace3 = {
      y: new Array(12000)
        .fill(0)
        .map(() => faker.number.int({ min: 0, max: 100 })),
      x: x,
      name: "Rack03",
      marker: { color: "#FF851B" },
      type: "box",
    };
    var trace1Text = {
      x: [20],
      y: [80],
      text: ["filled triangle"],
      mode: "text",
    };

    var data = [trace1, trace2, trace3];
    // console.log('data__', data)
    var layout = {
      yaxis: {
        title: "Rack Temperature",
        zeroline: false,
      },
      boxmode: "group",
      shapes: [
        {
          type: "line",
          xref: "paper",
          x0: 0,
          y0: 80.0,
          x1: 1,
          y1: 80.0,
          line: {
            color: 'red',
            width: 1,
            dash: "solid",
          },
          label: {
            text: "Max",
            textposition: "top right",
            font: {
                color:'red'
            },
          },
        },
        {
          type: "line",
          xref: "paper",
          x0: 0,
          y0: 20.0,
          x1: 1,
          y1: 20.0,
          line: {
            color: 'blue',
            width: 1,
            dash: "solid",
          },
          label: {
            text: "Min",
            textposition: "top right",
            font: {
                color:'blue'
            },
          },
        },
      ],
    };

    Plotly.newPlot(inputElement, data, layout);
  }
</script>

<div id="multiBoxPlot" bind:this={inputElement}></div>

<style>
  #multiBoxPlot {
    width: 600px;
    height: 400px;
  }
</style>
