'use client';

import { useState } from 'react';
import { DownloadSimple, ArrowDown } from '@phosphor-icons/react';
import { DOWNLOAD_URL, THANK_YOU_URL } from '@/lib/site';

export default function DownloadButton({ compact = false, className = '' }) {
  const [notice, setNotice] = useState('');

  function handleClick() {
    if (DOWNLOAD_URL) {
      const link = document.createElement('a');
      link.href = DOWNLOAD_URL;
      link.download = 'klien.jar';
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.setTimeout(() => {
        window.location.assign(THANK_YOU_URL);
      }, 700);
      return;
    }

    setNotice('The release link has not been added yet.');
    window.setTimeout(() => setNotice(''), 3200);
  }

  return (
    <div className={`download-wrap ${className}`}>
      <button
        type="button"
        className={`button button-primary ${compact ? 'button-compact' : ''}`}
        onClick={handleClick}
      >
        <DownloadSimple size={compact ? 17 : 19} weight="bold" aria-hidden="true" />
        <span>Download</span>
        {!compact && <ArrowDown size={17} weight="bold" aria-hidden="true" />}
      </button>
      <span className="download-notice" role="status" aria-live="polite">
        {notice}
      </span>
    </div>
  );
}
