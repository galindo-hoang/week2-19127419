import React from "react";
import Meme from "./meme";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Pagination } from "antd";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.getImages();
    this.containerImage = React.createRef();
  }
  getImages = async () => {
    this.setState({ images: [] });
    const response = await Meme.get("/get_memes");
    this.setState({ images: response.data.data.memes });
  };

  render() {
    return (
      <div>
        <div
          className="d-grid gap-2"
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={this.getImages} variant="primary" size="lg">
            Block level button
          </Button>
        </div>
        <div
          ref={this.containerImage}
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: "30px 160px 0px",
          }}
        >
          {this.state.images.map((image) => (
            <Card
              style={{
                width: "240px",
                height: "300px",
                display: "inline-flex",
                margin: "20px 10px 0px",
              }}
            >
              <Card.Img
                variant="top"
                src={image.url}
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{image.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
