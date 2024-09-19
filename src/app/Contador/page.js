"use client";
import LinkBar from "../Components/LinkBar/linkbar.js";
import { useState } from "react"
import "./contador.css"
import "../globals.css"


export default function Contador() {
  const [Count, SetCount] = useState(0)

  function Add() {
    SetCount(Count + 1)
  }

  function Sub() {
    SetCount(Count - 1)
  }

  function Reset() {
    SetCount(0)
  }

  return (
    <div id="MainBody">
      <LinkBar />

      <div id="PageBody">
        <div id="Background">
          <h1 id="Titulo">Contador</h1>
          <h2 id="Numero">{Count}</h2>

          <div id="Controle">
            <button id="Botao" onClick={Add}>+1</button>
            <button id="Botao" onClick={Sub}>-1</button>
          </div>
        </div>
      </div>

    </div>

  );
}