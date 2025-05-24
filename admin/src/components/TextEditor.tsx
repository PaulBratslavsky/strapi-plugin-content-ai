import { MDXEditor, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, toolbarPlugin, UndoRedo, BoldItalicUnderlineToggles, ListsToggle, BlockTypeSelect } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css';
import styled from 'styled-components';
import { Box } from '@strapi/design-system';

const StyledMXEditor = styled(MDXEditor)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  
  .mdxeditor {
    background-color: #ffffff;
    border: 1px solid #dcd5d5;
    border-radius: 4px;
  }

  .mdxeditor-toolbar {
    border-bottom: 1px solid #dcd5d5;
    padding: 8px;
  }

  .mdxeditor-content {
    padding: 16px;
    min-height: 200px;
  }

  .mdxeditor-content p {
    margin: 0 0 1em 0;
  }

  .mdxeditor-content h1,
  .mdxeditor-content h2,
  .mdxeditor-content h3,
  .mdxeditor-content h4,
  .mdxeditor-content h5,
  .mdxeditor-content h6 {
    margin: 1em 0 0.5em 0;
  }

  /* Unordered lists */
  .mdxeditor-content [data-mdxeditor-type="ul"] {
    margin: 0.5em 0;
    padding-left: 2em;
    list-style-type: disc !important;
  }

  .mdxeditor-content [data-mdxeditor-type="ul"] [data-mdxeditor-type="ul"] {
    list-style-type: circle !important;
  }

  .mdxeditor-content [data-mdxeditor-type="ul"] [data-mdxeditor-type="ul"] [data-mdxeditor-type="ul"] {
    list-style-type: square !important;
  }

  /* Ordered lists */
  .mdxeditor-content [data-mdxeditor-type="ol"] {
    margin: 0.5em 0;
    padding-left: 2em;
    list-style-type: decimal !important;
  }

  .mdxeditor-content [data-mdxeditor-type="ol"] [data-mdxeditor-type="ol"] {
    list-style-type: lower-alpha !important;
  }

  .mdxeditor-content [data-mdxeditor-type="ol"] [data-mdxeditor-type="ol"] [data-mdxeditor-type="ol"] {
    list-style-type: lower-roman !important;
  }

  /* List items */
  .mdxeditor-content [data-mdxeditor-type="li"] {
    display: list-item !important;
    margin: 0.25em 0;
  }

  .mdxeditor-content blockquote {
    margin: 1em 0;
    padding-left: 1em;
    border-left: 4px solid #dcd5d5;
  }
`;

interface TextEditorProps {
  markdown: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const TextEditor = ({ markdown, onChange }: TextEditorProps) => {
  return (
    <Box>
      <h1>This is</h1>
      <StyledMXEditor
        markdown={markdown}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                <BlockTypeSelect />
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin()
        ]}
        onChange={(value) => onChange(value ?? '')}
      />
    </Box>
  );
};
