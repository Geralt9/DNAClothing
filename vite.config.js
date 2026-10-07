import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// `base` must match the GitHub repository name so assets resolve on
// https://<user>.github.io/<repo-name>/ — change it if you rename the repo.
export default defineConfig({
  plugins: [react()],
  base: '/DNAClothing/',
})
