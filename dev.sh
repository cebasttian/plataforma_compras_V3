#!/bin/bash
npx concurrently \
    "cd backend && python3 -m gunicorn --reload -c gunicorn_config.py run:app" \
    "cd frontend && npm start"