(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('second'));

  // 指定图表的配置项和数据
  var option = {
    legend: {
      top: 'bottom'
    },
    title: {
      left: 'center',
      text: 'patients'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 42, name: 'normal' },
          // { value: 32, name: 'normal' },
          { value: 32, name: 'not sure' },
          // { value: 30, name: 'rose 4' },
          // { value: 28, name: 'rose 5' },
          // { value: 26, name: 'rose 6' },
          // { value: 22, name: 'rose 7' },
          { value: 18, name: 'onset' }
        ]
      }
    ]
  };
  myChart.setOption(option);
})();
(function () {
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('third'));

  var option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: 'Spectrogram'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'time',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20
      },
      {
        start: 0,
        end: 20
      }
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {},
        data: data
      }
    ]
  };
  myChart.setOption(option);
})();


(function () {

  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    };
  }
  let data = [];
  let now = new Date(1997, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('forth'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      left: 'center',
      text: 'Time Series Charts'
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear() +
          ' : ' +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        showSymbol: false,
        data: data
      }
    ]
  };
  setInterval(function () {
    for (var i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }
    myChart.setOption({
      series: [
        {
          data: data
        }
      ]
    });
  }, 1000);
  myChart.setOption(option);
})();




(function () {

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('judge'));

  // 指定图表的配置项和数据
  // 初始状态为红色
  var color = 'red';

  // 创建初始的红色点
  var data = [{
    name: 'Dot',
    value: [0, 0, color]
  }];

  // 设置 ECharts 的配置项
  var option = {
    series: [{
      type: 'scatter',
      symbolSize: 20,
      data: data
    }],
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    xAxis: {
      show: false,
      min: -1,
      max: 1
    },
    yAxis: {
      show: false,
      min: -1,
      max: 1
    }
  };

  // 绑定点击事件
  myChart.on('click', function (params) {
    if (color === 'red') {
      color = 'green';
    } else {
      color = 'red';
    }

    // 更新点的颜色
    data[0].value[2] = color;

    // 刷新图表
    myChart.setOption(option);
  });
  myChart.setOption(option);
})(); 