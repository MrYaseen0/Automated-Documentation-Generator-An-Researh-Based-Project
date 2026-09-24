#!/bin/bash
echo "Starting development server on http://localhost:3000"
python3 -m http.server 3000 --bind 0.0.0.0
