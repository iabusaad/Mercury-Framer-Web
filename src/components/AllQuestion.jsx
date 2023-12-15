"use client";
import React, { useState } from "react";
import { questions } from "../data/question.js";
import SingleQuestion from "./SingleQuestion";

export default function App() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="max-w-xl mx-auto py-20 px-4">
        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}
