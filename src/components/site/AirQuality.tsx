export function AirQuality() {
  return (
    <div className="border-t border-border pt-8 text-center">
      <h2 className="text-xl">Qualité de l'air</h2>
      <a href="#" className="mt-2 inline-block link-more">
        Voir la carte
      </a>
      <div className="mt-4 flex justify-center">
        <svg viewBox="0 0 200 120" className="w-56" role="img" aria-label="Indice de qualité de l'air : dégradée">
          <g fill="none" strokeWidth="12" strokeLinecap="butt">
            <path d="M20 105 A80 80 0 0 1 44 48" stroke="#3ddbb0" />
            <path d="M44 48 A80 80 0 0 1 78 27" stroke="#f5d547" />
            <path d="M78 27 A80 80 0 0 1 122 27" stroke="#f19a3e" />
            <path d="M122 27 A80 80 0 0 1 156 48" stroke="#c9455b" />
            <path d="M156 48 A80 80 0 0 1 180 105" stroke="#7b2d8b" />
          </g>
          <polygon points="72,34 82,42 68,46" fill="#0f1b3d" />
          <text
            x="100"
            y="100"
            textAnchor="middle"
            className="fill-brand font-display"
            fontSize="20"
            fontWeight="800"
          >
            Dégradée
          </text>
        </svg>
      </div>
    </div>
  );
}
