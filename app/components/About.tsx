import { Button } from "@/components/ui/button";
import Image from "next/image";
import warehouse from "../../public/warehouse.png"

export default async function About() {
  return (
    <section id="about" className="section bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-800">About Keshav Logistic Services</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 md:order-2">
            <Image src={warehouse} alt="warehouse picture" width={500} height={500} className="w-full h-full" />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-sky-700">Your Trusted Logistics Partner Since 2010</h3>
            <p className="mb-4 text-gray-700">
              Keshav Logistic Services is a premier transport company headquartered in Bawana, Delhi, specializing in nationwide logistics and cargo delivery across India. With years of industry experience, we&apos;ve established ourselves as a reliable partner for businesses of all sizes.
            </p>
            <p className="mb-6 text-gray-700">
              Our commitment to excellence, timely deliveries, and customer satisfaction has helped us build long-lasting relationships with clients across diverse industries. We pride ourselves on our extensive fleet, professional team, and innovative logistics solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg shadow-sm bg-gray-50">
                <div className="text-3xl font-bold text-sky-600 mb-2">300+</div>
                <div className="text-gray-600">Clients Nationwide</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg shadow-sm bg-gray-50">
                <div className="text-3xl font-bold text-sky-600 mb-2">12+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg shadow-sm bg-gray-50">
                <div className="text-3xl font-bold text-sky-600 mb-2">95%</div>
                <div className="text-gray-600">On-time Delivery</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg shadow-sm bg-gray-50">
                <div className="text-3xl font-bold text-sky-600 mb-2">28+</div>
                <div className="text-gray-600">States Covered</div>
              </div>
            </div>

            <Button className="bg-sky-700 hover:bg-sky-800">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
