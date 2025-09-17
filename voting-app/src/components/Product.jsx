export default function Product(props) {
    let { id, title, description, url, votes, productImageUrl, submitterAvatarUrl, handleVote} = props;

    const handleUpVote = () => {
      handleVote(id)
    }
  
    return (
    <section className="item">
      <article className="image">
        <img src={productImageUrl} />
      </article>

      <article className="middle aligned content">

        <div className="header">
          <a onClick={handleUpVote}><i className="large caret up icon"></i></a>
          {votes}
          <a onClick={handleUpVote}><i className="large caret down icon"></i></a>
        </div>

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
