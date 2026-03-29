import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import paperTexture from '../media/home/paper_texture_tile.jpeg';

// Drawings

// Film Photography
import Film1 from '../media/film/000000010008.jpg';
import Film2 from '../media/film/000000010014.jpg';
import Film3 from '../media/film/000000010016.jpg';
import Film4 from '../media/film/000000010021.jpg';
import Film5 from '../media/film/000000010022.jpg';
import Film6 from '../media/film/000000010026.jpg';
import Film7 from '../media/film/000000020001.jpg';
import Film8 from '../media/film/000000020004.jpg';
import Film9 from '../media/film/000000020005.jpg';
import Film10 from '../media/film/000000020015.jpg';
import Film11 from '../media/film/000000020017.jpg';
import Film12 from '../media/film/000000020021.jpg';
import Film13 from '../media/film/000000020022.jpg';
import Film14 from '../media/film/000000020023.jpg';
import Film15 from '../media/film/000099410007.jpg';
import Film16 from '../media/film/000099410010.jpg';
import Film17 from '../media/film/000099410011.jpg';
import Film18 from '../media/film/000099410014.jpg';
import Film19 from '../media/film/000099410016.jpg';
import Film20 from '../media/film/000099410019.jpg';
import Film21 from '../media/film/000099410021.jpg';
import Film22 from '../media/film/000099410025.jpg';
import Film23 from '../media/film/000099410030.jpg';
import Film24 from '../media/film/Plascencia_001-adj.jpg';
import Film25 from '../media/film/Plascencia_002-adj.jpg';
import Film26 from '../media/film/Plascencia_003-adj.jpg';
import Film27 from '../media/film/Plascencia_004-adj.jpg';

// Digital Photography
import LifeAndDeath1 from '../media/digital/Photography_life&death_1.jpg';
import LifeAndDeath2 from '../media/digital/Photography_life&death_2.jpg';
import Light1 from '../media/digital/Photography_light_1.jpg';
import Light2 from '../media/digital/Photography_light_2.jpg';
import Object1 from '../media/digital/Photography_object_1.jpg';
import Object2 from '../media/digital/Photography_object_2.jpg';
import Object3 from '../media/digital/Photography_object_3.jpg';
import Scars1 from '../media/digital/Photography_scars_1.jpg';
import Scars2 from '../media/digital/Photography_scars_2.jpg';
import Scars3 from '../media/digital/Photography_scars_3.jpg';
import Scars4 from '../media/digital/Photography_scars_4.jpg';

// ─── Tab config ───────────────────────────────────────────────────────────────
const tabs = [
  { id: 'drawings', label: 'Drawings' },
  { id: 'film', label: 'Film Photography' },
  { id: 'digital', label: 'Digital Photography' },
];

// DANIEL TO-DO: Add drawing titles + descriptions here.
const drawingsData = [
  // { id: 1, src: ..., title: '...', description: '...' },
];

// DANIEL TO-DO: Add film photography titles + descriptions here.
const filmData = [
  { id: 1, src: Film1, title: 'Film 1', description: 'Film 1' },
  { id: 2, src: Film2, title: 'Film 2', description: 'Film 2' },
  { id: 3, src: Film3, title: 'Film 3', description: 'Film 3' },
  { id: 4, src: Film4, title: 'Film 4', description: 'Film 4' },
  { id: 5, src: Film5, title: 'Film 5', description: 'Film 5' },
  { id: 6, src: Film6, title: 'Film 6', description: 'Film 6' },
  { id: 7, src: Film7, title: 'Film 7', description: 'Film 7' },
  { id: 8, src: Film8, title: 'Film 8', description: 'Film 8' },
  { id: 9, src: Film9, title: 'Film 9', description: 'Film 9' },
  { id: 10, src: Film10, title: 'Film 10', description: 'Film 10' }, 
  { id: 11, src: Film11, title: 'Film 11', description: 'Film 11' },
  { id: 12, src: Film12, title: 'Film 12', description: 'Film 12' },
  { id: 13, src: Film13, title: 'Film 13', description: 'Film 13' },
  { id: 15, src: Film15, title: 'Film 15', description: 'Film 15' },
  { id: 16, src: Film16, title: 'Film 16', description: 'Film 16' },
  { id: 17, src: Film17, title: 'Film 17', description: 'Film 17' },
  { id: 18, src: Film18, title: 'Film 18', description: 'Film 18' },
  { id: 19, src: Film19, title: 'Film 19', description: 'Film 19' },
  { id: 20, src: Film20, title: 'Film 20', description: 'Film 20' },
  { id: 21, src: Film21, title: 'Film 21', description: 'Film 21' },
  { id: 22, src: Film22, title: 'Film 22', description: 'Film 22' },
  { id: 23, src: Film23, title: 'Film 23', description: 'Film 23' },
  { id: 24, src: Film24, title: 'Film 24', description: 'Film 24' },
  { id: 25, src: Film25, title: 'Film 25', description: 'Film 25' },
  { id: 26, src: Film26, title: 'Film 26', description: 'Film 26' },
  { id: 27, src: Film27, title: 'Film 27', description: 'Film 27' },
  { id: 14, src: Film14, title: 'Film 14', description: 'Film 14' },
];

