<script>
  import { onMount } from "svelte";
  import { faker } from "@faker-js/faker";
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
          x:firstData.labelList.map((i)=>{
            return '2023-11-28'
          }),
          y:item.data,
          type:"box",
          name:item.label,
          marker: { color: item.color },
        }
      })
      console.log('bbb::: ', bbb);
      return bbb
    }


    // var data = [trace1, trace2, trace3];
    var data = generate();
    // console.log('data__', data)
    var layout = {
      yaxis: {
        title: "Rack Temperature",
        zeroline: false,
        maxallowed:40,
        minallowed:0
      },
      legend: {
        // x: 1,
        // y: 1,
    // xanchor: 'top',
        itemwidth:10,
        // orientation:'h',plotlu
        // yanchor:'middle'
        // yref:'paper',
        valign:'top'
      },
      boxmode: "group",
      shapes: [
        {
          type: "line",
          xref: "paper",
          x0: 0,
          y0: 33.0,
          x1: 1,
          y1: 33.0,
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
    width: 800px;
    height: 480px;
  }
</style>
