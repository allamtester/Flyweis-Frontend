import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function AnalyticsCard({ title, value, linkText, color }) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-500",
      line: "stroke-blue-500/20",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-500",
      line: "stroke-green-500/20",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-500",
      line: "stroke-yellow-500/20",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-500",
      line: "stroke-pink-500/20",
    },
  };

  const colorStyle = colorMap[color];

  return (
    <Card className={cn("overflow-hidden relative gap-0 ", colorStyle.bg)}>
      <CardHeader className="">
        <CardTitle className=" text-sm font-medium text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className={cn("absolute inset-0 flex items-center justify-center text-3xl font-bold", colorStyle.text)}>{value}</div>

        {/* <div className="mt-4 flex justify-between items-center"> */}
        <Link to="#" className="text-xs text-gray-600 hover:underline absolute right-3.5 bottom-4">
          {linkText}
        </Link>
        <div className=" w-full top-0 left-0">
          <svg
            className=""
            viewBox="0 0 100 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20 L10 15 L20 18 L30 10 L40 15 L50 5 L60 12 L70 8 L80 16 L90 5 L100 10"
              fill="none"
              className={cn("stroke-1", colorStyle.line)}
            />
          </svg>
        </div>
        {/* </div> */}
      </CardContent>
    </Card>
  );
}
