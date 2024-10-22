#!/bin/bash

# Read the models from the models.json file
models=$(jq -r '.[].name' /data/models.json)
#models=$(jq -r '.[].name' ./models.json)


# For each model, pull it from the OLLAMA server
for model in $models; do
    echo "Pulling model: $model"
    curl -X POST "${OLLAMA_BASE_URL:-http://host.docker.internal:11434}/api/pull" \
         -H "Content-Type: application/json" \
         -d "{\"name\": \"$model\"}"
    echo -e "\n"
done
