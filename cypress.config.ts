import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'e4bo4v',
  
  e2e: {
    'baseUrl': 'http://localhost:4200',
    experimentalStudio: true
  },
  
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }
  
})