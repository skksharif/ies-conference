import { GraduationCap, Users, Globe, Building2 } from 'lucide-react';

const AboutKIT = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091F4E] mb-6">
            About Kurume Institute of Technology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Kurume Institute of Technology Campus"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in <span className="font-bold text-[#091F4E]">1966</span>, Kurume Institute of Technology (KIT)
                is nestled in the vibrant city of Kurume, the heart of the Chikugo region in southern Fukuoka Prefecture.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The campus is surrounded by the scenic beauty of the <span className="font-bold text-[#091F4E]">Chikugo River</span>,
                Kyushu's largest river, and the lush <span className="font-bold text-[#091F4E]">Mino Mountain Range</span>,
                offering an inspiring environment for learning and innovation.
              </p>
              <div className="bg-gradient-to-r from-[#091F4E] to-[#A23E3A] text-white p-6 rounded-xl">
                <p className="text-lg font-semibold italic text-center">
                  "Educating industrialists with a rich humanity"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#091F4E] to-[#0d2a5e] rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#E56B46]" />
            <div className="text-3xl font-bold mb-2">21,300+</div>
            <div className="text-sm opacity-90">Graduates Worldwide</div>
          </div>
          <div className="bg-gradient-to-br from-[#E56B46] to-[#A23E3A] rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1,400</div>
            <div className="text-sm opacity-90">Students</div>
          </div>
          <div className="bg-gradient-to-br from-[#A23E3A] to-[#091F4E] rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-[#E56B46]" />
            <div className="text-3xl font-bold mb-2">5</div>
            <div className="text-sm opacity-90">Departments</div>
          </div>
          <div className="bg-gradient-to-br from-[#091F4E] to-[#E56B46] rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">60</div>
            <div className="text-sm opacity-90">Years of Excellence</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#091F4E] mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              KIT has proudly upheld a nearly 60-year tradition of cultivating leaders grounded in the philosophy
              of educating industrialists with rich humanity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Institute provides personalized support in every aspect of student life, from academics to career
              preparation. Faculty and staff work hand-in-hand with students, ensuring they thrive in a safe, enriching,
              and enjoyable campus environment.
            </p>
            <a
              href="https://www.kurume-it.ac.jp/english/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-[#091F4E] to-[#A23E3A] text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Visit KIT Website →
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#E56B46] to-[#A23E3A] rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">About Kurume City</h3>
            <p className="leading-relaxed mb-4">
              Kurume is a vibrant medium-sized city in Fukuoka Prefecture with a population of <span className="font-bold">300,000 people</span>.
              It ranks third after Fukuoka and Kitakyushu cities in terms of size.
            </p>
            <p className="leading-relaxed mb-4">
              Located just <span className="font-bold">30 minutes by train</span> and less than an hour by car from Fukuoka City,
              Kurume is a transportation hub for southern Fukuoka Prefecture.
            </p>
            <p className="leading-relaxed">
              The city offers a perfect blend of modern amenities and traditional Japanese culture, making it an ideal
              destination for academic conferences and cultural exchange.
            </p>
            <a
              href="https://welcome-kurume.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-white text-[#091F4E] rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Kurume City →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKIT;
