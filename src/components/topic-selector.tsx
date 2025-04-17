'use client';

import {useState, useEffect} from 'react';
import {getTopicList, DiscussionTopic} from '@/services/topic-list';
import {Button} from '@/components/ui/button';

interface TopicSelectorProps {
  onTopicSelect: (topic: DiscussionTopic) => void;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  onTopicSelect,
}) => {
  const [topics, setTopics] = useState<DiscussionTopic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const topicList = await getTopicList();
      setTopics(topicList);
    };

    fetchTopics();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 w-full max-w-3xl p-4">
      {topics.map((topic) => (
        <Button
          key={topic.title}
          onClick={() => onTopicSelect(topic)}
          className="text-lg rounded-full px-4 py-2 bg-muted-yellow hover:bg-yellow-200 text-black"
        >
          {topic.title}
        </Button>
      ))}
    </div>
  );
};

