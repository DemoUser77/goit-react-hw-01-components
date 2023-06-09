import styled from '@emotion/styled';

export const FriendItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 15px;
    width: 100%;
    height: 80px;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
    margin-bottom: 10px;
    padding: 0;
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
    margin-left: 15px;
    width: 60px;
    border-radius: 5px;
`;

export const Name = styled.p`
    margin-left: 15px;
    font-size: 24px;
    font-weight: 700;
`;