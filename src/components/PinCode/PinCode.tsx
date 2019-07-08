import * as React from 'react';
import './PinCode.sass'
import PinInput from 'react-pin-input';
import { checkIn } from "../../actions/index";
import { connect} from "react-redux";
import Clock from 'react-live-clock';


const mapStateToProps = (state: any) => {
  return {
    todos: state.todos
  };
};

class PinCode extends React.Component<any, any>  {
  public constructor(props: any) {
    super(props);
    this.state = {
      pinInput: '',
      pinElement: null
    }
    this.onRef = this.onRef.bind(this);
    this.onPinCompleted = this.onPinCompleted.bind(this);
  }

  public onPinCompleted(value: string, index: number): void {
    this.props.dispatch(checkIn(Number(value)));
    this.state.pinElement.clear();
  }

  public onRef(element: any) {
    if (!this.state.pinElement) {
      this.setState({
        pinElement: element
      });
    }
  }

  public render(): any {
    return (
      <div className="pinCode">
        <div></div>
        <div>
          <div>
            <h1 className="clock">
              <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
            </h1>
          <div>
          </div>
            <div>
              <PinInput
                length={4}
                initialValue=""
                type="numeric"
                style={{padding: '10px'}}
                ref={this.onRef}
                onComplete={this.onPinCompleted}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PinCode);
