import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import CartWidget from '../cartWidget/cartWidget'

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" >
                Remeras
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" >
                Pantalones
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank">
                Accesorios
            </a>
        ),
    },
];

const Navbar = () => {

    return (
        <div>
            <Space direction="vertical">
                <Space wrap>
                    <Button>Home</Button>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                    >
                        <Button>Categorias</Button>
                    </Dropdown>
                    <Button>Carrito</Button>
                    <CartWidget />
                </Space>
            </Space>


        </div>
    )

    
}

export default Navbar