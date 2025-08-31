const API_BASE_URL = 'http://localhost:8000/api/v1';

export interface Match {
  id: number;
  player1: string;
  player2: string;
  scorecard: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  date: string;
  time: string;
  notes?: string;
  created_at: string;
  updated_at?: string;
}

export interface MatchCreate {
  player1: string;
  player2: string;
  scorecard: string;
  status?: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  date: string;
  time: string;
  notes?: string;
}

export class ApiService {
  static async getAllMatches(skip: number = 0, limit: number = 100): Promise<Match[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/matches/?skip=${skip}&limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching matches:', error);
      throw error;
    }
  }

  static async getMatchById(matchId: number): Promise<Match> {
    try {
      const response = await fetch(`${API_BASE_URL}/matches/${matchId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching match:', error);
      throw error;
    }
  }

  static async createMatch(match: MatchCreate): Promise<Match> {
    try {
      const response = await fetch(`${API_BASE_URL}/matches/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(match),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating match:', error);
      throw error;
    }
  }
}
