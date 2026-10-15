---
title: "Accesibilidad"
description: "Aplica accesibilidad HTML con estructura semántica, formularios etiquetados, navegación por teclado y ARIA bien utilizado. Incluye un ejemplo práctico."
date: 2026-10-15
updatedDate: 2026-10-15
tags: ["accesibilidad","aria","label","aria-labelledby"]
slug: html/accesibilidad
type: category
topic: html
id: 3f9a9dfb-adca-80a6-9590-e4bb4d5291c5
author: victor_cuervo
---

## ¿Qué es la Accesibilidad HTML?


La accesibilidad HTML es el uso de elementos, atributos y relaciones del documento para que su contenido pueda comprenderse y utilizarse con distintas capacidades y formas de interacción. Incluye acceder sin ratón, navegar con lectores de pantalla e identificar correctamente campos, enlaces y botones.


Un lector de pantalla es una tecnología de apoyo que presenta la información mediante voz o una línea braille. No se limita a leer lo que se ve: utiliza la estructura y la información accesible que el navegador obtiene del documento. Por ejemplo, puede anunciar que un control es un botón, cuál es su nombre y si está desactivado.


El **HTML semántico** expresa la función del contenido mediante elementos adecuados. Un encabezado comunica una sección; una lista relaciona elementos; un botón representa una acción. Esa información permite navegar y operar sin depender únicamente de la apariencia visual.


Las WCAG, o Pautas de Accesibilidad para el Contenido Web, establecen criterios de éxito organizados en cuatro principios: perceptible, operable, comprensible y robusto. Sus niveles A, AA y AAA agrupan requisitos de conformidad. Un marcado correcto contribuye a cumplirlos, pero no garantiza por sí solo que una página sea accesible: también influyen la presentación, el comportamiento y el contenido.


## Características de Accesibilidad HTML

- **Estructura con significado.** Utiliza encabezados de `h1` a `h6` según la jerarquía del contenido, no según su tamaño visual. Elementos como `<nav>` y `<main>` permiten identificar regiones de navegación y contenido principal. Si hay varias regiones del mismo tipo, dales nombres que las distingan cuando sea necesario.
- **Idioma y título identificables.** `lang="es"` en `<html>` ayuda a seleccionar la pronunciación adecuada. Marca los cambios de idioma relevantes y utiliza un `<title>` que describa la página. No confundas este título del documento con el atributo `title`, que no debe ser el único modo de explicar un control.
- **Interacción nativa con teclado.** Usa `<a href="…">` para navegar y `<button>` para realizar acciones. Estos elementos aportan comportamiento de teclado y semántica. Añadir `role="button"` a un elemento genérico no lo convierte en un botón funcional ni implementa su activación mediante teclado.
- **Orden de foco lógico.** El foco identifica el elemento que recibe la interacción del teclado. El orden del documento debe permitir recorrer los controles de forma comprensible con Tab y Mayús+Tab. Evita valores positivos de `tabindex`, porque crean un orden distinto difícil de mantener. `tabindex="-1"` permite que un elemento reciba foco sin incorporarlo a la secuencia ordinaria de Tab. No elimines el indicador visual del foco ni crees trampas que impidan salir de un componente.
- **Nombres e instrucciones para formularios.** Asocia cada campo con un `<label>` mediante `for` e `id`, o incluyéndolo dentro de su etiqueta. El nombre accesible es el texto con el que la tecnología de apoyo identifica el control. Un `placeholder` no sustituye a una etiqueta visible. Usa `<fieldset>` y `<legend>` para agrupar opciones relacionadas y explica las restricciones antes de que se produzca un error.
- **Alternativas al contenido visual y sonoro.** En imágenes informativas, `alt` debe comunicar su función o información relevante. Las imágenes meramente decorativas utilizan `alt=""`; omitir el atributo no equivale a marcarlas como decorativas. Los vídeos con información sonora necesitan subtítulos adecuados, y las grabaciones pueden requerir transcripciones o alternativas descriptivas según el contenido.
- **ARIA como complemento.** ARIA permite declarar roles, estados y relaciones cuando la semántica nativa no basta. `aria-labelledby` toma el nombre de otros elementos mediante sus identificadores; `aria-describedby` relaciona un control con información complementaria. Prioriza las etiquetas visibles y evita añadir roles redundantes o nombres que contradigan el texto que ve el usuario.
- **Estados coherentes y errores comprensibles.** Atributos como `aria-expanded` o `aria-invalid` deben reflejar el estado real del componente. ARIA no modifica por sí sola ese estado ni crea su comportamiento. Identifica los errores con texto, explica cómo corregirlos y relaciónalos con el campo correspondiente. No comuniques un error únicamente mediante un cambio de color.

No utilices `aria-hidden="true"` en controles que pueden recibir foco ni en sus contenedores: podrías dejar elementos operables que no se anuncian. Tampoco ocultes información necesaria a las tecnologías de apoyo solo para evitar que se lea.


La presentación también debe permitir leer y operar con contraste suficiente, ampliación y pantallas estrechas. Esos aspectos no se resuelven añadiendo atributos ARIA y deben comprobarse junto con el marcado.


