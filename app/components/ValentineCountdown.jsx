"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ValentineCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getNextValentine = () => {
      const now = new Date();
      const year = now.getFullYear();
      const valentineDate = new Date(year, 1, 14); // Month is 0-indexed, so 1 is February

      if (now > valentineDate) {
        // If we've passed this year's Valentine's Day, get next year's
        valentineDate.setFullYear(year + 1);
      }

      return valentineDate;
    };

    const countdownDate = getNextValentine().getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const whatsappLink =
    "https://wa.me/+543755714107?text=" +
    encodeURIComponent("Holaa, ¡quiero mi descuento!");

  return (
    <div className="bg-pink-100 dark:bg-pink-900 p-5 rounded-lg shadow-md text-center  gap-3 flex flex-col">
      <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 ">
        Cuenta regresiva para San Valentín
      </h2>
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-3xl font-bold text-pink-500 dark:text-pink-400">
              {value}
            </span>
            <span className="text-sm text-pink-600 dark:text-pink-300 capitalize">
              {unit}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Consigue tu descuento
        </Link>
        <h2 className="text-2xl font-bold text-pink-600 dark:text-black ">
          ¡DESCUENTO DEL 15%!
        </h2>
      </div>
    </div>
  );
}
