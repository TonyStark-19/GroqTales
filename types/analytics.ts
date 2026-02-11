export interface StoryStats {
  totalStories: number;
  totalTokensUsed: number;
  averageComplexity: number;
  genreBreakdown: Record<string, number>;
  lastGeneratedDate: string;
}

export interface AnalyticsTrend {
  date: string;
  count: number;
}