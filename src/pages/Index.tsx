import { Link } from "react-router-dom";
import { CircleDot, Cloud, Sprout, ClipboardList, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/farm-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: CircleDot,
      title: "Gestão Inteligente de Rebanho",
      description: "Cadastre e monitore gado e ovelhas com histórico completo de saúde, peso e ciclos de manejo.",
    },
    {
      icon: Sparkles,
      title: "IA Preditiva",
      description: "Alertas automáticos baseados em clima, estação e histórico. A IA sugere o momento ideal para cada manejo.",
    },
    {
      icon: ClipboardList,
      title: "Controle Total de Tarefas",
      description: "Acompanhe cada atividade dos peões em tempo real com fotos, áudios e registros completos.",
    },
    {
      icon: TrendingUp,
      title: "Relatórios Automáticos",
      description: "Análises de produtividade, saúde do rebanho e lotação dos campos gerados automaticamente.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Sprout className="h-12 w-12 text-primary-foreground" />
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground">
                Gestão da Fazenda
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Sistema completo de gerenciamento de gado e ovelhas com inteligência artificial. 
              Automatize ciclos de manejo, controle tarefas e tenha visibilidade total da sua fazenda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="gap-2 text-lg px-8">
                  Acessar Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-card/10 border-primary-foreground text-primary-foreground hover:bg-card/20 text-lg px-8">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tecnologia para o Campo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simplifique a gestão da sua fazenda com ferramentas modernas e inteligentes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="shadow-medium hover:shadow-large transition-shadow bg-gradient-card border-border">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Pronto para revolucionar sua fazenda?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se aos produtores que já automatizaram a gestão do rebanho e aumentaram a produtividade
          </p>
          <Link to="/dashboard">
            <Button variant="secondary" size="lg" className="gap-2 text-lg px-8">
              Começar Agora
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Gestão da Fazenda</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Sistema de Gestão Agropecuária. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
