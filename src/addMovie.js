import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id : '',
      title:'',
      image:'',
      year:'',
      rating: 0
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Button className='Add' color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal"
        >
          <ModalHeader >veuillez ajouter les données du film</ModalHeader>
          <ModalBody className="Modal-Structure">
            <input
              type="text"
              name="image"
              placeholder="image"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="year"
              placeholder="year"
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="rating"
              placeholder="rating"
              max= {5}
              min= {0}
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                if(this.state.title.length !== 0 
                  && this.state.rating>0 
                  && this.state.image 
                  && this.state.year.length>3
                ){
                  this.props.addMovie({
                    id: this.state.title,  
                    title: this.state.title,
                    rating: this.state.rating,  
                    image: this.state.image,
                    year: this.state.year
                  });
                  this.toggle();
                }
                else {
                  alert('Merci de remplir tous les champs')
                }
                
              }}
            >
              ADD
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
