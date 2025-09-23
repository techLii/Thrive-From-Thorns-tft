"use client";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setMsg("Thanks for reaching out! We'll get back to you shortly.");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  }
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-csag-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Have questions about our work? Want to get involved? We&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Contact <span className="text-csag-accent">Information</span>
            </h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4 shrink-0">
                  <MapPin className="h-6 w-6 text-csag-primary" />
                </div>
                <div className="w-full">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Address
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    Thrive From Thorns, P.O. Box TN 1661, Teshie-Nungua
                    Estate, Kisumu, Kenya.
                  </p>
                  <div
                    className="relative w-full overflow-hidden rounded-minimal border border-gray-200 bg-gray-100"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <iframe
                      title="Map showing the location of Thrive From Thorns"
                      src="https://www.google.com/maps/"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    <a
                      href="https://maps.google.com/?q=Thrive+With+Thorns+Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-csag-primary"
                    >
                      Open in Google Maps
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-csag-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:thrivefromthorns@gmail.com"
                      className="hover:text-csag-primary transition-colors"
                    >
                      thrivefromthorns@gmail.com
                    </a>
                  </p>
            
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-csag-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-gray-600">
                    <a
                      href="tel:+233267702211"
                      className="hover:text-csag-primary transition-colors"
                    >
                      +254 26 770 2211
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-csag-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-csag-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Office Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 3:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a <span className="text-csag-accent">Message</span>
            </h3>

            {msg && (
              <div
                className={`mb-6 rounded-minimal border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : status === "error"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-gray-200 bg-white"
                }`}
              >
                {msg}
              </div>
            )}

            <form className="space-y-6" onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="csag-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="csag-input"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="csag-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="csag-input"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="csag-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="csag-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="csag-label">
                  Subject
                </label>
                <select id="subject" name="subject" className="csag-select">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Donation Question</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="csag-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="csag-textarea"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full csag-button-accent flex items-center justify-center group"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
