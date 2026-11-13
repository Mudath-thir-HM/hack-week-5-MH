# kiosk-watch.ps1 — ends the kiosk window when the app asks to close.
#
# The page cannot close a window it did not open, so it flags the window title
# instead. This watcher polls for that flag and ends only the Edge process that
# carries it, leaving any other Edge window on the PC untouched.

param(
    [string]$ProcessName = 'msedge',
    [string]$Flag = 'KIOSK_EXIT',
    [int]$PollMs = 600,
    [int]$TimeoutMinutes = 720
)

$deadline = (Get-Date).AddMinutes($TimeoutMinutes)

while ((Get-Date) -lt $deadline) {
    $targets = @(Get-Process -Name $ProcessName -ErrorAction SilentlyContinue |
                 Where-Object { $_.MainWindowTitle -and $_.MainWindowTitle.Contains($Flag) })

    if ($targets.Count -gt 0) {
        foreach ($p in $targets) {
            try { Stop-Process -Id $p.Id -Force -ErrorAction Stop } catch { }
        }
        Start-Sleep -Milliseconds 500
        # a kiosk window often has several renderer processes; end the rest of the set
        Get-Process -Name $ProcessName -ErrorAction SilentlyContinue |
            Where-Object { $_.MainWindowTitle -and $_.MainWindowTitle.Contains($Flag) } |
            ForEach-Object { try { Stop-Process -Id $_.Id -Force -ErrorAction Stop } catch { } }
        break
    }

    Start-Sleep -Milliseconds $PollMs
}
