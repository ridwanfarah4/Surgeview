// src/demo/DemoPage.tsx

export default function DemoPage() {
  // Hardcoded demo data - no database calls, loads instantly
  const demoData = {
    handle: 'Mrbeast',
    displayName: 'MrBeast',
    platform: 'TikTok',
    posts: [
      {
        id: 1,
        caption: 'I Spent 50 Hours Buried Alive',
        views: 125000000,
        likes: 8500000,
        comments: 125000,
        publishedAt: '2024-03-05',
        category: 'Extreme Challenge',
      },
      {
        id: 2,
        caption: '$1 vs $100,000,000 House!',
        views: 98000000,
        likes: 6200000,
        comments: 95000,
        publishedAt: '2024-03-01',
        category: 'Comparison',
      },
      {
        id: 3,
        caption: 'Last To Leave Circle Wins $500,000',
        views: 110000000,
        likes: 7800000,
        comments: 110000,
        publishedAt: '2024-02-28',
        category: 'Competition',
      },
      {
        id: 4,
        caption: 'I Built 100 Wells In Africa',
        views: 95000000,
        likes: 8200000,
        comments: 135000,
        publishedAt: '2024-02-25',
        category: 'Philanthropy',
      },
      {
        id: 5,
        caption: '$1 vs $1,000,000 Airplane Ticket!',
        views: 88000000,
        likes: 5900000,
        comments: 82000,
        publishedAt: '2024-02-20',
        category: 'Comparison',
      },
      {
        id: 6,
        caption: 'I Survived 7 Days In An Abandoned City',
        views: 92000000,
        likes: 6500000,
        comments: 88000,
        publishedAt: '2024-02-15',
        category: 'Extreme Challenge',
      },
      {
        id: 7,
        caption: 'World\'s Largest Lego Tower',
        views: 78000000,
        likes: 5200000,
        comments: 65000,
        publishedAt: '2024-02-10',
        category: 'World Record',
      },
      {
        id: 8,
        caption: 'I Gave My 100,000,000th Subscriber A Private Island',
        views: 150000000,
        likes: 12000000,
        comments: 180000,
        publishedAt: '2024-02-05',
        category: 'Giveaway',
      },
      {
        id: 9,
        caption: '$1 vs $100,000 Vacation!',
        views: 85000000,
        likes: 5800000,
        comments: 75000,
        publishedAt: '2024-02-01',
        category: 'Comparison',
      },
      {
        id: 10,
        caption: 'I Opened A Free Bank',
        views: 72000000,
        likes: 4900000,
        comments: 68000,
        publishedAt: '2024-01-28',
        category: 'Philanthropy',
      },
    ],
    
    // Content categories analysis
    categories: [
      {
        name: 'Comparison',
        count: 3,
        avgViews: 90333333,
        avgEngagement: 6.8,
        trend: 'up',
        description: '$1 vs $X format - consistently high performance',
        examples: ['$1 vs $100M House', '$1 vs $1M Airplane Ticket'],
      },
      {
        name: 'Extreme Challenge',
        count: 2,
        avgViews: 108500000,
        avgEngagement: 7.2,
        trend: 'stable',
        description: 'Life-or-death scenarios, extreme endurance tests',
        examples: ['50 Hours Buried Alive', '7 Days In Abandoned City'],
      },
      {
        name: 'Philanthropy',
        count: 2,
        avgViews: 83500000,
        avgEngagement: 9.1,
        trend: 'up',
        description: 'Charitable acts - highest comment engagement',
        examples: ['100 Wells In Africa', 'Free Bank'],
      },
      {
        name: 'Giveaway',
        count: 1,
        avgViews: 150000000,
        avgEngagement: 8.5,
        trend: 'up',
        description: 'Prize giveaways - highest view counts',
        examples: ['Private Island Giveaway'],
      },
      {
        name: 'Competition',
        count: 1,
        avgViews: 110000000,
        avgEngagement: 7.5,
        trend: 'stable',
        description: 'Last-to-leave challenges with cash prizes',
        examples: ['Last To Leave Circle $500K'],
      },
      {
        name: 'World Record',
        count: 1,
        avgViews: 78000000,
        avgEngagement: 7.0,
        trend: 'down',
        description: 'Record-breaking attempts - lower performance',
        examples: ['World\'s Largest Lego Tower'],
      },
    ],

    // Trending content in each category (simulated "last 24 hours")
    trendingByCategory: [
      {
        category: 'Comparison',
        trendingNow: [
          { title: '$1 vs $100K Gaming Setup', creator: '@techreviewer', views: '45M', postedHours: 18 },
          { title: 'Cheap vs Expensive Workout Routine', creator: '@fitnessguru', views: '38M', postedHours: 12 },
          { title: '$10 vs $10,000 Date Night', creator: '@couplegoals', views: '52M', postedHours: 8 },
        ],
        insight: 'Comparison content is surging - "cheap vs expensive" format works across all niches. Gaming and lifestyle comparisons trending highest.',
      },
      {
        category: 'Extreme Challenge',
        trendingNow: [
          { title: 'I Lived In A Car For 30 Days', creator: '@minimalistlife', views: '62M', postedHours: 20 },
          { title: '24 Hours Handcuffed To My Worst Enemy', creator: '@pranksters', views: '71M', postedHours: 15 },
          { title: 'Surviving On $1 Food For A Week', creator: '@budgetchef', views: '48M', postedHours: 6 },
        ],
        insight: 'Endurance challenges with social dynamics (handcuffed, worst enemy) getting 20% more engagement than solo challenges.',
      },
      {
        category: 'Philanthropy',
        trendingNow: [
          { title: 'Paying Off Random People\'s Debt', creator: '@kindnessmatters', views: '89M', postedHours: 22 },
          { title: 'Building Homes For Homeless Veterans', creator: '@militarysupport', views: '67M', postedHours: 14 },
          { title: 'Free Groceries For 1000 Families', creator: '@communitylove', views: '73M', postedHours: 9 },
        ],
        insight: 'Debt relief content exploding (89M views) - highly emotional, shareable. Veteran support and family-focused giving also strong.',
      },
    ],

    insight: `MrBeast's content follows a proven high-stakes formula across 6 distinct categories. Top performing categories: Giveaways (150M avg), Extreme Challenges (108M avg), and Competitions (110M avg).\n\nContent Strategy Breakdown:\n• Comparison videos (30% of content) provide consistent 90M+ views with "$1 vs $X" formula\n• Philanthropy content drives 40% higher comment engagement despite slightly lower views\n• Giveaway content generates peak virality but used sparingly (10% of posts)\n\nPosting pattern: Tuesdays and Thursdays, 2-4PM EST. Videos featuring multiple categories (e.g., Comparison + Philanthropy) see 25% engagement boost.`,
  }

  const totalViews = demoData.posts.reduce((sum, p) => sum + p.views, 0)
  const totalLikes = demoData.posts.reduce((sum, p) => sum + p.likes, 0)
  const avgViews = Math.round(totalViews / demoData.posts.length)
  const avgLikes = Math.round(totalLikes / demoData.posts.length)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Demo Banner */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 mb-8 rounded">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl">👋</span>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                This is a <strong>live demo</strong> using sample data for @mrbeast. 
                <a href="/signup" className="font-semibold underline ml-1 text-black dark:text-white">
                  Sign up free
                </a> to analyze your own competitors with real TikTok data and AI insights.
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
            @{demoData.handle}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {demoData.displayName} • {demoData.platform}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">
              Posts Analyzed
            </p>
            <p className="text-3xl font-bold text-black dark:text-white">
              {demoData.posts.length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">
              Avg Views
            </p>
            <p className="text-3xl font-bold text-black dark:text-white">
              {avgViews.toLocaleString()}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">
              Content Categories
            </p>
            <p className="text-3xl font-bold text-black dark:text-white">
              {demoData.categories.length}
            </p>
          </div>
        </div>

        {/* AI Insight */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-lg p-8 mb-10">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-3xl">🤖</span>
            <h3 className="text-xl font-bold text-black dark:text-white">
              AI-Powered Strategy Insight
            </h3>
          </div>
          <div className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed">
            {demoData.insight}
          </div>
        </div>

        {/* NEW: Content Categories Breakdown */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Content Categories
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              What types of content perform best
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {demoData.categories.map((category) => (
              <div 
                key={category.name}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-black dark:text-white">
                    {category.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    category.trend === 'up' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                      : category.trend === 'down'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {category.trend === 'up' ? '↗ Trending' : category.trend === 'down' ? '↘ Cooling' : '→ Stable'}
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Posts:</span>
                    <span className="font-semibold text-black dark:text-white">{category.count}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Avg Views:</span>
                    <span className="font-semibold text-black dark:text-white">
                      {(category.avgViews / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Engagement:</span>
                    <span className="font-semibold text-black dark:text-white">{category.avgEngagement}%</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  {category.description}
                </p>

                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Examples:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.slice(0, 2).map((example, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW: Trending Content by Category (Last 24 Hours) */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 dark:border-purple-400 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Trending Content - Last 24 Hours
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  See what's working RIGHT NOW in each category. Use these insights to create timely, relevant content.
                </p>
              </div>
            </div>
          </div>

          {demoData.trendingByCategory.map((categoryTrend) => (
            <div 
              key={categoryTrend.category}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6"
            >
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {categoryTrend.category} - Trending Now
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 italic">
                💡 {categoryTrend.insight}
              </p>

              <div className="space-y-3">
                {categoryTrend.trendingNow.map((video, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-black dark:text-white">
                          {video.title}
                        </span>
                        <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-0.5 rounded-full">
                          {video.postedHours}h ago
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        by {video.creator}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {video.views}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">views</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Mid-page */}
        <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-6 mb-10 text-center">
          <p className="text-sm font-medium mb-3">
            Want category insights + trending content for YOUR niche?
          </p>
          <a
            href="/signup"
            className="inline-block bg-white dark:bg-black text-black dark:text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            Start Free Trial →
          </a>
        </div>

        {/* Posts Table */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
            Recent Posts by Category
          </h3>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Caption
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Category
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Views
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Likes
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Published
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {demoData.posts.map((post, index) => (
                    <tr 
                      key={post.id} 
                      className={`border-b border-gray-100 dark:border-gray-700 last:border-0 ${
                        index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'
                      }`}
                    >
                      <td className="py-4 px-4 text-gray-900 dark:text-gray-100">
                        {post.caption}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-block text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right font-medium text-gray-900 dark:text-gray-100">
                        {post.views.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right text-gray-700 dark:text-gray-300">
                        {post.likes.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-black to-gray-900 dark:from-white dark:to-gray-100 text-white dark:text-black rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Reinvent Your Content Strategy?
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-700 mb-6 max-w-2xl mx-auto">
            Get content categories, trending insights, and competitive intelligence for any TikTok handle. Know what's working before your competitors do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/signup"
              className="inline-block bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors shadow-lg"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="inline-block border-2 border-white dark:border-black text-white dark:text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
            >
              View Pricing
            </a>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-600 mt-4">
            No credit card required • 3 free competitor analyses
          </p>
        </div>
      </div>
    </div>
  )
}
