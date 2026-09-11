---
title: "Reloj con la hora del servidor"
description: "Descubre cómo crear un Reloj con la hora del servidor usando ASP y JavaScript, sincroniza cada segundo y mejora la experiencia de tus usuarios al instante."
date: 2009-09-07
updatedDate: 2026-09-11
tags: ["date","getelementbyid","window","settimeout","now"]
slug: asp/basicos/reloj-con-la-hora-del-servidor
type: doc
topic: asp
id: 28c158b5-14f8-442a-9ce6-4b8233f5d3b4
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/basico/hora-del-servidor.asp
---

En este ejemplo crearemos un reloj que parte de la hora del servidor. Para obtenerla utilizaremos `ASP` y la función `Now()`, mientras que `JavaScript` se encargará de actualizarla cada segundo en el navegador.


## Obtener la hora del servidor


La función `Now()` devuelve la fecha y la hora actuales del servidor. Para evitar problemas al interpretar fechas con distintos formatos regionales, pasamos por separado el año, el mes, el día, la hora, los minutos y los segundos al constructor `Date` de `JavaScript`.


```html
<%
Dim fechaServidor
fechaServidor = Now()
%>

<script>
const fechaServidor = new Date(
  <%=Year(fechaServidor)%>,
  <%=Month(fechaServidor) - 1%>,
  <%=Day(fechaServidor)%>,
  <%=Hour(fechaServidor)%>,
  <%=Minute(fechaServidor)%>,
  <%=Second(fechaServidor)%>
);
</script>
```


En `JavaScript`, los meses del objeto `Date` se numeran de `0` a `11`; por eso restamos `1` al valor devuelto por `Month()`.


## Obtener los componentes de la hora


A continuación, extraemos las horas, los minutos y los segundos mediante `getHours()`, `getMinutes()` y `getSeconds()`.


```javascript
let hora = fechaServidor.getHours();
let minutos = fechaServidor.getMinutes();
let segundos = fechaServidor.getSeconds();
```


## Actualizar el reloj


La función `mostrarHora()` incrementa el reloj un segundo cada vez que se ejecuta. También controla los cambios de minuto, hora y día.


```javascript
function mostrarHora() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    hora++;
  }

  if (hora === 24) {
    hora = 0;
  }

  document.getElementById("hora").value =
    String(hora).padStart(2, "0") + ":" +
    String(minutos).padStart(2, "0") + ":" +
    String(segundos).padStart(2, "0");

  window.setTimeout(mostrarHora, 1000);
}
```


El método `document.getElementById()` localiza el campo `input`, mientras que `window.setTimeout()` vuelve a ejecutar `mostrarHora()` después de `1000` milisegundos.


## Código completo


```html
<%
Dim fechaServidor
fechaServidor = Now()
%>

<input id="hora" type="text" readonly>

<script>
const fechaServidor = new Date(
  <%=Year(fechaServidor)%>,
  <%=Month(fechaServidor) - 1%>,
  <%=Day(fechaServidor)%>,
  <%=Hour(fechaServidor)%>,
  <%=Minute(fechaServidor)%>,
  <%=Second(fechaServidor)%>
);

let hora = fechaServidor.getHours();
let minutos = fechaServidor.getMinutes();
let segundos = fechaServidor.getSeconds();

function pintarHora() {
  document.getElementById("hora").value =
    String(hora).padStart(2, "0") + ":" +
    String(minutos).padStart(2, "0") + ":" +
    String(segundos).padStart(2, "0");
}

function mostrarHora() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    hora++;
  }

  if (hora === 24) {
    hora = 0;
  }

  pintarHora();
  window.setTimeout(mostrarHora, 1000);
}

pintarHora();
window.setTimeout(mostrarHora, 1000);
</script>
```


Así, el reloj comienza con la hora obtenida mediante `Now()` en el servidor y continúa actualizándose en el cliente con `JavaScript`.

