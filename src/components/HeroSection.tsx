import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `var(--gradient-hero), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/b0aebc95-c5f8-42c3-9428-9c22609ad514.png" 
            alt="DNAgro VetLink" 
            className="w-[150px] h-auto mx-auto mb-6"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          A saúde do <span className="relative">seu</span> rebanho na palma da mão.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Conectamos criadores de bovinos e equinos a veterinários especialistas 
          de forma simples e eficiente. Ajude-nos a construir o futuro da gestão agropecuária.
        </p>
        <Button
          variant="hero"
          size="lg"
          onClick={() => scrollToSection("pesquisa")}
          className="text-lg px-8 py-4 h-auto"
        >
          Quero participar da validação!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;