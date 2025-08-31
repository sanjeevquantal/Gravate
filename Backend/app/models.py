from sqlalchemy import Column, Integer, String, DateTime, Text, Enum
from sqlalchemy.sql import func
from .database import Base
import enum

class MatchStatus(str, enum.Enum):
    SCHEDULED = "scheduled"
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True, index=True)
    player1 = Column(String(100), nullable=False)
    player2 = Column(String(100), nullable=False)
    scorecard = Column(String(200), nullable=False)
    status = Column(Enum(MatchStatus), default=MatchStatus.SCHEDULED)
    date = Column(String(10), nullable=False)  # Format: YYYY-MM-DD
    time = Column(String(5), nullable=False)   # Format: HH:MM
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
