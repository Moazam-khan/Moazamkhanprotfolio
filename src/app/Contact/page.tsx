'use client';
import React, { FormEvent, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Submitted:', formData);
      alert('Thank you for your message! I Will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "moazamkhan@example.com",
      link: "mailto:moazamkhan@example.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+92 XXX XXXXXXX",
      link: "tel:+92XXXXXXXXX"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Abbottabad, Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/Moazam-khan", label: "GitHub", color: "hover:text-purple-500" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/moazam-khan-089406319/", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: FaWhatsapp, link: "https://web.whatsapp.com", label: "WhatsApp", color: "hover:text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I will love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 animate-fadeInUp">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500" />
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:border-red-500/50">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                          <Icon className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-400 mb-1">{info.title}</h3>
                          {info.link ? (
                            <a href={info.link} className="text-white hover:text-red-400 transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-white/5 rounded-full border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
                      aria-label={social.label}
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Availability</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently <span className="text-green-400 font-semibold">available for freelance work</span> and 
                full-time opportunities. Feel free to reach out if you have an exciting project or role in mind!
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;