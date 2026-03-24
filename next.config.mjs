/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here  lh3.googleusercontent.com */
  reactCompiler: true,
  reactStrictMode: true,
  images:{
    domains:['res.cloudinary.com',
    'lh3.googleusercontent.com',
  'firebasestorage.googleapis.com']
  }
};

export default nextConfig;
