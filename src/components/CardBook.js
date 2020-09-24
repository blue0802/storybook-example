import React from 'react'
import { Button, Card } from 'antd'

const { Meta } = Card

const CardBook = () => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <img 
                    alt="" 
                    src="https://cdn5.vectorstock.com/i/1000x1000/58/29/book-cover-design-template-with-skyscrapers-vector-15095829.jpg" 
                    style={{ width: 240 }}
                />
            }
            actions={[
                <Button type="primary">View</Button>,
                <Button type="default">Add</Button>
            ]}
        >
            <Meta 
                title="Cover Design"
                description="Book cover design template with skyscrapers"
            />
        </Card>
    )
}

export default CardBook