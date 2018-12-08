import React, { PureComponent } from 'react';

import {
  Form,
  Button,
} from 'antd';

import TableForm from './TableForm';
import styles from './style.less';

const tableData = [
  {
    key: '1',
    workId: '00001',
    name: 'John Brown',
    department: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workId: '00002',
    name: 'Jim Green',
    department: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    workId: '00003',
    name: 'Joe Black',
    department: 'Sidney No. 1 Lake Park',
  },
];

@Form.create()
class AdvancedForm extends PureComponent {

  validate = () => {
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        console.log(values);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form layout="vertical" hideRequiredMark>
        {getFieldDecorator('members', {
          initialValue: tableData,
        })(<TableForm />)}
        <Button className={styles.btn} type="primary" onClick={this.validate}>
          提交
        </Button>
      </Form>
    );
  }
}

export default AdvancedForm;
