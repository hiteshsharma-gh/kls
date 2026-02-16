import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Package, Globe, Route } from "lucide-react";

const services = [
  {
    icon: <Truck className="w-10 h-10 text-orange-500" />,
    title: "Nationwide Freight Transport",
    description: "Reliable transportation of goods across India with our extensive fleet of vehicles suitable for all types of cargo.",
    features: ["Full Truckload (FTL)", "Less Than Truckload (LTL)", "Special Cargo Handling"]
  },
  {
    icon: <Package className="w-10 h-10 text-orange-500" />,
    title: "Warehousing Solutions",
    description: "Secure storage facilities with modern inventory management systems in strategic locations across India.",
    features: ["Short & Long-term Storage", "Inventory Management", "Distribution Services"]
  },
  {
    icon: <Globe className="w-10 h-10 text-orange-500" />,
    title: "Express Delivery Services",
    description: "Time-critical delivery services ensuring your shipments reach their destination within promised timeframes.",
    features: ["Same-day Delivery", "Next-day Delivery", "Priority Handling"]
  },
  {
    icon: <Route className="w-10 h-10 text-orange-500" />,
    title: "Customized Logistics Solutions",
    description: "Tailored logistics plans designed to meet your specific business requirements and challenges.",
    features: ["Route Optimization", "Multi-point Delivery", "Supply Chain Consulting"]
  }
];

export default async function Services() {
  return (
    <section id="services" className="section bg-gray-50 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-800">Our Services</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Comprehensive logistics solutions designed to meet your transportation needs with reliability and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-sky-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
