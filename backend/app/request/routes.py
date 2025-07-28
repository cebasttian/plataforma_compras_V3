import time
from flask import Blueprint, request, jsonify
from ...bd import get_session
from .controllers import get_serialized_requests

request_bp = Blueprint("request", __name__)

@request_bp.route('/api_get_request', methods=['POST'])
def api_get_request():
    filtros = request.get_json() or {}  # ✅ evita error si no se envía JSON
    print("Filtros recibidos:", filtros)

    inicio = time.time()
    session = get_session()
    solicitudes = get_serialized_requests(session, filtros)  # ← ✅ Si deseas pasar filtros luego
    duracion = time.time() - inicio

    print(f"⏱ Tiempo de ejecución listar_solicitudes: {duracion:.4f} segundos")
    return jsonify(solicitudes)