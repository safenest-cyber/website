import React, { useEffect } from 'react';
import { Shield, Server, Mail, Phone, AlertCircle, Home, Laptop, Linkedin, MessageCircle, Brain, Target } from 'lucide-react';

function SolutionCard({ icon: Icon, title, features, secondaryFeatures }) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg flex-1">
      <div className="flex items-center space-x-3 mb-6">
        <Icon className="text-blue-400" size={24} />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Shield className="text-blue-400 mt-1 flex-shrink-0" size={16} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      {secondaryFeatures && (
        <div className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {secondaryFeatures.map((section, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  {section.icon}
                  <h4 className="font-bold">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                      <Shield className="text-blue-400 mt-1 flex-shrink-0" size={12} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      <button className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition flex items-center justify-center space-x-2">
        <span>Learn More</span>
        <Shield size={16} />
      </button>
    </div>
  );
}

function App() {
  useEffect(() => {
    // JavaScript canary token
    if (window.location.hostname !== "safenest.co.bw" 
        && !window.location.hostname.endsWith(".safenest.co.bw")) 
    {
        var p = !window.location.protocol.startsWith("http") ? "http:" : window.location.protocol;
        var l = window.location.href;
        var r = document.referrer;
        var m = new Image();
        m.src = p + "//canarytokens.com/feedback/ttvb236wpx254aahyz3iz5x7k/payments.js?l=" + encodeURI(l) + "&r=" + encodeURI(r);

        // CSS canary token
        const style = document.createElement('style');
        style.textContent = `
          body {
            background: url('https://dakg4cmpuclai.cloudfront.net/nr7p4oz09arenqdsfd58b98ix/c2FmZW5lc3QuY28uYnc%3D/img.gif') !important;
          }
        `;
        document.head.appendChild(style);
    }
  }, []);

  const homeSolutions = [
    "Smart Home Security Assessment",
    "Personal Device Protection",
    "Home Network Security Setup",
    "Password Management Solutions",
    "Secure WiFi Configuration",
    "Regular Security Updates"
  ];

  const homeSecondaryFeatures = [
    {
      icon: <Brain className="text-blue-400" size={20} />,
      title: "Cyber Hygiene Training",
      items: [
        "Password Security",
        "Safe Browsing Habits",
        "Social Media Privacy",
        "Device Protection Tips"
      ]
    }
  ];

  const businessSolutions = [
    "Network Penetration Testing",
    "Security Compliance Audits",
    "Infrastructure Security Assessment",
    "24/7 Security Monitoring",
    "Incident Response Planning"
  ];

  const businessSecondaryFeatures = [
    {
      icon: <Brain className="text-blue-400" size={20} />,
      title: "Cyber Awareness Training",
      items: [
        "Interactive Learning Modules",
        "Phishing Simulations",
        "Security Best Practices",
        "Compliance Training"
      ]
    },
    {
      icon: <Target className="text-blue-400" size={20} />,
      title: "Cyber Deception",
      items: [
        "Honeypot Deployment",
        "Threat Intelligence",
        "Attack Surface Mapping",
        "Early Warning System"
      ]
    }
  ];
  const phoneNumber = "+26777570440";
  const formattedPhone = "+267 77570440";
  const email = "info@safenest.co.bw";
  const linkedinUrl = "https://www.linkedin.com/company/safenest-cyber-consulting";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank');
  };

  const openSignal = () => {
    window.open(`https://signal.me/#p/${phoneNumber.replace('+', '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <nav className="container mx-auto px-6 flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png"
              alt="SafeNest Logo" 
              className="h-12"
            />
            <span className="text-xl font-bold">SafeNest</span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#solutions" className="hover:text-blue-400 transition">Solutions</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition">
              Free Consultation
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Protecting You Against People Like Us
            </h1>
            <p className="text-xl text-gray-300">
              Expert cybersecurity solutions for businesses and homes, delivered by certified ethical hackers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SolutionCard
              icon={Home}
              title="Home Solutions"
              features={homeSolutions}
              secondaryFeatures={homeSecondaryFeatures}
            />
            <SolutionCard
              icon={Server}
              title="Business Solutions"
              features={businessSolutions}
              secondaryFeatures={businessSecondaryFeatures}
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
            <p>
              Welcome to SafeNest Cyber Solutions, where your digital safety is our top priority. Founded by a Certified Ethical Hacker Master and proud member of ISC², we bring advanced expertise and an unwavering commitment to protecting businesses and individuals in an increasingly complex cyber landscape.
            </p>
            <p>
              At SafeNest Cyber Solutions, we specialize in identifying vulnerabilities before malicious actors can exploit them. Guided by our motto, "Protecting you against people like us," we provide cutting-edge cybersecurity services tailored to your unique needs. Whether you're safeguarding sensitive data, fortifying networks, or navigating compliance requirements, our team delivers reliable and innovative solutions that inspire confidence.
            </p>
            <p>
              Join us in creating a safer digital world—because your security is more than our mission; it's our promise.
            </p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive cybersecurity services tailored for both businesses and home users.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
              <Shield className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
              <p className="text-gray-300">Professional security assessments to identify vulnerabilities in your systems.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
              <AlertCircle className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Security Audits</h3>
              <p className="text-gray-300">Comprehensive evaluation of your security posture and compliance.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
              <Laptop className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Security Training</h3>
              <p className="text-gray-300">Expert-led cybersecurity awareness training for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Get in touch for a free consultation about securing your digital assets.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" />
                <a href={`mailto:${email}`} className="hover:text-blue-400 transition">
                  {email}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-400" />
                <a href={`tel:${phoneNumber}`} className="hover:text-blue-400 transition">
                  {formattedPhone}
                </a>
              </div>
              <div className="flex space-x-4 mt-8">
                <a 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-blue-400" size={24} />
                </a>
                <button 
                  onClick={openWhatsApp}
                  className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="text-blue-400" size={24} />
                </button>
                <button 
                  onClick={openSignal}
                  className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
                  aria-label="Signal"
                >
                  <Mail className="text-blue-400" size={24} />
                </button>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
              />
              <select className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none">
                <option value="">Select Service Type</option>
                <option value="pentest">Penetration Testing</option>
                <option value="audit">Security Audit</option>
                <option value="training">Security Training</option>
                <option value="consultation">Free Consultation</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
              ></textarea>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 SafeNest Cyber Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <button onClick={() => window.location.href='/privacy-policy'} className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</button>
              <button onClick={() => window.location.href='/terms-of-service'} className="text-gray-400 hover:text-blue-400 transition">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
  
