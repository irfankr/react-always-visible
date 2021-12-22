import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const parentElement = wrapperRef.current;

    const height = parentElement.offsetHeight;
    const rect = parentElement.getBoundingClientRect();
    const win = parentElement.ownerDocument.defaultView;
    const viewpointHeight = window.innerHeight;

    const absolutePosition = {
      top: rect.top + win.pageYOffset - window.scrollY,
      left: rect.left + win.pageXOffset
    };

    if (
      absolutePosition &&
      absolutePosition.top &&
      absolutePosition.left &&
      height
    ) {
      if (absolutePosition.top + height > viewpointHeight) {
        wrapperRef.current.style.top = 'auto';
        wrapperRef.current.style.bottom = '0px';

        if (height - absolutePosition.top > 0) {
          wrapperRef.current.style.height = `${absolutePosition.top}px`;
          wrapperRef.current.style.overflowY = 'auto';
        }
      }
    }
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className={styles.container}>
      {children}
    </div>
  );
};
