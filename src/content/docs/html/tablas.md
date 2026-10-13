---
title: "Tablas"
description: "Crea tablas HTML con filas, celdas y encabezados accesibles. Comprende caption, scope, colspan y rowspan con ejemplos de estructura y combinación de celdas."
date: 2026-10-13
updatedDate: 2026-10-13
tags: ["table","th","td","tr"]
slug: html/tablas
type: category
topic: html
id: 3f7a9dfb-adca-8036-8327-e1702b621b71
author: victor_cuervo
---

## ¿Qué son las Tablas HTML?


Las **tablas HTML** son estructuras que representan datos relacionados en filas y columnas mediante el elemento `<table>`. Cada dato ocupa una celda y se interpreta en relación con sus encabezados, como ocurre en un horario, una comparativa de productos o un informe de ventas.


La estructura puede entenderse como una matriz: las filas recorren los registros y las columnas representan sus propiedades. Una fila se define con `<tr>`; una celda de datos, con `<td>`; y una celda de encabezado, con `<th>`. Por ejemplo, en una tabla de existencias, cada fila puede representar un producto y las columnas indicar unidades y precio.


En [HTML](https://lineadecodigo.com/html/), estos elementos aportan **semántica**, es decir, describen la función de cada parte del contenido. Una tabla no es solo una cuadrícula visual: expresa relaciones que el navegador y las tecnologías de asistencia pueden interpretar.


Utiliza tablas cuando los datos tengan una relación real entre filas y columnas. No las uses para distribuir la cabecera, el menú o las columnas visuales de una página; esa disposición corresponde a las herramientas de diseño, no a la estructura de datos.


## Características de Tablas HTML

- **Estructura por filas y celdas.** `<table>` contiene la estructura tabular, `<tr>` agrupa las celdas de una fila y `<th>` o `<td>` contienen su información. Las columnas se forman por la posición de las celdas; no existe un elemento que envuelva directamente todas las celdas de una columna. Mantén una cuadrícula coherente, teniendo en cuenta también las celdas combinadas.
- **Título con** **`caption`****.** `<caption>` identifica el tema de la tabla, por ejemplo, «Existencias por producto». Se coloca como primer elemento hijo de `<table>`. Aporta un nombre a la tabla y ayuda a distinguirla de otras dentro del documento; no sustituye a los encabezados de filas o columnas.
- **Encabezados con** **`th`** **y** **`scope`****.** Usa `<th scope="col">` para un encabezado de columna y `<th scope="row">` para uno de fila. `scope` indica qué celdas describe el encabezado. Aplicar negrita a un `<td>` no lo convierte en un encabezado semántico.
- **Agrupación con** **`thead`****,** **`tbody`** **y** **`tfoot`****.** `<thead>` reúne las filas de cabecera, `<tbody>` las de datos y `<tfoot>` las de cierre, como los totales. En una estructura habitual se escriben en ese orden. Estas secciones organizan las filas, pero no reemplazan a `<th>` ni calculan resultados automáticamente. Si escribes filas directamente bajo `<table>`, el navegador puede insertar un `<tbody>` al construir el documento.
- **Combinación horizontal con** **`colspan`****.** Una celda con `colspan="2"` ocupa dos columnas. Las demás celdas de esa fila deben ajustarse para que el total de posiciones cubiertas coincida con la cuadrícula. Combinar celdas no elimina la necesidad de identificar los datos mediante encabezados adecuados.
- **Combinación vertical con** **`rowspan`****.** Una celda con `rowspan="2"` ocupa su columna en dos filas. En la segunda fila no se añade otra celda para esa posición. La combinación debe mantenerse dentro de su grupo de filas; no debe atravesar de un `<tbody>` a otro ni extenderse a `<thead>` o `<tfoot>`.
- **Encabezados complejos.** Para tablas sencillas, `scope="row"` y `scope="col"` suelen expresar las relaciones necesarias. Si existen varios niveles o asociaciones difíciles de deducir, `id` en los encabezados y `headers` en las celdas permiten referenciarlos explícitamente. El valor de `headers` es una lista de identificadores separados por espacios. Antes de complicar la estructura, considera dividir los datos en tablas más simples.
- **Contenido significativo.** Una celda puede contener texto, enlaces u otros elementos apropiados. Indica las unidades en los encabezados, como «Precio (€)», y diferencia un cero de un dato no disponible. Si utilizas un símbolo para datos ausentes, explica su significado.
- **Estructura separada de presentación.** HTML no garantiza bordes visibles ni una apariencia uniforme entre navegadores. Evita atributos de presentación obsoletos como `cellpadding`, `cellspacing` o `align`; el aspecto visual se define por separado. Una tabla tampoco incorpora por sí sola ordenación, filtros ni cálculos.

La accesibilidad depende de que las asociaciones entre encabezados y datos sean claras. `<thead>` agrupa la cabecera, pero no convierte sus celdas `<td>` en encabezados. Del mismo modo, el atributo histórico `summary` de `<table>` no debe utilizarse en HTML actual: emplea un título con `<caption>` y, si hace falta, una explicación visible junto a la tabla.


## ¿Por qué aprender sonbre Tablas HTML?


Las tablas permiten comparar información sin repetir etiquetas en cada dato. En un inventario, por ejemplo, el encabezado «Unidades» sirve para todos los productos; en un horario, la intersección entre día y franja permite localizar una actividad concreta.


Conocer su estructura ayuda a resolver errores frecuentes: filas que parecen desplazadas por un `colspan` incorrecto, celdas duplicadas bajo un `rowspan` o datos cuyo encabezado no se reconoce. También facilita modificar la tabla sin romper sus relaciones.


Los encabezados semánticos permiten que los lectores de pantalla comuniquen el contexto de una celda al recorrer los datos. Esto resulta especialmente útil cuando el valor aislado, como «18», no explica si se refiere a unidades, precio o duración.


Aprender estos elementos también permite distinguir una tabla de datos de una lista o de una distribución visual. Si el contenido no necesita compararse por filas y columnas, una lista puede resultar más sencilla y comprensible.


## Ejemplo de Tablas HTML


Este documento muestra las existencias de tres productos y el total de unidades. Guárdalo como `existencias.html` y ábrelo en el navegador. No necesita estilos, scripts ni librerías.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Existencias de papelería</title>
</head>
<body>
  <h1>Inventario de papelería</h1>

  <table>
    <caption>Existencias y precio unitario por producto</caption>
    <thead>
      <tr>
        <th scope="col">Producto</th>
        <th scope="col">Unidades</th>
        <th scope="col">Precio unitario (€)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Cuaderno</th>
        <td>18</td>
        <td>3,50</td>
      </tr>
      <tr>
        <th scope="row">Bolígrafo</th>
        <td>30</td>
        <td>1,20</td>
      </tr>
      <tr>
        <th scope="row">Carpeta</th>
        <td>12</td>
        <td>2,00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Total de unidades</th>
        <td>60</td>
        <td>No aplicable</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```


El navegador presenta una tabla de tres columnas, con una fila de encabezados, tres filas de productos y una fila final. Sin estilos adicionales, puede mostrarse sin bordes; eso no altera su estructura semántica.

- `<caption>` identifica el conjunto de datos. El título de la página describe el documento, mientras que el título de la tabla describe ese conjunto concreto.
- Los encabezados con `scope="col"` indican qué representa cada columna. Los nombres de producto usan `scope="row"` porque identifican los datos de su fila.
- La celda `18` corresponde al producto Cuaderno y a la columna Unidades. Esa doble relación permite interpretar el número sin repetir ambas etiquetas dentro de la celda.
- `<tfoot>` reúne el total. El valor `60` está escrito en el documento: HTML no suma automáticamente las unidades. «No aplicable» aclara que el total no tiene un precio unitario.

Para observar cómo se combinan celdas, este segundo ejemplo organiza dos grupos de un taller:


```html
<table>
  <caption>Grupos del taller de HTML</caption>
  <thead>
    <tr>
      <th scope="col">Taller</th>
      <th scope="col">Grupo</th>
      <th scope="col">Plazas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="rowgroup" rowspan="2">HTML</th>
      <th scope="row">Mañana</th>
      <td>20</td>
    </tr>
    <tr>
      <th scope="row">Tarde</th>
      <td>15</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total de plazas</th>
      <td>35</td>
    </tr>
  </tfoot>
</table>
```


La celda HTML ocupa dos filas mediante `rowspan="2"`; por eso, la fila de Tarde solo declara dos celdas nuevas. `scope="rowgroup"` indica que HTML encabeza el grupo de filas de ese `<tbody>`.


En el pie, `colspan="2"` hace que «Total de plazas» cubra las columnas Taller y Grupo. La celda `35` sigue ocupando la tercera columna. Aunque las filas contienen cantidades distintas de elementos, todas cubren tres posiciones en la cuadrícula.

