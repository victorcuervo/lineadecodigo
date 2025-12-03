---
title: Tablas HTML con borde
description: "Pasos a realizar para poder tener Tablas HTML con borde en nuestra página web mediante el atributo border de Cascading Style Sheets (CSS)."
lastupdates: 2023-09-17
author: victor_cuervo
---

Si estás pensando cómo diseñar tablas [HTML](https://www.manualweb.net/html/) con borde y si ya has hecho el ejemplo de [Crear una tabla con HTML](http://lineadecodigo.com/html/crear-una-tabla-en-html/) habrás visto que el resultado de tu código no es parecido al esperado y que no hay ninguna línea que delimite la tabla. Esto es debido a que las tablas [HTML](https://www.manualweb.net/html/) por defecto no aparecen con borde.


Buscando documentación por Internet sobre cómo poner un borde a una tabla en [HTML](https://www.manualweb.net/html/) verás que se habla del atributo `border`. De esta forma el siguiente código nos permite crear una tabla con borde:


```html
<table border="1">
  <tbody>
    <tr>
      <td>Artículo</td>
      <td>Cantidad</td>
    </tr>
    <tr>
      <td>Zapatillas</td>
      <td>1.500</td>
    </tr>
    <tr>
      <td>Gorras</td>
      <td>12.200</td>
    </tr>
    <tr>
      <td>Pantalones</td>
      <td>3.800</td>
    </tr>
    <tr>
      <td>Camisetas</td>
      <td>7.100</td>
    </tr>
  </tbody>
</table>

```


Si bien, el atributo `border` ya no se encuentra dentro de la especificación [HTML](https://www.manualweb.net/html/) y su uso no es aconsejado. La forma de crear una tabla [HTML](https://www.manualweb.net/html/) con borde es mediante hojas de estilo, es decir, [CSS](https://www.manualweb.net/css/).


Lo que tenemos que hacer es añadir un estilo [CSS](https://www.manualweb.net/css/) a nuestra página web. Un estilo que vaya referente a las tablas. Es por ello que el selector utilizado en este caso es [`table`](https://w3api.com/HTML/table/) y [`td`](https://w3api.com/HTML/td/).


```css
table,td { ... }
```


Ya que si el borde solo se lo aplicamos a la tabla veremos que nos aparecerá únicamente el borde exterior.


La propiedad que nos permite crear el borde es [`border`](https://w3api.com/CSS/border/). Y los parámetros que le ponemos son el grosor del borde, el tipo de línea y el color. Así el código [CSS](https://www.manualweb.net/css/) para crear tablas [HTML](https://www.manualweb.net/html/) con borde es el siguiente:


```css
table,td {
	border: 1px solid black;
}
```


De esta manera ya tendremos nuestras tablas [HTML](https://www.manualweb.net/html/) con borde utilizando un pequeño selector [CSS](https://www.manualweb.net/css/).

