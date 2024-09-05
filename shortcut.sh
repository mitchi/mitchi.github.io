#!/bin/bash

# Change to your repository directory
cd /path/to/your/repository

# Add all changes
git add .

# Commit with a timestamp
git commit -m "Auto-commit $(date)"

# Push to the default remote branch
git push

# Notify the user
osascript -e 'display notification "Changes committed and pushed" with title "Git Auto-Push"'