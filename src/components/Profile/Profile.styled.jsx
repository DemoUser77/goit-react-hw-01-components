import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    margin: 0 auto;
    width: 300px;
    border-radius: 5px;
    background-color: #dbcaca;
    box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const Avatar = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #e5f1f1;
`;

export const UserName = styled.p`
    margin-top: 20px;
    font-size:24px;
    font-weight:700;
`;

export const UserTag = styled.p`
    margin-top:8px;
    font-size: 16px;
    font-weight:700;
    color: black;
`;

export const UserLocation = styled.p`
    margin-top:8px;
    font-size: 16px;
    font-weight:700;
    color: black;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const StatsItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    width: 100%;
    background-color: #f0f0f0;
`;

export const Label = styled.span`
    color: gray;
`;

export const Quantity = styled.span`
    font-size: 16px;
    font-weight: 700;
`;