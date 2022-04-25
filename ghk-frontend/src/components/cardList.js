const CardList = (props) => {
  return (
    <div className="card">
      <div className="card-item">

        <h3>{(props.data.overskrift)}:</h3>
        
        {props.data.links.data.map(content => (
          <a key={content.id} data={content.data} href={content.attributes.LinkURL} target="_blank">{content.attributes.linkText}</a>
        ))}
      </div>
    </div>
  );
};

export default CardList;
