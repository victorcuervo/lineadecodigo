---
title: "Tablas"
description: "Aprende a crear tablas en Bootstrap con estilos, filas cebra, estados interactivos y diseño responsive mediante un ejemplo práctico y accesible."
date: 2026-09-17
updatedDate: 2026-09-17
tags: ["table-responsive","table-striped","table","col","row"]
slug: bootstrap/tablas
type: category
topic: bootstrap
id: 3dea9dfb-adca-801f-9232-c5fb2588d3cd
author: victor_cuervo
---

## ¿Qué son las Tablas en Bootstrap?


Las **tablas en Bootstrap** son tablas [HTML](https://lineadecodigo.com/html/) cuya presentación se controla mediante las clases [CSS](https://lineadecodigo.com/css/) del framework. [Bootstrap](https://lineadecodigo.com/bootstrap/) no sustituye la estructura semántica de una tabla: se siguen utilizando los elementos `table`, `thead`, `tbody`, `tr`, `th` y `td` para organizar datos relacionados en filas y columnas.


La clase base `.table` aplica espaciado, bordes inferiores, alineación y colores coherentes con el sistema visual de [Bootstrap](https://lineadecodigo.com/bootstrap/). A partir de ella se añaden clases modificadoras para cambiar el aspecto o el comportamiento de la tabla sin escribir [CSS](https://lineadecodigo.com/css/) específico.


Una tabla debe emplearse para mostrar **datos tabulares**, es decir, información en la que cada columna representa un atributo y cada fila corresponde a un registro. No debe utilizarse para distribuir elementos de una página; para esa función [Bootstrap](https://lineadecodigo.com/bootstrap/) ofrece su sistema de rejilla y sus utilidades de diseño.


## Características de Tablas en Bootstrap

- **Clase base:** `.table` proporciona el formato inicial y sirve como punto de partida para el resto de variantes.
- **Filas cebra:** `.table-striped` alterna el color de las filas del cuerpo para facilitar el seguimiento visual de conjuntos de datos amplios.
- **Resaltado interactivo:** `.table-hover` cambia el fondo de una fila al situar el puntero sobre ella. Ayuda a identificar el registro que se está consultando, pero no sustituye a un control seleccionable.
- **Bordes y densidad:** `.table-bordered` dibuja bordes en todas las celdas, `.table-borderless` los elimina y `.table-sm` reduce el relleno para mostrar más información en menos espacio.
- **Variantes de color:** clases como `.table-primary`, `.table-success`, `.table-warning` o `.table-danger` pueden aplicarse a la tabla, a una fila o a una celda. El color debe reforzar el significado de los datos y no ser el único medio para comunicarlo.
- **Adaptación a pantallas estrechas:** una tabla puede envolverse en `.table-responsive` para habilitar desplazamiento horizontal cuando su anchura supera la del contenedor. También existen variantes por punto de ruptura, como `.table-responsive-md`.
- **Compatibilidad con marcado semántico:** elementos como `<caption>` y el atributo `scope` en las cabeceras conservan el significado de la información y facilitan su interpretación mediante tecnologías de asistencia.

Estas clases corresponden a **Bootstrap 5**. En versiones anteriores pueden existir diferencias de nombre o comportamiento, por lo que conviene comprobar la documentación de la versión instalada en el proyecto.


## ¿Por qué aprender Tablas en Bootstrap?


Conocer este componente permite presentar listados, comparativas, inventarios, resultados o paneles administrativos con una apariencia consistente respecto al resto de la interfaz. Las clases predefinidas evitan repetir reglas CSS para tareas habituales como crear tablas cebra, añadir bordes o reducir el tamaño de las celdas.


También ayuda a resolver un problema frecuente del diseño adaptable: una tabla con muchas columnas puede desbordar una pantalla móvil. El contenedor responsive mantiene la estructura de los datos y ofrece desplazamiento horizontal sin comprimir el contenido hasta hacerlo ilegible.


Aprender a combinar las utilidades visuales con una estructura [HTML](https://lineadecodigo.com/html/) correcta permite separar dos responsabilidades: el marcado describe la relación entre cabeceras y datos, mientras [Bootstrap](https://lineadecodigo.com/bootstrap/) controla los estilos. Esta separación facilita el mantenimiento y mejora la accesibilidad.


## Ejemplo de Tablas en Bootstrap


El siguiente documento crea una tabla de productos con filas alternas, resaltado al pasar el puntero y bordes. El contenedor `.table-responsive` permite desplazarla horizontalmente en pantallas estrechas.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tabla de productos</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <main class="container py-4">
    <div class="table-responsive">
      <table class="table table-striped table-hover table-bordered align-middle">
        <caption>Disponibilidad y precio de los productos</caption>
        <thead class="table-dark">
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Categoría</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Teclado</th>
            <td>Periféricos</td>
            <td>18</td>
            <td>39,90 €</td>
          </tr>
          <tr>
            <th scope="row">Monitor</th>
            <td>Pantallas</td>
            <td>7</td>
            <td>219,00 €</td>
          </tr>
          <tr>
            <th scope="row">Base USB-C</th>
            <td>Accesorios</td>
            <td>12</td>
            <td>64,50 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
```


La clase `.table` activa el estilo base. `.table-striped` genera las filas cebra, `.table-hover` resalta la fila bajo el puntero y `.table-bordered` delimita todas las celdas. `align-middle` centra verticalmente el contenido de cada celda, mientras que `.table-dark` aplica una variante oscura a la cabecera.


Los atributos `scope="col"` identifican cabeceras de columna y `scope="row"` identifica la cabecera de cada fila. De este modo, lectores de pantalla pueden relacionar correctamente cada dato con sus encabezados. El elemento `<caption>` aporta una descripción breve del conjunto de datos.

