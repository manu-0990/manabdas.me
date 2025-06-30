const isGitHub = process.env.GITHUB_PAGES === 'true';
const repo = 'portfolio';

export default {
  output: 'export',
  basePath: isGitHub ? `/${repo}` : '',
  assetPrefix: isGitHub ? `/${repo}/` : '',
};
