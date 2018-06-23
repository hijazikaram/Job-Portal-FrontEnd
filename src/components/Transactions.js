import React, {Component} from 'react';
import axios from 'axios';

class Transactions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactions : []
    }
  }

  componentWillMount() {
    let id = localStorage.getItem('user_id');
    let user_type = localStorage.getItem('user_type');
    if (id && user_type) {
      let self = this;
      axios.get('http://localhost:5000/api/transactions/' + id).then(function(response) {
        if (response.data.success) {
          const transactions = response.data.transactions.sort((a, b) => a.total < b.total);
          self.setState({transactions: transactions});
        }
      }, function(error) {
        console.log(error);
      });
    } else {
      this.state.setState({transactions:[]});
    }
  }

  render() {
    var renderTransaction = function(transaction, index) {
      return (
        <tr>
          <td>{transaction.id}</td>
          <td>{transaction.total}</td>
          <td>{transaction.used}</td>
          <td>{transaction.remaining}</td>
          <td>30 days</td>
          <td><span className="dot-active"></span> Accepted</td>
        </tr>
        );
    }

    return (
        <div className="container">
          <div className="breadcrumb-section">
            <div className="profile job-profile">
              <div className="user-pro-section">
                <div className="profile-details section">
                  <h2>Transactions</h2>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Order Id</th>
                        <th>Total Jobs</th>
                        <th>Used</th>
                        <th>Remaining</th>
                        <th>Job Duration</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.transactions.map(renderTransaction)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>);
  }
}

export default Transactions;
