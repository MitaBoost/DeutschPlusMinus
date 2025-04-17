'use client';

import {useState, useEffect} from 'react';
import {DiscussionTopic} from '@/services/topic-list';
import {generateArguments, CEFRLevel} from '@/ai/flows/generate-argument-advantages-disadvantages';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Button} from '@/components/ui/button';
import {Plus, Minus, Save} from 'lucide-react';

interface ArgumentsDisplayProps {
  topic: DiscussionTopic;
}

const cefrLevels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2'];

const levelColors = {
  A1: 'hsl(var(--a1-blue))',
  A2: 'hsl(var(--a2-green))',
  B1: 'hsl(var(--b1-orange))',
  B2: 'hsl(var(--b2-red))',
};

export const ArgumentsDisplay: React.FC<ArgumentsDisplayProps> = ({topic}) => {
  const [argumentsByLevel, setArgumentsByLevel] = useState<{
    [level in CEFRLevel]: { advantages: string[]; disadvantages: string[] } | null;
  }>({
    A1: null,
    A2: null,
    B1: null,
    B2: null,
  });

  useEffect(() => {
    const fetchArguments = async () => {
      for (const level of cefrLevels) {
        const generatedArguments = await generateArguments({
          topic: topic.title,
          cefrLevel: level,
        });
        setArgumentsByLevel((prev) => ({
          ...prev,
          [level]: {
            advantages: generatedArguments.advantages,
            disadvantages: generatedArguments.disadvantages,
          },
        }));
      }
    };

    fetchArguments();
  }, [topic]);

  return (
    <div className="w-full max-w-3xl p-4">
      <h2 className="text-2xl font-semibold mb-4">{topic.title}</h2>
      <Accordion type="single" collapsible>
        {cefrLevels.map((level) => (
          <AccordionItem key={level} value={level}>
            <AccordionTrigger className="text-xl font-semibold flex items-center justify-between py-3 rounded-md transition-colors">
              {`CEFR Level ${level}`}
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{backgroundColor: levelColors[level as CEFRLevel]}}
              />
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Plus className="mr-2 text-green-500" />
                    Advantages
                  </h3>
                  {argumentsByLevel[level]?.advantages.map((advantage, index) => (
                    <div key={`advantage-${level}-${index}`} className="mb-2 p-3 rounded-md shadow-sm">
                      <p className="text-gray-800">{advantage}</p>
                      <Button size="sm" className="mt-2 bg-muted-yellow hover:bg-yellow-200">
                        <Save className="mr-2" size={16} />
                        Save Sentence
                      </Button>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Minus className="mr-2 text-red-500" />
                    Disadvantages
                  </h3>
                  {argumentsByLevel[level]?.disadvantages.map((disadvantage, index) => (
                    <div key={`disadvantage-${level}-${index}`} className="mb-2 p-3 rounded-md shadow-sm">
                      <p className="text-gray-800">{disadvantage}</p>
                      <Button size="sm" className="mt-2 bg-muted-yellow hover:bg-yellow-200">
                        <Save className="mr-2" size={16} />
                        Save Sentence
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
