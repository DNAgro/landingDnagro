import { Card, CardContent } from "@/components/ui/card";
import { User, FileText, CheckCircle, GraduationCap, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Para o Rebanho",
      items: [
        "Cuidados veterinários mais rápidos e eficientes.",
        "Diagnósticos precisos com histórico médico completo.",
        "Prevenção proativa de doenças e problemas de saúde.",
        "Melhor qualidade de vida e bem-estar animal."
      ]
    },
    {
      icon: User,
      title: "Para o Criador Rural",
      items: [
        "Economia de tempo e otimização do manejo.",
        "Acesso rápido a veterinários especialistas.",
        "Registros de saúde seguros e sempre disponíveis.",
        "Melhor acompanhamento da saúde do rebanho."
      ]
    },
    {
      icon: FileText,
      title: "Para o Veterinário",
      items: [
        "Expansão da carteira de clientes sem barreiras geográficas.",
        "Agenda organizada e otimizada.",
        "Acesso ao histórico completo do animal antes da consulta.",
        "Ferramenta moderna para gestão de atendimentos."
      ]
    },
    {
      icon: GraduationCap,
      title: "Para Acadêmicos em Veterinária",
      items: [
        "Acesso a casos reais para estudos e pesquisa.",
        "Plataforma para acompanhar veterinários experientes.",
        "Banco de dados de casos clínicos para aprendizado.",
        "Ferramenta para desenvolver habilidades práticas remotamente."
      ]
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-agro-green-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Benefícios para Todos
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 h-full hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-0"
              style={{ 
                boxShadow: "var(--shadow-card)",
                background: "var(--gradient-card)"
              }}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <benefit.icon className="h-8 w-8 text-success mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;