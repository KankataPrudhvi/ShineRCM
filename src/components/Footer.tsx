const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Shine RCM. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-80">www.shinercm.com</p>
      </div>
    </footer>
  );
};

export default Footer;
