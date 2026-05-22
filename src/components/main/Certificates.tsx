"use client";
import React from "react";
import { CertificateCards } from "@/constants";
import CertificateCard from "../sub/CertificateCard";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <div id="certificates" className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      
      <h1 className="text-center font-bold text-white text-[40px] mb-20 leading-tight">
        Here&rsquo;s my{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          CERTIFICATES
        </span>
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {CertificateCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]"
            >
              <CertificateCard
                src={card.thumbnail}
                title={card.title}
                description={card.desc}
                badge={card.badge}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;