import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, Menu, X } from "lucide-react";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Triết học cổ đại", href: "/era/ancient" },
  { label: "Triết học cận đại", href: "/era/modern" },
  { label: "Triết học hiện đại", href: "/era/contemporary" },
  { label: "Tư tưởng triết học", href: "/thoughts" },
  { label: "Kết luận", href: "/conclusion" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname === href;
  };

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Landmark className="w-6 h-6 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">Triết Gia Vĩ Đại</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleClick(item.href)}
                className={`text-sm font-body transition-colors ${
                  isActive(item.href) ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-body transition-colors ${
                  isActive(item.href) ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`text-sm font-body transition-colors text-left ${
                    isActive(item.href) ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
