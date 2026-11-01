"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Send, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  Printer,
  Package,
  Cpu,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipo: "Merchandising Corporativo",
    cantidad: "100",
    tamano: "Estándar / Por Definir",
    colores: "Cuatricromía (Full Color)",
    materiales: "",
    terminacion: "Polilaminado Mate",
    comentarios: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Armar mensaje directo para WhatsApp
    const msg = `¡Hola ImCebra! Quiero cotizar:%0A%0A*Cliente:* ${formData.nombre} (${formData.empresa})%0A*Tipo:* ${formData.tipo}%0A*Cantidad:* ${formData.cantidad}%0A*Tamaño:* ${formData.tamano}%0A*Colores:* ${formData.colores}%0A*Materiales:* ${formData.materiales || "A convenir"}%0A*Terminación:* ${formData.terminacion}%0A*Comentarios:* ${formData.comentarios || "Sin comentarios"}`;
    window.open(`https://wa.me/56957081096?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* NAVBAR MINIMALISTA */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/85 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-black tracking-tight text-white">
              Im<span className="text-[#FF007F]">Cebra</span>
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-400 border border-white/10 px-2 py-0.5 rounded-full">
              SpA
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            <a href="#propuesta" className="hover:text-white transition">La Red</a>
            <a href="#condiciones" className="hover:text-[#00D2FF] transition">6 Condiciones</a>
            <a href="#cotizador" className="hover:text-[#FFE600] transition">Cotizador</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#cotizador"
              className="bg-[#FF007F] hover:bg-[#d6006b] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition shadow-pink-glow"
            >
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF007F]/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 border border-[#FF007F]/40 bg-[#FF007F]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FF007F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30 años de maestría en producción gráfica corporativa</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              PRODUCCIÓN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                GRÁFICA INTELIGENTE
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#00D2FF] to-[#FFE600]">
                Y DE ALTO IMPACTO.
              </span>
            </h1>

            <p className="text-lg text-zinc-300 max-w-xl font-light leading-relaxed">
              De la pantalla a las manos de tu cliente o equipo. Conectamos requerimientos corporativos con la mayor red de fábricas y talleres en Chile, Asia y Europa. Calidad impecable, sin fallas y con control total.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#cotizador"
                className="inline-flex items-center space-x-2 bg-white text-black font-extrabold px-7 py-3.5 rounded-full hover:bg-zinc-200 transition text-sm shadow-lg"
              >
                <span>Cotizar Proyecto Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/56957081096?text=Hola%20ImCebra,%20necesito%20asesoría%20con%20una%20producción%20gráfica"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full transition text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#00D2FF]" />
                <span>Atención WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl font-black text-[#00D2FF]">30+</p>
                <p className="text-xs text-zinc-400 font-medium">Años de Trayectoria</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#FF007F]">6</p>
                <p className="text-xs text-zinc-400 font-medium">Condiciones Maestras</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#FFE600]">50%</p>
                <p className="text-xs text-zinc-400 font-medium">Anticipo Seguro</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/40 p-2 shadow-2xl">
              <Image
                src="/cebras_hero.png"
                alt="ImCebra Identidad Gráfica y Estratégica"
                width={700}
                height={500}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">ImCebra® SpA</p>
                  <p className="text-[11px] text-zinc-400">Branding & Producción que deja huella</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#00D2FF] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAS 6 CONDICIONES MAESTRAS */}
      <section id="condiciones" className="py-24 px-6 bg-zinc-950 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#00D2FF] text-xs font-bold uppercase tracking-widest">
              Metodología ImCebra
            </span>
            <h2 className="text-3xl sm:text-5xl font-black">
              LAS 6 CONDICIONES MAESTRAS
            </h2>
            <p className="text-zinc-400 text-sm">
              El método probado durante 3 décadas para que ningún presupuesto tenga sorpresas ni retrasos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Tipo de Pieza", desc: "Merchandising, papelería fina, pendones, letreros volumétricos, packaging o kits corporativos." },
              { num: "02", title: "Cantidad Exacta", desc: "Desde tirajes boutique de prueba hasta compras masivas de miles de unidades con escala de precio." },
              { num: "03", title: "Tamaño & Formato", desc: "Medidas milimétricas, troqueles especiales o formatos estándar optimizados para evitar desperdicio de sustrato." },
              { num: "04", title: "Colores & Tintas", desc: "1 a 4 colores, cuatricromía full color, tintas especiales Pantone®, foil metalizado o serigrafía directa." },
              { num: "05", title: "Materiales & Sustratos", desc: "Couché, vinilo fundido, acrílico, algodón orgánico, acero inoxidable, kraft reciclado o maderas nobles." },
              { num: "06", title: "Terminación & Acabado", desc: "Polilaminado mate/brillo, laca UV sectorizada con relieve, grabado láser, ojetillos o armado artesanal." },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-black/60 border border-white/10 rounded-2xl p-7 space-y-4 hover:border-[#FF007F]/60 transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#FF007F] bg-[#FF007F]/10 border border-[#FF007F]/30 px-2.5 py-1 rounded-md">
                    {item.num}
                  </span>
                  <Layers className="w-5 h-5 text-zinc-500 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#00D2FF] transition">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR / EL MODELO DE BROKERAGE */}
      <section id="propuesta" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#FFE600] text-xs font-bold uppercase tracking-widest">
              Tu Brazo Operativo Gráfico
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">
              TU MARCA EN ALTO. <br />
              TU PRESUPUESTO BAJO CONTROL.
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              No somos un simple taller que intenta venderte la máquina que tiene parada. Somos tu **brazo operativo definitivo**: licitamos cada pedido a la fábrica especializada que mejor precio, stock y calidad ofrece para esa pieza concreta.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2FF]" />
                <span>Acceso directo a importadores mayoristas de más de 25M de unidades</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF007F]" />
                <span>Regla de anticipo del 50% para congelar precio y tiempos de entrega</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFE600]" />
                <span>Supervisión de calidad y pre-prensa antes de mandar a fabricar</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-8 h-8 text-[#00D2FF]" />
              <div>
                <h4 className="text-lg font-bold">Protocolo de Producción ImCebra</h4>
                <p className="text-xs text-zinc-400">Garantía de entrega y fidelidad cromática</p>
              </div>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-zinc-400">Paso 1: Requerimiento</span>
                <span className="text-[#00D2FF]">6 Condiciones + Arte</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-zinc-400">Paso 2: Licitación Red</span>
                <span className="text-[#FFE600]">Mejor Taller Asignado</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-zinc-400">Paso 3: Aprobación</span>
                <span className="text-[#FF007F]">50% Anticipo Producción</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-zinc-400">Paso 4: Despacho</span>
                <span className="text-white">Entrega & Pago Saldo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO COTIZADOR BASADO EN LAS 6 CONDICIONES */}
      <section id="cotizador" className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[#FF007F] text-xs font-bold uppercase tracking-widest">
              Cotizador Inteligente 24/7
            </span>
            <h2 className="text-3xl sm:text-5xl font-black">
              COTIZA TU PROYECTO
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Ingresa los parámetros de tu requerimiento. Nuestro sistema procesa las 6 condiciones para darte el mejor presupuesto del mercado.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-black/80 border border-white/15 rounded-3xl p-8 sm:p-12 space-y-8 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Nombre y Apellido</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF007F] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Empresa u Organización</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre de tu empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF007F] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Email Corporativo</label>
                <input
                  type="email"
                  required
                  placeholder="contacto@empresa.cl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00D2FF] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+56 9 1234 5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00D2FF] focus:outline-none transition"
                />
              </div>
            </div>

            {/* LAS 6 CONDICIONES EN EL FORMULARIO */}
            <div className="pt-6 border-t border-white/10 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#00D2FF]">
                Parámetros de Fabricación (Las 6 Condiciones)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">1. Tipo de Trabajo</label>
                  <select
                    value={formData.tipo}
                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
                  >
                    <option>Merchandising Corporativo</option>
                    <option>Papelería & Cuadernos</option>
                    <option>Pendones & Gráfica Gran Formato</option>
                    <option>Letreros & Volumétricos</option>
                    <option>Bolsas & Packaging</option>
                    <option>Kit Bienvenida / Onboarding</option>
                    <option>Proyecto Especial a Medida</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">2. Cantidad Requerida</label>
                  <input
                    type="text"
                    placeholder="Ej: 50, 250, 1.000 un."
                    value={formData.cantidad}
                    onChange={(e) => setFormData({ ...formData, cantidad: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">3. Tamaño / Medidas</label>
                  <input
                    type="text"
                    placeholder="Ej: A5, 90x200cm, estándar..."
                    value={formData.tamano}
                    onChange={(e) => setFormData({ ...formData, tamano: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">4. Colores / Tintas</label>
                  <select
                    value={formData.colores}
                    onChange={(e) => setFormData({ ...formData, colores: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
                  >
                    <option>Cuatricromía (Full Color)</option>
                    <option>1 Color (Serigrafía / Tampografía)</option>
                    <option>2 Colores Directos</option>
                    <option>Grabado Láser (Sin tinta)</option>
                    <option>Foil Dorado / Plateado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">5. Materiales Preferidos</label>
                  <input
                    type="text"
                    placeholder="Ej: Algodón, Kraft, Acrílico, Couché..."
                    value={formData.materiales}
                    onChange={(e) => setFormData({ ...formData, materiales: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">6. Terminación</label>
                  <select
                    value={formData.terminacion}
                    onChange={(e) => setFormData({ ...formData, terminacion: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-white focus:outline-none transition"
                  >
                    <option>Polilaminado Mate</option>
                    <option>Polilaminado Brillante</option>
                    <option>Barniz UV Sectorizado</option>
                    <option>Troquelado Especial</option>
                    <option>Ojetillos Metálicos</option>
                    <option>Estándar sin terminación extra</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">
                  Detalles Adicionales / Fecha de Entrega Esperada
                </label>
                <textarea
                  rows={3}
                  placeholder="Indícanos si tienes fecha límite de evento, si necesitas despacho a regiones o cualquier observación técnica."
                  value={formData.comentarios}
                  onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 text-sm focus:border-[#FFE600] focus:outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF007F] via-[#FF007F] to-[#00D2FF] hover:opacity-95 text-white font-extrabold py-4 px-8 rounded-2xl text-base tracking-wide flex items-center justify-center space-x-3 transition shadow-pink-glow"
            >
              <span>Enviar Requerimiento y Conectar con Asesor</span>
              <Send className="w-5 h-5" />
            </button>

            {submitted && (
              <p className="text-center text-xs text-[#00D2FF] font-medium">
                ✓ Abriendo WhatsApp con los datos de tu cotización...
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="border-t border-white/10 py-16 px-6 bg-black text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black text-white">Im<span className="text-[#FF007F]">Cebra</span></span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">SpA</span>
            </div>
            <p className="max-w-sm text-zinc-400 font-light leading-relaxed">
              Comercialización y gestión de producción gráfica corporativa en Chile. Conectamos demanda empresarial con capacidades industriales directas.
            </p>
            <p className="text-zinc-600">
              © 2026 ImCebra SpA. Todos los derechos reservados.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Contacto Comercial</p>
            <p className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#FF007F]" />
              <span>ImpactoCebra@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#00D2FF]" />
              <span>+56 9 5708 1096</span>
            </p>
            <p className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#FFE600]" />
              <span>Providencia, Santiago de Chile</span>
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Garantía Operativa</p>
            <p className="text-zinc-400 leading-relaxed font-light">
              Todas las órdenes se gestionan bajo contrato de intermediación y anticipo del 50% con emisión de factura electrónica exenta o afecta según corresponda.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
