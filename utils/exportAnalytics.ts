import { StoryStats } from '../types/analytics';

export const downloadAnalyticsJSON = (stats: StoryStats) => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(stats));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "groqtales_analytics.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};