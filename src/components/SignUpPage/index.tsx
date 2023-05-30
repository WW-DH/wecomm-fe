import { Button, Form, Input, Select } from "antd"
import { useForm } from "antd/es/form/Form";
import './style.scss';

export const SignUpPage = () => {

  const [form] = useForm();

  return (
    <div className="sign-up-container">
      <Form 
        form={form}
        name="basic"
        onFinish={(values) => {
          /* 회원가입 처리 */
          console.log(values);
        }}
      >
        <Form.Item
          label="이름" 
          name="name"
          rules={[
            {
              required: true,
              message: "이름은 필수입력 사항입니다."
            },
          ]}
        >
          <div className="input-container">
            <Input placeholder="이름을 입력해주세요."/>
          </div>
        </Form.Item>
        <Form.Item 
          label="연령" 
          name="ageGroup"
          rules={[
            {
              required: true,
              message: "연령은 필수입력 사항입니다."
            },
          ]}
        >
          {/* selectbox div안에 넣으면 작동안됨.. */}
          <Select
            style={{width: "250px", float: "right", textAlign: "left"}}
            placeholder="연령을 선택해주세요."
            options={[
              {value: '0~9', label: '0~9'},
              {value: '10~19', label: '10~19'},
              {value: '20~29', label: '20~29'},
              {value: '30~39', label: '30~39'},
              {value: '40~49', label: '40~49'},
              {value: '50~59', label: '50~59'},
              {value: '60+', label: '60+'}
            ]}
          />
        </Form.Item>
        <Form.Item 
          label="ID" 
          name="username"
          rules={[
            {
              required: true,
              message: "아이디는 필수입력 사항입니다."
            },
          ]}
        >
          <div className="input-container">
            <Input 
              placeholder="아이디를 입력해주세요." 
              pattern="[A-Za-z0-9]+"
              onBlur={(event) => {
                /* 아이디 중복검사 */
                console.log(event.target.value);
              }}
            />
          </div>
        </Form.Item>
        <Form.Item 
          label="비밀번호" 
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호는 필수입력 사항입니다."
            },
          ]}
        >
          <div className="input-container">
            <Input.Password placeholder="비밀번호를 입력해주세요." />
          </div>
        </Form.Item>
        <Button 
          className="submit-button"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
