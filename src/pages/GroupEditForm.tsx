import {
  DeleteFilled,
  EditFilled,
  MinusCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Form,
  Input,
  Radio,
  Select,
  Table,
  Tag,
  Tooltip,
} from "antd";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { loadingAction } from "../store/Actions";
import { FetchSiteGroup } from "../store/Effects";
import { AppStateType } from "../types";

interface FormFields {
  displayName: string;
  description: string;
  visibility: string;
  owners: string[];
}

const GroupEditForm: React.FC = () => {
  const siteGroup = useSelector(
    (state: AppStateType) => state.mainStore.siteGroup,
    shallowEqual
  );

  const [form] = Form.useForm<FormFields>();

  const initialValues: FormFields = {
    description: "",
    displayName: "",
    visibility: "public",
    owners: [],
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams<any>();

  useEffect(() => {
    if (id && siteGroup.displayName === "") {
      dispatch(FetchSiteGroup(id));
      dispatch(loadingAction(false));
    }
  }, [dispatch, id, siteGroup.displayName]);

  useEffect(() => {
    form.setFieldsValue({
      displayName: siteGroup.displayName ? siteGroup.displayName : "",
      description: siteGroup.description ? siteGroup.description : "",
      visibility: siteGroup.visibility
        ? siteGroup.visibility.toLowerCase()
        : "public",
      owners: ["owner1", "owner3"],
    });
  }, [form, siteGroup]);

  const onFinish = (values: FormFields) => {
    console.log(values);
  };

  const columns = [
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      width: "75px",
      render: (pic: string) => (
        <span>
          <Avatar shape="square" size={30} icon={<UserOutlined />} src={pic} />
        </span>
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      width: "100px",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      width: "100px",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "150px",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "100px",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: "75px",
      render: (status: string) => (
        <span>
          <Tag>{status.toUpperCase()}</Tag>
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "75px",
      render: (text: any, record: any, index: any) => (
        <span>
          <Button.Group>
            <Button type="default" htmlType="button">
              <Tooltip title="Edit">
                <EditFilled />
              </Tooltip>
            </Button>
            <Button type="default" htmlType="button">
              <Tooltip title="Disable">
                <MinusCircleFilled />
              </Tooltip>
            </Button>
            <Button type="default" htmlType="button">
              <Tooltip title="Delete">
                <DeleteFilled />
              </Tooltip>
            </Button>
          </Button.Group>
        </span>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      firstName: "Member 1",
      lastName: "Member 1",
      email: "member@member.com",
      phone: "+123456789",
      status: "Active",
    },
    {
      key: "2",
      firstName: "Member 1",
      lastName: "Member 1",
      email: "member@member.com",
      phone: "+123456789",
      status: "Active",
    },
    {
      key: "3",
      firstName: "Member 1",
      lastName: "Member 1",
      email: "member@member.com",
      phone: "+123456789",
      status: "Active",
    },
  ];

  return (
    <div>
      <PageTitle
        heading={
          siteGroup.displayName.length > 0
            ? `Edit Group - ${siteGroup.displayName}`
            : "Edit Group"
        }
        groupVisibitliy={siteGroup.visibility}
        subheading="Edit group details"
        icon={"pe-7s-folder icon-gradient bg-happy-itmeo"}
      />
      <div className="page-container">
        <div
          style={{
            padding: "1.5rem",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        >
          <Form
            name="groupEditForm"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            form={form}
            initialValues={initialValues}
          >
            <Form.Item
              label="Group Name"
              name="displayName"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Visibility"
              name="visibility"
              rules={[{ required: true, message: "Required" }]}
            >
              <Radio.Group buttonStyle="outline">
                <Radio.Button value="public">Public</Radio.Button>
                <Radio.Button value="private">Private</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Owners"
              name="owners"
              rules={[{ required: true, message: "Required" }]}
            >
              <Select mode="multiple" placeholder="Select owners">
                <Select.Option value="owner1">Owner 1</Select.Option>
                <Select.Option value="owner2">Owner 2</Select.Option>
                <Select.Option value="owner3">Owner 3</Select.Option>
                <Select.Option value="owner4">Owner 4</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Members">
              <Button type="default" htmlType="button">
                Import Members
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                size="middle"
                scroll={{ x: true, y: 250 }}
                tableLayout={"fixed"}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
              <div style={{ textAlign: "right" }}>
                <Button.Group>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button
                    type="default"
                    htmlType="button"
                    onClick={() => history.goBack()}
                  >
                    Cancel
                  </Button>
                </Button.Group>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GroupEditForm;
