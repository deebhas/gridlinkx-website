# GridLinkX - Distributed Computing Platform

A sophisticated distributed computing platform designed for seamless cloud infrastructure deployment and collaborative resource sharing.

## Deployment Guide for Render.com

### Prerequisites
- A Render.com account (free tier is sufficient to start)
- A GitHub/GitLab repository with your code
- Your domain registered (e.g., gridlinkx.com)

### Deployment Steps

#### 1. Push your code to GitHub/GitLab
Ensure your code is in a Git repository and pushed to GitHub or GitLab.

#### 2. Create a New Web Service on Render
1. Log in to your Render dashboard
2. Click "New +" and select "Blueprint"
3. Connect your GitHub/GitLab repository
4. Select the repository with your GridLinkX code
5. Render will automatically detect the `render.yaml` configuration
6. Click "Apply"

Render will automatically:
- Create your web service
- Set up your PostgreSQL database
- Configure the necessary environment variables

#### 3. Connect Your Domain
1. In your Render dashboard, go to your web service
2. Navigate to "Settings" > "Custom Domain"
3. Add your domain (gridlinkx.com)
4. Follow Render's instructions to update your DNS settings in Cloudflare

#### 4. Update DNS in Cloudflare
1. Log in to your Cloudflare account
2. Go to your domain's DNS settings
3. Add a CNAME record pointing to your Render URL:
   - Type: CNAME
   - Name: @ (or www)
   - Target: [your-render-app].onrender.com
   - Proxy status: Proxied

#### 5. Verify Deployment
Once DNS propagation is complete (which can take up to 48 hours, though often much faster), your site should be accessible at gridlinkx.com.

You can verify the deployment status by accessing the hidden status page at `/status` (e.g., gridlinkx.com/status). This page is not visible in the navigation menu and is specifically designed for deployment verification.

## Local Development

### Setup
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Database
```bash
# Push schema changes to the database
npm run db:push
```

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (provided by Render)
- `NODE_ENV`: Set to "production" for production environments
- `PORT`: Port to run the server on (provided by Render)

## Admin Tools

### Status Page
The application includes a hidden status page that displays system information and deployment status. This page is not visible in the navigation menu but can be accessed directly at:
```
https://your-domain.com/status
```

This page shows:
- Current environment (development or production)
- Deployment platform detection
- Application status
- Version information
- Deployment timestamp

This is useful for quickly verifying that your deployment is working correctly after setup.

## Troubleshooting Render.com Deployment

### Database Connection Issues
- Ensure your DATABASE_URL is correctly set in Render's environment variables.
- If using Neon database, ensure 'ws' websocket package is installed.
- For non-Neon PostgreSQL (like Render's PostgreSQL), the standard connection should work.

### Build Process Failures
- Check build logs in Render dashboard for specific error messages.
- Ensure your Node.js version is compatible (we use Node.js 20+).
- If the build fails during package installation, try clearing the Render cache.

### Application Not Starting
- Check that the start command in render.yaml is correct (`npm run start`).
- Verify that environment variables are properly set.
- Check application logs in Render dashboard for startup errors.

### Static Files Not Serving
- Ensure the build process correctly generates all static assets.
- Verify that the server is properly configured to serve static files in production mode.

### Domain Configuration Issues
- Ensure your DNS settings in Cloudflare are correctly pointing to your Render URL.
- Check that your custom domain is properly set up in Render dashboard.
- Verify SSL certificate generation is complete.

For additional help, refer to [Render's documentation](https://render.com/docs) or contact support through your Render dashboard.