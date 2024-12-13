import { Form, Input, Button } from "antd";
import './subscribe.css';
import { useUser } from "../../hooks/useUser";
import UseRegister from "../../hooks/useRegister";



const Subscribe = () => {
    const [form] = Form.useForm();
    const {Item} = Form;
    const {uid} = useUser();
    const {createRegister} = UseRegister();
    
    const onFinish = (values: any) => {
      createRegister(values, uid);
      form.resetFields(); 
    };
    
    return (  
        <>
        <section className="subscribe-section">
          <div className="subscribe-section__wrapper">
            <h4> Subscribe to our newsletter </h4>
            <Form
              form={form}
              onFinish={onFinish}
            >
              <div className="subscribe__form-wrapper">
              <Item
                name='nombre'
                rules={[{ required: true, message: 'Please input your name' }]}
              >
                <Input placeholder="First Name" />
              </Item>
              <Item
                name="correo"
                rules={[{ required: true, message: 'Please input your email' }]}
              >
                <Input placeholder="Email Address" />
              </Item>
              <Button 
               htmlType="submit" 
              >
                Subscribe Now
              </Button>
              </div>
              
            </Form>
          </div>
        </section>
        </>
    );
}
 
export default Subscribe;