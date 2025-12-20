import { Heart } from "lucide-react";
// footer 
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-pink fill-pink animate-pulse" />
            <span className="italic">Crafting digital experiences with heart</span>
            <Heart className="w-4 h-4 text-pink fill-pink animate-pulse" />
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Vineet. All rights reserved. and
            
          </p>
        </div>
      </div>
    </footer>
  );
}
