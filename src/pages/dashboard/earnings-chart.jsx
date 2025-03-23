import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function EarningsChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    maintainAspectRatio: false,
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Earnings",
        data: [5000, 8000, 6000, 9000, 7500, 12000, 10000],
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
      },
    ],
  };

  return (
    <div className="h-[100px]">
      <Line options={options} data={data} />
    </div>
  );
}
