import { useState } from "react";
import {
  Rocket,
  Building2,
  CalendarClock,
  UtensilsCrossed,
  GraduationCap,
  LayoutDashboard,
  Bug,
  Gauge,
  ShieldCheck,
  MessageCircle,
  MapPin,
  Mail,
  BarChart3,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Categoria = "sites" | "apps" | "suporte" | "marketing";

type Servico = {
  cat: Categoria;
  icon: LucideIcon;
  titulo: string;
  texto: string;
  cta: string;
};

const categorias: { id: Categoria | "todos"; label: string }[] = [
  { id: "todos", label: "Ver todos" },
  { id: "sites", label: "Sites e vendas" },
  { id: "apps", label: "Aplicativos" },
  { id: "suporte", label: "Suporte técnico" },
  { id: "marketing", label: "Marketing local" },
];

const servicos: Servico[] = [
  {
    cat: "sites",
    icon: Rocket,
    titulo: "Landing page de alta conversão",
    texto: "Página única e veloz, feita para anúncios trazerem clientes rápido.",
    cta: "Solicitar orçamento",
  },
  {
    cat: "sites",
    icon: Building2,
    titulo: "Site institucional completo",
    texto: "Várias páginas, visual moderno e autoridade para a sua marca.",
    cta: "Solicitar orçamento",
  },
  {
    cat: "apps",
    icon: CalendarClock,
    titulo: "Agendamento online",
    texto: "Clínicas, consultórios e salões: o cliente marca sozinho o horário.",
    cta: "Falar com a Rita",
  },
  {
    cat: "apps",
    icon: UtensilsCrossed,
    titulo: "Catálogo digital com pedido",
    texto: "Restaurantes e lojas recebem pedidos organizados no WhatsApp.",
    cta: "Falar com a Rita",
  },
  {
    cat: "apps",
    icon: GraduationCap,
    titulo: "Área de membros e cursos",
    texto: "Aulas, vídeos e materiais em uma plataforma exclusiva e segura.",
    cta: "Falar com a Rita",
  },
  {
    cat: "apps",
    icon: LayoutDashboard,
    titulo: "Painel de controle interno",
    texto: "Cadastro de clientes, estoque básico e gestão dos seus dados.",
    cta: "Falar com a Rita",
  },
  {
    cat: "suporte",
    icon: Bug,
    titulo: "Manutenção e correção de bugs",
    texto: "Botão quebrado, formulário parado ou erro visual: resolvo em horas.",
    cta: "Solicitar orçamento",
  },
  {
    cat: "suporte",
    icon: Gauge,
    titulo: "Otimização de velocidade (SEO)",
    texto: "Seu site atual mais rápido no celular e melhor nota no Google.",
    cta: "Solicitar orçamento",
  },
  {
    cat: "suporte",
    icon: ShieldCheck,
    titulo: "Certificado SSL",
    texto: "Cadeado de segurança ativo e fim do aviso de “site não seguro”.",
    cta: "Solicitar orçamento",
  },
  {
    cat: "suporte",
    icon: MessageCircle,
    titulo: "Integração com WhatsApp",
    texto: "Botão flutuante profissional e formulários que caem direto no seu chat.",
    cta: "Solicitar orçamento",
  },
  {
    cat: "marketing",
    icon: MapPin,
    titulo: "Perfil no Google Maps",
    texto: "Sua empresa no topo das buscas de quem procura perto de você.",
    cta: "Falar com a Rita",
  },
  {
    cat: "marketing",
    icon: Mail,
    titulo: "E-mail profissional",
    texto: "Endereços com o nome da sua marca, tipo contato@suaempresa.com.br.",
    cta: "Falar com a Rita",
  },
  {
    cat: "marketing",
    icon: BarChart3,
    titulo: "Tags, Pixel e Analytics",
    texto: "Rastreio certo dos anúncios para você parar de gastar às cegas.",
    cta: "Falar com a Rita",
  },
];

export function SolucoesDigitais({ whatsappUrl }: { whatsappUrl: string }) {
  const [ativa, setAtiva] = useState<Categoria | "todos">("todos");
  const lista = ativa === "todos" ? servicos : servicos.filter((s) => s.cat === ativa);

  return (
    <section id="solucoes" className="border-y border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Central de soluções digitais</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Tudo que a sua empresa precisa <span className="text-gradient-ember">na internet</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do site novo ao conserto rápido no que já existe. Escolha uma categoria e veja o que eu faço.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categorias.map((c) => {
            const on = ativa === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setAtiva(c.id)}
                className={
                  on
                    ? "rounded-full bg-gradient-ember px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
                    : "rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((s) => (
            <article
              key={s.titulo}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-primary">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug">{s.titulo}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-gradient-ember hover:text-primary-foreground"
              >
                {s.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
