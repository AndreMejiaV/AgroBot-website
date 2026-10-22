// Esquema editorial abstracto; no contiene mediciones, ubicaciones ni un robot final.
export default function SoilConcept() {
  return <svg viewBox="0 0 480 380" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1" opacity=".38">
      <path d="M14 219C70 131 84 161 128 104S233 29 318 75s72 99 148 103" />
      <path d="M7 244C72 155 102 184 145 124S236 53 306 96s80 99 162 104" />
      <path d="M10 268C82 177 117 204 161 147s77-72 135-30 78 99 170 107" />
      <path d="M15 292C93 202 131 228 178 171s70-69 108-34 80 100 176 112" />
      <path d="M25 314C110 231 146 254 197 198s58-66 80-39 76 98 176 115" />
      <path d="M43 336C126 255 163 280 215 225s40-64 55-42 77 95 170 113" />
      <path d="M67 352C146 281 185 304 233 253s29-56 42-37 70 80 148 102" />
      <path d="M101 364C167 311 209 326 252 280s22-42 37-25 59 57 110 80" />
    </g>
    <path d="M111 237 212 169 328 224" stroke="currentColor" strokeDasharray="4 7" opacity=".65" />
    <g stroke="currentColor" strokeWidth="1.5">
      <circle cx="111" cy="237" r="5" /><circle cx="212" cy="169" r="5" /><circle cx="328" cy="224" r="5" />
      <circle cx="212" cy="169" r="17" opacity=".4" />
      <path d="M212 143V91h70M111 250v36M328 211v-45h34" opacity=".7" />
    </g>
    <g fill="currentColor"><circle cx="282" cy="91" r="2" /><circle cx="362" cy="166" r="2" /></g>
  </svg>
}
