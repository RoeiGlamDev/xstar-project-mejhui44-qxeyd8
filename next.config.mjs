

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-source.com'], // Replace with your actual image source domains
    formats: ['image/avif', 'image/webp']
},
  webpack(config) {
    
    return config
  }
}
export default nextConfig;