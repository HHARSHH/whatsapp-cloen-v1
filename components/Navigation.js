'use client';

import React from 'react';
import { HomeOutlined, InfoCircleOutlined, ContactsOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Menu from 'antd/es/menu'; // Importing Menu directly from the path

const Navigation = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>
        <Link href="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="contact" icon={<ContactsOutlined />}>
        <Link href="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
