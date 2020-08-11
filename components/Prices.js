class Prices extends React.Component {
  state = {
    currency: 'USD',
  };

  render() {
    const currencies = ['USD', 'GBP', 'EUR'];

    return (
      <div>
        {currencies.map(
          (element) =>
            this.state.currency === element && (
              <ul className='list-group'>
                <li className='list-group-item'>
                  Bitcoin rate for{' '}
                  {this.props.coindesk.bpi[element].description}:{' '}
                  <span className='badge badge-primary'>
                    {this.props.coindesk.bpi[element].code}
                  </span>
                  <strong>{this.props.coindesk.bpi[element].rate}</strong>
                </li>
              </ul>
            )
        )}
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className='form-control'
        >
          <option value='USD'>USD</option>
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
