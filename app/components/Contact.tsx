'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast("Message Sent", {
        description: "Thank you for your inquiry. We'll get back to you shortly.",
        className: "text-gray-700"
      }
      )
      setFormData({
        name: "",
        phone: "",
        message: ""
      })
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-800">Contact Us</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions about our logistics solutions? Get in touch with our team for a prompt response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-sky-700">Our Location</h3>
              <div className="rounded-lg overflow-hidden h-64 mb-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371.08846199041085!2d77.04234301950295!3d28.782758686213253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d079023ce83c5%3A0xc695ac62f7e7fd47!2sBawana%20Transport%20Area!5e1!3m2!1sen!2sin!4v1747243594119!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex items-start mb-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Office Address</h4>
                    <p className="text-gray-600">Bawana Transport Area, Phirni Road, Sultanpur Road, Village Puth Khurd, Delhi, 110039</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex items-start mb-3">
                  <Phone className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Contact Numbers</h4>
                    <p className="text-gray-600">+91 9313961073</p>
                    <p className="text-gray-600">+91 9811477346</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex items-start mb-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-gray-600">keshavlogisticservices@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex items-start mb-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-sky-700">Send Us a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full h-32"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-700 hover:bg-sky-800"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
