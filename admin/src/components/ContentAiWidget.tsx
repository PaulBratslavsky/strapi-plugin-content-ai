import { Button, Box, Typography } from '@strapi/design-system';
import { Modal } from './Modal';
import { Tabs } from './Tabs';
import { Textarea } from '@strapi/design-system';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { Flex } from '@strapi/design-system';
import { TextEditor } from './TextEditor';

const summarize = {
  id: 'summarize',
  defaultMessage: 'Summarize',
};

function GenerateSocialMediaPost() {
  const [value, setValue] = useState('');
  const [markdown, setMarkdown] = useState('');
  const intl = useIntl();

  const handleSummarize = async (content: string) => {
    console.log('summarize');

    // Create mock summarize function
    const summarize = async (content: string) => {
      return 'This is a summary';
    };

    const summary = await summarize(content);
    setValue(summary);
    console.log(summary);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box gap={4}>
      <Typography display="block" marginTop={4} marginBottom={4}>
        Generate Social Media Post
      </Typography>
      <Textarea
        marginBottom={4}
        placeholder="This is a content placeholder"
        name="content"
        value={value}
        onChange={handleChange}
      />
      <Flex justifyContent="flex-end" gap={2} marginTop={4}>
        <Button variant="secondary" onClick={() => handleSummarize(value)}>
          {intl.formatMessage(summarize)}
        </Button>
      </Flex>
      <TextEditor markdown={markdown} onChange={setMarkdown} />
    </Box>
  );
}

const tabs = [
  {
    label: 'Generate Social Media Post',
    value: 'generate-social-media-post',
    content: <GenerateSocialMediaPost />,
  },
  {
    label: 'Generate content',
    value: 'generate',
    content: (
      <Box padding={4}>
        <Typography tag="p">Generate content</Typography>
      </Box>
    ),
  },
];

export function ContentAiWidget() {
  return (
    <Modal title="Content AI" trigger={<Button variant="secondary">Content AI</Button>}>
      <Tabs tabs={tabs} />
    </Modal>
  );
}
