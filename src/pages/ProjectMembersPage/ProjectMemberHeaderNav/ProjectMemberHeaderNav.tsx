import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProjectMemberHeaderNav.module.scss';
import { ProjectContext } from '../../../context/ProjectProvider';

export default function HeaderNav() {
  const { projectId = '' } = useParams();
  const projectList = useContext(ProjectContext);

  const currentProject = projectList.find((project) => project.id === projectId);

  if (projectList.length === 0) return <div />;

  return (
    <div className={styles.projectMemberHeaderNavContainer}>
      <h1>
        <Link to="/projects">Project</Link> /{' '}
        <Link to={`/projects/${currentProject?.id ?? ''}/board/${currentProject?.boardId ?? ''}`}>
          {currentProject?.name ?? 'Unknow Project'}
        </Link>{' '}
        / <Link to=".">Members</Link>
      </h1>
    </div>
  );
}
