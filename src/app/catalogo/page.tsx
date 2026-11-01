import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Catálogo de Productos & Líneas Mayoristas | ImCebra SpA",
  description: "Explora más de 1.000 referencias disponibles para producción gráfica y merchandising corporativo a gran escala en Chile.",
};

export default function CatalogoPage() {
  const productos = [
    {
      id: "botellas",
      categoria: "Bebidas & Térmicos",
      nombre: "Botella Térmica Doble Pared 500ml",
      desc: "Acero inoxidable SUS 304, aislación al vacío de 12 horas. Compatible con grabado láser y serigrafía circular.",
      img: "/catalogo/botella_termica.jpg",
      stock: "+15.000 un. en bodega Chile",
      tecnicas: ["Grabado Láser", "Serigrafía", "Sublimación"]
    },
    {
      id: "libretas",
      categoria: "Escritorio & Oficina",
      nombre: "Libreta Ejecutiva Eco-Cuero A5",
      desc: "Tapas duras ecológicas, hojas rayadas recicladas, cinta separadora y elástico al tono. Terminación hot-stamping o serigrafía.",
      img: "/catalogo/libreta_corporativa.jpg",
      stock: "+25.000 un. en bodega Chile",
      tecnicas: ["Bajo Relieve (Cuño)", "Foil Metalizado", "Serigrafía"]
    },
    {
      id: "bolsas",
      categoria: "Línea Ecológica & Textil",
      nombre: "Tote Bag Algodón Natural 140g",
      desc: "100% algodón crudo, fuelle reforzado, asas largas para hombro. Ideal para congresos, retail y onboarding.",
      img: "/catalogo/bolsa_algodon.jpg",
      stock: "+40.000 un. en bodega Chile",
      tecnicas: ["Serigrafía Textil", "DTF Full Color", "Transfer"]
    },
    {
      id: "lapices",
      categoria: "Escritura Fina",
      nombre: "Bolígrafo Metálico Ejecutivo Matte",
      desc: "Cuerpo de aluminio anodizado con acabado mate tacto seda, clip cromado y tinta alemana de alta fluidez.",
      img: "/catalogo/lapiz_ejecutivo.jpg",
      stock: "+80.000 un. en bodega Chile",
      tecnicas: ["Grabado Láser Espejo", "Tampografía 2 Colores"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HEADER DE NAVEGACIÓN */}
      <nav className="border-b border-white/10 px-6 py-6 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Inicio</span>
          </Link>

          <Link href="/" className="relative h-12 w-36 block">
            <Image
              src="/logo_imcebra_hd.png"
              alt="ImCebra Gráfica Corporativa"
              fill
              className="object-contain"
            />
          </Link>

          <Link
            href="/#cotizador"
            className="bg-[#FF007F] hover:bg-[#d6006b] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-full transition shadow-pink-glow"
          >
            Cotizar con Zack
          </Link>
        </div>
      </nav>

      {/* CABECERA EDITORIAL */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 border border-[#00D2FF]/40 bg-[#00D2FF]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00D2FF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Alianzas con los mayores importadores y bodegas de Chile</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          LÍNEA DE PRODUCTOS & REFERENCIAS MAYORISTAS
        </h1>

        <p className="text-zinc-400 text-base max-w-2xl font-light leading-relaxed">
          Acceso inmediato a stock nacional consolidado. Selecciona una referencia y cotiízala con las 6 condiciones técnicas (Tipo, Cantidad, Tamaño, Colores, Material y Acabado).
        </p>
      </section>

      {/* GRID DE PRODUCTOS EN PÁGINA INDEPENDIENTE */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((prod) => (
            <div
              key={prod.id}
              className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-[#00D2FF]/50 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={prod.img}
                    alt={prod.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-[11px] font-bold text-[#00D2FF] px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                    {prod.categoria}
                  </span>
                </div>

                <div className="p-7 space-y-4">
                  <h2 className="text-xl font-extrabold text-white group-hover:text-[#FFE600] transition">
                    {prod.nombre}
                  </h2>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {prod.desc}
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <p className="text-[11px] font-mono text-emerald-400">
                      ✓ Stock: {prod.stock}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.tecnicas.map((tec, i) => (
                        <span key={i} className="text-[10px] bg-white/5 border border-white/10 text-zinc-300 px-2 py-0.5 rounded-md">
                          {tec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <Link
                  href={`/#cotizador`}
                  className="w-full bg-white/10 hover:bg-[#FF007F] hover:text-white text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition"
                >
                  <span>Cotizar este producto con Zack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
