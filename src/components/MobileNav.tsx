import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-6 left-6 z-50 md:hidden h-10 w-10 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
        >
          <Menu className="h-5 w-5 text-primary" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-64 bg-card/95 backdrop-blur-md border-primary/20"
      >
        <div className="flex flex-col space-y-6 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-primary">
              Navigation
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 p-2 rounded-md hover:bg-primary/10 border border-transparent hover:border-primary/20"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};