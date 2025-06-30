# CI/CD Pipeline Documentation

This repository uses GitHub Actions for continuous integration and deployment.

## Workflows

### 1. Build and Deploy (`deploy.yaml`)
- **Triggers**: Push to `main` or `master` branch, Pull requests
- **Jobs**:
  - **build-and-test**: Installs dependencies, runs linting, builds the application
  - **deploy**: Deploys to GitHub Pages (only on main/master branch)

### 2. Continuous Integration (`ci.yaml`)
- **Triggers**: Push to `main`, `master`, or `develop` branches, Pull requests
- **Jobs**:
  - **quality-checks**: Type checking, linting, security audit, bundle size check
  - **test-matrix**: Tests build across Node.js versions 18, 20, and 21

### 3. Preview Deployment (`preview.yaml`)
- **Triggers**: Pull requests to `main` or `master`
- **Jobs**:
  - **preview-deploy**: Creates preview deployments (requires Netlify setup)

## Setup Requirements

### GitHub Pages Deployment
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy to GitHub Pages

### Preview Deployments (Optional)
To enable preview deployments, add these secrets to your repository:
1. Go to Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

### Bundle Size Monitoring
The pipeline includes bundle size checking using the `.bundlesizerc.json` configuration.
Adjust the size limits as needed for your application.

## Branch Strategy
- `main`/`master`: Production branch, automatically deployed to GitHub Pages
- `develop`: Development branch, runs CI checks
- Feature branches: Create pull requests to trigger preview deployments and CI checks

## Local Development
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint
```

## Troubleshooting
- If deployment fails, check the Actions tab for detailed logs
- Ensure your `next.config.ts` is properly configured for static export
- Verify that all required secrets are set for preview deployments
