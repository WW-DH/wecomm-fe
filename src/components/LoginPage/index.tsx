import { Button, Form, Input } from "antd";
import "./style.scss";
export const LoginPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values: FormData) => {
    // TODO : Login api and validate id and password
    console.log("succeed: ", values);
  };
  const onFinishFailed = (error: any) => {
    console.log("error: ", error);
  };
  return (
    <div className="login-page">
      WeComm 로그인
      <div className="login-form">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="id"
            label="아이디"
            rules={[
              {
                required: true,
                message: "아이디를 입력해 주세요",
              },
            ]}
            validateTrigger={["onBlur"]}
          >
            <Input type="text" size="large" placeholder="ID를 입력해 주세요." />
          </Form.Item>
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해 주세요",
              },
            ]}
          >
            <Input
              type="password"
              size="large"
              placeholder="비밀번호를 입력해 주세요."
            />
          </Form.Item>
          <Form.Item>
            <Button size="large" block type="primary" htmlType="submit">
              로그인
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
