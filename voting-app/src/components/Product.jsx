export default function Product(props) {

    let {id, title, description, url, votes, productImageUrl, submitterAvatarUrl} = props;
  
    return (
    <section className="item">
      <article className="image">
        <img src={productImageUrl} />
      </article>

      <article className="middle aligned content">
        <header className="description">
          <a href={url}> {title} </a>
          <p> {description}</p>
        </header>

        <aside className="extra">
          <span>Submitted by: </span>
          <img className="ui avatar image" src={submitterAvatarUrl} />
        </aside>
      </article>
    </section>
  );
  
}
