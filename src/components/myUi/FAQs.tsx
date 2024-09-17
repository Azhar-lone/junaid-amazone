import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className=" mx-auto w-[90%] rounded  flex flex-col gap-2  ">
      <h3 className="text-4xl font-bold ">Frequently Asked Questions</h3>
      Hiring an Amazon agency simplifies selling for our clients, boosts growth,
      optimizes listings, and builds their brand. With industry best practices,
      we free your time for innovation to help drive success on Amazon.
      <hr />
      <Accordion type="single" collapsible>
        {/* <AccordionTrigger >
        Edit Personal Information{" "}
      </AccordionTrigger> */}

        {faqs.map((q, index) => (
          <AccordionItem value={q.question.charAt(1)} key={index}>
            <AccordionTrigger className="text-xl"
            
            >
              {q.question}
            </AccordionTrigger>
            <AccordionContent>{q.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;

interface FAQType {
  question: string;
  answer: string;
}

const faqs: FAQType[] = [
  {
    question: "How do you optimize product listings on Amazon?",
    answer: `answer   
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium non in voluptatibus natus excepturi repellat dolores libero labore porro possimus, quisquam culpa eum dolorem dolore perspiciatis, magnam voluptas debitis?
            
    `,
  },
  {
    question: "question",
    answer: "answer",
  },
  {
    question: "question",
    answer: "answer",
  },
  {
    question: "question",
    answer: "answer",
  },
];
