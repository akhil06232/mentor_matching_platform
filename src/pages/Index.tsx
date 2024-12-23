import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Find Your Perfect <span className="text-primary">Mentor Match</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Connect with experienced mentors who can guide your journey and help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link to="/discovery">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Browse Mentors
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;