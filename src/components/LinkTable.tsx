import type { MouseEvent } from "react";
import { useLinks } from "../context/LinkContextShared";
import { Trash2, ExternalLink, BarChart2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LinkTable = () => {
  const { links, deleteLink, incrementClick } = useLinks();
  const navigate = useNavigate();

  const checkIsExpired = (expiryDate?: string) => {
    if (!expiryDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDate);
    expiry.setHours(0, 0, 0, 0);
    return expiry < today;
  };

  const handleLinkClick = (e: MouseEvent, originalUrl: string, shortCode: string, expiryDate?: string) => {
    e.preventDefault();
    
    if (checkIsExpired(expiryDate)) {
      navigate("/expired");
    } else {
      incrementClick(shortCode);
      window.open(originalUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (!links.length) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
        <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <BarChart2 size={32} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">No links yet</h3>
        <p className="text-gray-500 max-w-xs mx-auto">Generate your first short link to see it appear here in your dashboard.</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50/50 text-left text-xs font-bold text-gray-500 uppercase tracking-widest border-b">
                <th className="px-6 py-5">Destination</th>
                <th className="px-6 py-5">Short Link</th>
                <th className="px-6 py-5">Analytics</th>
                <th className="px-6 py-5">Expiry</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {links.map((link) => (
                <tr key={link.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900 truncate max-w-[240px]" title={link.originalUrl}>
                        {link.originalUrl}
                      </span>
                      <span className="text-[11px] text-gray-400 mt-1 uppercase tracking-tighter">
                        Created {new Date(link.createdAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <a
                        href={link.originalUrl}
                        className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/link"
                        onClick={(e) => handleLinkClick(e, link.originalUrl, link.shortCode, link.expiryDate)}
                      >
                        cl.in/{link.shortCode}
                        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        <span className="relative z-10 inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold ring-2 ring-white">
                          {link.clicks}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-500">Total Clicks</span>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    {link.expiryDate ? (() => {
                      const isExpired = checkIsExpired(link.expiryDate);
                      return (
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                          isExpired 
                          ? "bg-red-50 text-red-600" 
                          : "bg-orange-50 text-orange-600"
                        }`}>
                          {isExpired ? "Expired" : new Date(link.expiryDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                        </span>
                      );
                    })() : (
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Permanent</span>
                    )}
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this link?")) {
                          deleteLink(link.id);
                        }
                      }}
                      className="inline-flex items-center justify-center w-9 h-9 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                      title="Delete Link"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default LinkTable;
