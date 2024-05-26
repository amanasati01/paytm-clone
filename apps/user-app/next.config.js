/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//         config.module.rules.push({
//             test: /\.(js|mjs|jsx|ts|tsx)$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-env', '@babel/preset-react']
//                 }
//             }
//         });
//         config.module.rules.push({
//             test: /\.html$/,
//             exclude: /index\.html$/, // Exclude index.html from being parsed as a module
//             loader: 'html-loader'
//         });
//     }

//     return config;
// },
// module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },

};
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ["ui"],
    // runtime: "experimental-edge",
  },
};
