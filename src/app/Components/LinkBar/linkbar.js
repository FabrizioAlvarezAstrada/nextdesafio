import "./style.css"

export default function LinkBar() {
    return (
        <div id="NavBackground">
            <a className="BotaoNav" id="Home" href="/">Home</a>
            <a className="BotaoNav" id="Contador" href="/Contador">Contador</a>
            <a className="BotaoNav" id="Todo" href="/ListaTarefas">Todo List</a>
        </div>
    );
}