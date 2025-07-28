from backend.app.packing.models import Packing
from sqlalchemy.orm import Session

def get_packings(session: Session):
    return session.query(Packing).all()
