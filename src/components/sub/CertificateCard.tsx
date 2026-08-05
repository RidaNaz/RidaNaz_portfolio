"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  badge?: string;
}

const CertificateCard = ({ src, title, description, badge }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden rounded-2xl border border-white/10 bg-surface-soft transition-all duration-300 hover:border-accent-alt/50 hover:shadow-[0_0_30px_rgba(183,160,255,0.15)]"
    >
      <div className="relative h-64 w-full bg-surface-panel overflow-hidden flex items-center justify-center p-4">
        <Image
          src={src}
          alt={title}
          width={600}
          height={400}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative p-6 z-20">
        <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h2>
        <p className="mt-3 text-sm text-gray-400 line-clamp-2 leading-relaxed h-10">
          {description}
        </p>

        {badge && (
          <div className="mt-6">
            <a
              href={badge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-purple-500/20"
            >
              Verify Badge
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/10 rounded-full blur-[80px] group-hover:bg-purple-600/20 transition-colors duration-500" />
    </motion.div>
  );
};

export default CertificateCard;