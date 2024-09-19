"use client";
import LinkBar from "../Components/LinkBar/linkbar.js";
import { useState } from "react"
import "./listatarefas.css"
import "../globals.css"


export default function ListaTarefas() {
  const [Editar, SetEditar] = useState([-1])
  const [Tarefas, SetTarefas] = useState([])
  const [Elements, SetElements] = useState([])
  const [InputValue, SetInputValue] = useState("")

  function add(event) {
    event.preventDefault()
    Tarefas.push(InputValue)
    SetTarefas(Tarefas)

    SetInputValue("")
    render()
  }

  function remover(Index) {
    Tarefas.splice(Index, 1)
    SetTarefas(Tarefas)
    render()
  }

  function moverTarefa(Index, Dir) {
    const PoseNova = Tarefas[Index + Dir]
    const CurPos = Tarefas[Index]
    if (PoseNova == undefined) return

    console.log(PoseNova)
    console.log(CurPos)

    Tarefas[Index + Dir] = CurPos
    Tarefas[Index] = PoseNova

    SetTarefas(Tarefas)
    render()
}

  function render() {
    console.log(Tarefas)
    SetElements(Tarefas.map((Tarefa, Index) => {
      return (
        <li id="Tarefa" key={Index}>
          {Tarefa}

          <div>
            <button id="TarefaBotao" onClick={() => {remover(Index)}}>Remover</button>
            <button id="TarefaBotao" onClick={() => {moverTarefa(Index, -1)}}>Subir</button>
            <button id="TarefaBotao" onClick={() => {moverTarefa(Index, 1)}}>Descer</button>
          </div>
        </li>)
    }))
  }

  function getInput(event) {
    SetInputValue(event.target.value)
  }

  return (
    <div id="MainBody">
      <LinkBar />

      <div id="PageBody">
        <div id="Background">
          <h1 id="Titulo">Lista de Tarefas</h1>

          <form id="Controle" onSubmit={add} autoComplete="off">
            <input id="Input" onChange={getInput} value={InputValue} />
            <button type="submit" id="Botao">Adicionar</button>
          </form>

          <ul id="Lista">
            {Elements}
          </ul>
        </div>
      </div>

    </div>

  );
}