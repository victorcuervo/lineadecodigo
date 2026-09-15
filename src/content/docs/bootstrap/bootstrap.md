---
title: "Bootstrap"
description: "Comprende cómo funciona Bootstrap, su sistema responsive, componentes y utilidades CSS, con un ejemplo práctico de rejilla y tarjetas adaptables."
date: 2026-01-05
updatedDate: 2026-09-15
tags: ["css","flexbox","framework","responsive"]
slug: bootstrap
type: category
topic: bootstrap
id: 2dea9dfb-adca-8045-9a39-d67a7affb0cc
author: victor_cuervo
---

## ¿Qué es Bootstrap?


**Bootstrap** es un framework de interfaz para _crear sitios y aplicaciones web adaptables mediante estilos CSS, componentes reutilizables y un sistema de diseño responsive_. Un framework proporciona reglas, clases y estructuras preparadas que sirven como base común para desarrollar una interfaz sin definir cada estilo desde cero.


Su funcionamiento se basa principalmente en [clases CSS](https://lineadecodigo.com/css/) aplicadas al marcado de la página. Clases como `container`, `row`, `col-md-6` o `btn` controlan la distribución, los espacios, los tamaños y la apariencia de los elementos. Algunos componentes interactivos, como modales, desplegables y acordeones, también utilizan el JavaScript incluido por Bootstrap.


**Bootstrap** sigue un enfoque **mobile first**: los estilos base se diseñan para pantallas pequeñas y se amplían mediante puntos de ruptura o _breakpoints_. Un breakpoint es un ancho de pantalla a partir del cual pueden cambiar la distribución o el tamaño de los elementos. De esta forma, una misma estructura puede mostrarse en una columna en un móvil y en varias columnas en una pantalla más amplia.


## Características de Bootstrap

- **Sistema de rejilla responsive:** organiza el contenido mediante contenedores, filas y columnas. La rejilla utiliza [Flexbox](https://lineadecodigo.com/css/flexbox/) y permite definir cuántas columnas ocupa un elemento en cada breakpoint.
- **Componentes reutilizables:** incluye botones, tarjetas, alertas, barras de navegación, formularios, tablas y otros patrones habituales. Cada componente define una estructura y unas clases concretas.
- **Clases de utilidad:** permiten modificar margen, relleno, alineación, visualización, color, posición o tamaño sin crear una regla CSS específica para cada caso. Por ejemplo, `mt-3` añade margen superior y `d-flex` activa [Flexbox](https://lineadecodigo.com/css/flexbox/).
- **Diseño mobile first:** las clases sin prefijo de breakpoint se aplican a todos los tamaños. Variantes como `md`, `lg` o `xl` introducen cambios desde el ancho correspondiente.
- **Personalización:** **Bootstrap** puede utilizarse con sus valores predeterminados o adaptarse mediante variables Sass, variables CSS y estilos propios. La personalización evita que todas las interfaces tengan la misma apariencia.
- **JavaScript opcional por componente:** la rejilla, las utilidades y muchos componentes visuales funcionan solo con [CSS](https://lineadecodigo.com/css/). Los comportamientos interactivos requieren el paquete [JavaScript](https://lineadecodigo.com/javascript/) de Bootstrap; el paquete `bundle` incluye Popper.js para elementos como los desplegables.
- **Plantillas y ejemplos:** la documentación ofrece estructuras de referencia que combinan rejilla, componentes y utilidades. Son puntos de partida, no sustitutos de una estructura semántica ni de las decisiones de diseño del proyecto.

## ¿Por qué aprender Bootstrap?


**Bootstrap** resulta útil cuando se necesita construir una interfaz consistente en poco tiempo. Su sistema de clases resuelve tareas repetitivas como distribuir columnas, mantener espacios uniformes, adaptar componentes a distintos anchos y aplicar estados visuales reconocibles.


Comprender su rejilla ayuda a diseñar páginas responsive sin depender de medidas rígidas. También permite interpretar proyectos existentes: muchas aplicaciones utilizan combinaciones de `container`, `row`, columnas y utilidades, incluso cuando incorporan [CSS](https://lineadecodigo.com/css/) propio sobre la base del framework.


Aprender **Bootstrap** también mejora el conocimiento de [CSS](https://lineadecodigo.com/css/). Para usarlo con criterio hay que entender la cascada, la especificidad, [Flexbox](https://lineadecodigo.com/css/flexbox/) y los breakpoints. Esto permite decidir cuándo basta una utilidad, cuándo conviene personalizar un componente y cuándo es preferible escribir una regla propia.


El framework encaja especialmente bien en prototipos, paneles de administración, aplicaciones internas y sitios donde la consistencia pesa más que un diseño completamente singular. En una interfaz con identidad visual muy específica, usar solo los módulos necesarios y personalizar sus variables evita cargar estilos que no aportan valor.


## Ejemplo de Bootstrap


Este ejemplo utiliza **Bootstrap 5** para mostrar tres tarjetas. En pantallas pequeñas ocupan todo el ancho; desde el breakpoint `md`, cada tarjeta ocupa cuatro de las doce columnas de la rejilla.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cursos disponibles</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>
<body>
  <main class="container py-5">
    <h1 class="mb-4">Cursos disponibles</h1>

    <div class="row g-4">
      <div class="col-12 col-md-4">
        <article class="card h-100">
          <div class="card-body">
            <h2 class="card-title h5">HTML</h2>
            <p class="card-text">Estructura el contenido de una página web.</p>
            <a href="/html" class="btn btn-primary">Ver curso</a>
          </div>
        </article>
      </div>

      <div class="col-12 col-md-4">
        <article class="card h-100">
          <div class="card-body">
            <h2 class="card-title h5">CSS</h2>
            <p class="card-text">Define la presentación y el diseño visual.</p>
            <a href="/css" class="btn btn-primary">Ver curso</a>
          </div>
        </article>
      </div>

      <div class="col-12 col-md-4">
        <article class="card h-100">
          <div class="card-body">
            <h2 class="card-title h5">Bootstrap</h2>
            <p class="card-text">Construye interfaces responsive con componentes.</p>
            <a href="/bootstrap" class="btn btn-primary">Ver curso</a>
          </div>
        </article>
      </div>
    </div>
  </main>
</body>
</html>
```


`container` limita y centra el contenido, mientras que `py-5` añade espacio vertical. La clase `row` crea la fila y `g-4` define la separación entre sus columnas.


Cada bloque combina `col-12` y `col-md-4`. El primer valor hace que ocupe las doce columnas disponibles en pantallas pequeñas. El segundo cambia su anchura a cuatro columnas desde el breakpoint `md`, por lo que las tres tarjetas aparecen en una sola fila cuando hay espacio suficiente.


`card` aplica el componente de tarjeta y `h-100` iguala su altura dentro de la fila. Las clases `btn btn-primary` convierten el enlace en un botón con la variante visual principal. El ejemplo no necesita el paquete JavaScript porque solo utiliza la rejilla, utilidades y componentes basados en CSS.

