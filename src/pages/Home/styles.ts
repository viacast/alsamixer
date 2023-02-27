import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const PageTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 32px;
  font-family: Nunito, sans-serif;
  font-weight: bold;
  margin-bottom: 48px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  font-size: 20px;
  font-family: Nunito, sans-serif;
  font-weight: bold;
`;

export const Field = styled.p`
  display: flex;
  margin-inline: 15px;
`;

export const FieldTitle = styled.p`
  color: var(--color-primary-2);
`;

export const Select = styled.select`
  background-color: var(--color-neutral-5);
  color: var(--color-neutral-2);
  border: 5px solid var(--color-neutral-5);
  border-radius: 4px;
  padding: 5px;
  font-size: 20px;
  font-family: Nunito, sans-serif;
  font-weight: bold;
  margin-top: -10px;
`;

export const SelectOption = styled.option``;
