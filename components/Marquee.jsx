import { MARQUEE_WORDS } from '@/lib/data';

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {MARQUEE_WORDS.map((label) => (
              <span className="marquee-item" key={`${group}-${label}`}>
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
