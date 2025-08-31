from sqlalchemy.orm import Session
from . import models, schemas
from typing import List

def create_match(db: Session, match: schemas.MatchCreate) -> models.Match:
    db_match = models.Match(**match.dict())
    db.add(db_match)
    db.commit()
    db.refresh(db_match)
    return db_match

def get_matches(db: Session, skip: int = 0, limit: int = 100) -> List[models.Match]:
    return db.query(models.Match).offset(skip).limit(limit).all()

def get_match(db: Session, match_id: int) -> models.Match:
    return db.query(models.Match).filter(models.Match.id == match_id).first()
