export default function Todo(props) {
    return (
        <article id={"a" + props.id} className="columns">
            <p className="mx-3 column is-three-fifths">{props.todo[0]} - 
                {props.todo[2]}</p>
            <div className="column is-flex is-two-fifths is-justify-content-center">
                <form onSubmit={(event) => props.handleUpdate(event)}>
                    <input type="hidden" value={props.id} />
                    <input type="hidden" value={props.todo[2]} />
                    <input type="submit" value="Modifier" className="button is-info" />
                </form>
                <form onSubmit={(event) => props.handleThrough(event)}>
                    <input type="hidden" value={props.id} />
                    <input type="hidden" value={props.id} />
                    <input type="submit" value="Barrer" className="button is-warning mx-3" />
                </form>
                <form onSubmit={(event) => props.handleDelete(event)}>
                    <input type="hidden" value={props.id} />
                    <input type="hidden" value={props.id} />
                    <input type="submit" value="Supprimer" className="button is-danger" />
                </form>
            </div>
        </article>
    );
}