import React, { useRef, useState } from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiHashnode } from "react-icons/si";
import emailjs from "emailjs-com";

const FooterContact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // From EmailJS dashboard
        "YOUR_TEMPLATE_ID", // From EmailJS dashboard
        formRef.current,
        "YOUR_PUBLIC_KEY" // From EmailJS account
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <footer className="bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg text-white font-medium w-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success === true && (
              <p className="text-green-400 text-sm mt-2">Message sent successfully</p>
            )}
            {success === false && (
              <p className="text-red-400 text-sm mt-2">Something went wrong </p>
            )}
          </form>
        </div>

        {/* Social Media & Info */}
        <div className="flex flex-col items-start lg:items-end justify-between">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="mb-6 text-gray-400 max-w-md">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex space-x-6">
            <a href="https://x.com/GloryOpeoluwa" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/olorunfemi-glory-opeoluwa-098791244/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://gloryope.hashnode.dev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <SiHashnode />
              </a>
               <a href="https://github.com/gloze-png" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <SiGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} OGT
      </div>
    </footer>
  );
};

export default FooterContact;
