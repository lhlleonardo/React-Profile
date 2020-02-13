import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    max-width: 320px;

    background: #fff;
    border-radius: 30px;
    padding: 0 0 15px 0;
    margin-top: -200px;

    div {
        background: #929aab;
        border-radius: 25px;

        h1 {
            font-size: 20px;
            padding: 15px;
        }
    }

    ul {
        list-style: none;

        li {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            padding: 10px;

            strong {
                font-size: 16px;
                font-weight: bold;
                color: #000;
            }

            small {
                font-size: 12px;
                color: #929aab;
                margin-top: 2px;
            }

            span {
                margin-top: 7px;
                font-size: 14px;
                color: #2f2f2f;
            }
        }
    }
`;
