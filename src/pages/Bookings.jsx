import React, { useState } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  CalendarIcon,
} from "lucide-react";
import StatsCard from "../components/StatsCard";
import {
  BOOKINGS_STATS_CARDS,
  UPCOMING_BOOKINGS,
} from "../constants/bookingsData";

const Bookings = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 2025
  const [calendarView, setCalendarView] = useState("month"); // month, week, day
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event Conf.",
      date: "2025-06-01",
      startDate: "2025-06-01",
      endDate: "2025-06-01",
      color: "red",
      type: "conference",
    },
    {
      id: 2,
      title: "Seminar #4",
      date: "2025-06-07",
      startDate: "2025-06-07",
      endDate: "2025-06-07",
      color: "green",
      type: "seminar",
    },
    {
      id: 3,
      title: "Seminar #4",
      date: "2025-06-08",
      startDate: "2025-06-08",
      endDate: "2025-06-08",
      color: "green",
      type: "seminar",
    },
    {
      id: 4,
      title: "4p Meeting #5",
      date: "2025-06-09",
      startDate: "2025-06-09",
      endDate: "2025-06-09",
      color: "blue",
      type: "meeting",
    },
    {
      id: 5,
      title: "Seminar #6",
      date: "2025-06-11",
      startDate: "2025-06-11",
      endDate: "2025-06-11",
      color: "purple",
      type: "seminar",
    },
    {
      id: 6,
      title: "10:30a Meeting",
      date: "2025-06-12",
      startDate: "2025-06-12",
      endDate: "2025-06-12",
      color: "green",
      type: "meeting",
    },
    {
      id: 7,
      title: "12p Meetup #",
      date: "2025-06-12",
      startDate: "2025-06-12",
      endDate: "2025-06-12",
      color: "blue",
      type: "meetup",
    },
    {
      id: 8,
      title: "2:30p Submission",
      date: "2025-06-12",
      startDate: "2025-06-12",
      endDate: "2025-06-12",
      color: "orange",
      type: "submission",
    },
    {
      id: 9,
      title: "7a Attend event",
      date: "2025-06-14",
      startDate: "2025-06-14",
      endDate: "2025-06-14",
      color: "green",
      type: "event",
    },
    {
      id: 10,
      title: "4p Submission #",
      date: "2025-06-16",
      startDate: "2025-06-16",
      endDate: "2025-06-16",
      color: "orange",
      type: "submission",
    },
  ]);

  const [eventForm, setEventForm] = useState({
    title: "",
    color: "blue",
    startDate: "",
    endDate: "",
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const colorOptions = [
    {
      name: "Danger",
      value: "red",
      bgClass: "bg-red-100",
      textClass: "text-red-800",
      borderClass: "border-l-red-500",
    },
    {
      name: "Success",
      value: "green",
      bgClass: "bg-green-100",
      textClass: "text-green-800",
      borderClass: "border-l-green-500",
    },
    {
      name: "Primary",
      value: "blue",
      bgClass: "bg-blue-100",
      textClass: "text-blue-800",
      borderClass: "border-l-blue-500",
    },
    {
      name: "Warning",
      value: "orange",
      bgClass: "bg-orange-100",
      textClass: "text-orange-800",
      borderClass: "border-l-orange-500",
    },
    {
      name: "Purple",
      value: "purple",
      bgClass: "bg-purple-100",
      textClass: "text-purple-800",
      borderClass: "border-l-purple-500",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      red: {
        bgClass: "bg-red-100",
        textClass: "text-red-800",
        borderClass: "border-l-red-500",
      },
      green: {
        bgClass: "bg-green-100",
        textClass: "text-green-800",
        borderClass: "border-l-green-500",
      },
      blue: {
        bgClass: "bg-blue-100",
        textClass: "text-blue-800",
        borderClass: "border-l-blue-500",
      },
      orange: {
        bgClass: "bg-orange-100",
        textClass: "text-orange-800",
        borderClass: "border-l-orange-500",
      },
      purple: {
        bgClass: "bg-purple-100",
        textClass: "text-purple-800",
        borderClass: "border-l-purple-500",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isToday: false,
        date: new Date(year, month - 1, prevMonthDays - i),
      });
    }

    // Add current month's days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day);
      days.push({
        day,
        isCurrentMonth: true,
        isToday: dayDate.toDateString() === today.toDateString(),
        date: dayDate,
      });
    }

    // Add next month's leading days to complete the grid
    const remainingDays = 42 - days.length; // 6 rows × 7 days = 42
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        date: new Date(year, month + 1, day),
      });
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getEventsForDate = (date) => {
    const dateStr =
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0");

    return events.filter((event) => {
      return dateStr >= event.startDate && dateStr <= event.endDate;
    });
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setEventForm({
      title: "",
      color: "blue",
      startDate: "",
      endDate: "",
    });
    setShowEventModal(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setEventForm({
      title: event.title,
      color: event.color,
      startDate: event.startDate,
      endDate: event.endDate,
    });
    setShowEventModal(true);
  };

  const handleSaveEvent = () => {
    if (!eventForm.title || !eventForm.startDate || !eventForm.endDate) return;

    if (editingEvent) {
      // Update existing event
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingEvent.id
            ? {
                ...event,
                title: eventForm.title,
                color: eventForm.color,
                startDate: eventForm.startDate,
                endDate: eventForm.endDate,
                date: eventForm.startDate, // For simplicity, using start date as main date
              }
            : event
        )
      );
    } else {
      // Add new event
      const newEvent = {
        id: Date.now(),
        title: eventForm.title,
        color: eventForm.color,
        startDate: eventForm.startDate,
        endDate: eventForm.endDate,
        date: eventForm.startDate,
        type: "custom",
      };
      setEvents((prev) => [...prev, newEvent]);
    }

    setShowEventModal(false);
    setEditingEvent(null);
  };

  const handleDeleteEvent = () => {
    if (editingEvent) {
      setEvents((prev) => prev.filter((event) => event.id !== editingEvent.id));
      setShowEventModal(false);
      setEditingEvent(null);
    }
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {BOOKINGS_STATS_CARDS.map((card) => (
          <StatsCard key={card.id} {...card} />
        ))}
      </div>

      {/* Upcoming Bookings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Upcoming Bookings
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {UPCOMING_BOOKINGS.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {booking.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {booking.datetime} • {booking.guests}
                  </p>
                </div>
                <div className="ml-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 bg-gray-800 dark:bg-white rounded-lg text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-white dark:text-black" />
                </button>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 bg-gray-800 dark:bg-white rounded-lg text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-white dark:text-black" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>

              {/* <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                {["month", "week", "day"].map((view) => (
                  <button
                    key={view}
                    onClick={() => setCalendarView(view)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      calendarView === view
                        ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div> */}
            </div>

            <button
              onClick={handleAddEvent}
              className="bg-gray-900 dark:bg-white hover:bg-yellow-300 text-white dark:text-black px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">Add Event</span>
            </button>
          </div>

          {/* Calendar Grid - Month View */}
          {calendarView === "month" && (
            <div className="grid grid-cols-7 gap-0 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              {/* Day Headers */}
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="bg-gray-50 dark:bg-gray-700 p-4 text-center border-b border-gray-200 dark:border-gray-600"
                >
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    {day}
                  </span>
                </div>
              ))}

              {/* Calendar Days */}
              {days.map((dayInfo, index) => {
                const dayEvents = getEventsForDate(dayInfo.date);
                return (
                  <div
                    key={index}
                    className={`h-[120px] p-2 border-b border-r border-gray-200 dark:border-gray-700 relative flex flex-col ${
                      dayInfo.isCurrentMonth
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-900"
                    } ${
                      dayInfo.isToday
                        ? "ring-2 ring-yellow-400 dark:ring-yellow-500"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        dayInfo.isCurrentMonth
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-400 dark:text-gray-600"
                      } ${
                        dayInfo.isToday
                          ? "text-yellow-600 dark:text-yellow-400"
                          : ""
                      }`}
                    >
                      {dayInfo.day}
                    </span>

                    {/* Events */}
                    <div className="mt-1 space-y-1 flex-1 overflow-y-auto pr-1">
                      {dayEvents.map((event) => {
                        const colorClasses = getColorClasses(event.color);
                        return (
                          <div
                            key={event.id}
                            onClick={() => handleEditEvent(event)}
                            className={`p-1 rounded text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${colorClasses.bgClass} ${colorClasses.textClass} ${colorClasses.borderClass} border-l-2`}
                          >
                            {event.title}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Week View Placeholder */}
          {calendarView === "week" && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Week view coming soon
              </p>
            </div>
          )}

          {/* Day View Placeholder */}
          {calendarView === "day" && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Day view coming soon
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {editingEvent ? "Edit Event" : "Add Event"}
              </h2>
              <button
                onClick={() => setShowEventModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Plan your next big moment: schedule or edit an event to stay on
              track
            </p>

            <div className="space-y-4">
              {/* Event Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  value={eventForm.title}
                  onChange={(e) =>
                    setEventForm((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter event title"
                />
              </div>

              {/* Event Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Color
                </label>
                <div className="flex space-x-3">
                  {colorOptions.map((color) => (
                    <label key={color.value} className="flex items-center">
                      <input
                        type="radio"
                        name="color"
                        value={color.value}
                        checked={eventForm.color === color.value}
                        onChange={(e) =>
                          setEventForm((prev) => ({
                            ...prev,
                            color: e.target.value,
                          }))
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 cursor-pointer ${
                          eventForm.color === color.value
                            ? "border-gray-900 dark:border-white"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        <div
                          className={`w-full h-full rounded-full ${
                            color.value === "red"
                              ? "bg-red-500"
                              : color.value === "green"
                              ? "bg-green-500"
                              : color.value === "blue"
                              ? "bg-blue-500"
                              : color.value === "orange"
                              ? "bg-orange-500"
                              : "bg-purple-500"
                          }`}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        {color.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={eventForm.startDate}
                    onChange={(e) =>
                      setEventForm((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter End Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={eventForm.endDate}
                    onChange={(e) =>
                      setEventForm((prev) => ({
                        ...prev,
                        endDate: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-between mt-6">
              <div>
                {editingEvent && (
                  <button
                    onClick={handleDeleteEvent}
                    className="px-4 py-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
                  >
                    Delete Event
                  </button>
                )}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowEventModal(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleSaveEvent}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  {editingEvent ? "Update changes" : "Add Event"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
