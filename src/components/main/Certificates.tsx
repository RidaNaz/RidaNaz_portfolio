import { CertificateCards } from "@/constants";
import CertificateCard from "../sub/CertificateCard";

const Certificates = () => {
  return (
    <section id="certificates" className="relative w-full overflow-hidden px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Credentials
          </p>
          <h2 className="text-[34px] font-bold leading-tight sm:text-[46px]">
            Credentials that back the product and technical systems I build.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            Certifications support the work, but the strongest signal is the
            architecture, deployment, and product execution behind the projects.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CertificateCards.map((card) => (
            <div key={card.id}>
              <CertificateCard
                src={card.thumbnail}
                title={card.title}
                description={card.desc}
                badge={card.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
