'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TrackConsignment() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      router.push(`/track?tracking=${encodeURIComponent(trackingNumber)}`);
    }
  };

  return (
    <section id="tracking" className="bg-sky-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-800">Track Your Consignment</h2>
          <p className="text-lg text-gray-600 mb-8">
            Enter your tracking number below to get real-time updates on your shipment&apos;s location and status.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Package className="h-5 w-5" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter your tracking number"
                  className="pl-10 py-6 text-lg"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-6 px-8 text-lg font-medium"
              >
                Track Now
              </Button>
            </form>

            <div className="mt-6 text-sm text-gray-500 text-center">
              <p>Enter the tracking number from your shipping confirmation email or receipt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
