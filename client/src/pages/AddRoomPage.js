import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'

const AddRoomPage = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(null)

  useEffect(() => {
    console.log(values)
  }, [values])

  const onFinish = async (values) => {
    await fetch('/api/rooms', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(values)
    })

    console.log('Success:', values)
    navigate('/rooms')
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = event => {
    const { value, name} = event.target
    setValues({ ...values, [name]: value})
  }

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item 
        wrapperCol={{ offset: 7, span: 16 }}
        label='Nom'
        name='name'
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nom de la chambre."
          }
        ]}
      >
        <Input name='name' value={values} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 0, span: 16 }}
        label='Capacité maximum:'
        name='maxPersons'
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nombre de personne maximum."
          }
        ]}
      >
        <Input
          value={values}
          type='number'
          name='maxPersons'
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRoomPage;
