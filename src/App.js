import React from "react";
import Meme from "./meme";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.getImages();
    this.containerImage = React.createRef();
  }
  getImages = async () => {
    this.setState({images: []})
    const response = await Meme.get("/get_memes");
    this.setState({ images: response.data.data.memes });
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={this.getImages}>Load</button>
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
            <div
              style={{
                width: "200px",
                display: "inline-flex",
                flexDirection: "column",
                margin: "20px 10px 0px",
              }}
            >
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid black",
                }}
                alt={image.name}
                key={image.id}
                src={image.url}
              />
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {image.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
