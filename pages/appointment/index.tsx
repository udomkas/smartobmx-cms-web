import { useRef, useState } from 'react';
import type { NextPage } from 'next';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

import { MainLayout } from '../../components/layout';
import {
  Button,
  Col,
  Form,
  Modal,
  Row,
  Select,
  Typography,
  DatePicker,
  TimePicker,
  TreeSelect,
  Input,
  Mentions,
  InputNumber,
  Divider,
  Checkbox,
  Space,
  Table,
  Tag,
  Badge,
} from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  FormOutlined,
  VideoCameraOutlined,
  VideoCameraFilled,
  CopyOutlined,
} from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { ColumnsType } from 'antd/es/table';
import { countryList } from '../../data/country';
import { buyerList } from '../../data/buyer';
import { companyCategoryList } from '../../data/company-category';
import { productCategoryList } from '../../data/product-category';
import moment from 'moment';

const { Option } = Select;
const { Title } = Typography;
const { Search } = Input;
const { Text } = Typography;

interface DataType {
  key: string;
  name: string;
  appointmentDate: Date;
  status: string;
}

const statusList = [
  {
    id: 1,
    label: 'Success Meeting',
    type: 'success',
  },
  {
    id: 2,
    label: 'Already',
    type: 'already',
  },
  {
    id: 3,
    label: 'Pending',
    type: 'pending',
  },
  {
    id: 4,
    label: 'Fail Meeting',
    type: 'fail',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Thai Silk Enterprise Co., Ltd. & Company 1',
    appointmentDate: new Date(),
    status: 'success',
  },
  {
    key: '2',
    name: 'Thai Chili Paste Jew Seng Heng Limited Partnership',
    appointmentDate: new Date(),
    status: 'pending',
  },
  {
    key: '3',
    name: 'Nestle Co.,Ltd.',
    appointmentDate: new Date(),
    status: 'fail',
  },
];

const dataEvents = [
  { id: '12345', title: 'event 1', date: '2022-07-01' },
  { id: '67890', title: 'event 2', date: '2022-07-02' },
];

