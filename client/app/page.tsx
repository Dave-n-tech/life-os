"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      });
  }, []);

  return <div>Hello world, {data}</div>;
}
