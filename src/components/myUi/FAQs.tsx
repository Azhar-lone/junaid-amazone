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
            <AccordionTrigger className="text-xl">
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
    answer: `How do you optimize product listings on Amazon?
Our listing optimization process involves our 4-phase SEO and Design CTR Hack. To optimize your product listings on Amazon, the following steps are done:
• We first focus on indexing in Phase 1 by including keywords in the title and back-end search terms. Repeat keywords in the title and search terms for better visibility.
• In Phase 2, we replace keywords already in the title and description with new ones for continued indexing improvement. Ensure your title includes important keywords and consider showing products in use, like cutting through steak or slicing a tomato, to demonstrate effectiveness. Highlight your brand and clarify technical terms to show benefits to customers.
• In Phase 3 of SEO listing optimization, we focus on Strike Zone keywords ranked between 20-50 to improve visibility and clicks. Our Seller Central Amazon specialists tailor product descriptions to highlight these keywords and utilize the Search Query Performance Report to enhance content and PPC campaigns, boosting your market position.
• In Phase Four, we use the new Search Query Performance Report SellerCentral to enhance your market share compared to competitors. We focus on refining our content and PPC campaigns based on intent rather than just ranking, ensuring your product stands out and drives more sales.
• Include CTR-upgraded images that depict the ideal customer and how they would benefit from the product.
• If you have an Amazon brand registry, our team ensures your listing has a well-designed A+ Content and Brand Story.  
    `,
  },
  {
    question: "How do you manage Amazon advertising campaigns?",
    answer: `Yes, we can improve your product rankings on Amazon. Our proven 4-phase SEO strategy focuses on optimizing your listings with effective keywords, increasing visibility, and ultimately driving higher clicks.

We conduct thorough keyword and competitor research, update your product titles and bullets for better indexing, and utilize Amazon’s search query report to enhance market share for top-ranking keywords.`,
  },
  {
    question: "What customer support and feedback can I expect from you?",
    answer: `Our customer service representatives answer queries and concerns within 24 hours. We also set up automatic responses to ensure every incoming message receives a timely reply.

Feel free to reach out during our business hours, Monday to Friday, from 8:00AM to 12:00MN EST, via Phone: +1 470-623-1951 or Email: sales@myamazonguy.com.`,
  },
  {
    question: "How do I get started with My Amazon Scale?",
    answer: `Ready to boost your sales with the Amazon Experts? Reach out to us through our online contact form or contact us during our business hours, Monday to Friday, from 8:00 AM to 12:00 MN EST, via Phone: +92 3484260244 or Email: myamazonescale@gmail.com`,
  },
];
