import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.ImageBackground`
    flex: 1;
`;

export const Header = styled.View`
    padding-top: ${2 * statusBarHeight + 'px'};
    flex-grow: 0.45;
`;

export const HeadTitle = styled.Text`
    font-size: 80px;
    color: #bf94ff;
`;

export const Button = styled.TouchableOpacity`
    width: 250px;
    height: 50px;
    align-self: center;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #323235;    
`;

export const ButtonTitle = styled.Text`
    font-size: 22px;
    color: #efeff1;
`;