const CardList = (props) => {
  return (
    <div className="card">
      <div className="card-item">

        <h2>{(props.data.title)}:</h2>
        {props.data.links.data.map(content => (
          <a key={content.id} data={content.data} href={content.attributes.linkURL} target="_blank">{content.attributes.linkText}</a>
        ))}
      </div>
    </div>
  );
};

export default CardList;
