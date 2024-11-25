import Image from 'next/image';
import freshbooks from '../../../public/logos/freshbooks.svg';
import sendgrid from '../../../public/logos/sendgrid.svg';
import layers from '../../../public/logos/layers.svg';
import adobe from '../../../public/logos/adobe.svg';

const logos = [
  { src: freshbooks, alt: 'freshbooks' },
  { src: sendgrid, alt: 'sendgrid' },
  { src: layers, alt: 'layers' },
  { src: adobe, alt: 'adobe' },
];

const LogoGrid = () => (
  <div className="mt-16 relative">
    <h2 className="font-semibold text-sm text-gray-600 text-center z-20 relative">
      TRUSTED BY TEAMS FROM AROUND THE WORLD
    </h2>
    <div className="relative mt-6 overflow-hidden">
      {/* Gradients for visual fade effect */}
      <div className="absolute top-0 left-0 h-full w-12 md:w-20 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 md:w-20 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling logos */}
      <div className="flex gap-x-6 md:gap-x-12 animate-scroll whitespace-nowrap items-center justify-center">
        {logos.map((item, idx) => (
          <div
            key={idx}
            className="inline-block"
            style={{
              flexShrink: 0,
              minWidth: '80px', // Increased size for mobile
              maxWidth: '120px', // Larger size for laptops
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="h-14 md:h-20" // Increased logo height
              style={{ width: 'auto' }}
            />
          </div>
        ))}
        {logos.map((item, idx) => (
          <div
            key={`copy-${idx}`}
            className="inline-block"
            style={{
              flexShrink: 0,
              minWidth: '80px',
              maxWidth: '120px',
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="h-14 md:h-20"
              style={{ width: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LogoGrid;
