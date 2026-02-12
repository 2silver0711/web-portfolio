import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 스크롤이 300px 이상일 때 버튼 표시
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white group-hover:text-white transition-colors" />
        </button>
      )}
    </>
  );
}
