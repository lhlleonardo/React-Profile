import styled from 'styled-components';

export const Container = styled.div`
    background: #929aab;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    margin-top: -120px;

    max-width: 320px;
    height: 690px;

    border-radius: 30px;

    > aside {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;

        img {
            max-width: 180px;
            border-radius: 30px;
            border: 1px solid #000;
            margin-top: -30px;
        }

        strong {
            font-size: 18px;
            color: #000;
            font-weight: bold;
            margin-top: 5px;
        }

        span {
            font-size: 14px;
            margin-top: 5px;
        }

        h3 {
            font-weight: normal;

            margin-top: 5px;
            color: #3a3a3a;
            font-size: 13px;
            padding: 10px;
        }
    }

    ul {
        list-style: none;

        display: flex;
        flex-direction: column;

        li {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: left;
            padding: 5px;
            font-size: 13px;

            a {
                text-decoration: none;
                font-size: 13px;
                color: #000;
            }

            img {
                max-height: 25px;
                margin-right: 5px;
            }
        }
    }
`;
