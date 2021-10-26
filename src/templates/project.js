
import React, { useEffect } from 'react'
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import { Convert } from '../utility/convert';
import ProjectPageSection from '../components/pages/project-page-section';

const ProjectPage = (props) => {
      let project = Convert.toProjectModel(props.pageContext)
    
      return (
        <Layout withPadding={false}>
          <ProjectPageSection project={project} />
        </Layout>
      )
    }
    
    export default ProjectPage
    