## ¿Por qué aprender sobre Accesibilidad HTML?


Permite construir formularios cuyos campos se identifiquen sin depender de su posición, menús que se pueden recorrer con teclado y documentos en los que se pueda saltar directamente al contenido principal. Son problemas concretos que aparecen en buscadores, procesos de compra, solicitudes y páginas educativas.


Elegir elementos nativos reduce el comportamiento que habría que implementar y probar manualmente. Un botón real ya ofrece interacción básica y comunica su función; un elemento genérico que imita un botón exige resolver por separado foco, activación y semántica.


Conocer estas relaciones también facilita el mantenimiento. Si la estructura conserva su significado, cambiar la presentación no obliga a reconstruir cómo se identifican los controles. Las etiquetas claras y las instrucciones visibles ayudan, además, a personas que no utilizan tecnologías de apoyo.


La revisión debe combinar herramientas automáticas con pruebas manuales. Un analizador puede detectar etiquetas ausentes o determinadas relaciones inválidas, pero no demuestra que un texto alternativo sea útil o que una tarea completa pueda realizarse. Prueba el recorrido con teclado, la navegación por encabezados con un lector de pantalla y la ampliación del contenido; no des por cumplidas las WCAG solo porque no aparezcan errores automáticos.


## Ejemplo de Accesibilidad HTML


Este documento presenta un buscador de cursos con enlace de salto, navegación identificada y campos etiquetados. Guárdalo como `cursos.html` y ábrelo en el navegador, preferiblemente desde un servidor local. No utiliza estilos, scripts ni bibliotecas externas.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Buscar cursos de HTML</title>
</head>
<body>
  <a href="#contenido">Saltar al contenido principal</a>

  <header>
    <p>Aula de desarrollo web</p>
    <nav aria-label="Navegación de cursos">
      <a href="#buscador">Buscar cursos</a>
      <a href="#ayuda">Ayuda con la búsqueda</a>
    </nav>
  </header>

  <main id="contenido" tabindex="-1">
    <h1>Buscar cursos de HTML</h1>

    <section aria-labelledby="buscador">
      <h2 id="buscador">Búsqueda por tema</h2>

      <form method="get">
        <p>
          <label for="consulta">Tema del curso (obligatorio)</label>
          <input
            type="search"
            id="consulta"
            name="consulta"
            required
            aria-describedby="ayuda-consulta"
          >
        </p>
        <p id="ayuda-consulta">
          Escribe un tema, por ejemplo, formularios o tablas.
        </p>

        <fieldset>
          <legend>Nivel del curso</legend>
          <p>
            <input type="radio" id="todos" name="nivel" value="todos" checked>
            <label for="todos">Todos los niveles</label>
          </p>
          <p>
            <input type="radio" id="intermedio" name="nivel" value="intermedio">
            <label for="intermedio">Intermedio</label>
          </p>
        </fieldset>

        <p><button type="submit">Buscar cursos</button></p>
      </form>
    </section>

    <section aria-labelledby="ayuda">
      <h2 id="ayuda">Ayuda con la búsqueda</h2>
      <p>Introduce un tema y selecciona el nivel que deseas consultar.</p>
    </section>
  </main>
</body>
</html>
```


El navegador muestra un formulario operable con controles nativos. Como se omite `action`, el envío GET se dirige al documento actual con los campos en la URL. Por ejemplo, al buscar «tablas» y elegir «Intermedio», se envían `consulta=tablas` y `nivel=intermedio`. El ejemplo demuestra el marcado y el envío, pero no filtra cursos: una aplicación real debe procesar esos parámetros y presentar los resultados.

- El primer enlace permite evitar la navegación repetida. Su destino es `<main>`, que se ha preparado para recibir foco sin añadir una parada extra al recorrido normal de Tab.
- `lang` y `<title>` identifican el idioma y el propósito del documento. El `h1` presenta su tema y los `h2` organizan las dos secciones.
- Los elementos `<section>` utilizan `aria-labelledby` para tomar su nombre de los encabezados visibles. `<nav>` usa `aria-label` para identificar la navegación sin sustituir el texto de sus enlaces.
- `<label>` proporciona el nombre del campo; `aria-describedby` añade la instrucción sin reemplazar ese nombre. `required` activa la restricción nativa y el texto visible también comunica que el campo es obligatorio.
- `<fieldset>` y `<legend>` relacionan las opciones de nivel. Los botones de opción comparten `name`, por lo que solo puede seleccionarse uno del grupo.
- El botón mantiene su semántica e interacción nativas: no necesita `role="button"` ni un `tabindex` adicional.

Para comprobarlo, recorre la página con Tab y Mayús+Tab, activa los enlaces con Intro y utiliza las flechas para cambiar de opción dentro del grupo de nivel. Intenta enviar el campo vacío para observar la validación del navegador. Con un lector de pantalla, verifica que se anuncien los encabezados, los nombres de los campos, la instrucción y el grupo de opciones; la formulación exacta varía según el navegador y la tecnología de apoyo.

