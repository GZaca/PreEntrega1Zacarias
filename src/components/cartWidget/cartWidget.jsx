import React from 'react';
import { Avatar, Badge, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CartShopping from '../../assets/cartShopping.png'

const CartWidget = () => {


    return ( 
        <>
            <Badge count={33}>
                <Avatar src={<img src={CartShopping} alt="avatar" />} />
            </Badge>
        </>

    )
}

export default CartWidget