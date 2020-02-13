import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    background: #fff;
    border-radius: 20px;

    margin-top: -350px;
    transition-duration: 0.3s;
    padding: 5px;

    &:hover {
        border-bottom: 2px solid #000;
    }

    ul {
        list-style: none;

        li {
            display: flex;
            justify-content: center;
            align-content: center;

            div {
                display: flex;
                flex-direction: column;
                justify-content: center;

                padding: 15px;

                strong {
                    font-size: 16px;
                    padding: 5px;
                }

                span {
                    font-size: 12px;
                    padding: 5px;
                }

                a {
                    font-size: 12px;
                    text-decoration: none;
                    padding: 5px;
                    margin-top: 2px;
                }
            }

            img {
                max-width: 150px;
                padding: 15px;

                border-radius: 20px;
            }
        }
    }
`;
