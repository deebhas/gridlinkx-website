// Simple script to run database migrations
import { execSync } from 'child_process';

console.log('Setting up database...');

try {
  console.log('Running database migrations with Drizzle...');
  execSync('npm run db:push', { stdio: 'inherit' });
  console.log('Database migrations completed successfully.');
} catch (error) {
  console.error('Error running database migrations:', error);
  process.exit(1);
}