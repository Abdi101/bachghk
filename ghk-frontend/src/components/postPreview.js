import React from 'react';

class PostPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      default: "Manglende beskrivelse"
    }
  }

  convertDataToHtml(blocks) {
    var convertedHtml = "";
    blocks.map(block => {

      switch (block.type) {
        case "header":
          convertedHtml += `${block.data.text}`;
          break;
        case "embded":
          break;
        case "paragraph":
          convertedHtml += `${block.data.text}`;
          break;
        case "delimiter":
          break;
        case "image":
          break;
        case "list":
          break;
        default:
          break;
      }
    });
    convertedHtml = convertedHtml.replace('&nbsp;', ' ');
    return convertedHtml;
  }


  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {};

  render() {
    const { data } = this.state;
    let redata = "";
    if (data == null) {
      redata = this.state.default;
    } else {
      let onlyText;
      redata = (this.convertDataToHtml(JSON.parse(data).blocks));

    }
    return (
      <>
           {(redata.length >= 85) ? (redata.substr(0, 85)+'...  ') : (redata+"  ") }
          </>
    );
  }
}


export default PostPreview;