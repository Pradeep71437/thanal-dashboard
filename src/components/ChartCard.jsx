import React from "react";
import * as LucideIcons from "lucide-react";

const ChartCard = ({
  title,
  dateRange,
  data,
  color = "",
  type = "line",
  icon,
  iconColor,
}) => {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue;

  // Chart dimensions
  const chartWidth = 500;
  const chartHeight = 200;
  const padding = 6;
  const leftPadding = 0; // More space for Y-axis labels

  // Calculate points for line chart
  const points = data.map((point, index) => {
    const x =
      (index / (data.length - 1)) * (chartWidth - leftPadding - padding) +
      leftPadding;
    const y =
      chartHeight -
      padding -
      ((point.value - minValue) / range) * (chartHeight - 2 * padding);
    return { x, y, value: point.value, day: point.day };
  });

  // Create path for line chart
  const pathData = points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }
    // Create smooth curves using quadratic bezier curves
    const prevPoint = points[index - 1];
    const controlX = (prevPoint.x + point.x) / 2;
    return `${path} Q ${controlX} ${prevPoint.y} ${point.x} ${point.y}`;
  }, "");

  // Create area path for gradient fill
  const areaPath = `${pathData} L ${points[points.length - 1].x} ${
    chartHeight - padding
  } L ${points[0].x} ${chartHeight - padding} Z`;

  // Grid lines and Y-axis values
  const gridLines = [];
  const yAxisValues = [];
  for (let i = 0; i <= 4; i++) {
    const y = padding + (i * (chartHeight - 2 * padding)) / 4;
    const value = maxValue - (range * i) / 4;
    gridLines.push(y);
    yAxisValues.push(value);
  }

  // Color mapping
  const colorMap = {
    "bg-yellow-200": {
      stroke: "#f59e0b",
      fill: "rgba(245, 158, 11, 0.1)",
      gradient: "url(#yellowGradient)",
      dot: "#f59e0b",
    },
    "bg-green-200": {
      stroke: "#10b981",
      fill: "rgba(16, 185, 129, 0.1)",
      gradient: "url(#greenGradient)",
      dot: "#10b981",
    },
  };

  const colors = colorMap[color] || colorMap["bg-yellow-200"];

  // Format value for display
  const formatValue = (value) => {
    if (typeof value === "number" && value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return Math.round(value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div
            className={`w-7 h-7  ${color} rounded flex items-center justify-center p-1`}
          >
            {title === "Lead activity" && <LucideIcons.BarChart />}
            {title === "Revenue trend" && <LucideIcons.TrendingUp />}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {dateRange}
        </span>
      </div>

      {/* Chart Container */}
      <div className="relative">
        {/* Y-axis labels */}
        {/* <div className="absolute left-0 top-0 h-full flex flex-col justify-between">
          {yAxisValues.map((value, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 dark:text-gray-400 -translate-y-1/2"
            >
              {formatValue(value)}
            </span>
          ))}
        </div> */}

        {/* SVG Chart */}
        <div className="">
          <svg
            width="100%"
            height={chartHeight + 30} // extra space for labels
            viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`}
            className="overflow-visible"
          >
            {/* Gradients */}
            <defs>
              <linearGradient
                id="yellowGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient
                id="greenGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {gridLines.map((y, index) => (
              <line
                key={index}
                x1={leftPadding}
                y1={y}
                x2={chartWidth - padding}
                y2={y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-200 dark:text-gray-700"
                opacity="0.5"
              />
            ))}

            {/* Area fill */}
            <path
              d={areaPath}
              fill={colors.gradient}
              className="transition-all duration-300"
            />

            {/* Line */}
            <path
              d={pathData}
              fill="none"
              stroke={colors.stroke}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
            />

            {/* Data points */}
            {points.map((point, index) => (
              <g key={index}>
                {/* Outer circle */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill="white"
                  stroke={colors.stroke}
                  strokeWidth="3"
                  className="transition-all duration-300 hover:r-8"
                />
                {/* Inner circle */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill={colors.dot}
                  className="transition-all duration-300"
                />

                {/* Tooltip on hover */}
                <g className="opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <rect
                    x={point.x - 25}
                    y={point.y - 35}
                    width="50"
                    height="25"
                    rx="4"
                    fill="rgba(0, 0, 0, 0.8)"
                  />
                  <text
                    x={point.x}
                    y={point.y - 18}
                    textAnchor="middle"
                    className="text-xs fill-white font-medium"
                  >
                    {typeof point.value === "number" && point.value > 1000
                      ? `$${(point.value / 1000).toFixed(1)}k`
                      : point.value}
                  </text>
                </g>
                {/* X-axis label under each point */}
                <text
                  x={point.x}
                  y={chartHeight + 18}
                  textAnchor="middle"
                  className="text-xs fill-gray-500 dark:fill-gray-400"
                >
                  {point.day}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
