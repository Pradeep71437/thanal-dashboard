export const NAVIGATION_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "LayoutDashboard",
    active: true,
  },
  { id: "leads", label: "Leads & enquiries", icon: "Users" },
  { id: "bookings", label: "Bookings", icon: "Calendar" },
  { id: "clients", label: "Clients", icon: "UserCheck" },
  { id: "quotes", label: "Quotes & contracts", icon: "FileText" },
  { id: "menu", label: "Menu & packages", icon: "Package" },
  { id: "payments", label: "Payments", icon: "CreditCard" },
  { id: "analytics", label: "Analytics", icon: "BarChart3" },
  { id: "settings", label: "Settings", icon: "Settings" },
];

export const STATS_CARDS = [
  {
    id: "total-leads",
    title: "Total Leads",
    value: "147",
    change: "+63%",
    period: "This year",
    trend: "up",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    changeColor: "text-green-500",
  },
  {
    id: "new-leads",
    title: "New leads",
    value: "16",
    change: "+5%",
    period: "from last month",
    trend: "up",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
    changeColor: "text-green-500",
  },
  {
    id: "handling-time",
    title: "Avg. Handling Time",
    value: "3.2hrs",
    change: "+13%",
    period: "This year",
    trend: "up",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    changeColor: "text-green-500",
  },
  {
    id: "revenue",
    title: "Total Revenue",
    value: "$125,430",
    change: "+19%",
    period: "This year",
    trend: "up",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
    changeColor: "text-green-500",
  },
];

export const LEAD_STATUS_DATA = [
  { label: "Success rate", percentage: 68, color: "bg-green-500" },
  { label: "In progress", percentage: 22, color: "bg-yellow-500" },
  { label: "Failed rate", percentage: 10, color: "bg-red-500" },
];

export const QUICK_ACTIONS = [
  {
    id: "call-lead",
    title: "Call Next Lead",
    subtitle: "Emily Thompson - High priority",
    icon: "Phone",
    iconColor: "text-blue-500",
  },
  {
    id: "follow-up",
    title: "Send Follow-up",
    subtitle: "3 pending email responses",
    icon: "Mail",
    iconColor: "text-green-500",
  },
  {
    id: "bookings",
    title: "Today's Bookings",
    subtitle: "12 reservations scheduled",
    icon: "Calendar",
    iconColor: "text-purple-500",
  },
  {
    id: "check-in",
    title: "Client Check-in",
    subtitle: "VIP guests arriving soon",
    icon: "Clock",
    iconColor: "text-orange-500",
  },
];

export const SCHEDULE_ITEMS = [
  {
    id: "wedding-tasting",
    title: "Johnson Wedding Tasting",
    time: "2:00 PM - 3:30 PM",
    status: "Confirmed",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "corporate-lunch",
    title: "Corporate Lunch Setup",
    time: "11:00 AM - 12:00 PM",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "anniversary-dinner",
    title: "Smith Anniversary Dinner",
    time: "7:00 PM - 10:00 PM",
    status: "Upcoming",
    statusColor: "bg-gray-100 text-gray-800",
  },
];

export const CHART_DATA = {
  leadActivity: {
    title: "Lead activity",
    dateRange: "Jun 01 - Jun 30 2025",
    data: [
      { day: "Mon", value: 20 },
      { day: "Tue", value: 35 },
      { day: "Wed", value: 45 },
      { day: "Thu", value: 30 },
      { day: "Fri", value: 55 },
      { day: "Sat", value: 40 },
      { day: "Sun", value: 60 },
    ],
  },
  revenueTrend: {
    title: "Revenue trend",
    dateRange: "Jun 01 - Jun 30 2025",
    data: [
      { day: "Mon", value: 15000 },
      { day: "Tue", value: 18000 },
      { day: "Wed", value: 22000 },
      { day: "Thu", value: 19000 },
      { day: "Fri", value: 25000 },
      { day: "Sat", value: 23000 },
      { day: "Sun", value: 28000 },
    ],
  },
};
