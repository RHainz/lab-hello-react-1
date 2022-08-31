import style from "./style.module.css";

export function Body () {
    return (
        <div className={style.container}>   
            <h1>Say hello to React JS</h1>
            <p>You will learn how to use the most popular front-end library, and become a super Ninja developer</p>
            <button type="button">Awesome !</button>
        </div>
    )
}