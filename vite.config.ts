import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgPage = repositoryName?.endsWith('.github.io');

export default defineConfig({
  plugins: [react()],
  base: isGitHubActions && repositoryName && !isUserOrOrgPage ? `/${repositoryName}/` : '/',
});
