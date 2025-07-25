from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Solicitud(Base):
    __tablename__ = 'solicitud'
    __table_args__ = {'schema': 'App'}

    id = Column(Integer, primary_key=True)
    estado = Column(String)
    id_filial = Column(Integer)
    fecha = Column(DateTime)
    id_producto = Column(Integer)
    id_puerto_destino = Column(Integer)
    kl_solicitados = Column(Float)
    responsable = Column(String)
    observacion = Column(String)
    id_envase = Column(Integer)
    id_familia = Column(Integer)
    precio_filial = Column(Float)
    se_recotizo = Column(Boolean)
    se_envio = Column(Boolean)
    se_envio_cotizar = Column(Boolean)
    id_solicitud_origen = Column(Integer)
    fecha_cotizacion = Column(DateTime)
    fecha_revision_op = Column(DateTime)
    fecha_respuesta_filial = Column(DateTime)
    fecha_recotizacion = Column(DateTime)
    etd = Column(DateTime)
    eta = Column(DateTime)
    origen = Column(String)
    precio_mercado = Column(Float)
    se_descargo = Column(Boolean)
    responsable_cotizacion = Column(String)
    responsable_op = Column(String)
    responsable_filial = Column(String)
    se_genero_oc = Column(Boolean)
    se_envio_cierre = Column(Boolean)
    se_genero_sc = Column(Boolean)
    muestra = Column(Boolean)
    referencia_mercado = Column(String)
    kl_min = Column(Float)
    id_almacen = Column(Integer)
    clase_pedido = Column(String)
    id_grupo_compras = Column(Integer)
    solped = Column(String)
    posicion = Column(String)
    UM = Column(String)
    id_centro = Column(Integer)
    origen_solped = Column(String)
    oc = Column(String)
    posicion_oc = Column(String)
    eliminada = Column(Boolean)
    tipo_compra = Column(String)
    consolidacion = Column(String)
