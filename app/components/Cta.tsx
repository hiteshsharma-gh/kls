import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-16 bg-gradient-to-br from-sky-900 to-sky-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid-cta" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Reliable Logistics Services?</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact Keshav Logistic Services today for efficient and cost-effective transport solutions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-md bg-white text-sky-800 hover:bg-gray-100">
              <a href="#contact" className="px-6 flex items-center">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-md bg-transparent border-white text-white hover:bg-white/10">
              <a href="tel:+919313961073" className="px-6 flex items-center">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white max-w-xl mx-auto">
            <div className="text-left">
              <p className="font-semibold">Contact Numbers:</p>
              <p><a href="tel:+919313961073" className="hover:underline">+91 9313961073</a></p>
              <p><a href="tel:+919811477346" className="hover:underline">+91 9811477346</a></p>
            </div>
            <div className="text-left">
              <p className="font-semibold">Email:</p>
              <p><a href="mailto:keshavlogisticservices@gmail.com" className="hover:underline">keshavlogisticservices@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
