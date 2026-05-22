interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    return text
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line, i) => {
        // Headings
        if (line.startsWith('## ')) {
          return (
            <h2
              key={i}
              className="text-xl font-bold text-[var(--text-primary)] mt-10 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {line.replace('## ', '')}
            </h2>
          );
        }

        // Code blocks (simplified)
        if (line.startsWith('```')) {
          return null; // Skip code fence markers
        }

        // Numbered lists
        if (/^\d+\./.test(line)) {
          return (
            <li key={i} className="text-[var(--text-secondary)] ml-6 mb-2 list-decimal text-sm leading-relaxed">
              {line.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>')}
            </li>
          );
        }

        // Bullet points
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return (
            <li key={i} className="text-[var(--text-secondary)] ml-6 mb-2 list-disc text-sm leading-relaxed">
              {line.replace(/^[-*]\s*/, '')}
            </li>
          );
        }

        // Regular paragraphs
        return (
          <p key={i} className="text-[var(--text-secondary)] mb-4 text-sm leading-[1.8]">
            {line}
          </p>
        );
      });
  };

  return (
    <div className="max-w-none">
      {renderContent(content)}
    </div>
  );
}
