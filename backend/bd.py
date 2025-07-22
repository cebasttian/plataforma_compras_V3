from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .app.gestion_solicitudes.models import Base
from .keyvault import key_vault

def db_persefone_connstr(db='QUOTE2'):
    con_parameters = {
        "user": key_vault.get_value("db-persefone-user"),
        "pass": key_vault.get_value("db-persefone-pass"),
        "server": key_vault.get_value("db-persefone-server"),
        "db": db,
        "driver": "ODBC Driver 17 for SQL Server",
        "port": "1433"
    }
    conn_str = (
        "mssql+pyodbc://{user}:{pass}@{server}:{port}/{db}"
        "?driver={driver}&autocommit=TRUE"
    )
    return conn_str.format(**con_parameters)

engine = create_engine(
    db_persefone_connstr(),
    pool_size=10,
    max_overflow=20
)

Session = sessionmaker(bind=engine)

def get_session():
    return Session()
