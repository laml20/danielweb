import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import doodle1 from '../media/doodles/1.png';
import doodle2 from '../media/doodles/2.png';
import doodle3 from '../media/doodles/3.png';
import doodle4 from '../media/doodles/4.png';
import doodle5 from '../media/doodles/5.png';
import doodle6 from '../media/doodles/6.png';
import doodle7 from '../media/doodles/7.png';
import doodle8 from '../media/doodles/8.png';

const ALL_DOODLES = [doodle1, doodle2, doodle3, doodle4, doodle5, doodle6, doodle7, doodle8];

const SPACING_FACTOR = 1.75; // gap = image size * this
const HEADER_OFFSET = 80; // px to skip below header

function seededRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function strToSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) || 1;
}

function shuffled(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateDoodles(pathname, pageHeight) {
  const rng = seededRng(strToSeed(pathname));
  const pool = shuffled(ALL_DOODLES, rng);
  const doodles = [];
  let cursor = HEADER_OFFSET;
  let i = 0;

  while (cursor < pageHeight) {
    const src = pool[i % pool.length];
    const size = 150 + Math.floor(rng() * 50); // 150–200px
    const jitter = rng() * size * 0.15;
    // cursor is the top edge; shift down by size/2 so center lands below that edge
    const top = cursor + size / 2 + jitter;
    const onLeft = i % 2 === 0;
    const left = onLeft ? 1 + rng() * 20 : 85 + rng() * 15;
    const rotate = Math.floor(rng() * 40) - 20;
    const opacity = 0.3 + rng() * 0.25;
    doodles.push({ src, size, top, left, rotate, opacity, key: i });
    cursor += size * SPACING_FACTOR;
    i++;
  }

  return doodles;
}

export default function JournalDoodles() {
  const { pathname } = useLocation();
  const containerRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  const show = pathname === '/' || pathname === '/cv' || pathname === '/about' || pathname.startsWith('/projects');

  useEffect(() => {
    if (!show) return;
    const measure = () => setPageHeight(document.body.scrollHeight);
    // Wait a frame for page content to paint first
    const raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [show, pathname]);

  if (!show) return null;

  const doodles = pageHeight > 0 ? generateDoodles(pathname, pageHeight) : [];

  return (
    <>
      <style>{`
        .journal-doodles-wrap {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .journal-doodle {
          position: absolute;
        }
        @media (max-width: 768px) {
          .journal-doodle { opacity: 0.18 !important; }
        }
      `}</style>

      <div className="journal-doodles-wrap" ref={containerRef} aria-hidden="true">
        {doodles.map(({ src, size, top, left, rotate, opacity, key }) => (
          <img
            key={key}
            src={src}
            alt=""
            className="journal-doodle"
            style={{
              width: `${size}px`,
              top: `${top}px`,
              left: `${left}%`,
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              opacity,
            }}
          />
        ))}
      </div>
    </>
  );
}
