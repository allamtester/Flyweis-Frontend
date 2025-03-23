import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function CompanyGrowthChart() {
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
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#f0f0f0",
        },
      },
    },
    maintainAspectRatio: false,
  };

  const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"];

  const data = {
    labels,
    datasets: [
      {
        label: "Month 1",
        data: [65, 59, 80, 81, 56, 55, 120],
        backgroundColor: "#4F46E5",
      },
      {
        label: "Month 2",
        data: [28, 48, 40, 19, 86, 27, 123],
        backgroundColor: "#10B981",
      },
      {
        label: "Month 3",
        data: [45, 25, 55, 72, 45, 65, 111],
        backgroundColor: "#F59E0B",
      },
      {
        label: "Month 4",
        data: [45, 25, 65, 82, 45, 65, 100],
        backgroundColor: "#ADD8E6",
      },
    ],
  };

  return (
    <div className="h-[300px]">
        <Bar options={options} data={data} className="h-full"  />
    </div>
  );
}
