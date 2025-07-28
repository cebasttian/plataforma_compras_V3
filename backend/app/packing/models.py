from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Packing(Base):
    __tablename__ = 'envase'
    __table_args__ = {'schema': 'App'}

    id = Column(Integer, primary_key=True)
    envase = Column(String)