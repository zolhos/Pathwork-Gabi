import { useEffect } from 'react';
import { content } from '../data/content';

export default function SchemaMarkup() {
  useEffect(() => {
    const existingScript = document.getElementById('geo-schema-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'geo-schema-ld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(content.schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('geo-schema-ld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
