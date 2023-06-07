import { Button, Form, Input, Select } from "antd"
import { useForm } from "antd/es/form/Form";
import './style.scss';

export const SignUpPage = () => {

  const [form] = useForm();

  // 회원가입 성공
  const onFinish = (values: FormData) => {
    /* 회원가입 처리 */
    console.log('success :', values);
  }

  // 회원가입 실패
  const onFinishFailed = (error: any) => {
    console.log('error : ', error);
  }

  // ID validation
  const validateId = (_: object, value: string) => {
    const length = value ? value.length : 0;
    if (length < 4 || length > 20) {
      return Promise.reject(new Error('아이디는 4자이상 20자 이하여야 합니다.'))
    }

    /* id 중복검사 로직 */
    // const isDuplicate = fetch('').json();
    // if (isDuplicate) {
    //   return Promise.reject(new Error("사용중인 닉네임 입니다."));
    // }

    return Promise.resolve();
  }

  // 비밀번호 validation
  const validatePassword = (_:object, value: string) => {
    const length = value ? value.length : 0;
    if (length < 8 || length > 20) {
      return Promise.reject(new Error('비밀번호는 8자 이상 20자 이하여야 합니다.'));
    }
    return Promise.resolve();
  }

  // confirmPassword 일치 여부 확인
  const validateConfirmPassword = (_: object, value: string, values: any) => {
    const password = form.getFieldValue('password');
    if (value !== password) {
      return Promise.reject(new Error('비밀번호가 일치하지 않습니다'));
    }
    return Promise.resolve();
  }

  // submit 버튼 click시 전체 validation 후 처리
  const handleFinish = async() => {
    try {
      await form.validateFields();
      form.submit();
    } catch (error) {
      console.log('error : ', error);
    }
  }

  return (
    <div className="sign-up-container">
      WeComm 회원가입
      <div className="sign-up-form">
        <Form 
          form={form}
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            validateTrigger={['onBlur']}
          >
            <Input size="large" placeholder="이름을 입력해주세요."/>
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
            validateTrigger={['onBlur']}
          >
            <Select
              size="large"
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
              {
                pattern: /^[A-Za-z0-9]+$/,
                message: '아이디는 영어 대소문자와 숫자로만 이루어져야 합니다.'
              },
              {
                validator: validateId,
              },
            ]}
            validateTrigger={['onBlur']}
          >
            <Input 
              size="large"
              placeholder="아이디를 입력해주세요."
            />
          </Form.Item>
          <Form.Item 
            label="비밀번호" 
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호는 필수입력 사항입니다."
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message: '비밀번호는 대소문자, 숫자, 특수문자를 모두 포함하여야 합니다.'
              },
              {
                validator: validatePassword,
              }
            ]}
            validateTrigger={['onBlur']}
          >
            <Input.Password size="large" placeholder="비밀번호를 입력해주세요." />
          </Form.Item>
          <Form.Item 
            label="비밀번호 확인" 
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "비밀번호 확인은 필수입력 사항입니다."
              },
              {
                validator: validateConfirmPassword,
              },
            ]}
            validateTrigger={['onBlur']}
          >
            <Input.Password size="large" placeholder="비밀번호를 입력해주세요." />
          </Form.Item>
          <Button 
            block
            size="large"
            type="primary"
            htmlType="button"
            onClick={handleFinish}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
