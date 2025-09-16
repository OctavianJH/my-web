const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const DesktopNav = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
      <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-primary/20 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 rounded-full hover:bg-primary/10 hover:scale-105"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};