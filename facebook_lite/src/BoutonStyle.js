import React from 'react'
import "./BoutonStyle.css"


class BoutonStyle extends React.Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
*/

  render() {
    return (
      <div>

        <button className="BoutonChangeStyle" onClick={() => alert('Vous allez changer la couleur du background du Profil')}>
            Changer Style ! {this.props.value}
        </button>

      </div>
    )
  }
}
export default BoutonStyle

