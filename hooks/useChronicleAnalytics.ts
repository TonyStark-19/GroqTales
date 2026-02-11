import { useState, useEffect } from 'react';
import { StoryStats } from '../types/analytics';
import { calculateStoryInsights } from '../utils/analyticsEngine';

export const useChronicleAnalytics = (userData: any[]) => {
  const [insights, setInsights] = useState<StoryStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userData) {
      const results = calculateStoryInsights(userData);
      setInsights(results);
      setLoading(false);
    }
  }, [userData]);

  return { insights, loading };
};