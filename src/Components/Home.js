import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      videos: [],
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const search = this.state.input;

    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=${API_KEY}&type=video&q=${search}`
      );
      // "maxResults=6" can be updated to 10 in order to meet requirements

      this.setState({
        videos: data.items,
        input: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, videos } = this.state;
    const videoList = videos.map((video) => {
      return (
        <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
          <li className="list-item">
            <img
              src={video.snippet.thumbnails.default.url}
              style={{ height: "100px", width: "150px" }}
              alt={video.snippet.description}
            />
            <h3>{video.snippet.title}</h3>
          </li>
        </Link>
      );
    });

    return (
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={input}
            type="text"
            placeholder="search..."
            className="search"
          />
          <button className="search btn">Search</button>
        </form>
        <section className="vidContainer">
          <ul className="thumbnails">{videoList}</ul>
        </section>
      </div>
    );
  }
}

export default Home;
