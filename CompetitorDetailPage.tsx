import React from 'react'
import { useParams } from 'react-router-dom'
import {
  useQuery,
  useAction,
  getCompetitorDetail,
  generateDemoDataForCompetitor,
} from 'wasp/client/operations'

const CompetitorDetailPage: React.FC = () => {
  const { id } = useParams()
  const numericId = Number(id)

  if (!id) return <div className="p-6">Missing competitor id.</div>
  if (Number.isNaN(numericId)) return <div className="p-6">Invalid competitor id: {id}</div>

  // ✅ This is what you were missing — it defines data/isLoading/error
  const { data, isLoading, error } = useQuery(getCompetitorDetail, { id: numericId })

  const generateDemo = useAction(generateDemoDataForCompetitor)

  const handleGenerate = async () => {
    await generateDemo({ id: numericId })
    window.location.reload()
  }

  if (isLoading) return <div className="p-6">Loading…</div>

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-600 font-medium">Error loading competitor</div>
        <pre className="text-xs mt-2 whitespace-pre-wrap">
          {String((error as any)?.message ?? error)}
        </pre>
        <a className="underline text-sm" href="/app/competitors">← Back</a>
      </div>
    )
  }

  if (!data) return <div className="p-6">No data returned.</div>

  const posts = data.posts ?? []
  const totalViews = posts.reduce((sum: number, p: any) => sum + (p.views || 0), 0)
  const totalLikes = posts.reduce((sum: number, p: any) => sum + (p.likes || 0), 0)
  const avgViews = posts.length ? Math.round(totalViews / posts.length) : 0
  const avgLikes = posts.length ? Math.round(totalLikes / posts.length) : 0


  return (
    <div className="max-w-3xl mx-auto py-10 space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">@{data.handle}</h1>

        <button
          onClick={handleGenerate}
          className="text-sm px-3 py-1 rounded border border-gray-300 mt-3"
        >
          {posts.length ? 'Regenerate demo data' : 'Generate demo data'}
        </button>

        <div className="text-sm text-gray-500 mt-2">{data.platform}</div>
      </div>
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Posts analyzed</p>
          <p className="text-xl font-semibold">{posts.length}</p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Avg views</p>
          <p className="text-xl font-semibold">
            {posts.length ? avgViews.toLocaleString() : '—'}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Avg likes</p>
          <p className="text-xl font-semibold">
            {posts.length ? avgLikes.toLocaleString() : '—'}
          </p>
        </div>
      </div>

      <div className="border rounded p-4">
        <div className="font-medium mb-2">AI Insight</div>
        <div className="text-sm text-gray-600">
          {data.aiInsights?.[0]?.summary ?? 'No insight yet.'}
        </div>
      </div>

           <div>
        <div className="font-medium mb-2">Recent posts</div>

        {posts.length === 0 ? (
          <div className="text-sm text-gray-600">No posts yet.</div>
        ) : (
          <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-2 px-3">Caption</th>
                  <th className="text-right py-2 px-3">Views</th>
                  <th className="text-right py-2 px-3">Likes</th>
                  <th className="text-right py-2 px-3">Comments</th>
                  <th className="text-right py-2 px-3">Published</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p: any) => (
                  <tr key={p.id} className="border-b last:border-0">
                    <td className="py-2 px-3 max-w-xs truncate">{p.caption}</td>
                    <td className="py-2 px-3 text-right">{p.views?.toLocaleString?.() ?? p.views}</td>
                    <td className="py-2 px-3 text-right">{p.likes?.toLocaleString?.() ?? p.likes}</td>
                    <td className="py-2 px-3 text-right">{p.comments?.toLocaleString?.() ?? p.comments}</td>
                    <td className="py-2 px-3 text-right">
                      {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>


      <a className="underline text-sm" href="/app/competitors">← Back</a>
    </div>
  )
}

export default CompetitorDetailPage
