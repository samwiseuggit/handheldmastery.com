#!/bin/bash
# Initialize project in /mnt/agents/output/webapp
set -e

# Copy template
mkdir -p /mnt/agents/output/webapp
cp -r $HOME/init/package.json $HOME/init/tsconfig.json $HOME/init/tsconfig.node.json $HOME/init/vite.config.ts $HOME/init/tailwind.config.js $HOME/init/postcss.config.js $HOME/init/index.html $HOME/init/components.json $HOME/init/eslint.config.js /mnt/agents/output/webapp/ 2>/dev/null || true

# Create directories
mkdir -p /mnt/agents/output/webapp/src/{components,pages,data,lib,hooks}
mkdir -p /mnt/agents/output/webapp/public

echo "Project structure ready at /mnt/agents/output/webapp"
