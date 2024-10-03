"use client";
import LinkBar from "../Components/LinkBar/linkbar.js";
import { useState } from "react"
import "./listatarefas.css"
import "../globals.css"


export default function ListaTarefas() {
  const [Tarefas, SetTarefas] = useState(["Fazer o CSS.", "Aprender CRUD.", "Passar de Ano.", "Não reprovar de Ano."])
  const [EditValue, SetEditValue] = useState("")
  const [InputValue, SetInputValue] = useState("")
  const [Editando, SetEditando] = useState(-1)
  // Consts
  
  const [Render, SetRender] = useState(false) //Força o react a atualizar

  //Salvar tarefa
  function add(event) {
    event.preventDefault()
    if (InputValue.trim() === "") { return }
    Tarefas.push(InputValue)

    SetInputValue("")
    SetEditando(-1)
    SetTarefas(Tarefas)
    SetRender(!Render)
  }

  //Remover tarefa
  function remover(Index) {
    Tarefas.splice(Index, 1)

    SetEditando(-1)
    SetTarefas(Tarefas)
    SetRender(!Render)
  }

  //Mover tarefa
  function moverTarefa(Index, Dir) {
    const PoseNova = Tarefas[Index + Dir]
    const CurPos = Tarefas[Index]
    if (PoseNova == undefined) return

    Tarefas[Index + Dir] = CurPos
    Tarefas[Index] = PoseNova

    SetEditando(-1)
    SetTarefas(Tarefas)
    SetRender(!Render)
  }

  //Editar tarefa
  function editar(Index) {
    SetEditValue(Tarefas[Index])
    SetEditando(Index)
    SetRender(!Render)
  }

  function salvarEdit() {
    if (EditValue.trim() === "") { return }
    Tarefas[Editando] = EditValue

    SetEditando(-1)
    SetTarefas(Tarefas)
    SetRender(!Render)
  }

  //Inputs de texto
  function getTaskInput(event) {
    SetInputValue(event.target.value)
  }

  function getEditInput(event) {
    SetEditValue(event.target.value)
  }

  //HTML Return
  return (
    <div id="MainBody">
      <LinkBar />

      <div id="PageBody">
        <div id="Background">
          <h1 id="Titulo">Lista de Tarefas</h1>

          <form id="Controle" onSubmit={add} autoComplete="off">
            <input id="Input" onChange={getTaskInput} value={InputValue} />
            <button type="submit" id="Botao">Adicionar</button>
          </form>

          <ul id="Lista">
            {
              //
              Tarefas.map((Tarefa, Index) => {
                if (Index == Editando) {
                  return (
                    <li id="Editando" key={Index}>
                      <div id="EditandoMenu">
                        <input id="Input" onChange={getEditInput} value={EditValue} autoComplete="off" />
                        <button id="TarefaBotao" onClick={salvarEdit}>Salvar</button>
                      </div>
                    </li>)
                }
                //
                return (
                  <li id="Tarefa" key={Index}>
                    {Tarefa}

                    <div id="TarefaMenu">
                      <button id="TarefaBotao" onClick={() => remover(Index)}>Remover</button>
                      <button id="TarefaBotao" onClick={() => moverTarefa(Index, -1)}>Subir</button>
                      <button id="TarefaBotao" onClick={() => moverTarefa(Index, 1)}>Descer</button>
                      <button id="TarefaBotao" onClick={() => editar(Index)}>Editar</button>
                    </div>
                  </li>)
              })
              //
            }
          </ul>
        </div>
      </div>
    </div>
  );
}