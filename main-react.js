'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
elementText = `
  <table class="table">
        <thead class="thead-light">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
            <th scope="col">Pronounciation</th>
            </tr>
        </thead>
        <tbody>
        ${window.dataList.map((item, key) =>
            `<tr>
                <th scope="row">1</th>
                <td>
                    <p class="lead">${item.prop1}</p>
                    <p>${item.value1}</p>
                </td>
            </tr>`
        )}
        </tbody>
    </table>
  `;


  render() {
    if (this.state.liked) {
        return 'You liked this.';
      }

      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        this.elementText
      );
  
      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );

    return (
    ``);
    
    
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
// ReactDOM.render(myelement, domContainer);