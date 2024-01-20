import React, { useContext, useEffect, useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Button, Card, Space, Table, Tabs, Tag } from 'antd';
import { toast } from 'react-toastify';
import CustomModal from 'components/modal';
import { Context } from 'context/context';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMenu, disableRefetch, setMenuData } from 'redux/slices/menu';
import bookingService from 'services/seller/booking';
import { useTranslation } from 'react-i18next';
import DeleteButton from 'components/delete-button';
import FilterColumns from 'components/filter-column';
import SearchInput from 'components/search-input';
import useDidUpdate from 'helpers/useDidUpdate';
import formatSortType from 'helpers/formatSortType';
import { fetchSellerBookingList } from 'redux/slices/booking-list';
import BookingStatusModal from './bookingStatusModal';
import BookingShowModal from './bookingShowModal';
import getFullDateTime from 'helpers/getFullDateTime';

const roles = ['all', 'new', 'accepted', 'canceled', 'deleted_at'];
const { TabPane } = Tabs;

const SellerBookingList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIsModalVisible } = useContext(Context);
  const [id, setId] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [text, setText] = useState(null);
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);
  const [role, setRole] = useState('all');
  const immutable = activeMenu.data?.role || role;
  const data = activeMenu?.data;
  const [bookingDetails, setBookingDetails] = useState(null);
  const { myShop } = useSelector((state) => state.myShop, shallowEqual);
  const { booking, meta, loading } = useSelector(
    (state) => state.bookingList,
    shallowEqual
  );

  const paramsData = {
    sort: data?.sort,
    column: data?.column,
    search: data?.search ? data.search : undefined,
    perPage: data?.perPage,
    page: data?.page,
    status:
      immutable === 'deleted_at'
        ? undefined
        : immutable === 'all'
        ? undefined
        : immutable,
    deleted_at: data?.role === 'deleted_at' ? data?.role : null,
    shop_id: myShop.id,
  };

  const goToAdd = () => {
    dispatch(
      addMenu({
        id: 'reservation/add',
        url: 'booking',
        name: t('add.reservation'),
      })
    );
    navigate('/seller/booking');
  };

  const [columns, setColumns] = useState([
    {
      title: t('id'),
      dataIndex: 'id',
      key: 'id',
      is_show: true,
      sorter: true,
    },
    {
      title: t('client'),
      dataIndex: 'user',
      key: 'user',
      is_show: true,
      render: (_, row) =>
        row.user ? row.user.firstname + ' ' + row.user.lastname : '',
    },
    {
      title: t('date.time'),
      dataIndex: 'start_date',
      key: 'start_date',
      is_show: true,
      render: (date) => getFullDateTime(date),
    },
    {
      title: t('status'),
      is_show: true,
      dataIndex: 'status',
      key: 'status',
      render: (status, row) => (
        <div>
          {status === 'new' ? (
            <Tag color='blue'>{t(status)}</Tag>
          ) : status === 'canceled' ? (
            <Tag color='error'>{t(status)}</Tag>
          ) : (
            <Tag color='cyan'>{t(status)}</Tag>
          )}
          {!row.deleted_at ? (
            <EditOutlined onClick={() => setBookingDetails(row)} />
          ) : (
            ''
          )}
        </div>
      ),
    },
    {
      title: t('number.of.guests'),
      dataIndex: 'count',
      key: 'count',
      is_show: true,
      render: (_, row) => row.table?.chair_count,
    },
    {
      title: t('options'),
      key: 'options',
      dataIndex: 'options',
      is_show: true,
      render: (_, row) => {
        return (
          <Space>
            <Button
              icon={<EyeOutlined />}
              onClick={() => setBookingId(row.id)}
            />
            <DeleteButton
              disabled={row.deleted_at}
              icon={<DeleteOutlined />}
              onClick={() => {
                setId([row.id]);
                setIsModalVisible(true);
                setText(true);
              }}
            />
          </Space>
        );
      },
    },
  ]);

  const bookingDelete = () => {
    setLoadingBtn(true);
    const params = {
      ...Object.assign(
        {},
        ...id.map((item, index) => ({
          [`ids[${index}]`]: item,
        }))
      ),
    };
    bookingService
      .delete(params)
      .then(() => {
        toast.success(t('successfully.deleted'));
        dispatch(fetchSellerBookingList(paramsData));
        setIsModalVisible(false);
        setText(null);
      })
      .finally(() => setLoadingBtn(false));
  };

  function onChangePagination(pagination, filter, sorter) {
    const { pageSize: perPage, current: page } = pagination;
    const { field: column, order } = sorter;
    const sort = formatSortType(order);
    dispatch(
      setMenuData({
        activeMenu,
        data: { ...data, perPage, page, column, sort },
      })
    );
  }

  useDidUpdate(() => {
    dispatch(fetchSellerBookingList(paramsData));
  }, [activeMenu.data]);

  useEffect(() => {
    if (activeMenu.refetch) {
      dispatch(fetchSellerBookingList(paramsData));
      dispatch(disableRefetch(activeMenu));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenu.refetch]);

  const rowSelection = {
    selectedRowKeys: id,
    onChange: (key) => {
      setId(key);
    },
  };

  const allDelete = () => {
    if (id === null || id.length === 0) {
      toast.warning(t('select.the.reservation'));
    } else {
      setIsModalVisible(true);
      setText(false);
    }
  };

  const handleFilter = (items) => {
    const data = activeMenu.data;
    dispatch(
      setMenuData({
        activeMenu,
        data: { ...data, ...items },
      })
    );
  };

  return (
    <>
      <Card className='p-0'>
        <Space wrap>
          <SearchInput
            placeholder={t('search')}
            className='w-25'
            handleChange={(e) => {
              handleFilter({ search: e });
            }}
            defaultValue={activeMenu.data?.search}
            resetSearch={!activeMenu.data?.search}
            style={{ minWidth: 300 }}
          />
          <DeleteButton size='' onClick={allDelete}>
            {t('delete.selected')}
          </DeleteButton>
          <Button
            type='primary'
            icon={<PlusCircleOutlined />}
            onClick={goToAdd}
          >
            {t('add.reservation')}
          </Button>
          <FilterColumns columns={columns} setColumns={setColumns} />
        </Space>
      </Card>

      <Card title={t('reservation.list')}>
        <Tabs
          className='mt-3'
          activeKey={immutable}
          onChange={(key) => {
            handleFilter({ role: key, page: 1 });
            setRole(key);
          }}
          type='card'
        >
          {roles.map((item) => (
            <TabPane tab={t(item)} key={item} />
          ))}
        </Tabs>
        <Table
          scroll={{ x: true }}
          rowSelection={rowSelection}
          columns={columns?.filter((item) => item.is_show)}
          dataSource={booking}
          pagination={{
            pageSize: meta?.per_page,
            page: meta?.current_page,
            total: meta?.total,
          }}
          rowKey={(record) => record.id}
          onChange={onChangePagination}
          loading={loading}
        />
      </Card>
      {bookingDetails && (
        <BookingStatusModal
          orderDetails={bookingDetails}
          handleCancel={() => setBookingDetails(null)}
          paramsData={paramsData}
        />
      )}
      <CustomModal
        click={bookingDelete}
        text={text ? t('delete') : t('all.delete')}
        setText={setId}
        loading={loadingBtn}
      />
      {bookingId && (
        <BookingShowModal
          handleCancel={() => setBookingId(null)}
          id={bookingId}
        />
      )}
    </>
  );
};

export default SellerBookingList;
