interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const lines = content.split('\n');

  return (
    <div className="prose prose-slate max-w-none">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();

        if (trimmedLine === '') {
          return <div key={index} className="h-4" />;
        }

        if (trimmedLine.match(/^[A-ZÕÄÖÜŠŽ][a-zõäöüšž\s]+[?!:]$/)) {
          return (
            <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              {trimmedLine}
            </h2>
          );
        }

        if (trimmedLine.match(/^\d+\.\s+[A-ZÕÄÖÜŠŽ]/)) {
          const match = trimmedLine.match(/^(\d+\.\s+)(.+)$/);
          if (match) {
            return (
              <h3 key={index} className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                {match[1]}{match[2]}
              </h3>
            );
          }
        }

        if (
          trimmedLine.startsWith('Kui sinu autol') ||
          trimmedLine.startsWith('CTA:') ||
          trimmedLine.startsWith('Kui soovid oma auto mootorit') ||
          trimmedLine.startsWith('Kui plaanid OM648') ||
          trimmedLine.startsWith('Kui soovid oma autole')
        ) {
          const cleanedLine = trimmedLine.replace(/^CTA:\s*/, '');
          return (
            <div key={index} className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-slate-900 font-medium text-lg leading-relaxed">
                {cleanedLine}
              </p>
            </div>
          );
        }

        if (
          trimmedLine === 'Kokkuvõte' ||
          trimmedLine === 'Mida teha, kui mootorituli süttib?' ||
          trimmedLine === 'Levinumad põhjused' ||
          trimmedLine === 'OM648 eelised' ||
          trimmedLine === 'Vajalikud detailid ümberehituseks' ||
          trimmedLine === 'Töökindluse ja jõudluse kombinatsioon' ||
          trimmedLine === 'Vintsid ja pukseerimisvõimalused' ||
          trimmedLine === 'Lisa kütusepaagid' ||
          trimmedLine === 'Vedrustuse ja sillatugede tugevdamine' ||
          trimmedLine === 'Põhjakaitsed ja metalltööd' ||
          trimmedLine === 'Projektiautod ja erilahendused'
        ) {
          return (
            <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              {trimmedLine}
            </h2>
          );
        }

        return (
          <p key={index} className="text-slate-700 leading-relaxed mb-4">
            {line}
          </p>
        );
      })}
    </div>
  );
}
