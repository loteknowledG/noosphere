import React from 'react';
import { 
  Image, 
  Star, 
  Clock, 
  Archive, 
  Trash2, 
  Cloud,
  Share2,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Image, label: 'Photos', active: true },
  { icon: Star, label: 'Favorites' },
  { icon: Share2, label: 'Shared' },
  { icon: Clock, label: 'Recent' },
  { icon: Archive, label: 'Archive' },
  { icon: Trash2, label: 'Trash' },
  { icon: Cloud, label: 'Backup' },
];

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50
        transform transition-transform duration-300 ease-in-out
        w-64 md:w-auto md:translate-x-0
        bg-white dark:bg-gray-900 border-r dark:border-gray-800
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Mobile close button */}
          <div className="md:hidden p-4 flex justify-end">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`
                  w-full flex items-center gap-3 px-4 py-2 rounded-lg mb-1
                  transition-colors duration-200
                  ${item.active
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="md:hidden lg:inline">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Storage info */}
          <div className="p-4 hidden md:block">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="mb-2 text-sm text-gray-600 dark:text-gray-400 lg:block md:hidden">Storage</div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="w-7/12 h-full bg-blue-500" />
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 lg:block md:hidden">7.2 GB of 15 GB used</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;