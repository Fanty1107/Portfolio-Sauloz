import React from 'react';

interface Props {
  href: string;
  text: string;
}

export default function AnimatedButton({ href, text }: Props) {
  return (
    <a 
      href={href} 
      className="group relative flex items-center justify-center gap-1 px-10 py-4 bg-transparent rounded-full shadow-[0_0_0_2px_#dc2626] text-white font-bold text-base cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:rounded-xl active:scale-95 active:shadow-[0_0_0_4px_#dc2626] w-max"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-6 fill-white z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -left-1/4 group-hover:left-4">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className="relative z-10 -translate-x-3 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 uppercase tracking-wider">
        {text}
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-600 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[350px] group-hover:h-[350px] group-hover:opacity-100 z-0" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-6 fill-white z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] right-4 group-hover:-right-1/4">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </a>
  );
}