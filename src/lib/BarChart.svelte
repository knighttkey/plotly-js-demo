<script>
  import { onMount } from "svelte";
  let inputElement;
  import pduData from "./../../pdu_data.json";
  console.log("pduData::: ", pduData[0][0]);
  let firstData = pduData[0][0];
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.plot.ly/plotly-2.27.0.min.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      createBoxPlot();
    };
    inputElement.focus();
    document.head.appendChild(script);
  });

  function createBoxPlot() {
    const generate = () => {
      let bbb = firstData.configList.map((item) => {
        return {
          x: firstData.labelList,
          y: item.data,
          type: "bar",
          name: item.label,
        };
      });
      console.log("bbb::: ", bbb);
      return bbb;
    };

    var data = generate();

    var layout = {
      barmode: "group",
      legend: {
        itemwidth: 10,
        valign: "top",
      },
      xaxis:{
        font: {
          size:12
        },
        tickfont:{
          size:10
        }
      },
      shapes: [
        {
          type: "line",
          xref: "paper",
          x0: 0,
          y0: 22.0,
          x1: 1,
          y1: 22.0,
          line: {
            color: "red",
            width: 1,
            dash: "solid",
          },
          label: {
            text: "Max",
            textposition: "top right",
            font: {
              color: "red",
            },
          },
        },
        {
          type: "line",
          xref: "paper",
          x0: 0,
          y0: 7.0,
          x1: 1,
          y1: 7.0,
          line: {
            color: "blue",
            width: 1,
            dash: "solid",
          },
          label: {
            text: "Min",
            textposition: "top right",
            font: {
              color: "blue",
            },
          },
        },
      ],
    };
    Plotly.newPlot(inputElement, data, layout);
  }
</script>

<div id="barChart" bind:this={inputElement}></div>

<style>
  #barChart {
    width: 800px;
    height: 480px;
  }
</style>
