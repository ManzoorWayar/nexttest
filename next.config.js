/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_ENV: "development",
        // MONGO_URI: "mongodb://127.0.0.1:27017/tech",
        MONGO_URI: "mongodb+srv://news:newsWebsiteNext.js@cluster0.ba23ry6.mongodb.net/",
        // MONGO_URI: "mongodb+srv://mitservice:Ouv3LK9u7hs0j6xb@cluster0.rskulnd.mongodb.net/",

        FORONT_URL: "http://localhost:3000",
    },
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
}

module.exports = nextConfig
