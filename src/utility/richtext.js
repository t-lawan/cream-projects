import React from "react"
import { MARKS, INLINES } from '@contentful/rich-text-types';
import styled from 'styled-components';


const EXTERNALLINK = styled.a`
`
export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <EXTERNALLINK href={node.data.uri} target="__blank">{children}</EXTERNALLINK>
    },
  };