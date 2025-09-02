# API Integration Setup Guide

This guide explains how to set up and test the API integration between the frontend and backend.

## Prerequisites

1. Python 3.8+ installed
2. PostgreSQL database running
3. Node.js/npm for frontend

## Backend Setup

### 1. Install Dependencies
```bash
cd Backend
pip install -r requirements.txt
```

### 2. Environment Configuration
Copy `env.example` to `.env` and configure your database connection:
```bash
cp env.example .env
# Edit .env with your database credentials
```

### 3. Start the Backend Server
```bash
# Option 1: Use the batch file (Windows)
start.bat

# Option 2: Run directly
python run.py
```

The backend will start on `http://localhost:8000`

### 4. Add Sample Data (Optional)
To test with sample match data:
```bash
python add_sample_data.py
```

## Frontend Setup

### 1. Install Dependencies
```bash
cd gravate-cxo-pickleball
npm install
```

### 2. Start the Frontend
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## API Endpoints

### Base URL: `http://localhost:8000/api/v1`

- `GET /matches/` - Get all matches
- `GET /matches/{id}` - Get match by ID  
- `POST /matches/` - Create new match

### Health Check
- `GET /health` - Backend health status

## Testing the Integration

1. **Start Backend**: Run `python run.py` in the Backend directory
2. **Start Frontend**: Run `npm run dev` in the gravate-cxo-pickleball directory
3. **Navigate to Match Results**: Go to the CXO League page and click the "Match Results" tab
4. **Verify Data**: You should see real match data fetched from the API instead of hardcoded data

## Features Implemented

- ✅ Real-time data fetching from backend API
- ✅ Loading states and error handling
- ✅ Refresh functionality
- ✅ Proper data formatting and display
- ✅ Responsive design maintained
- ✅ Status-based styling (completed, in-progress, upcoming)

## Troubleshooting

### Common Issues

1. **CORS Errors**: Backend is configured to allow localhost:3000, 5173, and 8080
2. **Database Connection**: Ensure PostgreSQL is running and credentials are correct
3. **Port Conflicts**: Backend runs on 8000, frontend on 5173

### Debug Steps

1. Check backend console for errors
2. Check browser console for API call errors
3. Verify database connection
4. Test API endpoints directly (e.g., `http://localhost:8000/health`)

## API Response Format

```json
{
  "id": 1,
  "player1": "HDFC ERGO Eagles",
  "player2": "Tata Digital Tigers",
  "scorecard": "21-19, 18-21, 21-16",
  "status": "completed",
  "date": "2025-09-26",
  "time": "16:30",
  "notes": "Quarter-final match",
  "created_at": "2025-08-31T10:00:00Z",
  "updated_at": "2025-08-31T10:00:00Z"
}
```

## Next Steps

- Add real-time updates using WebSockets
- Implement match creation form
- Add match editing capabilities
- Implement user authentication
- Add match statistics and analytics




