// src/landing-page/LandingPage.tsx
import { Link } from 'wasp/client/router'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-black dark:text-white">
          Turn Any TikTok Handle Into a{' '}
          <span className="text-blue-600 dark:text-blue-400">Competitor Brief in 30 Seconds</span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Stop spending hours scrolling TikTok to analyze competitors. 
          Paste a handle, get instant insights on their best-performing formats, hooks, and themes.
        </p>

        <div className="flex gap-4 justify-center mb-4">
          <Link 
            to="/signup" 
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            Start Free Trial
          </Link>
          <Link 
            to="/pricing" 
            className="border border-gray-300 dark:border-gray-600 text-black dark:text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            View Pricing
          </Link>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Free trial includes 3 competitor analyses • No credit card required
        </p>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            The Old Way Is Broken
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">😫</div>
              <h3 className="font-semibold mb-2 text-black dark:text-white">Hours of Manual Work</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Scrolling through hundreds of posts, taking screenshots, and making notes in spreadsheets.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-semibold mb-2 text-black dark:text-white">No Clear Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                You see the numbers but don't know what formats, hooks, or themes actually drive views.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="font-semibold mb-2 text-black dark:text-white">Constantly Outdated</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                By the time you finish your analysis, competitors have posted 10 more videos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-black dark:text-white">
            Get Actionable Insights in Seconds
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Surgeview analyzes your competitor's content and tells you exactly what to replicate.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-black dark:text-white">Paste a TikTok Handle</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Enter any TikTok username. No complicated setup.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-black dark:text-white">We Analyze Their Content</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Our AI reviews their last 20 posts, view counts, engagement, and patterns.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-black dark:text-white">Get Your Brief</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      See exactly what formats, hooks, and themes drive their views—what you should copy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm mb-4 border border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">AI Insight</div>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Their highest-performing content uses <strong>creator-led challenges</strong>, 
                  behind-the-scenes product teases and relatable gym moments. 
                  Most viral videos are short (6-12s) with <strong>strong hooks in the first second</strong>. 
                  Top formats: POV-style storytelling, day-in-the-life vlogs.
                </p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                ↑ Real AI-generated insight example
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🎯', title: 'Real TikTok Data', desc: 'Actual view counts, likes, comments from their latest posts. No guessing.' },
              { emoji: '🤖', title: 'AI-Powered Analysis', desc: 'Our AI identifies patterns humans miss—what actually drives engagement.' },
              { emoji: '🔄', title: 'One-Click Refresh', desc: 'Update your analysis anytime with fresh data. See their latest posts.' },
              { emoji: '⚡', title: '30-Second Setup', desc: 'No spreadsheets. No manual work. Just paste and go.' },
              { emoji: '📊', title: 'Performance Metrics', desc: 'Average views, top posts, engagement trends—all in one place.' },
              { emoji: '💼', title: 'Built for Agencies', desc: 'Analyze unlimited competitors. Perfect for client onboarding.' },
            ].map((feature, i) => (
              <div key={i} className="text-gray-800 dark:text-gray-200">
                <div className="text-2xl mb-3">{feature.emoji}</div>
                <h3 className="font-semibold mb-2 text-black dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🎬', title: 'Content Creators', desc: 'Learn from successful accounts in your niche without endless scrolling.' },
              { emoji: '🏢', title: 'Social Media Agencies', desc: 'Onboard clients faster with data-backed competitor insights.' },
              { emoji: '📈', title: 'Marketing Teams', desc: 'Build content strategies based on what\'s actually working.' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black dark:bg-white text-white dark:text-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Stop Guessing?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-700 mb-8">
            Start analyzing competitors in seconds.
          </p>
          
          <Link 
            to="/signup" 
            className="inline-block bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            Start Free Trial
          </Link>
          
          <p className="text-sm text-gray-400 dark:text-gray-600 mt-4">
            3 free competitor analyses • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-black dark:text-white">Surgeview</span>
            </div>

            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
              <Link to="/demo" className="hover:text-gray-900 dark:hover:text-white">View Example</Link>
              <Link to="/pricing" className="hover:text-gray-900 dark:hover:text-white">Pricing</Link>
              <Link to="/contact" className="hover:text-gray-900 dark:hover:text-white">Contact</Link>
              <Link to="/login" className="hover:text-gray-900 dark:hover:text-white">Login</Link>
              <Link to="/signup" className="hover:text-gray-900 dark:hover:text-white">Sign Up</Link>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2026 Surgeview. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}