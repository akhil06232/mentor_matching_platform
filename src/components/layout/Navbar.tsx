import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">MentorMatch</span>
        </Link>
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <Link to="/discovery">
            <Button variant="ghost">Find Mentors</Button>
          </Link>
          <Link to="/matches">
            <Button variant="ghost">Matches</Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;