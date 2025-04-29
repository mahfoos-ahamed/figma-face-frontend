import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const ContactSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  return (
    <section className="bg-white shadow-[21px_21px_0px_rgba(0,0,0,0.4)] self-center flex w-full max-w-[1235px] flex-col overflow-hidden items-center text-black justify-center -mt-16 px-20 py-[76px] rounded-sm border-black border-solid border-[6px] max-md:max-w-full max-md:px-5">
      <div className="w-[784px] max-w-full">
        <h2 className="text-5xl font-medium max-md:max-w-full max-md:text-[40px] max-md:mr-0.5">
          Let's start designing your project
        </h2>
        <div className="flex w-full flex-col items-stretch text-center mt-[21px] pl-[50px] max-md:max-w-full max-md:pl-5">
          <p className="text-[32px] font-normal max-md:max-w-full">
            Want to see how to transform your brand into a unique style. sent us
            a message
          </p>

          {!showForm ? (
            <Button
              variant="primary"
              className="self-center ml-6 mt-[51px] max-md:mt-10"
              onClick={() => setShowForm(true)}
            >
              Send us message
            </Button>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="block text-2xl font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-xl border-black border-solid border-[3px] focus:outline-none focus:ring-2 focus:ring-[rgba(255,220,88,1)]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-2xl font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-xl border-black border-solid border-[3px] focus:outline-none focus:ring-2 focus:ring-[rgba(255,220,88,1)]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-2xl font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-xl border-black border-solid border-[3px] focus:outline-none focus:ring-2 focus:ring-[rgba(255,220,88,1)]"
                ></textarea>
              </div>
              <div className="flex gap-4 justify-center">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
