#!/bin/bash
LLM=qwen2.5:0.5b \
OLLAMA_BASE_URL=http://host.docker.internal:11434 \
PI_OLLAMA_BASE_URL=http://bob.local:11434 \
docker compose up --build


