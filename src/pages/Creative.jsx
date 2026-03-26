import { useState, useEffect, useCallback } from 'react';
import bkgd from '../media/home/background.png';

// Photography
import LifeAndDeath1 from '../media/photography/Photography_life&death_1.jpg';
import LifeAndDeath2 from '../media/photography/Photography_life&death_2.jpg';
import Light1 from '../media/photography/Photography_light_1.jpg';
import Light2 from '../media/photography/Photography_light_2.jpg';

// ─── Tab config ───────────────────────────────────────────────────────────────
const tabs = [
  { id: 'drawings', label: 'Drawings' },
  { id: 'photography', label: 'Photography' },
];

// ─── Image data ───────────────────────────────────────────────────────────────
// To add images: import them at the top of this file, then add entries here.
// Example:
//   import drawing1 from '../media/creative/drawings/drawing1.jpg';
//   { id: 1, src: drawing1, title: 'My Drawing', description: 'Some notes about it.' }

const drawingsData = [
  // { id: 1, src: ..., title: '...', description: '...' },
];

const photographyData = [
  { id: 1, src: LifeAndDeath1, title: 'Life and Death 1', description: 'A photograph capturing the contrast between life and death.' },
  { id: 2, src: LifeAndDeath2, title: 'Life and Death 2', description: 'Another perspective on the theme of life and death.' },
  { id: 3, src: Light1, title: 'Light 1', description: 'A simple yet powerful image of light and shadow.' },
  { id: 4, src: Light2, title: 'Light 2', description: 'A different composition exploring the concept of light.' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// ─── ImageGrid ────────────────────────────────────────────────────────────────
function ImageGrid({ images, onImageClick }) {
  const [hoveredId, setHoveredId] = useState(null);
  const groups = chunkArray(images, 4);

  if (images.length === 0) {
    return (
      <p style={{
        fontFamily: "'Martian Mono', monospace",
        color: '#6c757d',
        fontSize: '0.85rem',
        marginTop: '1.5rem',
      }}>
        No images yet.
      </p>
    );
  }

  return (
    <div>
      {groups.map((group, gi) => (
        <div
          key={gi}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            marginBottom: '0.75rem',
          }}
        >
          {group.map((img) => (
            <div
              key={img.id}
              style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => onImageClick(img)}
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.52)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: hoveredId === img.id ? 1 : 0,
                transition: 'opacity 0.2s ease',
                pointerEvents: 'none',
              }}>
                <span style={{
                  color: '#fff',
                  fontFamily: "'Martian Mono', monospace",
                  fontSize: 'calc(0.75rem + 0.2vw)',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: '0 1rem',
                }}>
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index];

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.88)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={arrowStyle('left')}
      >
        ‹
      </button>

      {/* Image + caption */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '85vw',
        }}
      >
        <img
          src={img.src}
          alt={img.title}
          style={{
            maxHeight: '75vh',
            maxWidth: '85vw',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        <div style={{ marginTop: '1rem', textAlign: 'center', color: '#fff' }}>
          <p style={{
            fontFamily: "'Martian Mono', monospace",
            fontWeight: 'bold',
            fontSize: 'calc(0.85rem + 0.2vw)',
            margin: '0 0 0.35rem',
          }}>
            {img.title}
          </p>
          {img.description && (
            <p style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: 'calc(0.75rem + 0.1vw)',
              color: '#ccc',
              margin: 0,
              maxWidth: '60ch',
            }}>
              {img.description}
            </p>
          )}
        </div>
      </div>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={arrowStyle('right')}
      >
        ›
      </button>
    </div>
  );
}

function arrowStyle(side) {
  return {
    position: 'absolute',
    [side]: '1.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '3rem',
    cursor: 'pointer',
    lineHeight: 1,
    opacity: 0.7,
    padding: '0.5rem',
    transition: 'opacity 0.15s ease',
    userSelect: 'none',
  };
}

// ─── Creative page ─────────────────────────────────────────────────────────────
export default function Creative() {
  const [activeTab, setActiveTab] = useState('drawings');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const currentImages = activeTab === 'drawings' ? drawingsData : photographyData;

  const openLightbox = (img) => {
    const idx = currentImages.findIndex((i) => i.id === img.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + currentImages.length) % currentImages.length),
    [currentImages.length]
  );
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % currentImages.length),
    [currentImages.length]
  );

  const descriptions = {
    drawings: 'A collection of drawings and sketches.',
    photography: 'A collection of photographs.',
  };

  return (
    <div>
      <style>{`
        .creative-nav-tab {
          cursor: pointer;
          font-size: calc(0.85rem + 0.2vw);
          font-family: 'Martian Mono', monospace;
          color: #6c757d;
          font-weight: normal;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .creative-nav-tab:hover { color: #a51b09; }
        .creative-nav-tab.active {
          color: #213547;
          font-weight: bold;
          border-bottom: 2px solid #213547;
        }
      `}</style>

      {/* Nav */}
      <div style={{
        position: 'sticky',
        top: '64px',
        zIndex: 99,
        padding: '1rem 0',
        margin: '3rem',
        backgroundImage: `url(${bkgd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className={`creative-nav-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setLightboxIndex(null); }}
            >
              {tab.label}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '0 3rem 3rem' }}>
        <p style={{
          fontFamily: "'Martian Mono', monospace",
          fontSize: 'calc(0.8rem + 0.2vw)',
          color: '#213547',
          marginBottom: '2rem',
          maxWidth: '70ch',
        }}>
          {descriptions[activeTab]}
        </p>

        <ImageGrid images={currentImages} onImageClick={openLightbox} />
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && currentImages.length > 0 && (
        <Lightbox
          images={currentImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
