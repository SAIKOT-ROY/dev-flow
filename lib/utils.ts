import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const currentDate: Date = new Date();
  
  const timeDifference: number = currentDate.getTime() - createdAt.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30.44 * day;
  const year = 365.25 * day;

  // Calculate time difference in various units
  const minutes = Math.floor(timeDifference / minute);
  const hours = Math.floor(timeDifference / hour);
  const days = Math.floor(timeDifference / day);
  const weeks = Math.floor(timeDifference / week);
  const months = Math.floor(timeDifference / month);
  const years = Math.floor(timeDifference / year);

  // Choose the appropriate time unit and format the result
  if (years > 0) {
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else if (weeks > 0) {
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return 'Just now';
  }
};

export const formatNumber = (inputNumber: number): string => {
  let result: string;

  if (Math.abs(inputNumber) >= 1e6) {
    result = (inputNumber / 1e6).toFixed(1) + 'M';
  } else if (Math.abs(inputNumber) >= 1e3) {
    result = (inputNumber / 1e3).toFixed(1) + 'K';
  } else {
    result = inputNumber.toString();
  }

  // Immediately dividing the number by the corresponding factor
  inputNumber /= result.endsWith('M') ? 1e6 : result.endsWith('K') ? 1e3 : 1;

  return result;
};

export const getJoinedDate = (date: Date): string => {
  
  const month =date.toLocaleString('default', {month: 'long'});
  const year = date.getFullYear();

  const joinedDate = `${month} ${year}`;
  return joinedDate
}




