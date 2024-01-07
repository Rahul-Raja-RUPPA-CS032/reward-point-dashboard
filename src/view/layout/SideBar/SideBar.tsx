import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sideBar } from '../../../constant';
import { SideBar } from '../../../types';

export const Sidebar = (props: any) => {
  const navigate: any = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []);
  const [activeID, setActiveID] = useState<number>(1);
  const handleClick = (path: string, id: number) => {
    setActiveID(id);
    navigate(path);
    props.setExpand(false);
  };
  return (
    <>
      <aside
        className={
          props.isExpand
            ? 'sidebar show bg-primary'
            : 'sidebar sidebar-closed bg-primary'
        }
        id="sidebar-wrapper"
        onMouseOver={() => {
          props.setExpand(true);
        }}
        onMouseLeave={() => {
          props.setExpand(false);
        }}
      >
        <ul className="list-unstyled">
          {sideBar.map((content: SideBar) => {
            return (
              <li
                key={content.id}
                className={
                  content.id === activeID ? 'nav-item active' : 'nav-item'
                }
              >
                <a
                  onClick={() => {
                    handleClick(content.path, content.id);
                  }}
                >
                  <span className="material-icons">{content.icon}</span>
                  <span className="sidebar-label">{content.module}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};
