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