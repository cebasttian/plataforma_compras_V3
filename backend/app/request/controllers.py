from datetime import datetime, date
from sqlalchemy.orm import Session
from backend.app.request.models import Request
from backend.app.product.models import Product
from backend.app.packing.models import Packing
from backend.app.family.models import Family

def get_serialized_requests(session: Session, filtros: dict = {}):
    query = session.query(
        Request,
        Product.nombre.label("nombre_producto")
    ).join(
        Product, Request.id_producto == Product.id
    ).filter(
        Request.estado.in_(["Cotización", "Recotización"]),
        Request.id_filial != "DV00"
    )

    resultados = query.all()

    solicitudes = []
    for request_obj, nombre_producto in resultados:
        data = {
            k: v.strftime("%Y/%m/%d") if isinstance(v, (datetime, date)) else v
            for k, v in request_obj.__dict__.items()
            if not k.startswith("_")
        }
        data["nombre_producto"] = nombre_producto
        solicitudes.append(data)
    return solicitudes

def get_requests_per_provider(session: Session, id_provider: int):
    return session.query(Request).filter(Request.id == id_provider).first()

def get_request_per_subsidiary(session: Session, id_provider: int):
    return session.query(Request).filter(Request.id == id_provider).first()


def get_products(session: Session, filtros: dict = {}):
    solicitudes = []
    return solicitudes