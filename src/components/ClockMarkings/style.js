import styled from 'styled-components/native';
import { Line, Text } from 'react-native-svg';

export const Minute = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

export const HourLine = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

export const HourNumber = styled(Text).attrs(({ theme }) => ({
  fill: theme.primaryColor,
}))``;
