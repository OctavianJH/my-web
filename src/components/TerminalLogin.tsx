import { useState, useEffect } from "react";

interface TerminalLoginProps {
  onComplete: () => void;
}

export const TerminalLogin = ({ onComplete }: TerminalLoginProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const lines = [
    "Connecting to Portfolio...",
    "Username: Octavian Humphreys",
    "Password: ********",
    "Access granted.",
    "Loading portfolio..."
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentChar < lines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + lines[currentLine][currentChar]);
          setCurrentChar(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + "\n");
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(onComplete, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          Welcome User
        </h1>
        <div className="bg-terminal-bg rounded-lg p-6 w-full max-w-md mx-auto shadow-2xl border border-primary/30 terminal-glow">
          <pre className="text-terminal-foreground font-mono text-sm whitespace-pre-wrap min-h-[200px]">
            {displayText}
            <span className="cursor-blink"></span>
          </pre>
        </div>
      </div>
    </div>
  );
};