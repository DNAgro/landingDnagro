import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-sm shadow-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoDark} 
              alt="DNAgro VetLink"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              O Que É
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <Button
              variant="success"
              onClick={() => scrollToSection("pesquisa")}
            >
              Participar da Pesquisa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                O Que É
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <Button
                variant="success"
                onClick={() => scrollToSection("pesquisa")}
                className="w-full"
              >
                Participar da Pesquisa
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;