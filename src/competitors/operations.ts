// src/competitors/operations.ts

// List competitors for the logged-in user
export const getCompetitors = async (_args: unknown, context: any) => {
  if (!context.user) {
    throw new Error('Not authenticated')
  }

  return context.entities.Competitor.findMany({
    where: { userId: context.user.id },
    orderBy: { createdAt: 'desc' }
  })
}

// Add a new competitor
export const addCompetitor = async (args: { handle: string }, context: any) => {
  if (!context.user) {
    throw new Error('Not authenticated')
  }

  const handle = args.handle?.trim()
  if (!handle) {
    throw new Error('Handle is required')
  }

  // ✅ FIX #1: Check if competitor already exists (prevents duplicates)
  const existing = await context.entities.Competitor.findFirst({
    where: {
      userId: context.user.id,
      handle: handle
    }
  })

  if (existing) {
    throw new Error('You already added this competitor')
  }

  return context.entities.Competitor.create({
    data: {
      userId: context.user.id,
      platform: 'tiktok',
      handle
    }
  })
}

export const getCompetitorDetail = async (
  args: { id: number },
  context: any
) => {
  if (!context.user) {
    throw new Error('Not authenticated')
  }

  const competitor = await context.entities.Competitor.findFirst({
    where: {
      id: args.id,
      userId: context.user.id
    },
    include: {
      posts: {
        orderBy: { publishedAt: 'desc' }
      },
      aiInsights: {
        orderBy: { createdAt: 'desc' },
        take: 1
      }
    }
  })

  if (!competitor) {
    throw new Error('Competitor not found')
  }

  return competitor
}

// Generate demo posts + a fake AI insight for a competitor
export const generateDemoDataForCompetitor = async (
  args: { id: number },
  context: any
) => {
  if (!context.user) {
    throw new Error('Not authenticated')
  }

  const competitor = await context.entities.Competitor.findFirst({
    where: {
      id: args.id,
      userId: context.user.id,
    },
  })

  if (!competitor) {
    throw new Error('Competitor not found')
  }

  // Check if posts already exist
  const existingPostsCount = await context.entities.Post.count({
    where: { competitorId: competitor.id }
  })

  // ✅ FIX #2: Allow regeneration - delete old data first
  if (existingPostsCount > 0) {
    await context.entities.Post.deleteMany({
      where: { competitorId: competitor.id }
    })
    await context.entities.AiInsight.deleteMany({
      where: { competitorId: competitor.id }
    })
  }

  // More demo posts for better analysis
  const demoPosts = [
    {
      platformPostId: 'demo1',
      url: `https://www.tiktok.com/@${competitor.handle}/video/1`,
      caption: 'Behind-the-scenes of our new drop 🔥',
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      views: 250000,
      likes: 18000,
      comments: 450,
    },
    {
      platformPostId: 'demo2',
      url: `https://www.tiktok.com/@${competitor.handle}/video/2`,
      caption: 'Creator collab workout challenge 💪',
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      views: 520000,
      likes: 42000,
      comments: 1200,
    },
    {
      platformPostId: 'demo3',
      url: `https://www.tiktok.com/@${competitor.handle}/video/3`,
      caption: 'POV: hitting a new PR 💪',
      publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      views: 150000,
      likes: 9000,
      comments: 230,
    },
    {
      platformPostId: 'demo4',
      url: `https://www.tiktok.com/@${competitor.handle}/video/4`,
      caption: 'Day in the life: content creator edition 📸',
      publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      views: 380000,
      likes: 28000,
      comments: 670,
    },
    {
      platformPostId: 'demo5',
      url: `https://www.tiktok.com/@${competitor.handle}/video/5`,
      caption: 'Things nobody tells you about fitness 👀',
      publishedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000),
      views: 620000,
      likes: 51000,
      comments: 1450,
    },
  ]

  // Insert demo posts
  await Promise.all(
    demoPosts.map((p) =>
      context.entities.Post.create({
        data: {
          competitorId: competitor.id,
          ...p,
        },
      })
    )
  )

  // Add fake insight with better content
  await context.entities.AiInsight.create({
    data: {
      competitorId: competitor.id,
      summary:
        'Their highest-performing content uses creator-led challenges, behind-the-scenes product teases and relatable gym moments. Most viral videos are short (6-12s) with strong hooks in the first second. Top formats: POV-style storytelling, day-in-the-life vlogs, and educational "things nobody tells you" content. Engagement peaks on posts with emojis and questions in captions.',
    },
  })

  return { success: true }
}