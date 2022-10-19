import styled from 'styled-components/native';

export const SSafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.bgColor};
  flex: 1;
`;

export const SStatusBar = styled.StatusBar.attrs(({ theme }) => ({
  barStyle: theme.style === "dark" ? "light-content" : "dark-content",
}))``;

export const STextInput = styled.TextInput`
  height: 50px;
  margin: 12px;
  border-width: 1px;
  padding: 5px 10px;
  font-size: 20px;
  border-color: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.inputColor};
  align-items: stretch;
`;

export const SImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const SButton = styled.TouchableOpacity`
  margin-bottom: 20px;
  padding: 4px;
  border-color: ${({ theme }) => theme.btnBgColor};
  border-radius: 4px;
  border-width: 1px;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${({ theme }) => theme.btnBgColor};
`;

export const SText = styled.Text`
  color: ${({ theme }) => theme.btnColor};
`;
