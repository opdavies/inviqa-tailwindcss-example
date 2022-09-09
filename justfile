default:
  just --list

down:
  docker compose down

up *args:
  docker compose up {{args}}

yarn *args:
  just _run yarn {{args}}

_run +args:
  docker compose run --rm --entrypoint bash app -c {{args}}
