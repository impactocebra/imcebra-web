"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    const msg = `¡Hola Zack! Quiero cotizar con ImCebra:%0A%0A*Cliente:* ${formData.nombre} (${formData.empresa})%0A*Tipo:* ${formData.tipo}%0A*Cantidad:* ${formData.cantidad}%0A*Tamaño:* ${formData.tamano}%0A*Colores:* ${formData.colores}%0A*Materiales:* ${formData.materiales || "A convenir"}%0A*Terminación:* ${formData.terminacion}%0A*Comentarios:* ${formData.comentarios || "Sin comentarios"}`;
    window.open(`https://wa.me/56957081096?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white relative">
      {/* CONTENEDOR PRINCIPAL OSCURO (TELÓN ELEVABLE ESTILO SAFFRON) */}
      <div className="relative z-10 bg-[#050505] shadow-[0_40px_100px_rgba(0,0,0,0.95)]">
        {/* NAVBAR MINIMALISTA */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/85 backdrop-blur-md border-b border-white/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center group cursor-pointer">
              <div className="relative h-12 w-36 sm:h-14 sm:w-44">
                <Image
                  src="/logo_imcebra_hd.png"
                  alt="ImCebra Gráfica Corporativa"
                  fill
                  className="object-contain group-hover:scale-105 transition duration-300"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
              <a href="/catalogo" className="hover:text-white transition">Catálogo Completo</a>
              <a href="#condiciones" className="hover:text-[#00D2FF] transition">6 Condiciones</a>
              <a href="#propuesta" className="hover:text-white transition">La Red</a>
              <a href="#cotizador" className="hover:text-[#FFE600] transition">Cotizador Zack</a>
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
                <span>+30 años de maestría en producción gráfica corporativa</span>
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
                De la pantalla a las manos de tu cliente o equipo. Seleccionamos el taller técnico e importador especializado ideal para cada una de tus piezas: serigrafía, láser, offset, bordado o importación directa. Calidad impecable, sin fallas y con control total.
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
                  href="https://wa.me/56957081096?text=Hola%20ImCebra,%20necesito%20asesor%C3%ADa%20con%20una%20producci%C3%B3n%20gr%C3%A1fica"
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

        {/* KINETIC MARQUEE TICKER (MOVIMIENTO CONTINUO CON RAYAS DE CEBRA) */}
        <div className="relative w-full overflow-hidden border-y border-white/10 bg-black/70 py-4 backdrop-blur-sm">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-10 text-xs sm:text-sm font-mono tracking-widest uppercase font-bold text-neutral-300">
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF007F]" />
              <span className="text-white">ImCebra® SpA</span>
            </span>
            <span className="text-[#00D2FF]">✦ NUNCA DOS MARCAS IGUALES</span>
            <span className="text-neutral-400">■ BROKERAGE GRÁFICO INDUSTRIAL</span>
            <span className="text-[#FFE600]">✦ EFECTO DAZZLE: ALTO CONTRASTE</span>
            <span className="text-neutral-400">■ MERCHANDISING CORPORATIVO</span>
            <span className="text-[#FF007F]">✦ MERCHANDISING & REGALOS CORPORATIVOS</span>
            <span className="text-neutral-400">■ PAPELERÍA FINA & FOIL</span>
            <span className="text-[#00D2FF]">✦ MATERIAL POP & RETAIL</span>
            <span className="text-neutral-400">■ IMPORTACIONES DIRECTAS</span>
            <span className="text-[#FFE600]">✦ +30 AÑOS DE CONTROL TOTAL</span>

            {/* Duplicado para loop infinito fluido */}
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF007F]" />
              <span className="text-white">ImCebra® SpA</span>
            </span>
            <span className="text-[#00D2FF]">✦ NUNCA DOS MARCAS IGUALES</span>
            <span className="text-neutral-400">■ BROKERAGE GRÁFICO INDUSTRIAL</span>
            <span className="text-[#FFE600]">✦ EFECTO DAZZLE: ALTO CONTRASTE</span>
            <span className="text-neutral-400">■ MERCHANDISING CORPORATIVO</span>
            <span className="text-[#FF007F]">✦ MERCHANDISING & REGALOS CORPORATIVOS</span>
            <span className="text-neutral-400">■ PAPELERÍA FINA & FOIL</span>
            <span className="text-[#00D2FF]">✦ MATERIAL POP & RETAIL</span>
            <span className="text-neutral-400">■ IMPORTACIONES DIRECTAS</span>
            <span className="text-[#FFE600]">✦ +30 AÑOS DE CONTROL TOTAL</span>
          </div>
        </div>

        {/* EL CONCEPTO CEBRA: METÁFORA DE MARCA Y HUELLA SINGULAR */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#050505] via-[#09090c] to-[#050505] relative overflow-hidden zebra-stripes-pattern">
          <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center space-x-2 border border-[#FFE600]/40 bg-[#FFE600]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FFE600]">
                  <span>✦ La Genética Visual de ImCebra</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  ¿POR QUÉ LA CEBRA? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#00D2FF] to-[#FF007F]">
                    NUNCA DOS MARCAS IGUALES.
                  </span>
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                  En la naturaleza, no existen dos cebras con el mismo patrón de rayas. Cada una posee una huella biológica irrepetible. En el mercado corporativo, tu identidad gráfica es tu ventaja competitiva: tu marca no puede ser una copia genérica.
                </p>
              </div>

              <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-pulse" />
                <span>Singularidad cromática & disrupción visual</span>
              </div>
            </div>

            {/* 4 PILARES DEL CONCEPTO CEBRA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-7 space-y-4 hover:border-[#FF007F]/60 transition group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FF007F]/10 border border-[#FF007F]/30 flex items-center justify-center text-[#FF007F] font-bold text-lg font-mono">
                  01
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF007F] transition">
                  La Huella Dactilar
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Cada milímetro de tu packaging, merchandising y papelería respira el ADN auténtico de tu empresa. Cero plantillas genéricas. Identidad exclusiva y a la medida de tu posicionamiento.
                </p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-7 space-y-4 hover:border-[#00D2FF]/60 transition group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] font-bold text-lg font-mono">
                  02
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition">
                  Alto Contraste (Efecto Dazzle)
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Inspirado en el contraste óptico de las cebras: rompe la monotonía visual y corta el ruido de un mercado saturado de opciones iguales. Tu marca salta a la vista y se vuelve inolvidable.
                </p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-7 space-y-4 hover:border-[#FFE600]/60 transition group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/30 flex items-center justify-center text-[#FFE600] font-bold text-lg font-mono">
                  03
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFE600] transition">
                  Alianzas & Brokerage Técnico
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  No nos casamos con una máquina parada: seleccionamos el taller o importador que mejor domina cada técnica concreta. Cero costos inflados, precios justos y supervisión técnica en cada tiraje.
                </p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-7 space-y-4 hover:border-white/40 transition group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg font-mono">
                  04
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition">
                  Disruptivo & Lúdico
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Dejamos atrás las imprentas rígidas y aburridas del pasado. Gráfica corporativa con actitud, carácter contemporáneo y ejecución técnica respaldada por +30 años de experiencia.
                </p>
              </div>
            </div>
          </div>
        </section>


      {/* TRABAJOS REALIZADOS & LÍNEAS DE PRODUCCIÓN */}
      <section id="catalogo" className="py-20 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[#FFE600] text-xs font-bold uppercase tracking-widest">
                Casos en Acción & Producción Real
              </span>
              <h2 className="text-2xl sm:text-4xl font-black mt-2">
                TRABAJOS REALIZADOS & LÍNEAS DE PRODUCCIÓN
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl font-light">
                Merchandising corporativo, gráfica para eventos, piezas textiles y letreros comerciales. Cada entrega supervisada técnicamente para garantizar fidelidad cromática y terminaciones de primer nivel.
              </p>
            </div>
            <a
              href="#cotizador"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF007F] hover:text-white transition"
            >
              <span>Cotizar con tus 6 condiciones</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                nombre: "Tote Bags Algodón Serigrafiado",
                cliente: "COES • Conferencia Internacional",
                desc: "Algodón orgánico natural con serigrafía de alta definición a color corporativo.",
                video: "/videos/bolsa_coes.mp4",
                poster: "/videos/bolsa_coes_poster.png",
                tag: "Merchandising Textil"
              },
              {
                nombre: "Mugs Cerámicos 360° Full Color",
                cliente: "IT Chile • Podcast Oficial",
                desc: "Impresión cerámica envolvente de alta durabilidad y resistencia al lavado.",
                video: "/videos/tazon_it.mp4",
                poster: "/videos/tazon_it_poster.png",
                tag: "Regalos & Lanzamientos"
              },
              {
                nombre: "Letreros Volumétricos & Fachada",
                cliente: "Trattoria & Espacio Comercial",
                desc: "Corte corpóreo, marquesinas textiles y señalética exterior resistente al clima.",
                video: "/videos/letrero_exterior.mp4",
                poster: "/videos/letrero_exterior_poster.png",
                tag: "Branding de Espacios"
              },
              {
                nombre: "Pendones Roller Dobles de Alta Gama",
                cliente: "iamtheCODE • Women in AI",
                desc: "Estructuras de aluminio reforzado con lona fotográfica mate anti-curvatura.",
                img: "/casos/rollups_iamthecode.jpg",
                tag: "Eventos & Seminarios"
              }
            ].map((prod, idx) => (
              <div 
                key={idx}
                className="bg-black/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00D2FF]/60 transition group flex flex-col"
              >
                <div className="relative h-60 w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
                  {prod.video ? (
                    <video
                      src={prod.video}
                      poster={prod.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <Image
                      src={prod.img!}
                      alt={prod.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  )}
                  <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-[10px] font-bold text-[#00D2FF] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                    {prod.tag}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF007F] font-semibold block">
                      {prod.cliente}
                    </span>
                    <h3 className="font-bold text-sm text-white group-hover:text-[#FFE600] transition mt-0.5">
                      {prod.nombre}
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-light mt-1 leading-snug">
                      {prod.desc}
                    </p>
                  </div>
                  <a
                    href="#cotizador"
                    className="pt-2 text-[11px] font-semibold text-[#00D2FF] inline-flex items-center space-x-1 group-hover:underline"
                  >
                    <span>Cotizar similar</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
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

      {/* SECCIÓN ESTILO SAFFRON: BROWSE WORK BY CATEGORY & CASOS INTERACTIVOS */}
      <section className="py-28 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900">
              Browse work by service
            </h2>
            <p className="text-neutral-500 text-base font-light">
              Explora nuestra capacidad instalada por categoría técnica de producción gráfica corporativa.
            </p>
            
            {/* PILLS ESTILO SAFFRON */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                "Merchandising Corporativo",
                "Kits de Onboarding",
                "Packaging & Cajas",
                "Papelería Fina & Cuadernos",
                "Gran Formato & Pendones",
                "Letreros Volumétricos",
                "Línea Eco-Friendly",
                "Textil & Uniformes",
                "Proyectos a Medida"
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs sm:text-sm font-medium hover:border-black hover:bg-black hover:text-white transition duration-200 cursor-pointer shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* DUAL INTERACTIVE GRID (ESTILO EDITORIAL SAFFRON CON ZARA / CASOS) */}
          <div className="bg-[#0a0a0c] text-white rounded-3xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* COLUMNA IZQUIERDA: IMAGEN CON TARJETA EDITORIAL */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                <Image
                  src="/cebras_hero.png"
                  alt="ImCebra Producción de Vanguardia"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF007F]">
                    ■ CASE STUDY #01
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    Universidad Católica — Kits de Bienvenida Masivos
                  </p>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    Demanda agrupada, bolsas de algodón orgánico y libretas foil.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: LISTA EDITORIAL CON FLECHAS CIRCULARES */}
            <div className="lg:col-span-7 space-y-8 divide-y divide-white/10">
              <div className="pt-2 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    ■ MERCHANDISING | IMPORTACIÓN DIRECTA
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white group-hover:text-[#00D2FF] transition">
                  KITS CORPORATIVOS DE ALTA ESCALA
                </h3>
                <p className="text-sm text-neutral-400 font-light mt-1 max-w-xl">
                  Fabricación masiva de botellas térmicas doble pared, libretas de cuero ecológico y estuches personalizados.
                </p>
              </div>

              <div className="pt-8 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    ■ RETAIL & ESPACIOS | PROYECTOS A MEDIDA
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white group-hover:text-[#FF007F] transition">
                  LETREROS VOLUMÉTRICOS & BRANDING AMBIENTAL
                </h3>
                <p className="text-sm text-neutral-400 font-light mt-1 max-w-xl">
                  Letreros retroiluminados, acrílicos con corte láser milimétrico y cuadros en gran formato para salas de directorio.
                </p>
              </div>

              <div className="pt-8 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    ■ PAPELERÍA DE LUJO | 6 CONDICIONES TÉCNICAS
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white group-hover:text-[#FFE600] transition">
                  PAPELERÍA FINAS CON BARNIZ UV & FOIL
                </h3>
                <p className="text-sm text-neutral-400 font-light mt-1 max-w-xl">
                  Tarjetería en cuatricromía sobre couché 350g, polilaminado mate seda y cuños secos de altísima fidelidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PÍLDORA FLOTANTE INFERIOR ESTILO SAFFRON */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href="#cotizador"
          className="flex items-center space-x-3 bg-black/90 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full shadow-2xl hover:border-[#FF007F] transition group"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            ¿Tienes un proyecto en mente? <span className="text-[#FF007F] group-hover:underline">Cotiza con Zack ↗</span>
          </span>
        </a>
      </div>

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
                <span>Alianzas con importadores y talleres técnicos especializados</span>
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
            <div className="inline-flex items-center space-x-2 border border-[#00D2FF]/40 bg-[#00D2FF]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Asistente Inteligente de Producción: Zack the Zebra</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black">
              COTIZA CON ZACK EN VIVO
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Ingresa los parámetros de tu requerimiento. Zack procesa las 6 condiciones técnicas y te conecta directo a WhatsApp con tu presupuesto pre-armado.
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
              <span>Enviar Requerimiento a Zack en WhatsApp</span>
              <Send className="w-5 h-5" />
            </button>

            {submitted && (
              <p className="text-center text-xs text-[#00D2FF] font-medium">
                ✓ Conectando con Zack en WhatsApp con tus 6 condiciones listas...
              </p>
            )}
          </form>
        </div>
      </section>

      {/* DIRECTORIO CORPORATIVO OSCURO ESTILO SAFFRON (FINAL DEL TELÓN SUPERIOR) */}
      <section className="pt-20 pb-24 px-6 bg-black border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-sm">
            <div className="md:col-span-5 space-y-4">
              <div className="relative h-14 w-44">
                <Image
                  src="/logo_imcebra_hd.png"
                  alt="ImCebra Gráfica Corporativa"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="max-w-md text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                Comercialización de gráfica corporativa, merchandising, material POP y proyectos especiales a gran escala en Chile. 30 años conectando marcas con la mejor infraestructura industrial.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-[#00D2FF]">Contacto Directo</p>
              <p className="font-bold text-white text-base">contacto@imcebra.com</p>
              <p className="text-neutral-300 text-sm font-semibold">+56 9 5700 0000</p>
              <p className="text-neutral-500 text-xs mt-1">Av. Providencia 1208 OF 1603. Providencia, Santiago</p>
            </div>

            <div className="md:col-span-2 space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-[#FFE600]">Navegación</p>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                <li><a href="/catalogo" className="hover:text-white transition">Ver Catálogo ↗</a></li>
                <li><a href="#condiciones" className="hover:text-white transition">6 Condiciones ↗</a></li>
                <li><a href="#propuesta" className="hover:text-white transition">La Red Industrial ↗</a></li>
                <li><a href="#cotizador" className="hover:text-white transition">Cotizador Zack ↗</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF007F]">Hubs Conectados</p>
              <ul className="space-y-1 text-xs text-neutral-400 font-mono">
                <li>Santiago de Chile</li>
                <li>Lima</li>
                <li>Bogotá</li>
                <li>Madrid</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-neutral-500 font-mono">
            <span>© 2026 ImCebra SpA. Todos los derechos reservados.</span>
            <div className="flex items-center space-x-2 text-[#FFE600] mt-3 sm:mt-0 font-sans text-xs">
              <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-ping" />
              <span>Desliza para revelar la huella ImCebra ↓</span>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* FOOTER AMARILLO GIGANTE EXPANSIVO ESTILO SAFFRON (STICKY REVEAL CURTAIN) */}
      <footer id="contacto" className="sticky bottom-0 z-0 bg-[#FFE600] text-black min-h-[60vh] sm:min-h-[75vh] flex flex-col justify-between px-6 sm:px-12 py-10 sm:py-14 overflow-hidden zebra-stripes-yellow select-none">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono font-bold tracking-widest text-neutral-900 border-b border-black/15 pb-4">
          <span>IMCEBRA SPA ✦ GRÁFICA CORPORATIVA</span>
          <span className="hidden sm:inline">SANTIAGO • LIMA • BOGOTÁ • MADRID</span>
          <a href="#cotizador" className="hover:underline flex items-center gap-1 text-black font-extrabold">
            HABLEMOS CON ZACK ↗
          </a>
        </div>

        {/* LOGOTIPO MONUMENTAL DE EXTREMO A EXTREMO ESTILO SAFFRON */}
        <div className="max-w-7xl mx-auto w-full py-8 flex flex-col items-center justify-center">
          <div className="relative w-full aspect-[995/307] max-w-5xl hover:scale-[1.02] transition duration-500">
            <Image
              src="/logo_imcebra_negro_monumental.png"
              alt="ImCebra Gráfica Corporativa"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-neutral-900 border-t border-black/15 pt-4">
          <span>© 2026 ImCebra SpA. TODOS LOS DERECHOS RESERVADOS.</span>
          <span className="mt-2 sm:mt-0">IDENTIDAD GRÁFICA QUE DEJA HUELLA.</span>
        </div>
      </footer>
    </main>
  );
}
