// vercel-build.js

// Import necessary modules
const { execSync } = require('child_process')

// Run Prisma Client generation during the build
try {
  execSync('npx prisma generate && next build', { stdio: 'inherit' })
} catch (error) {
  console.error('Error generating Prisma Client:', error)
  process.exit(1)
}

// Add any other build steps you may need here

// Start your server or application
// For example, if you're using Express:
// const app = require('./app');
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
