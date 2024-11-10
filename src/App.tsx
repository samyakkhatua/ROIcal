import React from 'react';
import { Calculator } from './components/Calculator';
import { Bot, Brain, Coins, Zap, ChevronDown, CheckCircle2, Building2 } from 'lucide-react';

function App() {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#5000ff] to-[#4000cc] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="text-sm text-gray-200 mb-1 tracking-widest">
            CONVERT<span className="text-yellow-400">x</span>
            </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Automation ROI Calculator
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            Calculate the potential return on investment for implementing AI automation in your business
          </p>
          <button
            onClick={scrollToCalculator}
            className="animate-bounce inline-flex items-center gap-2 text-white"
          >
            <span>Try the Calculator</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-white">
        <Calculator />
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Calculate AI ROI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Input Your Numbers',
                description: 'Enter your initial investment, expected cost savings, and time saved.',
              },
              {
                step: 2,
                title: 'View Real-Time Results',
                description: 'See your break-even point, annual ROI, and projected benefits instantly.',
              },
              {
                step: 3,
                title: 'Get Expert Analysis',
                description: 'Receive a detailed analysis from our automation experts.',
              },
            ].map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI Automation</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: 'Increased Efficiency',
                description: 'Automate repetitive tasks and streamline workflows',
              },
              {
                icon: <Coins className="w-8 h-8 text-purple-600" />,
                title: 'Cost Savings',
                description: 'Reduce operational costs and improve resource allocation',
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-600" />,
                title: 'Smart Decisions',
                description: 'Leverage AI insights for better business decisions',
              },
              {
                icon: <Bot className="w-8 h-8 text-purple-600" />,
                title: '24/7 Operation',
                description: 'Continuous operation without human intervention',
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'TechCorp Inc.',
                industry: 'Technology',
                savings: '45%',
                description: 'Reduced operational costs through AI-powered process automation',
              },
              {
                company: 'Global Logistics',
                industry: 'Supply Chain',
                savings: '60%',
                description: 'Improved efficiency with AI-driven route optimization',
              },
              {
                company: 'FinServe Solutions',
                industry: 'Finance',
                savings: '75%',
                description: 'Automated customer service with AI chatbots',
              },
            ].map((case_study) => (
              <div key={case_study.company} className="bg-white p-6 rounded-2xl shadow-lg">
                <Building2 className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{case_study.company}</h3>
                <p className="text-gray-500 mb-4">{case_study.industry}</p>
                <div className="text-3xl font-bold text-purple-600 mb-2">{case_study.savings}</div>
                <p className="text-gray-600">{case_study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How do I calculate ROI for AI automation?',
                answer: 'ROI is calculated by comparing the total benefits (cost savings + revenue increase) against the initial investment.',
              },
              {
                question: 'What costs should I consider for AI automation?',
                answer: 'Consider implementation costs, training, maintenance, and any necessary infrastructure upgrades.',
              },
              {
                question: 'How long until I see returns from AI automation?',
                answer: 'Break-even points vary but typically range from 6-18 months depending on the implementation scope.',
              },
              {
                question: 'Is AI automation suitable for small businesses?',
                answer: 'Yes! Many AI solutions are scalable and can be tailored to suit businesses of any size.',
              },
              {
                question: 'How does AI automation improve efficiency?',
                answer: 'AI automation streamlines repetitive tasks, reduces errors, and allows employees to focus on higher-value activities, leading to improved overall efficiency.',
              },
              {
                question: 'What are the cost savings associated with AI automation?',
                answer: 'AI automation can significantly reduce operational costs by minimizing manual labor, reducing errors, and optimizing resource utilization.',
              },
              {
                question: 'Can AI automation be integrated with existing systems?',
                answer: 'Yes, AI automation solutions are designed to integrate seamlessly with existing systems, ensuring minimal disruption and maximum efficiency.',
              },
              {
                question: 'What industries benefit the most from AI automation?',
                answer: 'Industries such as manufacturing, healthcare, finance, and retail benefit greatly from AI automation due to the high volume of repetitive tasks and data processing involved.',
              },
              {
                question: 'How secure is AI automation?',
                answer: 'AI automation solutions prioritize security and data privacy, implementing robust measures to protect sensitive information and ensure compliance with regulations.',
              },
              {
                question: 'What is the future of AI automation?',
                answer: 'The future of AI automation is promising, with advancements in machine learning and artificial intelligence driving more sophisticated and efficient automation solutions.',
              },
              {
                question: 'How can I measure the ROI of AI automation?',
                answer: 'The ROI of AI automation can be measured by tracking key performance indicators such as cost savings, efficiency improvements, error reduction, and employee productivity.',
              },
              {
                question: 'What are the initial steps to implement AI automation?',
                answer: 'The initial steps to implement AI automation include identifying suitable processes, selecting the right AI tools, and developing a strategic implementation plan.',
              },
              {
                question: 'How does AI automation impact customer experience?',
                answer: 'AI automation enhances customer experience by providing faster response times, personalized interactions, and consistent service quality.',
              },
              {
                question: 'Are there any risks associated with AI automation?',
                answer: 'While AI automation offers numerous benefits, potential risks include data privacy concerns, implementation costs, and the need for ongoing maintenance and updates.',
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#5000ff] to-[#4000cc] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a personalized ROI analysis and discover how AI automation can benefit your business
          </p>
          <a
            href="mailto:hello@convertx.in"
            className="inline-flex items-center gap-2 bg-white text-[#5000ff] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5" />
            Contact Us Today
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ConvertX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;