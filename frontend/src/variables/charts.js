export const barChartDataCreditBar = [
  {
    name: "CreditBar",
    data: [2, 10, 7, 5, 5, 10, 12],
  },
];

export const barChartOptionsCreditBar = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#038c62",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#038c62",
            opacity: 0.18,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

export const pieChartOptions = {
  labels: ["Muito Feliz", "Moderadamente Feliz", "Não Feliz"],
  colors: ["#038c62", "#FFC107", "#DC3545"], // Verde, Amarelo, Vermelho
  chart: {
    type: 'pie', // Usando gráfico de pizza
    width: "400px", // Aumentando a largura
    height: "400px", // Mantendo a altura
  },
  legend: {
    show: true, // Exibe a legenda
    position: 'bottom', // Posição da legenda
    horizontalAlign: 'center', // Alinha horizontalmente ao centro
  },
  dataLabels: {
    enabled: true, // Habilita os rótulos das fatias
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      colors: ['#fff'], // Cor do texto
    },
  },
  plotOptions: {
    pie: {
      expandOnClick: true, // Expande a fatia ao clicar
      donut: {
        size: '70%', // Ajusta o tamanho do donut
      },
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: '14px',
    },
  },
};


export const pieChartData = [75, 20, 15];

export const lineChartDataResultLine = [
  {
    name: "Reseultado",
    data: [1, 4, 3, 5, 5, 3,2,5],
  },
];

export const lineChartOptionsResultLine = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#038c62",
    },
  },
  colors: ["#038c62", "#038c62"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#038c62",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "step",
  },
  xaxis: {
    type: "numeric",
    categories: ["MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true, // Alterado para true para mostrar o eixo Y
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: true, // Para mostrar a borda do eixo
      color: "#A3AED0", // Cor da borda do eixo
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#038c62", "#39B8FF"],
      opacity: 0.5,
    },
  },
  color: ["#038c62", "#39B8FF"],
};
