import { MapPin, Truck, Package, Clock } from "lucide-react";

const stats = [
  {
    icon: <MapPin className="w-8 h-8 text-orange-500" />,
    value: "28+",
    label: "States Covered",
    description: "Nationwide network"
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    value: "60+",
    label: "Delivery Vehicles",
    description: "Modern fleet"
  },
  {
    icon: <Package className="w-8 h-8 text-orange-500" />,
    value: "5000+",
    label: "Successful Deliveries",
    description: "Monthly average"
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    value: "95%",
    label: "On-time Rate",
    description: "Industry-leading"
  }
];

export default async function Stats() {
  return (
    <section className="bg-sky-800 text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 transition-transform hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-sky-700">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-medium text-gray-200 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
