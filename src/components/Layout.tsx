import { Link, useLocation } from "react-router-dom";
import { Link as LinkIcon, LayoutDashboard, PlusCircle } from "lucide-react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">
              <LinkIcon className="text-white" size={20} />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              Chota<span className="text-indigo-600">Link</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                isActive("/") 
                ? "bg-indigo-50 text-indigo-600" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <PlusCircle size={18} />
              Create
            </Link>
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                isActive("/dashboard") 
                ? "bg-indigo-50 text-indigo-600" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;
