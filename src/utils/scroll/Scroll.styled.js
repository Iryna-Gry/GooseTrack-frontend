import styled from 'styled-components';

export const TopButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 15px;
  color: var(--border-cloud-color);
  box-shadow: inset 0 0 0 4px var(--border-cloud-color);
  transition: 250ms;
  z-index: 999;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--accent-text-color);
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }

  &::before {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 40px;
    content: '⇡';

    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
    @media screen and (min-width: 768px) {
      font-size: 35px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 40px;
    }
  }
`;

export const IconPath = styled.path`
  box-sizing: border-box;
  stroke: var(--accent-text-color);
  stroke-width: 4px;
  transition: 250ms;
  fill: none;
`;
