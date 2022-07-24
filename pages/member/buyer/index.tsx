import {
  Button,
  Col,
  Row,
  Space,
  Table,
  Tag,
  Input,
  Tooltip,
  Typography,
  DatePicker,
  Form,
} from 'antd';
import {
  InfoCircleOutlined,
  FormOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import type { NextPage } from 'next';
import { MainLayout } from '../../../components/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

const { Title, Text } = Typography;
const { Search } = Input;

interface DataType {
  key: number;
  id: string;
  name: string;
  email: string;
  country: string;
  joinDate: string;
  verifyBy: string;
}

const BuyerPage: NextPage = () => {
  const router = useRouter();
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} records`,
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'No',
      key: 'no',
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => {
        return (
          <Tooltip title={id}>
            <Text>{id}</Text>
          </Tooltip>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Verify By',
      dataIndex: 'verifyBy',
      key: 'verifyBy',
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
              onClick={() => router.push('/appointment')}
            />
            <Button shape="circle" type="primary" icon={<FormOutlined />} />
            <Button
              shape="circle"
              type="primary"
              icon={<CalendarOutlined />}
              onClick={() => router.push('/appointment')}
            />
          </Space>
        );
      },
    },
  ];

  const data = [
    {
      key: 1,
      id: '9282147f-3231-4c01-9370-129f9fdcd09f',
      name: 'Voomm',
      email: 'qheliet0@ovh.net',
      country: 'Afghanistan',
      joinDate: '26/05/2022',
      verifyBy: 'Quintina',
    },
    {
      key: 2,
      id: '09d52a03-be5d-4d6c-95a0-941e78927730',
      name: 'Camimbo',
      email: 'mgeill1@pbs.org',
      country: 'Afghanistan',
      joinDate: '23/02/2022',
      verifyBy: 'Maddie',
    },
    {
      key: 3,
      id: 'e732b983-64f7-4c1d-a8f2-b64caf5d6fac',
      name: 'Bubbletube',
      email: 'vsalandino2@wikia.com',
      country: 'Afghanistan',
      joinDate: '13/05/2022',
      verifyBy: 'Valentia',
    },
    {
      key: 4,
      id: 'b89debff-cd81-4870-96b5-d6e6b722af8e',
      name: 'Dabvine',
      email: 'btumasian3@vkontakte.ru',
      country: 'Afghanistan',
      joinDate: '07/02/2022',
      verifyBy: 'Boycey',
    },
    {
      key: 5,
      id: 'bb997920-fc65-4ee0-98b4-e18ed4d6b397',
      name: 'Kwimbee',
      email: 'jarderne4@fastcompany.com',
      country: 'Afghanistan',
      joinDate: '03/02/2022',
      verifyBy: 'Jackquelin',
    },
    {
      key: 6,
      id: '37e43182-8040-4f78-a5ab-ba0b16e53160',
      name: 'Tazz',
      email: 'rmatteucci5@delicious.com',
      country: 'Afghanistan',
      joinDate: '11/11/2021',
      verifyBy: 'Ricardo',
    },
    {
      key: 7,
      id: 'ca29416e-fba5-4d47-abc9-5f4be6991bb9',
      name: 'Avaveo',
      email: 'hplaide6@gravatar.com',
      country: 'Afghanistan',
      joinDate: '23/04/2022',
      verifyBy: 'Homerus',
    },
    {
      key: 8,
      id: '32a9941f-76e8-4367-b7cd-65d7fccfc79e',
      name: 'Riffpedia',
      email: 'lrenshell7@sbwire.com',
      country: 'Afghanistan',
      joinDate: '03/04/2022',
      verifyBy: 'Lorianne',
    },
    {
      key: 9,
      id: '4920b337-53d1-4e48-a42d-fcc8aec21603',
      name: 'Gabspot',
      email: 'gmongan8@tinypic.com',
      country: 'Afghanistan',
      joinDate: '23/05/2022',
      verifyBy: 'Gabbey',
    },
    {
      key: 10,
      id: 'f74cafc8-8809-4126-bee1-c30abd40c830',
      name: 'Bubblemix',
      email: 'mbawcock9@spotify.com',
      country: 'Afghanistan',
      joinDate: '13/08/2021',
      verifyBy: 'Melonie',
    },
  ];

  return (
    <MainLayout>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="">
            <Search
              placeholder="input search text"
              onSearch={() => {}}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item label="Join Date">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Table columns={columns} dataSource={data} pagination={pagination} />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default BuyerPage;
