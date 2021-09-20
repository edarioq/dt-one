# Install

Run `npm install`

# Run Vue

Run `npm run serve`

# Run Build

Run `npm run build`

# Scenario

You are a Software Engineer at Megasoft, a brand-new customer of DT One that has just signed the commercial agreement and eager to go live to start re-selling DT One’s Digital Value Products.

The Product Manager at Megasoft would like to explore some ways of offering the services and You have been tasked to develop a POC (front-end is the minimum requirement) that integrates with the DVS API directly and offers users a way to discover and eventually buy products (you don’t have to worry about payments).

# Requirements

- A user section that discovers and buys products, as well as running promotions.
- An administrator section that displays Megasoft’s available Balances and Transaction reports.
- You can use your preferred technology to do this implementation (DT One adopted Vue.Js for its front-end projects).
- Let’s assume the Product Manage falls in love with your POC, what steps would you take to move it to production?

# Environment Variables

```
VUE_APP_API_KEY=YOURKEY
VUE_APP_API_SECRET=YOURSECRET
```

# Deployment

The repo has all the files needed for a successful deployment. Just make sure to include the `.env` file (see above) with the right API key and secret. You can clone the repo onto the remote server and run the following commands.

Run `docker-compose build` to build the docker image.
Run `docker-compose up` to start it up!
