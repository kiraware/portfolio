# Install Graphify pre-commit hook + official post-checkout/merge/rewrite hooks
$ErrorActionPreference = "Stop"
$repoRoot = (git rev-parse --show-toplevel).Trim()
$srcHook = Join-Path $repoRoot "scripts\git-hooks\pre-commit"
$dstHook = Join-Path $repoRoot ".git\hooks\pre-commit"

# Ensure LF line endings so Git for Windows /bin/sh executes cleanly
$content = [System.IO.File]::ReadAllText($srcHook) -replace "`r`n", "`n"
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($dstHook, $content, $utf8NoBom)

if (Get-Command graphify -ErrorAction SilentlyContinue) {
    graphify hook install | Out-Host
}

Write-Host "Pre-commit hook installed at $dstHook" -ForegroundColor Green
