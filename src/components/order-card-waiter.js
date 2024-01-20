import React from 'react';
import {
  EyeOutlined,
  UserOutlined,
  ContainerOutlined,
  CarOutlined,
  DollarOutlined,
  PayCircleOutlined,
  BorderlessTableOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import { Avatar, Card, List, Skeleton, Space } from 'antd';
import { IMG_URL } from '../configs/app-global';
import numberToPrice from '../helpers/numberToPrice';
import moment from 'moment';

const { Meta } = Card;

const OrderCardWaiter = ({
  data: item,
  goToShow,
  loading,
}) => {
  const data = [
    {
      title: 'Number of products',
      icon: <ContainerOutlined />,
      data: item?.order_details_count,
    },
    {
      title: 'Deliveryman',
      icon: <CarOutlined />,
      data: `${item.deliveryman?.firstname || '-'} ${
        item.deliveryman?.lastname || '-'
      }`,
    },
    {
      title: 'Amount',
      icon: <DollarOutlined />,
      data: numberToPrice(item.total_price, item.currency?.symbol),
    },
    {
      title: 'Payment type',
      icon: <PayCircleOutlined />,
      data: item.transaction?.payment_system?.tag || '-',
    },
    {
      title: 'Payment status',
      icon: <BorderlessTableOutlined />,
      data: item.transaction?.status || '-',
    },
    {
      title: 'Delivery date',
      icon: <FieldTimeOutlined />,
      data: moment(item?.delivery_date).format('YYYY-MM-DD') || '-',
    },
    {
      title: 'Created at',
      icon: <FieldTimeOutlined />,
      data: moment(item?.created_at).format('YYYY-MM-DD') || '-',
    },
  ];

  return (
    <Card
      actions={[<EyeOutlined key='setting' onClick={() => goToShow(item)} />]}
      className='order-card'
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            <Avatar src={IMG_URL + item.user?.img} icon={<UserOutlined />} />
          }
          description={`#${item.id}`}
          title={`${item.user?.firstname || '-'} ${item.user?.lastname || '-'}`}
        />
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item, key) => (
            <List.Item key={key}>
              <Space>
                {item.icon}
                {`${item.title}:  ${item.data}`}
              </Space>
            </List.Item>
          )}
        />
      </Skeleton>
    </Card>
  );
};

export default OrderCardWaiter;
