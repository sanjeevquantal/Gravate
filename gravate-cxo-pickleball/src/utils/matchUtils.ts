import { Match } from '../services/api';

export interface FormattedMatch {
  date: string;
  time: string;
  team1: string;
  team2: string;
  score: string;
  winner: string;
  status: 'completed' | 'upcoming' | 'in-progress';
}

export const formatMatchForDisplay = (match: Match): FormattedMatch => {
  // Format date from YYYY-MM-DD to readable format
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Format time from HH:MM to readable format
  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Determine display status
  const getDisplayStatus = (status: string): 'completed' | 'upcoming' | 'in-progress' => {
    switch (status) {
      case 'completed':
        return 'completed';
      case 'in-progress':
        return 'in-progress';
      default:
        return 'upcoming';
    }
  };

  // Format scorecard for display
  const formatScore = (scorecard: string) => {
    if (!scorecard || scorecard === 'TBD') return 'TBD';
    return scorecard;
  };

  // Determine winner based on status and scorecard
  const getWinner = (match: Match): string => {
    if (match.status === 'completed' && match.scorecard && match.scorecard !== 'TBD') {
      // For completed matches, you might want to parse the scorecard to determine winner
      // For now, we'll use a placeholder
      return 'Winner TBD';
    }
    return 'TBD';
  };

  return {
    date: formatDate(match.date),
    time: formatTime(match.time),
    team1: match.player1,
    team2: match.player2,
    score: formatScore(match.scorecard),
    winner: getWinner(match),
    status: getDisplayStatus(match.status)
  };
};

export const sortMatchesByDate = (matches: Match[]): Match[] => {
  return [...matches].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });
};

