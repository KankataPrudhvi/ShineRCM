import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md overflow-hidden">
            <img
              src="/ShineRCM_logo.png" // replace with your logo path
              alt="Shiner CM Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Shiner CM</h1>
            <p className="text-xs text-muted-foreground">www.shinercm.com</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#services"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
