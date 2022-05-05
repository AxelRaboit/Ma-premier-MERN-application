import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'antd'

const RoomForm = ({ id, room, setRoom }) => {
  const navigate = useNavigate()
  const [values, setValues] = useState(null)

  useEffect(() => {
    setValues(room)
    console.log(values)
  }, [values, room, id])

  const onFinish = async values => {
    await fetch(`/api/rooms/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(values)
    })

    console.log('Success:', values)
    setRoom(values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const handleChange = event => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleDelete = async () => {
    await fetch(`/api/rooms/${id}`, {
      method: 'DELETE'
    })

    navigate('/rooms')
  }

  if (!values) return null

  return (
    <Form
      name='basic'
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        wrapperCol={{ offset: 4, span: 16 }}
        label='Nom'
        name='name'
        initialValue={values.name}
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nom de la chambre."
          }
        ]}
      >
        <Input name='name' value={values.name} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 0, span: 16 }}
        label='Capacité max'
        name='maxPersons'
        initialValue={values.maxPersons}
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nombre de personne maximum."
          }
        ]}
      >
        <Input
          value={values.maxPersons}
          type='number'
          name='maxPersons'
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
        <Button
            type='primary'
            htmlType='submit'
        >
          Submit
        </Button>
        <Button
          onClick={handleDelete}
          type='danger'
          style={{ marginLeft: '1rem' }}
        >
          Supprimer
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RoomForm
