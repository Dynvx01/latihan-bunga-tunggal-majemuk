import React from 'react';

interface MathFormulaProps {
  text: string;
  className?: string;
}

/**
 * Formats simple mathematical expressions like Mn, (1 + i)^t, M2, B_total
 * into clean typographic subscripts and superscripts.
 */
export const MathFormula: React.FC<MathFormulaProps> = ({
  text,
  className = '',
}) => {
  const parts = text.split(/(\^t|\^2|\^3|Mn|M2|M3|B_total|B_A|B_B|i_A|i_B|i_periode|i_tahunan)/g);

  return (
    <span className={`font-mono tracking-tight ${className}`}>
      {parts.map((part, idx) => {
        if (part === '^t') {
          return (
            <sup key={idx} className="text-[0.72em] font-semibold">
              t
            </sup>
          );
        }
        if (part === '^2') {
          return (
            <sup key={idx} className="text-[0.72em] font-semibold">
              2
            </sup>
          );
        }
        if (part === '^3') {
          return (
            <sup key={idx} className="text-[0.72em] font-semibold">
              3
            </sup>
          );
        }
        if (part === 'Mn') {
          return (
            <span key={idx}>
              M<sub className="text-[0.72em]">n</sub>
            </span>
          );
        }
        if (part === 'M2') {
          return (
            <span key={idx}>
              M<sub className="text-[0.72em]">2</sub>
            </span>
          );
        }
        if (part === 'M3') {
          return (
            <span key={idx}>
              M<sub className="text-[0.72em]">3</sub>
            </span>
          );
        }
        if (part === 'B_total') {
          return (
            <span key={idx}>
              B<sub className="text-[0.72em]">total</sub>
            </span>
          );
        }
        if (part === 'B_A' || part === 'B_B') {
          return (
            <span key={idx}>
              B<sub className="text-[0.72em]">{part.slice(2)}</sub>
            </span>
          );
        }
        if (part === 'i_A' || part === 'i_B') {
          return (
            <span key={idx}>
              i<sub className="text-[0.72em]">{part.slice(2)}</sub>
            </span>
          );
        }
        if (part === 'i_periode' || part === 'i_tahunan') {
          return (
            <span key={idx}>
              i<sub className="text-[0.72em]">{part.slice(2)}</sub>
            </span>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
};
