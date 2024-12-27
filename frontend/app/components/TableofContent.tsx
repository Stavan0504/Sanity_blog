"use client";

interface TocProps {
  data: {
    body: { _type: string; style: string; children: { text: string }[] }[];
  };
}

export default function Toc({ data }: TocProps) {
  let headingCounter = 0;
  const generateTOC = (body: { _type: string; style: string; children: { text: string }[] }[]) => {
    interface TocItem {
      text: string;
      id: string;
    }
    const toc: TocItem[] = [];
    body.forEach((item) => {
      if (item._type === "block" && item.style.startsWith("h")) {
        const text = item.children[0]?.text;
        const isHeading = ['h1', 'h2', 'h3'].includes(item.style);
        const id = isHeading ? `id-${headingCounter++}` : undefined;
        
        toc.push({ text, id: id || "" });
      }
    });
    return toc;
  };
  
  const toc = generateTOC(data.body);
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc pl-6">
          {toc.map((item) => (
            <li key={item.id}>
                <button
                type="button"
                  onClick={() => handleScroll(item.id)}
                  className="text-blue-400 hover:underline hover:text-white"
                >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
