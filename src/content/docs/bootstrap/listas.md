---
title: "Listas"
description: "Aprende a crear listas en Bootstrap con ul, ol, list-unstyled, list-inline y list groups para menús, mediante un ejemplo práctico y adaptable."
date: 2026-09-17
updatedDate: 2026-09-17
tags: ["ul","ol","list-unstyled","list-inline"]
slug: bootstrap/listas
type: category
topic: bootstrap
id: 3dea9dfb-adca-80d3-81af-d701544e067b
author: victor_cuervo
---

## ¿Qué son las listas en Bootstrap?


**Las listas en Bootstrap son estructuras** [**HTML** ](https://lineadecodigo.com/html/)**ordenadas, no ordenadas o descriptivas cuya presentación puede modificarse con clases del framework.** [Bootstrap](https://lineaadecodigo.com/html/) conserva la semántica de `ol`, `ul` y `dl`, y añade utilidades para eliminar marcadores, colocar elementos en línea o convertir una colección en un grupo visual de opciones.


Una lista no ordenada utiliza `ul` cuando la secuencia de sus elementos no afecta al significado. Una lista ordenada emplea `ol` cuando el orden representa pasos, una clasificación o una progresión. Las listas de descripción usan `dl`, `dt` y `dd` para asociar cada término con su definición.


Bootstrap no sustituye estos elementos por componentes visuales. La estructura debe elegirse primero según el significado del contenido. Después se aplican clases como `.list-unstyled`, `.list-inline` o `.list-group` para adaptar la apariencia.


En menús de navegación, la lista puede organizar los enlaces, pero el contenedor `nav` es el que comunica la función de navegación. En Bootstrap 5, el componente `.nav` suele ser más apropiado para menús, mientras que `.list-group` se utiliza para colecciones de elementos relacionados, acciones o paneles de selección.


## Características de las listas en Bootstrap

- **Listas sin estilo:** `.list-unstyled` elimina el marcador y el margen izquierdo de la lista inmediata. No elimina automáticamente los estilos de listas anidadas, por lo que debe añadirse también a cada nivel que lo necesite.
- **Listas en línea:** `.list-inline` prepara el contenedor y `.list-inline-item` muestra cada elemento en línea con separación horizontal. Esta combinación es útil para etiquetas, metadatos o enlaces breves.
- **Grupos de elementos:** `.list-group` crea un contenedor visual y `.list-group-item` aplica bordes, espaciado y fondo a cada elemento. El componente funciona con `ul` y `li`, pero también admite otros elementos cuando la semántica del contenido lo requiere.
- **Estados activos y deshabilitados:** `.active` identifica visualmente el elemento actual. En enlaces o botones, `.disabled` modifica la apariencia, pero puede requerir atributos como `aria-disabled="true"` y control adicional para impedir la interacción mediante teclado.
- **Variantes contextuales:** clases como `.list-group-item-primary`, `.list-group-item-success` o `.list-group-item-danger` aplican colores del tema. El color debe acompañarse de texto, iconos accesibles u otra señal que explique el estado.
- **Grupos horizontales:** `.list-group-horizontal` coloca los elementos en una fila. Las variantes responsive, como `.list-group-horizontal-md`, activan esa disposición a partir de un punto de ruptura.
- **Numeración visual:** `.list-group-numbered` añade numeración mediante CSS. Si el orden tiene significado semántico, conviene usar un `ol` como contenedor y no depender solo de la apariencia.
- **Definiciones adaptables:** Bootstrap 5 no incluye una clase específica para transformar `dl`. Su rejilla permite distribuir `dt` y `dd` en columnas sin perder la relación semántica entre término y descripción.

## ¿Por qué aprender listas en Bootstrap?


Las listas aparecen en instrucciones, índices breves, características, resultados, menús y paneles de configuración. Conocer sus variantes permite mantener una estructura semántica correcta y, al mismo tiempo, integrarla con el sistema visual de Bootstrap.


La elección entre una lista básica, `.nav` y `.list-group` evita usar componentes por su apariencia sin considerar su función. Un menú principal necesita navegación y estados de página actual; una lista de resultados necesita agrupar contenido relacionado; una secuencia de pasos necesita conservar un orden explícito.


Las clases reutilizables reducen reglas personalizadas para operaciones habituales, como retirar viñetas o distribuir elementos horizontalmente. También permiten que un grupo cambie de columna a fila en un punto de ruptura concreto sin duplicar el contenido.


Comprender los estados activos y deshabilitados ayuda a construir interfaces accesibles. La apariencia no basta: `aria-current="page"` comunica el enlace actual, mientras que `aria-disabled="true"` informa de un estado deshabilitado. El comportamiento del teclado y la posibilidad real de activar el elemento deben revisarse por separado.


## Ejemplo de listas en Bootstrap


El siguiente documento combina tres usos: un menú semántico con `.nav`, una secuencia numerada con `.list-group` y una lista de definiciones distribuida con la rejilla. Solo requiere la hoja de estilos de Bootstrap.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Plan de publicación</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>
<body>
  <main class="container py-5">
    <nav aria-label="Secciones del proyecto" class="mb-4">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#tareas">Tareas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#terminos">Términos</a>
        </li>
      </ul>
    </nav>

    <section id="tareas" aria-labelledby="titulo-tareas" class="mb-5">
      <h1 id="titulo-tareas" class="h2">Plan de publicación</h1>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-semibold">Revisar el borrador</div>
            Comprobar estructura, enlaces y ejemplos.
          </div>
          <span class="badge text-bg-success rounded-pill">Hecho</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-semibold">Validar metadatos</div>
            Revisar el título y la descripción.
          </div>
          <span class="badge text-bg-warning rounded-pill">Pendiente</span>
        </li>
      </ol>
    </section>

    <section id="terminos" aria-labelledby="titulo-terminos">
      <h2 id="titulo-terminos" class="h3">Términos utilizados</h2>
      <dl class="row">
        <dt class="col-sm-3">Borrador</dt>
        <dd class="col-sm-9">Versión que todavía admite cambios.</dd>

        <dt class="col-sm-3">Metadatos</dt>
        <dd class="col-sm-9">Datos que describen y clasifican el contenido.</dd>
      </dl>
    </section>
  </main>
</body>
</html>
```


El menú utiliza `nav`, `ul` y `li` para conservar una estructura clara. `.nav` y `.nav-pills` controlan la presentación, mientras que `aria-current="page"` identifica el enlace correspondiente a la sección actual.


La secuencia de tareas usa un `ol` porque el orden forma parte del significado. `.list-group` y `.list-group-numbered` crean el grupo numerado; cada `.list-group-item` combina utilidades flex para separar el texto del indicador de estado. Las etiquetas «Hecho» y «Pendiente» hacen que el estado no dependa solo del color.


La lista `dl` relaciona cada `dt` con su `dd`. Las clases de la rejilla muestran términos y definiciones en columnas desde pantallas pequeñas, pero los apilan cuando no hay espacio suficiente. Así se adapta la presentación sin alterar la semántica.

