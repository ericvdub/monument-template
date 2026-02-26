import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How long does it take to make a monument?',
    answer:
      "Most monuments are completed within 8–12 weeks after the design is approved. Custom designs or specialty materials may take a bit longer. We'll give you a specific timeline when your order is placed.",
  },
  {
    question: 'What materials do you offer?',
    answer:
      'We work primarily with granite in a variety of colors — including Black, Gray, Pink, Blue Pearl, and Red — as well as marble and bronze. Visit our Materials page for a full overview of available options.',
  },
  {
    question: 'Can I see a proof before my monument is made?',
    answer:
      'Absolutely. We provide a detailed digital proof for your approval before any work begins. No monument goes into production until you are completely satisfied with the design.',
  },
  {
    question: 'Do you offer installation?',
    answer:
      'Yes. We handle delivery and professional installation at the cemetery. We coordinate directly with cemetery offices to ensure all placement requirements are met.',
  },
  {
    question: 'What is your quality guarantee?',
    answer:
      'We stand behind every monument we create with a 100% satisfaction guarantee. If there is ever a defect in materials or craftsmanship, we will make it right — at no cost to you.',
  },
  {
    question: 'How does the online designer work?',
    answer:
      "Our online designer lets you choose a monument shape, select a granite color, and add lettering or artwork to see a preview before you contact us. It's a great starting point for your design consultation.",
  },
  {
    question: 'Which cemeteries do you serve?',
    answer:
      "We serve cemeteries throughout Carroll County, Whiteside County, and the surrounding region in northwest Illinois — including Mt Carroll, Savanna, Morrison, Shannon, Lanark, and beyond. Contact us if you're unsure whether we serve your area.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 font-serif">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">
            Answers to common questions about our monuments and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-medium text-slate-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
