import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="flex w-full flex-col text-rosehack-white items-center py-10 bg-rosehack-blue-100">
      <h1 className="md:text-6xl text-4xl font-netron font-bold text-center mb-8">FAQ</h1>
      <div className="max-w-[1040px] md:w-full w-11/12 ">
        <Accordion type="single" collapsible className="w-full divide-y-2">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem value={question} key={index} className=" text-rosehack-white md:text-lg text-sm">
              <AccordionTrigger className="text-left ">{question}</AccordionTrigger>
              <AccordionContent className="sm:text-[12px] md:text-lg">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
