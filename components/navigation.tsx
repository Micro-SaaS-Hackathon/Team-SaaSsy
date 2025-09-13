import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SE</span>
          </div>
          <span className="font-bold text-xl text-foreground">SplitEase</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Create Event</Button>
      </div>
    </nav>
  )
}
