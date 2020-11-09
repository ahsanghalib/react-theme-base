import { CloudUploadOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Tag } from "antd";
import React from "react";

interface Props {
  heading: string;
  subheading: string;
  icon?: string;
  iconImage?: string;
  showCreateAction?: boolean;
  createActionLabel?: string;
  createBtnHanlde?: () => void;
  showEditBtn?: boolean;
  editBtnHandle?: () => void;
  showImportBtn?: boolean;
  importBtnHandle?: () => void;
  groupVisibitliy?: string;
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
            <Space size="large">
              {props.heading}
              {props.groupVisibitliy ? (
                <Tag
                  color={
                    props.groupVisibitliy.toUpperCase() === "PUBLIC"
                      ? "green"
                      : props.groupVisibitliy.toUpperCase() === "PRIVATE"
                      ? "red"
                      : ""
                  }
                >
                  {props.groupVisibitliy.toUpperCase()}
                </Tag>
              ) : null}
            </Space>
            <div className="page-title-subheading">{props.subheading}</div>
          </div>
        </div>
        <Button.Group>
          {props.showCreateAction ? (
            <div className="page-title-actions">
              <Button
                type="primary"
                htmlType="button"
                onClick={props.createBtnHanlde}
              >
                <PlusOutlined />
                {props.createActionLabel
                  ? props.createActionLabel
                  : "Create New"}
              </Button>
            </div>
          ) : null}
          {props.showEditBtn ? (
            <div className="page-title-actions">
              <Button
                type="default"
                htmlType="button"
                onClick={props.editBtnHandle}
              >
                <EditOutlined />
                Edit
              </Button>
            </div>
          ) : null}
          {props.showImportBtn ? (
            <div className="page-title-actions">
              <Button
                type="default"
                htmlType="button"
                onClick={props.importBtnHandle}
              >
                <CloudUploadOutlined /> Import
              </Button>
            </div>
          ) : null}
        </Button.Group>
      </div>
    </div>
  );
};

export default PageTitle;
