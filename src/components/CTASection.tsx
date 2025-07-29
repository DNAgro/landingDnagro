import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pesquisa" className="py-20 bg-agro-green-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Sua opinião é essencial!
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Estamos na fase inicial de desenvolvimento e queremos construir a melhor 
            ferramenta possível. Sua experiência como criador ou veterinário é fundamental 
            para o sucesso do DNAgro VetLink. Responda nossa pesquisa rápida e ajude a 
            moldar este projeto.
          </p>
          <p className="text-lg font-semibold text-foreground mb-8">
            Os participantes terão acesso antecipado e benefícios exclusivos no lançamento!
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-4 h-auto"
            onClick={() => window.open("https://forms.gle/dwsNxiAxTpTwnwRg8", "_blank")}
          >
            <PenSquare className="mr-2 h-5 w-5" />
            Acessar Formulário de Pesquisa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;