import { useState, useEffect } from 'react';
import { 
  Form,
  Input, 
  Select,
  DatePicker,
  Checkbox,
  Button
} from 'antd';
import './makeAppointment.css';
import UseMakeAppointment from '../../hooks/useMakeAppointment';
import { useUser } from '../../hooks/useUser';
import UseFetchDoctors from '../../hooks/useFetchDoctors';


const MakeAppointment: React.FC = () => {

    const [disabledSubmit, setDisabledSubmit] = useState(true);

    const [form] = Form.useForm();

    const {TextArea} = Input;
    const { Item } = Form;
    const {Option} = Select;

    const {createAppointment} = UseMakeAppointment();
    const {uid} = useUser();

    const {doctorsList, getDoctorList} = UseFetchDoctors();

    const onFinish = (values: any) => {
      createAppointment(values, uid);
      form.resetFields();
    };

    const prefixSelector = (
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
    );

    useEffect(()=>{
      getDoctorList(uid);
    },[])

    return ( 
      <>
        <section className="appointment-section">
          <div className="appointment-section__wrapper">
            <header className="appointment-section__header">
              <p className='left__headline'>
                MAKE AN <b> APPOINMENT </b>
              </p>
              <p className='right__headline'>
                Consult with our <b> Doctor </b>
              </p>
            </header>

            <div className="appointment-section__body">
              <figure className="appointment-section__figure">
                <img src="assets/img/make_apointment.png" alt="make appointment" />
              </figure>
              <div className="appointment-section__form">
                <Form
                 form={form}
                 onFinish={onFinish}
                >
                  <Item
                    name="nombre"
                    label="Nombre"
                    rules={[{ required: true, message: 'Please input your name' }]}
                    style={{flexFlow: 'column wrap'}}
                  >
                    <Input placeholder="Full Name" />
                  </Item>

                  <Item
                    name="telefono"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                  </Item>
                  <Item
                    name="fecha"
                    label="Select Date"
                    rules={[{ required: true, message: 'Please insert a valid date' }]}
                  >
                    <DatePicker />
                  </Item>
                  <Item
                    name="doctor"
                    label="Doctor"
                    rules={[{ required: true, message: 'Please select a doctor' }]}
                  >
                    <Select>
                      {doctorsList.map(doctor =>(
                       <Option value={doctor.name}> 
                         {doctor.name}
                       </Option>
                      ))}
                    </Select>
                  </Item>
                  <Item name="mensaje" label="Message" className='messageItem' >
                    <TextArea >
                    </TextArea>
                  </Item>
                  <Item className='confirm-item'>
                    <Checkbox
                      checked={!disabledSubmit}
                      onChange={() => setDisabledSubmit(!disabledSubmit)}
                    >
                      You agree to our friendly privacy policy.
                    </Checkbox>
                  </Item>
                  <Button 
                    className='confirm-item' 
                    htmlType="submit"
                    disabled={disabledSubmit}
                  >
                    Confirm Appoinment
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
 
export default MakeAppointment;