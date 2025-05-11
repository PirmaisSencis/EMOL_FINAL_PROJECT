import { LayoutPageProps } from "../types/types"
function LayoutPage(props:LayoutPageProps) {
    return(
        <>
         <div className="wrapper">
         <header className="header">
            <ul>
                <li><a href="/">Головна</a></li>
                <li><a href="/login">Сторінка авторизації</a></li>
                <li><a href="/register">Сторінка реєстрації</a></li>
            </ul>
        </header>
        <main className="content">
            <h1>{props.title}</h1>
            {props.children}
        </main>
        <footer className="footer">
            Футер завжди внизу!
        </footer>
    </div>
   

        </>
    )
}
export default LayoutPage