---
title: "Dar color a la última fila de una tabla"
description: "Análisis de las diferentes formas que tenemos de dar color a la última fila de una tabla mediante el lenguaje CSS."
date: 2015-07-30
updatedDate: 2026-01-18
tags: ["last-child","table","tfoot","tr","background-color","color"]
slug: css/tablas/dar-color-a-la-ultima-fila-de-una-tabla
type: doc
topic: css
id: ca4ddacd-e3c6-4125-9514-3bb38227269d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/tabla-color-footer.html
---

Si estamos definiendo una tabla con datos dentro de nuestra página web es fácil que queramos dar un color especial a esa última fila de la tabla. Ya que esa fila es la que se suele utilizar para indicar agregados o sumatorios de datos. Pero, a la hora de dar color a la última fila de una tabla, tenemos que saber qué elemento [HTML](https://www.manualweb.net/html/) representa realmente la última fila. Es decir, ¿hay algún elemento que represente la última fila?


Si vemos una tabla normal creada con [HTML](https://www.manualweb.net/html/) podemos encontrarnos lo siguiente:


```html
<table>
  <tr>
    <th>Pieza</th>
    <th>Cantidad</th>
  </tr>
  <tr>
    <td>Mesa</td>
    <td>12</td>
  </tr>
</table>
```


Es decir, las filas son todas representadas por el [elemento TR](https://www.w3api.com/HTML/tr/). Por lo cual no vamos a poder encontrar diferencias entre la primera, una fila intermedia o la última fila.


## Usar el selector last-child


En este caso podemos utilizar un selector en [CSS](http://www.manualweb.net/css/) que haga referencia a la última fila. El selector que hace referencia a las filas es:


```css
tr { }
```


Al apoyarnos en el selector last-child() podemos hacer referencia al último elemento.


```css
tr:last-child { }
```


Así solo nos quedará utilizar los atributos [background-color](https://www.w3api.com/CSS/background-color/) y [color](https://www.w3api.com/CSS/color/) para darle color a la última fila de una tabla.


```css
tr:last-child {
  background-color: #000000;
  color: #ffffff;
}
```


## Utilizar el elemento tfoot


Si utilizamos un código [HTML](https://www.manualweb.net/html/) un poco más avanzado podemos encontrarnos con [el elemento tfoot](https://www.w3api.com/HTML/tfoot/). El [elemento tfoot](https://www.w3api.com/HTML/tfoot/) nos sirve para agrupar filas que representen el final de la tabla. Por ende podemos utilizar [el elemento tfoot](https://www.w3api.com/HTML/tfoot/) para recubrir a la última [fila tr](https://www.w3api.com/HTML/tr/). De esta forma el código nos quedaría:


```html
<table>
  <tr>
    <td>Mesa</td>
    <td>12</td>
  </tr>
  <tfoot>
    <tr>
      <td>Total:</td>
      <td>43</td>
    </tr>
  </tfoot>
</table>
```


Lo que hacemos es poner la última fila recubierta con [el elemento tfoot](https://www.w3api.com/HTML/tfoot/). Si tenemos este código podremos dar color a la última fila de una tabla utilizando el selector tfoot.


```css
tfoot {
  background-color: #000000;
  color: #ffffff;
}
```


Hay que tener en cuenta que si utilizamos una tabla que tenga definido [el elemento tfoot](https://www.w3api.com/HTML/tfoot/) no deberemos de combinarlo con el selector last-child. Ya que en este caso el last-child será el del cuerpo de la tabla, es decir la última fila antes de tener las filas del [tfoot](https://www.w3api.com/HTML/tfoot/).


Ahora, ¿cuál de las dos formas de dar color a la última fila de una tabla vas a utilizar? Cuéntanoslo en los comentarios.

