default:
  just --list

down:
  docker compose down

npm *args:
  just _run npm {{args}}

up *args:
  docker compose up {{args}}

_run +args:
  docker compose run --rm --entrypoint bash app -c {{args}}
