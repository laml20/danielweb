import { useLocation } from 'react-router-dom';
import doodle1 from '../media/doodles/doodle1.png';
import doodle2 from '../media/doodles/2.png';
import doodle3 from '../media/doodles/3.png';

export default function JournalDoodles() {
  const { pathname } = useLocation();

  const show = pathname === '/' || pathname === '/cv' || pathname === '/about' || pathname.startsWith('/projects');
  if (!show) return null;

  return (
    <>
      <style>{`
        .journal-doodles-wrap {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .journal-doodle {
          position: absolute;
          opacity: 0.45;
        }

        /* Tablet: smaller, peek from edges */
        @media (max-width: 1300px) {
          .journal-doodle { opacity: 0.35; }
          .doodle-l1 { width: 140px !important; left: -35px !important; }
          .doodle-l2 { width: 110px !important; left: -25px !important; }
          .doodle-r1 { width: 130px !important; right: -35px !important; }
          .doodle-r2 { width: 105px !important; right: -25px !important; }
        }

        /* Mobile: even smaller peeks */
        @media (max-width: 576px) {
          .doodle-l1 { width: 100px !important; left: -35px !important; }
          .doodle-l2 { width: 85px !important; left: -28px !important; }
          .doodle-r1 { width: 95px !important; right: -35px !important; }
          .doodle-r2 { width: 80px !important; right: -28px !important; }
        }
      `}</style>

      <div className="journal-doodles-wrap" aria-hidden="true">
        {/* Left side */}
        <img
          src={doodle1}
          alt=""
          className="journal-doodle doodle-l1"
          style={{
            width: '200px',
            left: '18px',
            top: '18%',
            transform: 'rotate(-8deg)',
          }}
        />
        <img
          src={doodle3}
          alt=""
          className="journal-doodle doodle-l2"
          style={{
            width: '160px',
            left: '20px',
            top: '58%',
            transform: 'rotate(5deg)',
          }}
        />

        {/* Right side */}
        <img
          src={doodle2}
          alt=""
          className="journal-doodle doodle-r1"
          style={{
            width: '190px',
            right: '20px',
            top: '25%',
            transform: 'rotate(10deg)',
          }}
        />
        <img
          src={doodle1}
          alt=""
          className="journal-doodle doodle-r2"
          style={{
            width: '150px',
            right: '25px',
            top: '65%',
            transform: 'rotate(-6deg)',
          }}
        />
      </div>
    </>
  );
}
