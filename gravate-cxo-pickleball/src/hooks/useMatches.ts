import { useState, useEffect } from 'react';
import { ApiService, Match } from '../services/api';

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getAllMatches();
      setMatches(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch matches');
      console.error('Error fetching matches:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  const refreshMatches = () => {
    fetchMatches();
  };

  return {
    matches,
    loading,
    error,
    refreshMatches,
  };
};