const AppointmentPage: NextPage = () => {
  const calendarRef: any = useRef();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAppointVisible, setIsModalAppointVisible] = useState(false);
  const [selectInfoData, setSelectInfoData] = useState({} as any);
  const [startDate, setStartDate] = useState(moment());

  const handleDateSelect = (selectInfo: any) => {
    const calendar = selectInfo.view.calendar;
    // setCalendarApi(calendar);
    setSelectInfoData(selectInfo);
    setStartDate(moment(selectInfo.date));
    form.setFieldsValue({
      startDate: moment(selectInfo.date),
      startTime: moment(selectInfo.date),
    });
    setIsModalVisible(true);
    // let title = prompt('Please enter a new title for your event');
    // let calendarApi = selectInfo.view.calendar;
    // console.log(selectInfo);
    // calendarApi.unselect(); // clear date selection
    // console.log('calendarApi', calendarApi);
    // if (title) {
    //   calendarApi.addEvent({
    //     id: new Date().getTime(),
    //     title,
    //     date: selectInfo.dateStr,
    //     allDay: false,
    // start: selectInfo.startStr,
    // end: selectInfo.endStr,
    // allDay: selectInfo.allDay,
    // });
    // }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'No',
      key: 'no',
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: 'Appointment Time',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
      render: (appointmentDate) => {
        console.log(appointmentDate);
        const startDate: any = moment(appointmentDate);
        const endDate: any = moment(appointmentDate).add(30, 'minute');
        return (
          <>
            {startDate.format('h:mm')} - {endDate.format('h:mm A')}
          </>
        );
      },
    },
    {
      title: 'Company',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        if (text == 'success') {
          return (
            <Tag icon={<CheckCircleOutlined />} color="success">
              {text}
            </Tag>
          );
        }

        if (text === 'pending') {
          return (
            <Tag icon={<ClockCircleOutlined />} color="warning">
              {text}
            </Tag>
          );
        }

        if (text === 'fail') {
          return (
            <Tag icon={<CloseCircleOutlined />} color="error">
              {text}
            </Tag>
          );
        }

        return <a>{text}</a>;
      },
    },
    {
      title: 'Action',
      key: 'companyName',
      render: (text) => {
        return (
          <Space>
            <Button
              shape="circle"
              icon={<InfoCircleOutlined />}
              onClick={handleViewAppointment}
            />
            <Button shape="circle" type="primary" icon={<FormOutlined />} />
            <Button
              shape="circle"
              type="primary"
              icon={<DeleteOutlined />}
              danger
            />
          </Space>
        );
      },
    },
  ];

  const handleViewAppointment = () => {
    setIsModalAppointVisible(true);
  };

  const handleAppointCancel = () => {
    setIsModalAppointVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);

    let startDate = values.startDate;
    let hr = values.startTime.hour();
    let min = values.startTime.minute();
    startDate.hour(hr);
    startDate.minute(min);
    startDate.seconds(0);
    startDate.milliseconds(0);

    const endDate = values.startDate.add(30, 'min');
    const buyer = buyerList.find((buyer) => buyer.id === values.buyerId);
    const seller = buyerList.find((seller) => seller.id === values.sellerId);

    calendarRef.current.getApi().addEvent({
      id: new Date().getTime(),
      title: `${buyer?.name} - ${seller?.name}`,
      start: startDate.format(),
      end: endDate,
      allDay: false,
    });
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChangeCheckTranslator = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <MainLayout>
      <Row className="mb-1">
        <Col span={14}>
          <h1>Appointment calendar</h1>
        </Col>
        <Col span={10} className="align-right">
          <Button type="primary" className="btn-dark" onClick={showModal}>
            Create New
          </Button>
        </Col>
      </Row>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        editable={true}
        selectable={true}
        droppable={true}
        selectMirror={true}
        allDayText={'A All Day'}
        initialView="dayGridMonth"
        dateClick={handleDateSelect}
        headerToolbar={{ center: 'dayGridMonth,timeGridWeek' }}
        events={dataEvents}
      />

      <Divider />

      <Title level={4}>Appointment List</Title>
      <Row className="mb-1">
        <Col span={18}>
          <Search
            placeholder="input search text"
            onSearch={() => {}}
            style={{ width: '30%' }}
          />
        </Col>
        <Col span={6}>
          <Form.Item name="productCategoryId" label="Filter">
            <Select
              placeholder="Select"
              optionFilterProp="children"
              filterOption={(input, option) => {
                let list = (
                  option!.children as unknown as string
                ).toLowerCase();
                return list.includes(input?.toLowerCase());
              }}
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
            >
              {statusList.map((item: any) => {
                return (
                  <Option key={`statusList-${item.id}`} value={item.id}>
                    {item.label}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>

      <Modal
        centered
        title="Appointment"
        visible={isModalVisible}
        afterClose={() => {
          form.resetFields();
        }}
        footer={null}
        width={'70%'}
        onCancel={() => handleCancel()}
      >
        <Form
          name="basic"
          layout="vertical"
          form={form}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{
            startDate: moment(startDate),
            startTime: moment(startDate),
            isNeedTranslator: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title level={4}>Choose Buyer</Title>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Country">
                <Select
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => {
                    let list = (
                      option!.children as unknown as string
                    ).toLowerCase();
                    return list.includes(input?.toLowerCase());
                  }}
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                >
                  {countryList.map((country: any) => {
                    return (
                      <Option
                        key={`country-${country.code}`}
                        value={country.code}
                      >
                        {country.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="buyerId" label="Buyer">
                <Select
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => {
                    let list = (
                      option!.children as unknown as string
                    ).toLowerCase();
                    return list.includes(input?.toLowerCase());
                  }}
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                >
                  {buyerList.map((item: any) => {
                    return (
                      <Option key={`buyer-${item.id}`} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Divider />

          <Title level={4}>Choose Seller</Title>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="companyCategoryId" label="Company Category">
                <Select
                  showSearch
                  placeholder="Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => {
                    let list = (
                      option!.children as unknown as string
                    ).toLowerCase();
                    return list.includes(input?.toLowerCase());
                  }}
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                >
                  {companyCategoryList.map((item: any) => {
                    return (
                      <Option
                        key={`companyCategoryList-${item.id}`}
                        value={item.id}
                      >
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item name="productCategoryId" label="Product Category">
                <Select
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => {
                    let list = (
                      option!.children as unknown as string
                    ).toLowerCase();
                    return list.includes(input?.toLowerCase());
                  }}
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                >
                  {productCategoryList.map((item: any) => {
                    return (
                      <Option
                        key={`productCategoryList-${item.id}`}
                        value={item.id}
                      >
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="sellerId" label="Seller">
                <Select
                  showSearch
                  placeholder="Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => {
                    let list = (
                      option!.children as unknown as string
                    ).toLowerCase();
                    return list.includes(input?.toLowerCase());
                  }}
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                >
                  {buyerList.map((item: any) => {
                    return (
                      <Option key={`buyerList-${item.id}`} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Divider />

          <Title level={4}>Choose Date/Time</Title>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="startDate" label="Date">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="startTime" label="Time">
                <TimePicker
                  style={{ width: '100%' }}
                  format={'HH:mm'}
                  minuteStep={30}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider />

          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name="isNeedTranslator"
                label="Would you like english translator for this meeting?"
              >
                <Checkbox onChange={onChangeCheckTranslator}>Yes</Checkbox>
              </Form.Item>
            </Col>
            <Divider />
            <Col span={24} className="align-center">
              <Space size={'large'}>
                <Button onClick={() => form.resetFields()}>Clear</Button>
                <Button type="primary" className="btn-dark" htmlType="submit">
                  Appointment
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Modal
        centered
        title="Appointment Detail"
        visible={isModalAppointVisible}
        afterClose={() => {
          form.resetFields();
        }}
        footer={null}
        onCancel={() => handleAppointCancel()}
        style={{ minWidth: '600px' }}
      >
        <Row>
          <Col span={24}>
            <Row className="mt-1" align="middle">
              <Col span={3} className="align-center">
                <Badge status="success" className="badge-large" />
              </Col>
              <Col span={18}>
                <Title level={4}>
                  {' '}
                  Thai Silk Enterprise Co., Ltd. & Company 1
                </Title>
                <Text type="secondary">
                  Wednesday July 20 - 03.00 - 03.30 PM
                </Text>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row className="mt-1" align="middle">
              <Col span={3} className="align-center">
                <VideoCameraFilled style={{ fontSize: '2rem' }} />
              </Col>
              <Col span={18}>
                <Button
                  type="primary"
                  className="btn-dark"
                  size="large"
                  style={{ width: '250px' }}
                >
                  Join Zoom meeting
                </Button>
                <Button
                  type="link"
                  shape="circle"
                  icon={<CopyOutlined />}
                  size="large"
                />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24} className="align-center">
                <Button size="large" style={{ width: '350px' }}>
                  Cancel appointment
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </MainLayout>
  );
};

export default AppointmentPage;
