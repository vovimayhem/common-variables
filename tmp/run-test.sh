#! /bin/sh

: ${GITHUB_OUTPUT:=""}
: ${GITHUB_HEAD_REF:=$(git rev-parse --abbrev-ref HEAD)}
: ${GITHUB_SHA:=$(git rev-parse HEAD)}


: ${EXAMPLE_DATE:=$(date +%s)}
echo "EXAMPLE_DATE=${EXAMPLE_DATE}"

GITHUB_OUTPUT=${GITHUB_OUTPUT} \
GITHUB_HEAD_REF=${GITHUB_HEAD_REF} \
GITHUB_SHA=${GITHUB_SHA} \
node dist/index.js