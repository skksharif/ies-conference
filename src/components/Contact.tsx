import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const conveners = [
    {
      name: 'Prof. Shuichi Torii',
      role: 'Convener',
      institution: 'Kurume Institute of Technology',
      country: 'Japan',
      flag: '🇯🇵',
      email: 'torii@kurume-it.ac.jp',
      phone: '+81 8052628896'
    },
    {
      name: 'Prof. Katta Venkataramana',
      role: 'Convener',
      institution: 'NITK Surathkal (Retired Professor)',
      country: 'India',
      flag: '🇮🇳',
      email: 'katta@nitk.edu.in',
      phone: '+91 94484 75875'
    }
  ];

  const coConveners = [
    {
      name: 'Dr. Raju Aedla',
      role: 'Co-Convener',
      institution: 'VEDIC, Sri Vishnu Educational Society',
      country: 'India',
      flag: '🇮🇳',
      email: 'raju.aedla@vedic.edu.in',
      phone: '+91 99855 45035'
    },
    {
      name: 'Dr. C. M. Ravikumar',
      role: 'Co-Convener',
      institution: 'UBDT College of Engineering',
      country: 'India',
      flag: '🇮🇳',
      email: 'cmravibdt@gmail.com',
      phone: '+91 98450 01540'
    },
    {
      name: 'Dr. Satyanarayan',
      role: 'Co-Convener',
      institution: "Alva's Institute of Engineering & Technology",
      country: 'India',
      flag: '🇮🇳',
      email: 'satyan.nitk@gmail.com',
      phone: '+91 99648 10960'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#091F4E] to-[#0d2a5e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conveners & Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#E56B46] text-center mb-8">Conveners</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {conveners.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{person.flag}</div>
                  <h4 className="text-xl font-bold text-[#091F4E] mb-1">{person.name}</h4>
                  <p className="text-sm font-semibold text-[#E56B46] mb-2">{person.role}</p>
                  <p className="text-sm text-gray-600">{person.institution}</p>
                  <p className="text-sm text-gray-500">{person.country}</p>
                </div>
                <div className="space-y-3 mt-6">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-[#E56B46] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">{person.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">{person.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#E56B46] text-center mb-8">Co-Conveners</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coConveners.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{person.flag}</div>
                  <h4 className="text-lg font-bold text-[#091F4E] mb-1">{person.name}</h4>
                  <p className="text-xs font-semibold text-[#E56B46] mb-2">{person.role}</p>
                  <p className="text-xs text-gray-600 min-h-[2.5rem]">{person.institution}</p>
                </div>
                <div className="space-y-2 mt-4">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 text-gray-700 hover:text-[#E56B46] transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs truncate">{person.email}</span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs">{person.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-[#E56B46]" />
            <h3 className="text-xl font-bold">Venue Address</h3>
          </div>
          <p className="text-lg">
            Kurume Institute of Technology<br />
            Kurume City, Fukuoka Prefecture, 830-0052<br />
            JAPAN
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
