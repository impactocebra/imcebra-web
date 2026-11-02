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
  const [activeVideo, setActiveVideo] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipo: "",
    cantidad: "",
    tamano: "",
    colores: "",
    materiales: "",
    terminacion: "",
    lugarEntrega: "",
    fechaEntrega: "",
    comentarios: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Armar mensaje directo para WhatsApp dirigido a Rayas
    const msg = `¡Hola Rayas! Quiero cotizar con ImCebra:%0A%0A*Cliente:* ${formData.nombre} (${formData.empresa})%0A*Email:* ${formData.email} | *Tel:* ${formData.telefono}%0A*Tipo de Pieza:* ${formData.tipo}%0A*Cantidad:* ${formData.cantidad}%0A*Medidas:* ${formData.tamano || "Por definir"}%0A*Colores:* ${formData.colores || "Por definir"}%0A*Materiales:* ${formData.materiales || "A convenir"}%0A*Terminaciones:* ${formData.terminacion || "Estándar"}%0A*Lugar de Entrega:* ${formData.lugarEntrega || "Por coordinar"}%0A*Fecha Deseada:* ${formData.fechaEntrega || "A coordinar"}%0A*Detalles:* ${formData.comentarios || "Sin comentarios adicionales"}`;
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
              <a href="#cotizador" className="hover:text-[#FFE600] transition flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />
                <span>Cotizador Rayas</span>
              </a>
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
                  GRÁFICA CORPORATIVA
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

      {/* SECCIÓN ESTILO SAFFRON: LAS 5 LÍNEAS MAESTRAS & CASOS INTERACTIVOS */}
      <section className="py-28 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <span className="text-[#FF007F] text-xs font-bold uppercase tracking-widest font-mono">
              Capacidad Integral ImCebra
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900">
              LÍNEAS DE PRODUCCIÓN & SERVICIOS
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              La respuesta definitiva para no tener 5 proveedores distintos. Nuestras **5 líneas maestras** resuelven desde regalos corporativos hasta señalética a gran escala.
            </p>
            
            {/* LAS 5 LÍNEAS MAESTRAS EN PILLS DESTACADAS */}
            <div className="flex flex-wrap justify-center gap-3 pt-3">
              {[
                "1. Merchandising & Regalos Corporativos",
                "2. Impresos & Papelería Fina",
                "3. Material POP & Retail",
                "4. Confección & Textil Técnico",
                "5. Importaciones Directas & Proyectos a Medida"
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs sm:text-sm font-semibold hover:border-black hover:bg-black hover:text-white transition duration-200 cursor-pointer shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* DUAL INTERACTIVE GRID (ESTILO EDITORIAL SAFFRON CON LOS 3 VIDEOS EN ACCIÓN) */}
          <div className="bg-[#0a0a0c] text-white rounded-3xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* COLUMNA IZQUIERDA: 3 VIDEOS INTERACTIVOS REALES DE PRODUCCIÓN */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-2 bg-white/5 p-1 rounded-xl border border-white/10">
                {[
                  { label: "Tote Bags", tag: "Textil" },
                  { label: "Mugs 360°", tag: "Regalos" },
                  { label: "Fachada", tag: "Espacios" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveVideo(idx)}
                    className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
                      activeVideo === idx 
                        ? "bg-[#FF007F] text-white shadow-pink-glow" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                {activeVideo === 0 && (
                  <video
                    key="v-coes"
                    src="/videos/bolsa_coes.mp4"
                    poster="/videos/bolsa_coes_poster.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
                {activeVideo === 1 && (
                  <video
                    key="v-it"
                    src="/videos/tazon_it.mp4"
                    poster="/videos/tazon_it_poster.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
                {activeVideo === 2 && (
                  <video
                    key="v-fachada"
                    src="/videos/letrero_exterior.mp4"
                    poster="/videos/letrero_exterior_poster.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/15 pointer-events-none">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#00D2FF] font-bold">
                    {activeVideo === 0 && "■ LÍNEA 04 • CONFECCIÓN & TEXTIL"}
                    {activeVideo === 1 && "■ LÍNEA 01 • MERCHANDISING CORPORATIVO"}
                    {activeVideo === 2 && "■ LÍNEA 03 • BRANDING DE ESPACIOS"}
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    {activeVideo === 0 && "COES — Conferencia Internacional"}
                    {activeVideo === 1 && "IT Chile — Podcast Digitalizando Experiencias"}
                    {activeVideo === 2 && "Valdivia — Letrero Volumétrico & Fachada"}
                  </p>
                  <p className="text-xs text-neutral-300 font-light mt-0.5 leading-snug">
                    {activeVideo === 0 && "Tote bag de algodón orgánico con serigrafía corporativa nítida."}
                    {activeVideo === 1 && "Tazón cerámico 360° con fidelidad cromática y resistencia."}
                    {activeVideo === 2 && "Letrero corpóreo, marquesina y señalética exterior de alta resistencia."}
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: LISTA EDITORIAL CON FLECHAS CIRCULARES */}
            <div className="lg:col-span-7 space-y-6 divide-y divide-white/10">
              <div className="pt-2 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    ■ RETAIL & TECH | PRODUCCIÓN EN SERIE
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1.5 text-white group-hover:text-[#00D2FF] transition">
                  ADHESIVOS TROQUELADOS RIPLEY TECH_
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 max-w-xl">
                  Tiraje masivo de vinilo adhesivo troquelado a registro con tres variantes cromáticas para gran retail tecnológico.
                </p>
              </div>

              <div className="pt-6 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    ■ ESPACIOS & FACHADAS | LETREROS CORPÓREOS
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1.5 text-white group-hover:text-[#FF007F] transition">
                  LETREROS CON HALO LED (DI TORLASCHI)
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 max-w-xl">
                  Relieve volumétrico acrílico 3D con retroiluminación LED cálida, marquesinas y señalética comercial para retail y gastronomía.
                </p>
              </div>

              <div className="pt-6 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    ■ ACTIVACIONES & FERIAS | MATERIAL POP
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1.5 text-white group-hover:text-[#FFE600] transition">
                  RULETAS INTERACTIVAS EN SERIE
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 max-w-xl">
                  Corte láser en acrílico, serigrafía multicolor y ensamblado masivo para campañas públicas y activaciones de marca.
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
          className="flex items-center space-x-3 bg-black/90 backdrop-blur-xl border border-white/20 text-white px-5 py-2.5 rounded-full shadow-2xl hover:border-[#FF007F] transition group"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#FF007F]">
            <Image
              src="/rayas_avatar.png"
              alt="Rayas"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            ¿Tienes un proyecto en mente? <span className="text-[#FF007F] group-hover:underline">Cotiza con Rayas ↗</span>
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

      {/* FORMULARIO COTIZADOR ADAPTABLE (SIN SESGO DE IMPRENTAS) */}
      <section id="cotizador" className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2.5 border border-[#00D2FF]/40 bg-[#00D2FF]/10 px-4 py-2 rounded-full text-xs font-semibold text-[#00D2FF]">
              <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#00D2FF]">
                <Image
                  src="/rayas_avatar.png"
                  alt="Rayas the Zebra"
                  fill
                  className="object-cover"
                />
              </div>
              <span>Asistente de Producción: Rayas the Zebra</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black">
              COTIZA TU PROYECTO A MEDIDA
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
              Cuéntale a Rayas lo que necesitas y te responderemos con la mejor opción técnica, precio y tiempos de entrega.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-black/80 border border-white/15 rounded-3xl p-8 sm:p-12 space-y-8 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-white mb-2">Nombre y Apellido</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#FF007F] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-white mb-2">Empresa u Organización</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre de tu empresa o institución"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#FF007F] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-white mb-2">Email Corporativo</label>
                <input
                  type="email"
                  required
                  placeholder="contacto@empresa.cl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#00D2FF] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-white mb-2">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+56 9 1234 5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#00D2FF] focus:outline-none transition"
                />
              </div>
            </div>

            {/* ESPECIFICACIONES TÉCNICAS */}
            <div className="pt-6 border-t border-white/10 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#00D2FF]">
                Especificaciones del Requerimiento
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Tipo de Pieza / Producto</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Tote bags, Tazones, Pendones, Cajas packaging, Letrero..."
                    value={formData.tipo}
                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#FF007F] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Cantidad Requerida</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 50, 100, 500, 2.000 unidades..."
                    value={formData.cantidad}
                    onChange={(e) => setFormData({ ...formData, cantidad: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#FF007F] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Medidas / Dimensiones</label>
                  <input
                    type="text"
                    placeholder="Largo x Ancho (y Alto si aplica, ej: 30x40x10 cm)"
                    value={formData.tamano}
                    onChange={(e) => setFormData({ ...formData, tamano: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#FF007F] focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Colores / Aplicación Gráfica</label>
                  <input
                    type="text"
                    placeholder="Ej: Full color, 1 color serigrafía, Grabado láser, Bordado..."
                    value={formData.colores}
                    onChange={(e) => setFormData({ ...formData, colores: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#00D2FF] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Materiales / Sustratos Deseados</label>
                  <input
                    type="text"
                    placeholder="Ej: Algodón orgánico, Acrílico, Cerámica, Vinilo, Madera, Couché..."
                    value={formData.materiales}
                    onChange={(e) => setFormData({ ...formData, materiales: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#00D2FF] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Terminaciones o Acabados</label>
                  <input
                    type="text"
                    placeholder="Ej: Barniz UV, Foil dorado, Ojetillos, Confección con cierre..."
                    value={formData.terminacion}
                    onChange={(e) => setFormData({ ...formData, terminacion: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#00D2FF] focus:outline-none transition"
                  />
                </div>
              </div>

              {/* CAMPOS SOLICITADOS SIN NÚMERO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Lugar de Entrega</label>
                  <input
                    type="text"
                    placeholder="Ej: Providencia, Santiago / Despacho a regiones..."
                    value={formData.lugarEntrega}
                    onChange={(e) => setFormData({ ...formData, lugarEntrega: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#FFE600] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Fecha de Entrega Deseada</label>
                  <input
                    type="text"
                    placeholder="Ej: 20 de Noviembre / Urgente para evento..."
                    value={formData.fechaEntrega}
                    onChange={(e) => setFormData({ ...formData, fechaEntrega: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-[#FFE600] focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-2">
                  Detalles Adicionales & Observaciones
                </label>
                <textarea
                  rows={3}
                  placeholder="Indícanos si tienes archivos vectoriales listos (AI, PDF), requerimientos de empaque individual, etc."
                  value={formData.comentarios}
                  onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl p-4 text-sm text-white placeholder-zinc-400 focus:border-[#FFE600] focus:outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF007F] via-[#FF007F] to-[#00D2FF] hover:opacity-95 text-white font-extrabold py-4 px-8 rounded-2xl text-base tracking-wide flex items-center justify-center space-x-3 transition shadow-pink-glow"
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white">
                <Image
                  src="/rayas_avatar.png"
                  alt="Rayas"
                  fill
                  className="object-cover"
                />
              </div>
              <span>Enviar Requerimiento a Rayas en WhatsApp</span>
              <Send className="w-5 h-5 ml-1" />
            </button>

            {submitted && (
              <p className="text-center text-xs text-[#00D2FF] font-medium">
                ✓ Conectando con Rayas en WhatsApp con tus especificaciones listas...
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
                <li><a href="#cotizador" className="hover:text-white transition">Cotizador Rayas ↗</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF007F]">Presencia & Alcance</p>
              <ul className="space-y-1 text-xs text-neutral-300 font-medium">
                <li>Chile</li>
                <li>Perú</li>
                <li>Colombia</li>
                <li>México</li>
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
          <span className="hidden sm:inline">CHILE • PERÚ • COLOMBIA • MÉXICO</span>
          <a href="#cotizador" className="hover:underline flex items-center gap-1.5 text-black font-extrabold">
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-black">
              <Image
                src="/rayas_avatar.png"
                alt="Rayas"
                fill
                className="object-cover"
              />
            </div>
            <span>HABLEMOS CON RAYAS ↗</span>
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
