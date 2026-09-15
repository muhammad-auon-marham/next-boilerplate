/**
 * Static Exports in Next.js
 *
 * 1. Set `isStaticExport = true` in `next.config.{mjs|ts}`.
 * 2. This allows `generateStaticParams()` to pre-render dynamic routes at build time.
 *
 * For more details, see:
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 *
 * NOTE: Remove all "generateStaticParams()" functions if not using static exports.
 */
const isStaticExport = false;

/**
 * `next dev` blocks HMR and `/_next/*` requests from origins other than localhost. Behind Launchpad the app
 * is opened on its public URL, so allow that host (LAUNCHPAD_PUBLIC_URL is set in every environment).
 */
function getAllowedDevOrigins() {
  try {
    return process.env.LAUNCHPAD_PUBLIC_URL ? [new URL(process.env.LAUNCHPAD_PUBLIC_URL).hostname] : [];
  } catch {
    return [];
  }
}

// ----------------------------------------------------------------------

const nextConfig = {
  trailingSlash: true,
  allowedDevOrigins: getAllowedDevOrigins(),
  output: isStaticExport ? 'export' : undefined,
  env: {
    BUILD_STATIC_EXPORT: JSON.stringify(isStaticExport),
  },
  // Without --turbopack (next dev)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // With --turbopack (next dev --turbopack)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
