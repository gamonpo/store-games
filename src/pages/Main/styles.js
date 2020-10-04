import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.ImageBackground`
    flex: 1;
`;

export const Header = styled.View`
    padding-top: ${statusBarHeight + 'px'};
    align-items: center;
    background: #4d3f3f3f;
    flex-direction: row;
    justify-content: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 25px;
    color: #bf94ff;
    font-weight: 900;
    flex-grow: 0.9;
    text-align: center;
`;

export const Action = styled.View`
    flex-direction: column;
`;


export const Car = styled.TouchableOpacity`
    flex-grow: 0;
    width: 24px;
    height: 24px;
`;

export const Add = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    margin-left: 10px;
    padding-bottom: 50px;
`;

export const Remove = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    margin-left: 10px;
`;
export const Item = styled.View`
    width: 180px;
    margin: 100px;
    align-items: center;
    border-radius: 8px;
    flex-direction: row;
    margin: 20px;
    background: #ffffff;
`;

export const Photo = styled.Image`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const Info = styled.View`
    margin-left: 10px;

`;

export const Title = styled.Text`
    font-size: 20px;
    color: #bf94ff;
    margin: 5px;
`;
