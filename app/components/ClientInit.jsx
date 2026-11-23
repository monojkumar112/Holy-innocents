"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function ClientInit() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return null;
}
