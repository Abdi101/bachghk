const CardList = (props) => {
  return (
    <div className="card">
      <div className="card-item">

        <h3>{(props.data.title)}:</h3>
        {console.log(props)}
        {props.data.links.data.map(content => (
          <a key={content.id} data={content.data} href={content.attributes.linkURL} target="_blank">{content.attributes.linkText}</a>
        ))}
      </div>
    </div>
  );
};

export default CardList;
