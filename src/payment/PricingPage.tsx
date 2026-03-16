// src/payment/PricingPage.tsx
import { Link } from 'wasp/client/router'
import { useState } from 'react'

export default function PricingPage() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-20"></div>
     
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that fits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Free Trial */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Free Trial</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-black dark:text-white">$0</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Try before you buy</p>
            </div>

            <Link
              to="/signup"
              className="block w-full text-center border-2 border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 mb-6"
            >
              Start Free
            </Link>

            <div className="space-y-3 text-sm">
              <Feature text="3 competitor analyses" />
              <Feature text="Demo data" />
              <Feature text="Basic insights" />
              <Feature text="7-day access" />
              <Feature text="No credit card" gray />
            </div>
          </div>

          {/* Starter */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Starter</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-black dark:text-white">$19</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">For solo creators</p>
            </div>

            <Link
              to="/signup"
              className="block w-full text-center bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 mb-6"
            >
              Get Started
            </Link>

            <div className="space-y-3 text-sm">
              <Feature text="10 competitors/month" highlight />
              <Feature text="Real TikTok data" highlight />
              <Feature text="AI insights" highlight />
              <Feature text="Refresh data" highlight />
              <Feature text="Email support" gray />
            </div>
          </div>

          {/* Pro - Most Popular */}
          <div className="border-2 border-blue-600 dark:border-blue-400 rounded-lg p-6 relative bg-white dark:bg-gray-800">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Pro</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-black dark:text-white">$49</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">For agencies</p>
            </div>

            <Link
              to="/signup"
              className="block w-full text-center bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-500 mb-6"
            >
              Get Started
            </Link>

            <div className="space-y-3 text-sm">
              <Feature text="Unlimited competitors" highlight />
              <Feature text="Real TikTok data" highlight />
              <Feature text="Advanced AI insights" highlight />
              <Feature text="Unlimited refreshes" highlight />
              <Feature text="Priority support" highlight />
              <Feature text="Export reports" gray />
            </div>
          </div>

          {/* Enterprise */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Enterprise</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-black dark:text-white">Custom</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">For large teams</p>
            </div>

            <button
              onClick={() => setShowContactForm(true)}
              className="w-full text-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 mb-6"
            >
              Contact Sales
            </button>

            <div className="space-y-3 text-sm">
              <Feature text="Everything in Pro" highlight />
              <Feature text="Team accounts" highlight />
              <Feature text="White-label option" highlight />
              <Feature text="Custom integrations" highlight />
              <Feature text="Dedicated support" highlight />
              <Feature text="SLA guarantee" gray />
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <EnterpriseContactForm onClose={() => setShowContactForm(false)} />
        )}

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <FAQItem
              question="How does the free trial work?"
              answer="Get 3 competitor analyses with demo data for 7 days. No credit card required. Perfect for testing Surgeview before committing."
            />

            <FAQItem
              question="What's the difference between the plans?"
              answer="Starter is for solo creators (10 competitors/month). Pro is for agencies (unlimited). Enterprise adds team features and white-labeling."
            />

            <FAQItem
              question="Can I upgrade or downgrade anytime?"
              answer="Yes! Change plans anytime. Upgrades take effect immediately. Downgrades apply at the end of your billing cycle."
            />

            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, AmEx) through Stripe. Enterprise customers can pay via invoice."
            />

            <FAQItem
              question="Do you offer refunds?"
              answer="Yes, 7-day money-back guarantee on all paid plans. If you're not satisfied, email us for a full refund."
            />

            <FAQItem
              question="How often is data updated?"
              answer="You can refresh competitor data anytime with one click. Starter gets 10 refreshes/month, Pro gets unlimited."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join creators and agencies using Surgeview
          </p>
          <Link
            to="/signup"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
  )
}

function Feature({ text, highlight, gray }: { text: string; highlight?: boolean; gray?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`flex-shrink-0 w-5 h-5 mt-0.5 ${
        highlight ? 'text-green-600 dark:text-green-400' : 
        gray ? 'text-gray-400 dark:text-gray-500' : 
        'text-gray-600 dark:text-gray-400'
      }`}>
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <span className={`${
        highlight ? 'font-medium text-black dark:text-white' : 
        gray ? 'text-gray-500 dark:text-gray-400' :
        'text-gray-700 dark:text-gray-300'
      }`}>{text}</span>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-black dark:text-white">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  )
}

function EnterpriseContactForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send to your backend/email service
    alert('Thank you! We\'ll contact you within 24 hours.')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-black dark:text-white">Contact Sales</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">Company *</label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">Team Size *</label>
            <select
              required
              value={formData.teamSize}
              onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-black dark:text-white"
            >
              <option value="">Select...</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201+">201+ employees</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">Message</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Tell us about your needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  )
}
