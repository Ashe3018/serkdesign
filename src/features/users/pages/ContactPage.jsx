import {
  Facebook,
  Instagram,
  Telegram,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import React from "react";
//width:100% height:400px border-radius:8px overflow:hidden
export default function ContactPage() {
  return (
    <div className="App">
      <div className="bg-gray-50 min-h-screen mt-8">
        <div className="w-full px-6 lg:px-20 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Buttons */}
            <div>
              <h2 className="text-3xl font-semibold text-slate-700">
                Contact Form
              </h2>

              {/* Name */}
              <div className="mt-1">
                <label className="font-semibold text-slate-700">
                  Name{" "}
                  <span className="text-sm text-slate-500">(required)</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 mt-2 p-1 rounded-md focus:outline-none focus:border-slate-500"
                />
              </div>

              {/* Email */}
              <div className="mt-1">
                <label className="font-semibold text-slate-700">
                  Email{" "}
                  <span className="text-sm text-slate-500">(required)</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-slate-300 mt-2 p-1 rounded-md focus:outline-none focus:border-slate-500"
                />
              </div>

              {/* Message */}
              <div className="mt-1">
                <label className="font-semibold text-slate-700">Message</label>
                <textarea className="w-full border border-slate-300 mt-2 p-1 rounded-md h-40 resize-none focus:outline-none focus:border-slate-500"></textarea>
              </div>

              <button className="mt-6 bg-slate-700 text-white py-3 rounded-md px-6 hover:bg-slate-800">
                Send Message
              </button>
            </div>
            {/* Center Email + Social */}
            <div className="flex flex-col items-center text-center border-l border-r px-4">
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="mt-2">
                <strong>Phone:</strong> +251913857900
              </p>

              <p className="mt-3 text-slate-600">
                You can also send us an e-mail to Ayub1450@gmail.com informing
                your phone number.
              </p>

              <div
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.6868463170363!2d38.77500020004913!3d9.014200031483005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8581f7c26b15%3A0x5d14a5a4a04f11d!2sAyu%20Ceramic%20and%20Sanitary%20materials!5e0!3m2!1sen!2sus!4v1766271579623!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Right Phones */}

          {/* Contact Form */}
          <div className="mt-16"></div>
        </div>
      </div>
    </div>
  );
}
