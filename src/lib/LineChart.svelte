<script>
  import { onMount } from "svelte";
  let inputElement;
  import pduData from './../../pdu_data.json'
  console.log('pduData::: ', pduData[0][0]);
  let firstData = pduData[0][0]
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

    const generate = () => {
      let bbb = firstData.configList.map((item)=>{
        return {
          x:firstData.labelList,
          y:item.data,
          type:"scatter",
          name:item.label
        }
      })
      console.log('bbb::: ', bbb);
      return bbb
    }

    var layout = {
      legend: {
        itemwidth: 10,
        valign: "top",
      },
      yaxis: {
        title: "Rack Temperature",
        zeroline: false,
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
          y0: 60.0,
          x1: 1,
          y1: 60.0,
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
          y0: 15.0,
          x1: 1,
          y1: 15.0,
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
    var data = generate();
    Plotly.newPlot(inputElement, data, layout);
  }
</script>

<div id="lineChart" bind:this={inputElement}></div>

<style>
  #lineChart {
    width: 800px;
    height: 480px;
  }
</style>