// DANIEL TO-DO: Add digital photography titles + descriptions here.
const digitalData = [
  { id: 1, src: LifeAndDeath1, title: 'Life and Death 1', description: 'A photograph capturing the contrast between life and death.' },
  { id: 2, src: LifeAndDeath2, title: 'Life and Death 2', description: 'Another perspective on the theme of life and death.' },
  { id: 3, src: Light1, title: 'Light 1', description: 'A simple yet powerful image of light and shadow.' },
  { id: 4, src: Light2, title: 'Light 2', description: 'A different composition exploring the concept of light.' },
  { id: 5, src: Object1, title: 'Object 1', description: 'A photograph focusing on the beauty of everyday objects.' },
  { id: 7, src: Object3, title: 'Object 3', description: 'A creative composition highlighting the shapes of objects.' },
  { id: 8, src: Scars1, title: 'Scars 1', description: 'An intimate photograph exploring the theme of scars and healing.' },
  { id: 9, src: Scars2, title: 'Scars 2', description: 'A different perspective on scars and their stories.' },
  { id: 10, src: Scars3, title: 'Scars 3', description: 'A close-up image focusing on the textures of scars.' },
  { id: 11, src: Scars4, title: 'Scars 4', description: 'A final photograph in the scars series, capturing the resilience and beauty of healing.' },
  { id: 6, src: Object2, title: 'Object 2', description: 'Another take on the theme of objects and their forms.' },
];

// ─── ImageGrid ────────────────────────────────────────────────────────────────
function ImageGrid({ images, onImageClick }) {
  const [hoveredId, setHoveredId] = useState(null);

  if (images.length === 0) {
    return (
      <p style={{
        fontFamily: "'Martian Mono', monospace",
        color: '#6c757d',
        // fontSize: '0.85rem',
        marginTop: '1.5rem',
      }}>
        No images yet.
      </p>
    );
  }

  return (
    <>
      <style>{`
        .creative-masonry {
          columns: 2;
          column-gap: 0.75rem;
        }
        @media (max-width: 576px) {
          .creative-masonry { columns: 1; }
        }
        .creative-masonry-item {
          break-inside: avoid;
          margin-bottom: 0.75rem;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }
      `}</style>
      <div className="creative-masonry">
        {images.map((img) => (
          <div
            key={img.id}
            className="creative-masonry-item"
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
                fontSize: 'calc(0.5rem + 0.2vw)',
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
    </>
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
        zIndex: 1031,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Prev arrow */}
      <button
        className="lightbox-arrow"
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
        className="lightbox-arrow"
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(() => {
    const tab = searchParams.get('tab');
    return ['drawings', 'film', 'digital'].includes(tab) ? tab : 'film';
  });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const imageMap = { drawings: drawingsData, film: filmData, digital: digitalData };
  const currentImages = imageMap[activeTab] ?? [];

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
    // DANIEL TO-DO: Add descriptions for each tab here.
    drawings: 'A collection of drawings and sketches.',
    film: 'A collection of film photographs.',
    digital: 'A collection of digital photographs.',
  };

  return (
    <div>
      <style>{`
        .creative-nav-tab {
          cursor: pointer;
          font-size: var(--font-nav);
          font-family: 'Martian Mono', monospace;
          color: #6c757d;
          font-weight: normal;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .creative-nav-tab:hover { color: #c1440e; }
        .creative-nav-tab.active {
          color: #8e3207;
          font-weight: bold;
          border-bottom: 2px solid #c1440e;
        }
        .creative-nav-outer {
          position: sticky;
          top: 64px;
          z-index: 99;
          padding: 1rem 3rem 0;
        }
        .creative-nav-inner {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .creative-nav-outer {
            padding: 0.75rem 0 0;
          }
          .creative-nav-inner {
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0.5rem 5% 0;
            gap: 1.75rem;
            scrollbar-width: none;
            max-width: none;
            margin: 0;
          }
          .creative-nav-inner::-webkit-scrollbar { display: none; }
        }
      `}</style>

      {/* Nav */}
      <div
        className="creative-nav-outer"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      >
        <div className="creative-nav-inner">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className={`creative-nav-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setSearchParams({ tab: tab.id }); setLightboxIndex(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              {tab.label}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '2rem 3rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{
          fontFamily: "'Martian Mono', monospace",
          fontSize: 'calc(0.8rem + 0.2vw)',
          color: '#213547',
          marginBottom: '3rem',
          textAlign: 'center',
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
