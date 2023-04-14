import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const Charts = ({ seriesData, dataColors }) => {
  const widgetsColors = getChartColorsArray(dataColors)
  const options = {
    chart: {
      width: 140,
      type: "area",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1.5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100],
      },
    },
    colors: widgetsColors,
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...seriesData]}
        type="area"
        width="140"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default Charts;
