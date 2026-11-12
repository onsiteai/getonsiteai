#!/bin/bash
# ================================================================
# secrets.sh — per-project SOPS+age helper (copy into any repo)
# ================================================================
# Requires: sops + age installed, and your age key at
# ~/.config/sops/age/keys.txt (run dotfiles/bin/secrets-bootstrap once).
#
# Commands:
#   ./secrets.sh init          # encrypt an existing .env -> .env.enc
#   ./secrets.sh edit          # open decrypted .env.enc in $EDITOR
#   ./secrets.sh decrypt       # write .env.enc -> .env (gitignored)
#   ./secrets.sh cat           # print decrypted values to stdout
#   ./secrets.sh run -- <cmd>  # run cmd with secrets injected as env vars
#
# Worktree support:
#   If .env.enc is not found in the current directory, it checks
#   the parent directory (../.env.enc) automatically.
#
# Set FILE=other.env.enc to target a non-default file.
# ================================================================
set -euo pipefail

export SOPS_AGE_KEY_FILE="${SOPS_AGE_KEY_FILE:-$HOME/.config/sops/age/keys.txt}"

# Auto-detect FILE location if not explicitly provided
if [[ -z "${FILE:-}" ]]; then
  if [[ -f ".env.enc" ]]; then
    FILE=".env.enc"
  elif [[ -f "../.env.enc" ]]; then
    FILE="../.env.enc"
  else
    FILE=".env.enc"
  fi
fi

# Decrypted target in current working directory
PLAIN="$(basename "${FILE%.enc}")"
DOTENV=(--input-type dotenv --output-type dotenv)

need() { command -v "$1" >/dev/null 2>&1 || { echo "missing: $1 (run dotfiles/bin/secrets-bootstrap)"; exit 1; }; }
need sops; need age

cmd="${1:-}"; shift || true
case "$cmd" in
  init)
    [[ -f "$PLAIN" ]] || { echo "no $PLAIN to encrypt in $(pwd)"; exit 1; }
    cp "$PLAIN" "$FILE"
    sops "${DOTENV[@]}" -e -i "$FILE"
    echo "encrypted $PLAIN -> $FILE (safe to commit). Keep $PLAIN gitignored." ;;
  edit)
    [[ -f "$FILE" ]] || { echo "no $FILE found to edit"; exit 1; }
    sops "${DOTENV[@]}" "$FILE" ;;
  decrypt)
    [[ -f "$FILE" ]] || { echo "no $FILE found to decrypt"; exit 1; }
    sops "${DOTENV[@]}" -d "$FILE" > "$PLAIN"
    chmod 600 "$PLAIN"
    echo "wrote $(pwd)/$PLAIN" ;;
  cat)
    [[ -f "$FILE" ]] || { echo "no $FILE found to view"; exit 1; }
    sops "${DOTENV[@]}" -d "$FILE" ;;
  run)
    [[ -f "$FILE" ]] || { echo "no $FILE found"; exit 1; }
    [[ "${1:-}" == "--" ]] && shift
    tmp="$(mktemp)"; trap 'rm -f "$tmp"' EXIT
    sops "${DOTENV[@]}" -d "$FILE" > "$tmp"
    set -a; . "$tmp"; set +a
    exec "$@" ;;
  *) grep '^#' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
esac
