import { UsergroupAddOutlined } from "@ant-design/icons";
import { Avatar, Input, Modal, Table, Tag } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { CreateGroup, FetchSiteGroups } from "../store/Effects";
import { AppStateType } from "../types";

const Groups: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>("");

  const groups = useSelector(
    (state: AppStateType) => state.mainStore.siteGroups,
    shallowEqual
  );

  const isAdmin = useSelector(
    (state: AppStateType) => state.mainStore.isAdmin,
    shallowEqual
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(FetchSiteGroups());
  }, [dispatch]);

  const createGroupHandle = () => {
    setShowModal(false);
    if (groupName && groupName.length !== 0) {
      dispatch(CreateGroup({ name: groupName, desc: "Test Group (React)" }));
      setGroupName("");
    }
  };

  const columns = [
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      width: "75px",
      render: (pic: string) => (
        <span>
          <Avatar
            shape="square"
            size={50}
            icon={<UsergroupAddOutlined />}
            src={pic}
          />
        </span>
      ),
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: "90px",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "100px",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      width: "350px",
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
      key: "visibility",
      width: "75px",
      render: (vis: string) => (
        <span>
          <Tag
            color={
              vis.toUpperCase() === "PUBLIC"
                ? "green"
                : vis.toUpperCase() === "PRIVATE"
                ? "red"
                : ""
            }
          >
            {vis.toUpperCase()}
          </Tag>
        </span>
      ),
    },
  ];

  const dataSource =
    groups.length > 0
      ? groups.map((d) => {
          return {
            key: d.id,
            picture: "",
            created_at: dayjs(d.createdAt).format("MMM DD, YYYY"),
            name: d.displayName,
            desc: d.description,
            visibility: d.visibility,
          };
        })
      : [];

  return (
    <div>
      <PageTitle
        heading="Groups"
        subheading="Manage groups in your organization"
        showCreateAction={isAdmin}
        icon={"pe-7s-folder icon-gradient bg-happy-itmeo"}
        createBtnHanlde={() => setShowModal(true)}
      />
      <div className="page-container">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          size="middle"
          scroll={{ x: true }}
          tableLayout={"fixed"}
          onRow={(rec, index) => {
            return {
              onClick: (event) => history.push(`/siteGroups/${rec.key}`),
            };
          }}
        />
      </div>

      <Modal
        title="CREATE GROUP"
        visible={showModal}
        onOk={createGroupHandle}
        okButtonProps={{ htmlType: "submit" }}
        onCancel={() => setShowModal(false)}
      >
        <Input
          size="large"
          placeholder="large size"
          name="groupName"
          id="groupName"
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Groups;
