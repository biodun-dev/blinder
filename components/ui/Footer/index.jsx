const socialInfo = [
    {
        icon: (
            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48">
                <g clipPath="url(#a)">
                    <path
                        fill="currentColor"
                        d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                    />
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                    </clipPath>
                </defs>
            </svg>
        ),
        href: "#",
    },
    {
        icon: (
            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48">
                <g clipPath="url(#clip0_17_80)">
                    <path
                        fill="currentColor"
                        d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_17_80">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                    </clipPath>
                </defs>
            </svg>
        ),
        href: "#",
    },
    {
        icon: (
            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 28 28">
                <g clipPath="url(#clip0_1213_3074)">
                    <path
                        fill="currentColor"
                        d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1213_3074">
                        <path fill="#fff" d="M0 0h28v28H0z" />
                    </clipPath>
                </defs>
            </svg>
        ),
        href: "#",
    },
];

const Footer = () => (
    <footer className="bg-gray-900 text-white">
        <div className="custom-screen pt-16">
            <div className="mt-10 py-10 border-t border-gray-700 flex flex-col gap-y-8 sm:flex-row sm:items-start sm:justify-between">

                <div className="text-center sm:text-left">
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">Contact Information</h4>
                    <p className="text-gray-400">60, Allen Avenue by Adeboye Sholanke entrance</p>
                    <p className="text-gray-400">first bank bus stop ikeja, Nigeria</p>
                    <p className="text-gray-400">Phone: +234 805 039 9302</p> 
                    <p className="text-gray-400">Email: info@aorglobalworld.com</p>
                </div>
                {/* Social Icons */}
                <div className="flex justify-center sm:justify-start gap-4">
                    {socialInfo.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            aria-label="social media"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                {/* Footer Text */}
                <div className="text-center sm:text-right">
                    <p className="text-gray-400">© 2024 AOR Global. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;



