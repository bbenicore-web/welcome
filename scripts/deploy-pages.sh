#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

BASE_PATH="${NEXT_PUBLIC_BASE_PATH:-/welcome}"
PAGES_BRANCH="${PAGES_BRANCH:-gh-pages}"

echo "Building static export for GitHub Pages (basePath=${BASE_PATH})"
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH="$BASE_PATH" npm run build
touch out/.nojekyll

git fetch origin "$PAGES_BRANCH"

WORKTREE="$(mktemp -d)"
cleanup() {
  git -C "$ROOT" worktree remove "$WORKTREE" --force >/dev/null 2>&1 || true
  rm -rf "$WORKTREE"
}
trap cleanup EXIT

git worktree add "$WORKTREE" "origin/${PAGES_BRANCH}"

find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a out/. "$WORKTREE/"

git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "GitHub Pages is already up to date"
  exit 0
fi

git -C "$WORKTREE" commit -m "Deploy MegaFon landing pages to GitHub Pages"
git -C "$WORKTREE" push origin "HEAD:${PAGES_BRANCH}"
echo "Published to https://bbenicore-web.github.io${BASE_PATH}/"
