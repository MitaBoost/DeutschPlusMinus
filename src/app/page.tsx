'use client';

import {TopicSelector} from '@/components/topic-selector';
import {ArgumentsDisplay} from '@/components/arguments-display';
import {useState} from 'react';
import {DiscussionTopic} from '@/services/topic-list';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<DiscussionTopic | null>(
    null
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">DeutschDisput</h1>
      <TopicSelector onTopicSelect={setSelectedTopic} />
      {selectedTopic && (
        <ArgumentsDisplay key={selectedTopic.title} topic={selectedTopic} />
      )}
    </div>
  );
}
