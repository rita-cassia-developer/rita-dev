import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail, MessageCircle, Facebook } from "lucide-react";

import serralheria from "@/assets/serralheria.jpg";
import advocacia from "@/assets/advocacia.jpg";
import lavacar from "@/assets/lavacar.jpg";
import lanchonete from "@/assets/lanchonete.jpg";

const WHATSAPP_URL =
  "https://wa.me/5543996846394?text=Ol%C3%A1%20Rita!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20um%20or%C3%A7amento%20de%20site%20para%20minha%20empresa.";
const EMAIL_URL = "mailto:rccode.dev@outlook.com?subject=Quero%20um%20site%20para%20minha%20empresa";
const FACEBOOK_URL = "https://www.facebook.com/people/RC-Cria%C3%A7%C3%A3o-de-sites";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RC Criação de Sites e Presença Digital | Sites que vendem para o seu negócio" },
      {
        name: "description",
        content:
          "RC Criação de Sites e Presença Digital. Crio sites e landing pages rápidos e modernos para serralherias, advocacia, lava-rápido, lanchonetes e outros negócios. Veja os projetos no ar.",
      },
      { property: "og:title", content: "RC Criação de Sites e Presença Digital | Sites que vendem para o seu negócio" },
      {
        property: "og:description",
        content:
          "Veja projetos reais no ar e imagine como o site da sua empresa pode ficar. Orçamento sem compromisso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projetos = [
  {
    nome: "Serralheria Metal & Design",
    segmento: "Serralheria e estruturas metálicas",
    img: serralheria,
    url: "https://rita-cassia-developer.github.io/landing-page-serralheria/",
    resultado:
      "Vitrine de portões, portas e estruturas com galeria de trabalhos e botão direto para o WhatsApp.",
    tags: ["Landing page", "Galeria de obras", "Contato rápido"],
  },
  {
    nome: "Advocacia Estratégica",
    segmento: "Escritório de advocacia",
    img: advocacia,
    url: "https://rita-cassia-developer.github.io/prototipo-advocacia/",
    resultado:
      "Identidade sóbria que transmite autoridade, com áreas de atuação e formulário de consulta.",
    tags: ["Institucional", "Áreas de atuação", "Captação de clientes"],
  },
  {
    nome: "Estética Automotiva",
    segmento: "Lava-rápido e polimento",
    img: lavacar,
    url: "https://rita-cassia-developer.github.io/prototipo-lavacar/",
    resultado:
      "Tabela de serviços e pacotes clara, pensada para o cliente escolher e agendar em poucos cliques.",
    tags: ["Serviços e preços", "Agendamento", "Mobile first"],
  },
  {
    nome: "Lanchonete Detoni",
    segmento: "Alimentação e delivery",
    img: lanchonete,
    url: "https://developer-senac.github.io/lanchonete-detoni/",
    resultado:
      "Cardápio digital apetitoso com destaque para promoções e pedido direto pelo celular.",
    tags: ["Cardápio digital", "Delivery", "Promoções"],
  },
];

const entregas = [
  {
    titulo: "Site pronto para vender",
    texto:
      "Cada página é pensada para o cliente encontrar o que precisa e chamar você no WhatsApp em segundos.",
  },
  {
    titulo: "Perfeito no celular",
    texto:
      "A maioria dos seus clientes acessa pelo telefone. Tudo é testado para carregar rápido e ficar bonito em qualquer tela.",
  },
  {
    titulo: "Encontrado no Google",
    texto:
      "Estrutura, textos e velocidade configurados para o seu negócio aparecer nas buscas da sua região.",
  },
  {
    titulo: "Você no comando",
    texto: "Entrego com domínio configurado e explico como funciona, sem palavra difícil.",
  },
];

