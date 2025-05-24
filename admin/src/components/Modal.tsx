import { Modal as StrapiModal } from '@strapi/design-system';
import { Button, Field } from '@strapi/design-system';
import { WarningCircle } from '@strapi/icons';

import styled from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export function Modal({
  trigger,
  title,
  header,
  footer, 
  children,
}: {
  trigger: React.ReactNode;
  title: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <ModalContainer>
      <StrapiModal.Root>
        <StrapiModal.Trigger>{trigger}</StrapiModal.Trigger>
        <StrapiModal.Content>
          <StrapiModal.Header>
            <StrapiModal.Title>{title}</StrapiModal.Title>
          </StrapiModal.Header>
          <StrapiModal.Body>
            {header && <StrapiModal.Header>{header}</StrapiModal.Header>}
            {children}
          </StrapiModal.Body>
          {footer && <StrapiModal.Footer>{footer}</StrapiModal.Footer>}
        </StrapiModal.Content>
      </StrapiModal.Root>
    </ModalContainer>
  );
}
