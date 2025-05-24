import { Tabs as StrapiTabs } from '@strapi/design-system';

interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
}

export function Tabs(props: { tabs: Tab[] }) {
  const { tabs } = props;
  if (!tabs) return <p>No tabs found</p>;
  return (
    <StrapiTabs.Root disabled="expert" defaultValue={tabs[0]?.value}>
      <StrapiTabs.List aria-label="Manage your attribute">
        {tabs.map((tab) => (
          <StrapiTabs.Trigger value={tab.value}>{tab.label}</StrapiTabs.Trigger>
        ))}
      </StrapiTabs.List>
      {tabs.map((tab) => (
        <StrapiTabs.Content value={tab.value}>{tab.content}</StrapiTabs.Content>
      ))}
    </StrapiTabs.Root>
  );
}
