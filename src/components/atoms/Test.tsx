import React from 'react';
import styled from 'styled-components';

const TestBlock = styled.div``;

export interface TestProps {}

const Test = ({}: TestProps) => {
    return (
        <TestBlock>
            test
        </TestBlock>
    );
};

export default Test;
