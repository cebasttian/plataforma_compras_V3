from backend.app.family.models import Family
from sqlalchemy.orm import Session

def get_familys(session: Session):
    return session.query(Family).all()
