import { Button, Card, Col, Form, InputNumber, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { toast } from 'react-toastify';
import { setMenuData } from '../../../redux/slices/menu';
import settingService from '../../../services/settings';
import { fetchSettings as getSettings } from '../../../redux/slices/globalSettings';

const Reservation = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);
  const dispatch = useDispatch();
  const [loadingBtn, setLoadingBtn] = useState(false);

  useEffect(() => {
    return () => {
      const data = form.getFieldsValue(true);
      dispatch(setMenuData({ activeMenu, data }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateSettings(data) {
    setLoadingBtn(true);
    settingService
      .update(data)
      .then(() => {
        toast.success(t('successfully.updated'));
        dispatch(getSettings());
      })
      .finally(() => setLoadingBtn(false));
  }

  const onFinish = (values) => updateSettings(values);

  return (
    <Form
      layout='vertical'
      form={form}
      name='global-settings'
      onFinish={onFinish}
      initialValues={{
        ...activeMenu.data,
      }}
    >
      <Card title={t('Reservation')}>
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              label={t('reservation_time_durations')}
              name='reservation_time_durations'
            >
              <InputNumber addonAfter={t('minut')} className='w-100' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t('reservation_before_time')}
              name='reservation_before_time'
            >
              <InputNumber addonAfter={t('hour')} className='w-100' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t('notification_time_before')}
              name='notification_time_before'
            >
              <InputNumber addonAfter={t('minut')} className='w-100' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t('min_reservation_time')}
              name='min_reservation_time'
            >
              <InputNumber addonAfter={t('hour')} className='w-100' />
            </Form.Item>
          </Col>
        </Row>
        <Button
          type='primary'
          onClick={() => form.submit()}
          loading={loadingBtn}
        >
          {t('save')}
        </Button>
      </Card>
    </Form>
  );
};

export default Reservation;
