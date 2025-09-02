# Scoresheet Backend API

A FastAPI backend for the Sports League Manager application.

## Features

- **POST** `/api/v1/matches/` - Create a new match
- **GET** `/api/v1/matches/` - Fetch all matches
- **GET** `/api/v1/matches/{match_id}` - Fetch a specific match

## Setup

### 1. Create Virtual Environment and Install Dependencies

**Windows (Recommended):**
```bash
# Run the setup script to create virtual environment and install dependencies
setup.bat
```

**Manual Setup:**
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate

# Activate virtual environment (Linux/Mac)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Environment Configuration

Copy `env.example` to `.env` and update the database connection:

```bash
cp env.example .env
```

Edit `.env` with your PostgreSQL credentials:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/scoresheet_db
SECRET_KEY=your-secret-key-here
DEBUG=True
```

### 3. Database Setup

Create a PostgreSQL database named `scoresheet_db` or update the DATABASE_URL in your `.env` file.

### 4. Run the Application

**Windows (Recommended):**
```bash
# Activate virtual environment and start the server
start.bat
```

**Manual:**
```bash
# Activate virtual environment (Windows)
venv\Scripts\activate

# Activate virtual environment (Linux/Mac)
source venv/bin/activate

# Start the server
python run.py
```

The API will be available at `http://localhost:8000`

## API Documentation

Once running, visit:
- **Interactive API docs**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## API Endpoints

### Create Match
```http
POST /api/v1/matches/
Content-Type: application/json

{
  "player1": "HDFC ERGO Eagles",
  "player2": "Tata Digital Tigers",
  "scorecard": "21-19, 18-21, 21-16",
  "status": "completed",
  "date": "2025-09-26",
  "time": "16:30",
  "notes": "Final match of the tournament"
}
```

### Get All Matches
```http
GET /api/v1/matches/
```

### Get Specific Match
```http
GET /api/v1/matches/{match_id}
```

## Project Structure

```
Backend/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI application
│   ├── database.py      # Database configuration
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   ├── crud.py          # Database operations
│   └── api/
│       ├── __init__.py
│       └── endpoints.py # API endpoints
├── requirements.txt      # Python dependencies
├── env.example          # Environment variables template
├── run.py              # Application entry point
└── README.md           # This file
```

## Development

### Virtual Environment Management

**Quick Commands:**
- `setup.bat` - Create virtual environment and install dependencies
- `activate.bat` - Activate virtual environment
- `start.bat` - Start the server (automatically activates venv)

**Manual Commands:**
```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Linux/Mac)
source venv/bin/activate

# Deactivate
deactivate
```

### Technology Stack

The application uses:
- **FastAPI** for the web framework
- **SQLAlchemy** for database ORM
- **PostgreSQL** as the database
- **Pydantic** for data validation
- **Alembic** for database migrations (optional)

## CORS Configuration

The API is configured to allow requests from common frontend development ports:
- `http://localhost:3000` (React default)
- `http://localhost:5173` (Vite default)
- `http://localhost:8080` (Your frontend port)
