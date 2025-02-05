import React from 'react';
import { Heart } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    title: 'Mountain Lake',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1682687221038-404670f09439',
    title: 'Sunset Beach',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    title: 'City Lights',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b',
    title: 'Forest Path',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1682687221038-404670f09439',
    title: 'Desert Dunes',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    title: 'Ocean Waves',
  },
];

function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{photo.title}</h3>
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <Heart className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;