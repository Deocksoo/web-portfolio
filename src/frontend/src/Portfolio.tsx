import React from 'react';
import './App.css';
import expensive from './expensive.png'
import flower from './flower.png'
import {Col, Image, Layout, Row, Tabs} from "antd";
import Contact from "./Contact";
import Theater from "./Theater";

const {Header, Content, Sider} = Layout;
// const {Title} = Typography;

const {TabPane} = Tabs;

const Portfolio: React.FC = () => {
    return (
        <Layout>
            <Sider style={{background: "white"}}></Sider>
            <Layout>
                <Header style={{background: "white", paddingTop: 40, height: 100}}>
                    <h2 className="text-2xl tracking-tight text-gray-900 sm:text-3xl">
                        Jooyoung Cho
                    </h2>
                </Header>
                <Content style={{background: "white"}}>
                    <Tabs
                        centered
                        size="large"
                        tabBarGutter={23}
                    >
                        <TabPane tab="About" key="1">
                            about
                        </TabPane>
                        <TabPane tab="Theater" key="2">
                            <Theater/>
                        </TabPane>
                        <TabPane tab="Publications" key="3">
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Image height={250} width={250} src={expensive}/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Creations" key="4">
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Image height={250} width={250} src={flower}/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Contact" key="5">
                            <Contact/>
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
            <Sider style={{background: "white"}}></Sider>
        </Layout>
    )
}

export default Portfolio;