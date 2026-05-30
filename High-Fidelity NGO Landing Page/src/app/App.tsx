import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ChevronDown, ArrowRight, Clock, Heart } from 'lucide-react';
import logoDark from '../imports/InAmigos_dark.jpeg';
import logoLight from '../imports/InAmigos_light.jpeg';

export default function App() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');

  const quickAmounts = [10, 25, 50, 100];

  const campaigns = [
    {
      id: 1,
      title: 'Rural Digital Literacy',
      category: 'Education',
      description: 'Bringing technology education to underserved villages, empowering youth with digital skills for the future.',
      image: 'https://images.unsplash.com/photo-1585314540237-13cb52fe9998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      raised: 12450,
      goal: 15000,
      daysLeft: 12
    },
    {
      id: 2,
      title: 'Clean Water Initiative',
      category: 'Sanitation',
      description: 'Installing sustainable water pumps and wells in remote communities to provide access to clean drinking water.',
      image: 'https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      raised: 8200,
      goal: 12000,
      daysLeft: 18
    },
    {
      id: 3,
      title: 'Women Empowerment Training',
      category: 'Livelihood',
      description: 'Skill development programs teaching tailoring and entrepreneurship to help women achieve financial independence.',
      image: 'https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      raised: 5800,
      goal: 10000,
      daysLeft: 25
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "InAmigos gave me the opportunity to learn computers. Now I help my village access government services online.",
      name: "Rajesh Kumar",
      role: "Beneficiary Student",
      initials: "RK"
    },
    {
      id: 2,
      quote: "Supporting this foundation monthly has been the most rewarding decision. I see real impact in every report they share.",
      name: "Priya Sharma",
      role: "Monthly Donor Partner",
      initials: "PS",
      badge: true
    },
    {
      id: 3,
      quote: "Volunteering with InAmigos connected me to incredible people working towards genuine change. It's transformative.",
      name: "Michael D'Souza",
      role: "Volunteer Coordinator",
      initials: "MD"
    }
  ];

  const currentAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
  const mealsProvided = Math.floor(currentAmount / 5);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={logoDark}
                alt="InAmigos Foundation"
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#campaigns" className="text-white/80 hover:text-white transition-colors">Campaigns</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              <a href="#volunteer" className="text-white/80 hover:text-white transition-colors">Volunteer</a>
              <a href="#stories" className="text-white/80 hover:text-white transition-colors">Impact Stories</a>
            </nav>

            <button className="bg-[#059669] text-white px-6 py-2.5 rounded-lg hover:bg-[#047857] transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758599668209-783bd3691ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Diverse volunteers working together outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-white/90 text-sm">Youth-Led Social Impact</span>
            </div>

            <h1 className="text-6xl leading-tight mb-6 text-white">
              Creating Change Through{' '}
              <span className="text-[#EA580C]">Compassion & Community</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We empower underrepresented communities across India through education, sustainable infrastructure,
              and livelihood programs that create lasting positive change.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#EA580C] text-white px-8 py-4 rounded-lg hover:bg-[#DC2626] transition-colors flex items-center gap-2">
                Become a Volunteer
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Explore Projects
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="text-white/70 text-sm mb-2">Scroll to Explore</div>
          <ChevronDown className="w-6 h-6 text-white/70 mx-auto animate-bounce" />
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="bg-white py-12 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl text-[#059669] mb-2">15,400+</div>
              <div className="text-slate-600">Beneficiaries Fed & Educated</div>
            </div>
            <div>
              <div className="text-5xl text-[#059669] mb-2">120+</div>
              <div className="text-slate-600">Active Local Campaigns</div>
            </div>
            <div>
              <div className="text-5xl text-[#059669] mb-2">92%</div>
              <div className="text-slate-600">Direct Aid Efficiency Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Widget Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#059669] text-white text-sm mb-4">
                Take Action
              </div>
              <h2 className="text-4xl text-[#1C1917] mb-4">Support Our Cause</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your contribution directly funds meals, education materials, and community infrastructure.
                We maintain full financial transparency with 92% of donations going directly to program delivery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/[0.06]">
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 py-3 rounded-lg transition-colors ${
                    donationType === 'one-time'
                      ? 'bg-[#059669] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 rounded-lg transition-colors ${
                    donationType === 'monthly'
                      ? 'bg-[#059669] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Monthly Partner
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 rounded-lg border-2 transition-colors ${
                      selectedAmount === amount && !customAmount
                        ? 'border-[#059669] bg-[#059669]/5 text-[#059669]'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Other Amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🍚</div>
                  <div className="flex-1">
                    <div className="text-sm text-amber-900">
                      Provides <strong>{mealsProvided} children</strong> with healthy meals for a full week.
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#EA580C] text-white py-4 rounded-lg hover:bg-[#DC2626] transition-colors">
                Donate ${currentAmount} Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Campaigns Grid */}
      <section id="campaigns" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1C1917] mb-4">Active Campaigns</h2>
            <p className="text-lg text-slate-600">Support ongoing projects making real impact in communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => {
              const progress = (campaign.raised / campaign.goal) * 100;
              return (
                <div key={campaign.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/[0.06] hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <ImageWithFallback
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white rounded-full text-sm text-[#1C1917]">
                        {campaign.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl text-[#1C1917] mb-2">{campaign.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{campaign.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#059669]">Raised ${campaign.raised.toLocaleString()}</span>
                        <span className="text-slate-500">of ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#059669] rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                      <button className="px-4 py-2 border-2 border-[#059669] text-[#059669] rounded-lg hover:bg-[#059669] hover:text-white transition-colors">
                        Support
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Onboarding Form */}
      <section id="volunteer" className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl text-[#1C1917] mb-6">We need your skills & passion</h2>
              <div className="space-y-4">
                {[
                  'Make a meaningful difference in underserved communities',
                  'Connect with like-minded changemakers',
                  'Gain hands-on experience in social impact work',
                  'Flexible commitment based on your availability'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/[0.06]">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">Your Skills</label>
                  <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none bg-white">
                    <option>Select a skill area</option>
                    <option>Teaching & Education</option>
                    <option>Design & Creative</option>
                    <option>Technology & Development</option>
                    <option>Event Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">Availability</label>
                  <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none bg-white">
                    <option>Select your availability</option>
                    <option>Weekends Only</option>
                    <option>Weekdays (Flexible)</option>
                    <option>Full-time (40+ hours/week)</option>
                    <option>Part-time (10-20 hours/week)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#059669] text-white py-4 rounded-lg hover:bg-[#047857] transition-colors"
                >
                  Submit Volunteer Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1C1917] mb-4">Voices of Impact</h2>
            <p className="text-lg text-slate-600">Stories from our community members and supporters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg border border-black/[0.06]">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#059669]/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-slate-700 leading-relaxed mt-4">{testimonial.quote}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#059669] flex items-center justify-center text-white">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1">
                    <div className="text-[#1C1917] flex items-center gap-2">
                      {testimonial.name}
                      {testimonial.badge && (
                        <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
                      )}
                    </div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1917] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <ImageWithFallback
                src={logoDark}
                alt="InAmigos Foundation"
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Uniting minds for change through community-driven social impact initiatives across India.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-4">Organization</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Annual Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-4">Get Involved</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Start a Campaign</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>info@inamigos.org</li>
                <li>+91 98765 43210</li>
                <li>Mumbai, Maharashtra</li>
                <li>India</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2026 InAmigos Foundation. All rights reserved.
            </div>
            <div className="flex gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
