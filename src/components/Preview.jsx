import React, { useRef, useEffect } from 'react';

export default function Preview({ content }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      doc.open();
      doc.write(content);
      doc.close();
    }
  }, [content]);

  return (
    <div style={{ border: '1px solid var(--code-border)', borderRadius: '4px', overflow: 'hidden', height: '400px', backgroundColor: '#fff' }}>
      <iframe 
        ref={iframeRef} 
        title="preview" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}