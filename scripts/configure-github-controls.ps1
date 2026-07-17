[CmdletBinding()]
param(
    [string]$Repository = "tbrown1775/ElevateProV1",
    [string]$Branch = "main",
    [string]$ProjectOwner = "tbrown1775",
    [int]$ProjectNumber = 1,
    [switch]$VerifyOnly
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Require-Command([string]$Name) {
    if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
        throw "Required command '$Name' was not found."
    }
}

Require-Command gh

gh auth status | Out-Host

if (-not $VerifyOnly) {
    $protection = @{
        required_status_checks = @{
            strict = $true
            contexts = @("quality")
        }
        enforce_admins = $true
        required_pull_request_reviews = @{
  
            dismiss_stale_reviews = $true
            require_code_owner_reviews = $false
            required_approving_review_count = 1
            require_last_push_approval = $false
        }
        restrictions = $null
        required_conversation_resolution = $true
        allow_force_pushes = $false
        allow_deletions = $false
        block_creations = $false
        required_linear_history = $false
        lock_branch = $false
        allow_fork_syncing = $true
    } | ConvertTo-Json -Depth 10

    $tempFile = New-TemporaryFile
    try {
        Set-Content -Path $tempFile -Value $protection -Encoding utf8
        gh api --method PUT "/repos/$Repository/branches/$Branch/protection" --input $tempFile | Out-Null
        Write-Host "Configured protection for $Repository/$Branch"
    }
    finally {
        Remove-Item $tempFile -Force -ErrorAction SilentlyContinue
    }

    $fields = gh project field-list $ProjectNumber --owner $ProjectOwner --format json | ConvertFrom-Json
    $definitions = @(
        @{ Name = "Requirement ID"; DataType = "TEXT" },
        @{ Name = "AI Owner"; DataType = "SINGLE_SELECT"; Options = @("ChatGPT - Product and Requirements", "Repository Steward", "Backend Architect", "Claude Code - Implementation", "Human") },
        @{ Name = "Delivery Stage"; DataType = "SINGLE_SELECT"; Options = @("Backlog", "Requirements", "Customer Review", "Architecture", "Ready for Development", "In Development", "Technical Review", "Product Acceptance", "Ready to Merge", "Done", "Blocked") },
        @{ Name = "Architecture Status"; DataType = "SINGLE_SELECT"; Options = @("Not Required", "Not Started", "Draft", "Approved", "Blocked") },
        @{ Name = "Acceptance Status"; DataType = "SINGLE_SELECT"; Options = @("Not Tested", "Failed", "Passed") },
        @{ Name = "Customer Review Required"; DataType = "SINGLE_SELECT"; Options = @("Yes", "No") },
        @{ Name = "Pull Request"; DataType = "TEXT" }
    )

    foreach ($definition in $definitions) {
        $exists = $fields.fields | Where-Object { $_.name -eq $definition.Name }
        if ($exists) {
            Write-Host "Project field exists: $($definition.Name)"
            continue
        }

        $args = @("project", "field-create", $ProjectNumber, "--owner", $ProjectOwner, "--name", $definition.Name, "--data-type", $definition.DataType)
        if ($definition.DataType -eq "SINGLE_SELECT") {
            $args += @("--single-select-options", ($definition.Options -join ","))
        }
        & gh @args | Out-Null
        Write-Host "Created project field: $($definition.Name)"
    }
}

Write-Host "Branch protection:"
gh api "/repos/$Repository/branches/$Branch/protection" | Out-Host

Write-Host "Project fields:"
gh project field-list $ProjectNumber --owner $ProjectOwner --format json | Out-Host
