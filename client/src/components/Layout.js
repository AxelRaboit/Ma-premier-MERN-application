import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 3rem',
    justifyContent: 'center'
}


const ARLayout = ({ children }) => {
    return (
        <Layout>
            <Header>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>
                        <Link to='/'>
                            Accueil
                        </Link>
                    </Menu.Item>

                    <Menu.Item key='2'>
                        <Link to='/rooms'>
                            Chambres
                        </Link>
                    </Menu.Item>

                    <Menu.Item key='3'>
                        <Link to='/about'>
                            À propos
                        </Link>
                    </Menu.Item>

                    <Menu.Item key='4'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </Menu.Item>

                    <Menu.Item key='5'>
                        <Link to='/add-room'>
                            Ajouter une chambre
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={contentStyle} children={children}/>
            <Footer>MyWebsite &copy;2022 Crée par Axel Raboit</Footer>
        </Layout>
    )
}

export default ARLayout