from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Family(Base):
    __tablename__ = 'familia'
    __table_args__ = {'schema': 'App'}

    id = Column(Integer, primary_key=True)
    familia = Column(String)