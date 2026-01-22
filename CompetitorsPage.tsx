// src/competitors/CompetitorsPage.tsx
import React, { useState } from 'react'
import { useQuery, useAction, getCompetitors, addCompetitor } from 'wasp/client/operations'

const CompetitorsPage: React.FC = () => {
  const { data: competitors, isLoading, error } = useQuery(getCompetitors)
  const addCompetitorAction = useAction(addCompetitor)

  const [handle, setHandle] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!handle.trim()) return

    try {
      setSubmitting(true)
      await addCompetitorAction({ handle: handle.trim() })
      setHandle('')
    } catch (err: any) {
      console.error(err)
      alert(err.message || 'Error adding competitor')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-8">
<h1 className="text-3xl font-semibold tracking-tight">
  Surgeview
</h1>

<p className="text-gray-600 mt-2 max-w-md">
  Paste a TikTok handle and get a concise competitor brief showing
  what formats, hooks, and themes are driving views.
</p>


      {/* Form */}
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="e.g. gymshark, duolingo, your competitor"
        value={handle}
        onChange={e => setHandle(e.target.value)}
        className="flex-1 border rounded px-3 py-2"
      />

      <p className="text-xs text-gray-500">
  Works best with active TikTok accounts. Results take ~30 seconds.
</p>


      <button
        type="submit"
        disabled={submitting}
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
      >
        {submitting ? 'Adding...' : 'Add'}
      </button>
    </form>

      {/* List */}
      {isLoading && <p>Loading competitors...</p>}
      {error && <p className="text-red-500">Error loading competitors.</p>}

      {competitors && competitors.length === 0 && (
        <p className="text-gray-500">No competitors yet. Add your first one above.</p>
      )}

      {competitors && competitors.length > 0 && (
        <ul className="space-y-2">
          {competitors.map((c: any) => (
            <li
              key={c.id}
              className="border rounded px-3 py-2 flex items-center justify-between"
            >
              <div>
                <div className="font-medium">@{c.handle}</div>
                <div className="text-xs text-gray-500">{c.platform}</div>
              </div>
              <a
            href={`/app/competitors/${c.id}`}
            className="text-sm text-blue-600 underline"
            >
            View
            </a>

            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CompetitorsPage

