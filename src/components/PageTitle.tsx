import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  heading: string;
  subheading: string;
  icon?: string;
  iconImage?: string;
  showCreateAction: boolean;
  createActionLabel?: string;
  createBtnHanlde?: () => void;
}

const PageTitle: React.FC<Props> = (props) => {
  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div
            className={props.icon ? "page-title-icon" : "page-title-icon image"}
          >
            {props.icon ? (
              <i className={props.icon}></i>
            ) : props.iconImage ? (
              //  <img src={props.iconImage} width="60" rounded />
              <div></div>
            ) : null}
          </div>
          <div>
            {props.heading}
            <div className="page-title-subheading">{props.subheading}</div>
          </div>
        </div>

        {props.showCreateAction ? (
          <div className="page-title-actions">
            <Button
              type="primary"
              htmlType="button"
              onClick={props.createBtnHanlde}
            >
              <PlusOutlined />
              {props.createActionLabel ? props.createActionLabel : "Create New"}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PageTitle;
