import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin";

const { Title, Paragraph, Text } = Typography;
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };

  return (
    <>
      <Card
        style={{
          width: "50%",
        }}
      >
        <div className="text-center">
          {/* <img
          className='mb-3'
          src={appInfo.logo}
          alt=''
          style={{
            width: 48,
            height: 48,
          }}
        /> */}
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">
            Welcome back! please enter your details
          </Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name!!!",
              },
            ]}
          >
            <Input allowClear maxLength={100} type="name" />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email!!!",
              },
            ]}
          >
            <Input.Password maxLength={100} type="email" />
          </Form.Item>

          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!!!",
              },
            ]}
          >
            <Input.Password maxLength={100} type="email" />
          </Form.Item>
        </Form>

        <div className="row">
          <div className="col">
            {/* <Checkbox
              checked={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
            >
              Remember for 30 days
            </Checkbox> */}
          </div>
          {/* <div className="col text-right">
            <Link to={"/"}>Forgot password?</Link>
          </div> */}
        </div>

        <div className="mt-4 mb-3">
          <Button
            loading={isLoading}
            onClick={() => form.submit()}
            type="primary"
            style={{
              width: "100%",
            }}
            size="large"
          >
            Get started
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-3 text-center">
          <Space>
            <Text>Already have an account? </Text>
            <Link to={"/login"}>Login</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default SignUp;
