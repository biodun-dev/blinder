import Image from 'next/image';
import freshbooks from '../../../public/logos/freshbooks.svg';
import sendgrid from '../../../public/logos/sendgrid.svg';
import layers from '../../../public/logos/layers.svg';
import adobe from '../../../public/logos/adobe.svg';

const logos = [
    { src: freshbooks, alt: "freshbooks" },
    { src: sendgrid, alt: "sendgrid" },
    { src: layers, alt: "layers" },
    { src: adobe, alt: "adobe" },
];

const LogoGrid = () => (
    <div className="mt-20 overflow-hidden relative">
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h2>
            <div className="relative mt-6">
                <div className="flex animate-scroll gap-x-10 items-center whitespace-nowrap">
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
    </div>
);

export default LogoGrid;
