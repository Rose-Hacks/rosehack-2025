import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="flex w-full flex-col items-center bg-rosehack-blue-100 py-10 text-rosehack-white">
      <h1 className="mb-8 text-center font-netron text-4xl font-bold md:text-6xl">
        FAQ
      </h1>
      <div className="w-11/12 max-w-[1040px] md:w-full">
        <Accordion type="single" collapsible className="w-full divide-y-2">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem
              value={question}
              key={index}
              className="text-sm text-rosehack-white md:text-lg"
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
              <AccordionContent className="sm:text-[12px] md:text-lg">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
