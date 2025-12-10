"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  h2,
  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  .btn {
    background: #645cff;
    color: white;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    text-transform: capitalize;
    display: inline-block;
    cursor: pointer;
    margin-top: 1rem;
  }

  .btn:hover {
    background: #3c3799;
  }
`;

export default Wrapper;
