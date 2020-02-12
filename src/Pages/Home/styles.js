import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 0 0;
    flex-wrap: wrap;
`;

export const Projects = styled.div`
    background: #fff;
    padding: 15px;

    ul {
        list-style: none;

        li {
            strong {
                font-size: 16px;
            }

            span {
                color: #3a3a3a;
            }

            a {
                text-decoration: none;
            }
        }
    }
`;

export const More = styled.div``;
