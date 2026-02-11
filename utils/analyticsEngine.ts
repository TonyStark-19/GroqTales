import { StoryStats } from '../types/analytics';

export const calculateStoryInsights = (stories: any[]): StoryStats => {
  const stats: StoryStats = {
    totalStories: stories.length,
    totalTokensUsed: stories.reduce((acc, s) => acc + (s.wordCount || 0), 0),
    averageComplexity: 0,
    genreBreakdown: {},
    lastGeneratedDate: stories[0]?.createdAt || new Date().toISOString(),
  };

  stories.forEach(story => {
    stats.genreBreakdown[story.genre] = (stats.genreBreakdown[story.genre] || 0) + 1;
  });

  return stats;
};
