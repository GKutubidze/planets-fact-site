'use client'
import React, { useEffect, useState } from 'react';

interface MySvgProps {
  path: string;
}

const MySvg: React.FC<MySvgProps> = ({ path }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(path);
        const svg = await response.text();
        setSvgContent(svg);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSvg();
  }, [path]);

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default MySvg;
