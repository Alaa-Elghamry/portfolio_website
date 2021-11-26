import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Span1 = styled.span `
  background:linear-gradient(270deg, #F46737 0%, #945DD6 100%) ;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`; 
