import { ArrowUpRight, Sparkles } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "/" },
    { name: "How It  Works", href: "/#howto" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "mailto:abasola.dranleitristan98@gmail.com" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
  ],
};

function footer() {
  return (
    <footer className="text-gray-300 dark:text-gray-400 bg-[#002F87] dark:bg-gray-950 dark:border-t dark:border-gray-800 transition-colors">
      <div className="mmax-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-white/10 dark:bg-blue-600/20">
                <Sparkles className="size-6 text-white dark:text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">AI Workflow Hub</span>
            </div>
            <p className="text-sm mb-6 max-w-xs text-gray-300 dark:text-gray-400 text-left!">
              Empowering teams with AI-driven solutions for smarter workflows
              and enhanced productivity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="size-4 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300 dark:text-gray-400">
            EquiVerseAI © 2026 - All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
