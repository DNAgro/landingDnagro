import { Card, CardContent } from "@/components/ui/card";
import { Link, Heart, Cpu } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Link,
      title: "Conexão Direta",
      description: "Uma plataforma que une criadores rurais e veterinários, facilitando agendamentos, consultorias e acompanhamento contínuo."
    },
    {
      icon: Heart,
      title: "Histórico Centralizado",
      description: "Todo o histórico de saúde, vacinas e procedimentos dos seus animais, organizado e acessível a qualquer momento."
    },
    {
      icon: Cpu,
      title: "Gestão Inteligente",
      description: "Otimize o manejo do seu rebanho com dados e insights que ajudam a tomar as melhores decisões para a saúde e produtividade dos animais."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          O que é a DNAgro VetLink?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 border-0"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <CardContent className="p-0">
                <feature.icon className="h-16 w-16 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;