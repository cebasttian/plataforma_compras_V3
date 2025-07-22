#!/bin/bash

# Navegar al directorio del proyecto (por si se ejecuta desde otro lado)
cd "$(dirname "$0")"

# Exportar variables necesarias para Flask
export FLASK_ENV=development
export PYTHONPATH=$(pwd)

# Mensaje informativo
echo "🚀 Iniciando backend con Gunicorn con autoreload (modo desarrollo)..."
echo "📁 Directorio actual: $(pwd)"
echo "🐍 PYTHONPATH: $PYTHONPATH"

# Ejecutar Gunicorn con --reload para autoreload en desarrollo
python3 -m gunicorn --reload -c backend/gunicorn_config.py backend.run:app
