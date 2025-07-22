from .models import Solicitud
from sqlalchemy.orm import Session

def obtener_todas_las_solicitudes(session: Session):
    return session.query(Solicitud).all()

def obtener_solicitud_por_id(session: Session, solicitud_id: int):
    return session.query(Solicitud).filter(Solicitud.id == solicitud_id).first()
