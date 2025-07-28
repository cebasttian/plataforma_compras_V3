from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = 'producto'
    __table_args__ = {'schema': 'App'}

    id = Column(Integer, primary_key=True)
    pinta = Column(String)
    nombre = Column(String)
    tipo = Column(String)