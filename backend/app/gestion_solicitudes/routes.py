import time
from flask import Blueprint, jsonify
from .controllers import obtener_todas_las_solicitudes
from ...bd import get_session

gestion_solicitudes_bp = Blueprint("gestion_solicitudes", __name__)

@gestion_solicitudes_bp.route('/gestion_solicitudes', methods=['GET'])
def listar_solicitudes():
    inicio = time.time()  # ⏱️ inicia cronómetro

    session = get_session()
    solicitudes = obtener_todas_las_solicitudes(session)

    fin = time.time()  # ⏱️ fin del cronómetro
    duracion = fin - inicio

    print(f"⏱ Tiempo de ejecución listar_solicitudes: {duracion:.4f} segundos")

    return jsonify([
        {
            k: v for k, v in s.__dict__.items()
            if not k.startswith("_")
        }
        for s in solicitudes
    ])
