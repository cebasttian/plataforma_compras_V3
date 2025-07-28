from backend.app.product.models import Product
from sqlalchemy.orm import Session

def get_products(session: Session):
    return session.query(Product).all()
