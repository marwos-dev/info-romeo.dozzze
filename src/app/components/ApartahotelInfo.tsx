"use client";

import { Star } from "lucide-react";

export default function ApartahotelInfo() {
  return (
    <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 my-10 text-zinc-800">
      <header className="mb-4 flex flex-col items-center gap-2">
        <h2 className="text-3xl font-semibold text-[#004aad] text-center">
          Apartahotel Dozzze Romeo
        </h2>
        {/* Distintivo 1 estrella */}
        <span
          className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-yellow-800 text-sm font-medium border border-yellow-200 shadow-sm"
          aria-label="Clasificación: 1 estrella"
          title="Clasificación: 1 estrella"
        >
          <Star size={16} className="-mt-px" strokeWidth={2} />
          <span>1</span>
        </span>
      </header>

      <p className="text-center text-zinc-600 mb-8">
        Número de registro turístico: <strong>HA-1730</strong>
      </p>

      <div className="space-y-8">
        {/* Información general */}
        <div>
          <h3 className="text-2xl font-semibold text-[#004aad]">Información general</h3>
          <p className="mt-3">
            Bienvenido a Apartahotel Dozzze Romeo, un alojamiento turístico moderno ubicado en el corazón de Alicante. Contamos con 10 unidades totalmente equipadas para 2 personas, con acceso digital 24 h y atención personalizada sin recepción física.
          </p>
          <p className="mt-3">
            <strong>Teléfono de atención 24 h:</strong> +34 919 540 882
          </p>
          <p className="mt-1">
            <strong>Dirección:</strong> Calle Almorandi, 18, Local 2, Esq. C Calle Claudio Coello – Alicante, España
          </p>
        </div>

        {/* Precios oficiales */}
        <div>
          <h3 className="text-2xl font-semibold text-[#004aad]">Precios oficiales (Rack Rates) – Temporada 2025</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-zinc-300 text-center text-sm md:text-base">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-zinc-300 p-3">Temporada</th>
                  <th className="border border-zinc-300 p-3">Fechas</th>
                  <th className="border border-zinc-300 p-3">Tarifa / noche (2 pax)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 p-3">Baja</td>
                  <td className="border border-zinc-300 p-3">1 enero – 31 marzo / 1 noviembre – 20 diciembre</td>
                  <td className="border border-zinc-300 p-3">90 €</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="border border-zinc-300 p-3">Media</td>
                  <td className="border border-zinc-300 p-3">1 abril – 30 junio / 15 septiembre – 31 octubre</td>
                  <td className="border border-zinc-300 p-3">120 €</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 p-3">Alta</td>
                  <td className="border border-zinc-300 p-3">1 julio – 14 septiembre / 21 diciembre – 31 diciembre</td>
                  <td className="border border-zinc-300 p-3">160 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 italic text-zinc-600">Precios IVA incluido. Descuentos aplicables en estancias largas o reservas directas.</p>
        </div>

        {/* Condiciones generales */}
        <div>
          <h3 className="text-2xl font-semibold text-[#004aad]">Condiciones generales</h3>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Check-in:</strong> a partir de las 15:00 h (acceso mediante código digital)
            </li>
            <li>
              <strong>Check-out:</strong> hasta las 11:00 h
            </li>
            <li>
              <strong>Política de cancelación:</strong> gratuita hasta 72 h antes de la llegada
            </li>
            <li>
              <strong>Capacidad máxima:</strong> 2 personas por unidad
            </li>
            <li>
              <strong>Prohibido fumar</strong> dentro de las instalaciones
            </li>
          </ul>
        </div>

        {/* Atención y reclamaciones */}
        <div>
          <h3 className="text-2xl font-semibold text-[#004aad]">Atención y reclamaciones</h3>
          <p className="mt-3">
            Este establecimiento dispone de <strong>hojas de reclamaciones</strong> a disposición de los clientes. Puede solicitarlas en formato físico o a través del siguiente enlace oficial:
          </p>
          <p className="mt-2">
            <a
              className="text-[#004aad] underline underline-offset-2 hover:opacity-80"
              href="https://www.gva.es/downloads/publicados/IN/Cartells.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Descargar cartel oficial de hojas de reclamaciones (GVA)
            </a>
          </p>
        </div>
      </div>

      <footer className="mt-10 text-center text-sm text-zinc-600 border-t border-zinc-200 pt-4">
        <p>Apartahotel Dozzze Romeo • Alicante • Registro: HA-1730</p>
        <p>©️ 2025 Apartahotel Dozzze Romeo • CIF: B-88011556</p>
      </footer>
    </section>
  );
}
