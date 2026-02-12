import { useState } from "react";
import { useLinks } from "../context/LinkContextShared";
import { generateShortCode } from "../utils/generateShortCode";
import { v4 as uuidv4 } from "uuid";
import { Link as LinkIcon, Hash, Calendar, Zap, CheckCircle2 } from "lucide-react";

const LinkForm = () => {
  const { addLink } = useLinks();
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [expiry, setExpiry] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addLink({
      id: uuidv4(),
      originalUrl: url,
      shortCode: alias || generateShortCode(),
      expiryDate: expiry || undefined,
      clicks: 0,
      createdAt: new Date().toISOString(),
    });

    setUrl("");
    setAlias("");
    setExpiry("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="relative">
      {success && (
        <div className="absolute -top-16 left-0 right-0 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl border border-green-100 flex items-center gap-3 shadow-sm">
            <CheckCircle2 size={20} className="text-green-500" />
            <span className="text-sm font-semibold">Link generated successfully! Check your dashboard.</span>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
            <LinkIcon size={16} className="text-indigo-500" />
            Destination URL
          </label>
          <div className="relative group">
            <input
              type="url"
              required
              placeholder="https://your-long-link.com/very-long-path"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <Hash size={16} className="text-indigo-500" />
              Custom Alias
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-sm font-medium border-r pr-3 mr-3">cl.in/</span>
              <input
                type="text"
                placeholder="my-cool-link"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-16 pr-4 py-3.5 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <Calendar size={16} className="text-indigo-500" />
              Expiry Date
            </label>
            <input
              type="date"
              value={expiry}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all text-gray-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group"
        >
          <Zap size={20} className="group-hover:fill-current" />
          Generate ChotaLink
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
