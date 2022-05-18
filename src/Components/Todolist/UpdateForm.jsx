import {useEffect, useRef} from "react";

export default function UpdateForm(props) {
    const inputEl = useRef(null);
    useEffect(() => {
        return () => {
            if(inputEl.current) inputEl.current.focus();
        };
    }, [inputEl]);

    return (
        <article id={"a" + props.index} className="mb-3">
            <form onSubmit={(event) => props.handleUpdated(event) } className="is-flex">
                <input type="hidden" value={props.index} />
                <input type="text" placeholder={props.todo[0]} className="input is-primary mr-3" ref={inputEl} />
                <input type="hidden" value="true"/>
                <input type="submit" value="Envoyer" className="button is-primary"/>
            </form>
        </article>
    );
}