const etapas = [
  { n: "01", t: "Conversa", d: "Entendo o seu negócio, seus clientes e o que você quer alcançar." },
  { n: "02", t: "Proposta", d: "Você recebe escopo, prazo e valor fechado. Sem surpresa depois." },
  { n: "03", t: "Criação", d: "Layout e textos feitos sob medida, com ajustes junto com você." },
  { n: "04", t: "No ar", d: "Publico o site, configuro domínio e acompanho os primeiros dias." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#topo" className="font-display text-lg font-bold tracking-tight">
            RC<span className="text-gradient-ember"> Criação</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#projetos" className="transition-colors hover:text-foreground">
              Projetos
            </a>
            <a href="#entregas" className="transition-colors hover:text-foreground">
              O que você recebe
            </a>
            <a href="#processo" className="transition-colors hover:text-foreground">
              Como funciona
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-ember px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Pedir orçamento
          </a>
        </nav>
      </header>

      <section id="topo" className="grid-noise border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Desenvolvedora web · Projetos no ar
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
            O site da sua empresa pode ser{" "}
            <span className="text-gradient-ember">a sua melhor vendedora</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sou a Rita, desenvolvedora web. Crio páginas modernas, rápidas e feitas sob medida para
            negócios como o seu. Role a página, veja projetos reais funcionando e imagine o seu no
            lugar deles.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="rounded-full bg-gradient-ember px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Ver projetos no ar
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-surface"
            >
              Quero um site assim
            </a>
          </div>
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-bold md:text-5xl">Projetos no ar</h2>
          <p className="mt-4 text-muted-foreground">
            Todos os sites abaixo estão publicados e você pode navegar neles agora mesmo. Clique em
            qualquer um para abrir em uma nova aba.
          </p>
        </div>

        <div className="space-y-16">
          {projetos.map((p, i) => (
            <article
              key={p.nome}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>a]:order-2" : ""}`}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-lift"
              >
                <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-destructive/70" />
                  <span className="size-2.5 rounded-full bg-ember/70" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                  <span className="ml-3 truncate text-xs text-muted-foreground">
                    {p.url.replace("https://", "")}
                  </span>
                </div>
                <img
                  src={p.img}
                  alt={`Página inicial do projeto ${p.nome}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </a>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{p.segmento}</p>
                <h3 className="mt-3 text-3xl font-bold">{p.nome}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.resultado}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-ember"
                >
                  Acessar o site
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="entregas" className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">O que você recebe</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {entregas.map((e) => (
              <div key={e.titulo} className="rounded-2xl border border-border bg-card p-8">
                <Check className="size-6 text-primary" />
                <h3 className="mt-5 text-xl font-bold">{e.titulo}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">Como funciona</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {etapas.map((e) => (
            <div key={e.n} className="border-t border-border pt-6">
              <span className="font-display text-4xl font-bold text-gradient-ember">{e.n}</span>
              <h3 className="mt-4 text-lg font-bold">{e.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="grid-noise border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Vamos colocar o seu negócio <span className="text-gradient-ember">no ar</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Me conte em duas linhas o que a sua empresa faz. Eu respondo com uma ideia de site,
            prazo e valor — sem compromisso.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-8 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-5" />
              Chamar no WhatsApp
            </a>
            <a
              href={EMAIL_URL}
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold transition-colors hover:bg-surface"
            >
              <Mail className="size-5" />
              Falar por e-mail
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            (43) 99684-6394 · rccode.dev@outlook.com
          </p>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold tracking-tight">
                RC<span className="text-gradient-ember"> Criação</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Criação de Sites e Presença Digital
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:items-end">
              <div className="flex items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="WhatsApp de Rita de Cássia"
                >
                  <MessageCircle className="size-4 text-primary" />
                  (43) 99684-6394
                </a>
                <a
                  href={EMAIL_URL}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="E-mail de RC Criação"
                >
                  <Mail className="size-4 text-primary" />
                  rccode.dev@outlook.com
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Facebook de RC Criação de sites"
                >
                  <Facebook className="size-4 text-primary" />
                  RC Criação de sites
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                Sites sob medida para pequenos e médios negócios
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
