import styled from '@emotion/styled';
import { getRandomHexColor } from 'components/Color/GetRandomHexColor';

export const ContainerStatistics = styled.section`
    margin: 20px auto 0 auto;
    width: 300px;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  
`;

export const Title = styled.h2`
    padding: 30px 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
`; 

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
    
`;

export const StatItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    width: 100%;
    background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
    font-size: 16px;
    padding-bottom: 10px;
`; 

export const Percentage = styled.span`
    font-size: 16px;
`;