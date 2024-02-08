#! /bin/sh

: ${GITHUB_OUTPUT:=""}
: ${GITHUB_HEAD_REF:=$(git rev-parse --abbrev-ref HEAD)}
: ${GITHUB_SHA:=$(git rev-parse HEAD)}

GITHUB_OUTPUT=${GITHUB_OUTPUT} \
GITHUB_HEAD_REF=${GITHUB_HEAD_REF} \
GITHUB_SHA=${GITHUB_SHA} \
node dist/index.js