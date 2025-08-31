from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from .models import MatchStatus

class MatchCreate(BaseModel):
    player1: str
    player2: str
    scorecard: str
    status: MatchStatus = MatchStatus.SCHEDULED
    date: str
    time: str
    notes: Optional[str] = None

class MatchResponse(BaseModel):
    id: int
    player1: str
    player2: str
    scorecard: str
    status: MatchStatus
    date: str
    time: str
    notes: Optional[str] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
