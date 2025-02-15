import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';



function Event() {
  const { id } = useParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        // Set canvas dimensions to match the window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Example drawing on the canvas
        context.fillStyle = 'blue';
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

export default Event;