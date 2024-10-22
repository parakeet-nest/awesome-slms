#!/bin/bash
OLLAMA_BASE_URL=http://host.docker.internal:11434 \
docker compose up --build

# Pi Ollama URL
#OLLAMA_BASE_URL=http://bob.local:11434 \
