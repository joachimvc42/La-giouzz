import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Anciennes URL WordPress -> nouvelles pages (301, pour ne pas perdre le référencement)
    return [
      { source: "/soins/therapie-individuelle", destination: "/soins#therapie-individuelle", permanent: true },
      { source: "/soins/parents-enfants", destination: "/soins#parents-enfants", permanent: true },
      { source: "/soins/cartes", destination: "/soins#cartes", permanent: true },
      { source: "/coupure-des-liens", destination: "/soins#coupure-des-liens", permanent: true },
      { source: "/formation", destination: "/formations", permanent: true },
      { source: "/formation/:slug", destination: "/formations", permanent: true },
      { source: "/liens", destination: "/", permanent: true },
      { source: "/soins/986-2", destination: "/soins", permanent: true },
      { source: "/soins/990-2", destination: "/soins", permanent: true },
      { source: "/soins/1103-2", destination: "/soins", permanent: true },
    ];
  },
};

export default nextConfig;
