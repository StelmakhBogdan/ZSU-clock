import styled from 'styled-components/native';

export const SScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const SSafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.bgColor};
  flex: 1;
`;

export const SStatusBar = styled.StatusBar.attrs(({ theme }) => ({
  barStyle: theme.style === "dark" ? "light-content" : "dark-content",
}))``;


export const SText = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${({ isTitle }) => isTitle ? '44px' : '38px'};
`;
