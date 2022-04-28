import {React} from 'react';
  const edjsHTML = require("editorjs-html");
  const edjsParser = edjsHTML();


  function convertDataToHtml(blocks) {
      var convertedHtml = "";
      blocks.map(block => {
        
        switch (block.type) {
          case "header":
            convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
            break;
          case "embded":
            convertedHtml += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
            break;
          case "paragraph":
            convertedHtml += `<p>${block.data.text}</p>`;
            break;
          case "delimiter":
            convertedHtml += "<hr />";
            break;
          case "image":
            convertedHtml += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
            break;
          case "list":
            convertedHtml += "<ul>";
            block.data.items.forEach(function(li) {
              convertedHtml += `<li>${li}</li>`;
            });
            convertedHtml += "</ul>";
            break;
          default:
            console.log("Unknown block type", block.type);
            break;
        }
      });
      return convertedHtml;
    }


function testInputAndReturn(props){
  let dataJSON;
  if(props.data != undefined){
    dataJSON = JSON.parse(props.data);
    return convertDataToHtml(dataJSON.blocks);
  }
  else{ return "";}

}

function EditorJSParser (props)  {


    return (
      <>
      <div dangerouslySetInnerHTML={{__html: testInputAndReturn(props)}} className="content"></div>
      </>
    );
  }

export default EditorJSParser;