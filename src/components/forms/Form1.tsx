"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "@/src/hooks/useBookingForm";
import { getDateInputLimits } from "@/src/hooks/getDateInputLimits";
import { countries } from "@/src/utils/constent";
import { IoIosArrowDown } from "react-icons/io";
import {
  CalendarIcon,
  CallIcon,
  MailIcon,
  UserIcon,
  BookingCalenderIcon,
} from "@/src/utils/formIcons";

interface Form1Props {
  gridView?: boolean;
}

const Form1: React.FC<Form1Props> = ({ gridView = false }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
    },
  });

  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start) {
      setFieldValue("checkIn", start.toISOString().split("T")[0]);
    } else {
      setFieldValue("checkIn", "");
    }
    if (end) {
      setFieldValue("checkOut", end.toISOString().split("T")[0]);
    } else {
      setFieldValue("checkOut", "");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex flex-wrap ${
        gridView
          ? "flex-col gap-3.5 w-full"
          : "flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-4 sm:gap-y-3 w-full"
      } font-open-sans font-normal text-[14px] leading-[20px] bg-transparent`}
    >
      {/* Name */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center justify-start gap-2 bg-[#FFF9F1] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#FFFFFF] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] shrink-0`}>
          <label className="text-[#777777] text-sm shrink-0 flex items-center justify-center">
            <UserIcon />
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent outline-none text-[#777777] placeholder-[#777777] font-open-sans font-normal text-[14px] leading-[20px] w-full"
          />
        </div>
        {errors.name && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] whitespace-nowrap">
            {errors.name}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center justify-start gap-1.5 bg-[#FFF9F1] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#FFFFFF] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] shrink-0`}>
          <label className="text-[#777777] text-sm shrink-0 flex items-center justify-center">
            <CallIcon />
          </label>
          <div className="relative flex items-center shrink-0">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              style={{ width: `${formData.countryCode.length + 2.2}ch` }}
              className="cursor-pointer appearance-none bg-transparent outline-none text-[#777777] font-open-sans font-normal text-[14px] leading-[20px] pr-3.5"
            >
              {countries.map((country, index) => (
                <option
                  key={`${country.name}-${country.code}-${index}`}
                  value={country.code}
                  className="bg-white text-gray-900"
                >
                  {country.code}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-0 text-[10px] pointer-events-none text-[#777777]" />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Ph Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent outline-none text-[#777777] placeholder-[#777777] font-open-sans font-normal text-[14px] leading-[20px] w-full"
          />
        </div>
        {errors.phone && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] whitespace-nowrap">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Email */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center justify-start gap-2 bg-[#FFF9F1] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#FFFFFF] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] shrink-0`}>
          <label className="text-[#777777] text-sm shrink-0 flex items-center justify-center">
            <MailIcon />
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent outline-none text-[#777777] placeholder-[#777777] font-open-sans font-normal text-[14px] leading-[20px] w-full"
          />
        </div>
        {errors.email && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] whitespace-nowrap">
            {errors.email}
          </span>
        )}
      </div>

      {/* Date Picker */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center justify-start gap-2 bg-[#FFF9F1] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#FFFFFF] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] shrink-0`}>
          <label className="text-[#777777] text-sm shrink-0 flex items-center justify-center">
            <CalendarIcon />
          </label>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            placeholderText="Check-in & out"
            wrapperClassName="w-full flex-1 flex items-center"
            className="bg-transparent outline-none text-[#777777] placeholder-[#777777] font-open-sans font-normal text-[14px] leading-[20px] w-full text-left cursor-pointer"
            minDate={min ? new Date(min) : new Date()}
            maxDate={max ? new Date(max) : undefined}
            dateFormat="dd MMM yyyy"
            calendarClassName="!z-[99999]"
            popperClassName="!z-[99999]"
          />
        </div>
        {(errors.checkIn || errors.checkOut) && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] whitespace-nowrap">
            {errors.checkIn || errors.checkOut}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className={`flex ${gridView ? "w-full mt-2" : "w-full sm:w-auto sm:items-center"}`}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-tertiary hover:bg-[#523F2B] text-white ${gridView ? "w-full" : "w-full sm:w-[180px]"} h-[36px] px-[16px] py-[8px] rounded-[4px] font-open-sans font-normal text-[14px] leading-[20px] uppercase flex items-center justify-center text-center gap-[8px] transition-all shadow-md cursor-pointer active:scale-95 disabled:opacity-75 whitespace-nowrap shrink-0`}
        >
          <BookingCalenderIcon /> {isSubmitting ? "Submitting..." : "Book Now"}
        </button>
      </div>
    </form>
  );
};

export default Form1;
