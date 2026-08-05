"use client";
import React from "react";
import { CertificateCards } from "@/constants";
import CertificateCard from "../sub/CertificateCard";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <section id="certificates" className="relative w-full overflow-hidden px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Credentials
          </p>
          <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
            Formal learning that supports practical AI product work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            Certifications are supporting proof. The stronger signal is how the
            concepts show up in shipped agents, voice infrastructure, RAG
            systems, and full stack products.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CertificateCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
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
    </section>
  );
};

export default Certificates;
