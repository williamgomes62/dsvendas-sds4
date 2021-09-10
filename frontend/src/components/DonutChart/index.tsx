import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[],
  series: number[]
}

const DonutChart = () => {

  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  // Para ser executado uma unica vez
  // quando mudar o estado das variaveis observadas, ele executa mais uma vez
  useEffect(() => {
    // Assincrono e deve ser feita a chamada da API uma unica vez
    // cria as listas separadas de labels e series
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then(response => {
        const data = response.data as SaleSum[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        setChartData({ labels: myLabels, series: mySeries });
      });
  }, []);



  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;