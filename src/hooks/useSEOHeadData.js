import { useEffect, useRef } from 'react';

export const useSEOHeadData = ({ title }) => {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

  useEffect(() => {
    const previousTitle = prevTitle.current;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    if (title && title !== previousTitle) {
      const newTitle = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
      document.title = `${newTitle} | Star Wars`;
      metaDescription.setAttribute('content', `Know the details of your favorite character ${newTitle} from the Star Wars saga`);
    }

    return () => {
      document.title = previousTitle;
      metaDescription.setAttribute('content', previousDescription);
    };
  }, [title]);
};
