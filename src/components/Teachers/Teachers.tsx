import * as React from 'react';
import ReactTable from 'react-table';
import { connect} from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};


class Teachers extends React.Component<any, any>  {
  public constructor(props:any) {
    super(props);
    this.state = {
      ...this.state,
    };
  }
  public render() {
    const data = [{}];
    const columns = [{
      Header: 'Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Session start date',
      accessor: 'last_name'
    },
    {
      Header: 'Session end date',
      accessor: 'last_name'
    }
    ]

    return <ReactTable
      data={data}
      columns={columns}
      />
  }
}

export default connect(mapStateToProps)(Teachers);
