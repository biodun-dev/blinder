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
  <div className="mt-20 relative">
    <h2 className="font-semibold text-sm text-gray-600 text-center z-20 relative">
      TRUSTED BY TEAMS FROM AROUND THE WORLD
    </h2>
    <div className="relative mt-6 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>

      <div className="flex gap-x-8 animate-scroll whitespace-nowrap">
        {logos.map((item, idx) => (
          <div key={idx} className="inline-block">
            <Image src={item.src} alt={item.alt} className="h-16" />
          </div>
        ))}
        {logos.map((item, idx) => (
          <div key={`copy-${idx}`} className="inline-block">
            <Image src={item.src} alt={item.alt} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LogoGrid;
