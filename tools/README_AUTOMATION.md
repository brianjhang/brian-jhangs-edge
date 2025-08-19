# Automation Pack Usage
1) Run: `bash tools/bootstrap_autoworkflow.sh`
2) Commit & push to GitHub. Vercel will rebuild on push.
3) The Action runs daily at 08:00 (Asia/Taipei) to create a crypto draft and push it.
4) Edit drafts in `src/content/daily/...` before/after publish.

Optional: wire `scripts/translate.mjs` with your translation API.
