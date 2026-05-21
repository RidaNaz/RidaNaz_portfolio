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
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60 z-10" />
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="relative p-6 z-20">
        <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h2>
        <p className="mt-3 text-sm text-gray-400 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {badge && (
          <div className="mt-6 flex items-center justify-between">
            <a
              href={badge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
            >
              Verify Badge
              <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-[80px] group-hover:bg-purple-600/40 transition-colors duration-500" />
    </motion.div>
  );
};

export default CertificateCard;