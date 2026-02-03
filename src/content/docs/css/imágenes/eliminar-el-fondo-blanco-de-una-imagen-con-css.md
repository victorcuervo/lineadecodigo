---
title: "Eliminar el fondo blanco de una imagen con CSS"
description: "Cómo utilizar filtros con mucho brillo y mezclas de elementos en CSS para poder eliminar el fondo blanco de una imagen con CSS."
date: 2024-05-13
updatedDate: 2026-01-10
tags: ["background-color","filter","brightness","mix-blend-mode"]
slug: css/imagenes/eliminar-el-fondo-blanco-de-una-imagen-con-css
author: victor_cuervo
type: doc
id: a48842b8-659b-4be4-9e81-2fb393efd5e2
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/imagenes/fondo-blanco-transparente.html
---

Seguro que más de una vez has tenido que acudir a un software de edición de imágenes para poder manipular una imagen y lo más probable que fuese para convertirla en transparente. Y, aunque no va a ser la panacea para no tener que utilizar una de estas herramientas, vamos a ver cómo podemos **eliminar el fondo blanco de una imagen con CSS,** lo cual nos puede resultar útil en algunas circunstancias.


## Insertar una imagen dentro de nuestra página web


Lo primero que vamos a necesitar es [insertar una imagen dentro de la página web](https://manualweb.net/html/imagenes-html/). Para ello vamos a utilizar el elemento [`img`](https://www.w3api.com/HTML/img/), el cual tiene la siguiente sintaxis:


```html
<img src="fichero.extension" alt="texto alternativo" width="ancho" height="alto" />
```


Por lo que si queremos insertar nuestra imagen llamada “logo.png” escribiremos lo siguiente:


```html
<img src="logo.png" alt="Logo de Ayuda en la Web"/>
```


Y lo que veremos dentro de nuestra página web será algo parecido a lo siguiente:


![](../../../../assets/css/images/logo.png)


Vemos que hemos escogido una imagen en blanco y negro que es el logo de la [página Ayuda en la Web, desde lo sencillo hasta lo avanzado](https://www.ayudaenlaweb.com/). Y qué nos servirá para ese ejemplo consiguiendo hacer transparente el color blanco.


## Definiendo el color del fondo de la página


Para poder ver el efecto de **eliminar el fondo blanco de una imagen con CSS** vamos a tener que poner un [color de fondo en nuestra página web](https://lineadecodigo.com/css/poner-un-color-de-fondo-a-nuestra-web/). Esto nos permitirá ver el contraste y que el efecto funciona.


Para poder definir el color del fondo de la página, nos apoyamos en la [propiedad CSS ](https://www.w3api.com/CSS/background-color/)[`background-color`](https://www.w3api.com/CSS/background-color/) aplicada directamente al [elemento HTML ](https://www.w3api.com/HTML/body/)[`body`](https://www.w3api.com/HTML/body/).


```css
 body {
  background-color: lightcoral;
}
```


Como podéis ver hemos puedo un color de fondo llamado lightcoral. Aunque puedes utilizar el que más quieras dentro del [listado de colores principales de HTML](https://manualweb.net/html/colores-html/).


## Manejando los filtros **en CSS**


Una vez que tenemos ya la imagen y el fondo de la página configurado, vamos a pasar a **eliminar el fondo blanco de una imagen con CSS.** Lo que vamos a realizar es utilizar la [propiedad ](https://www.w3api.com/CSS/filter/)[`filter`](https://www.w3api.com/CSS/filter/)[ de CSS](https://www.w3api.com/CSS/filter/). La [propiedad ](https://www.w3api.com/CSS/filter/)[`filter`](https://www.w3api.com/CSS/filter/)[ en CSS](https://www.w3api.com/CSS/filter/) nos permite aplicar filtros a la imagen.


Hay varios filtros que podemos usar para modificar la apariencia de una imagen o un elemento usando [la propiedad ](https://www.w3api.com/CSS/filter/)[`filter`](https://www.w3api.com/CSS/filter/)[ de CSS](https://www.w3api.com/CSS/filter/). Estos filtros nos permiten hacer ajustes en el aspecto visual de los elementos en nuestra página web:

- `blur` es un filtro que podemos usar para desenfocar una imagen. Esto puede ser útil cuando queremos resaltar un elemento en primer plano o darle un aspecto suave a un fondo.
- `brightness` es otro filtro que nos permite modificar el brillo de una imagen. Podemos usarlo para aclarar una imagen oscura o atenuar una que sea demasiado brillante.
- El filtro `contrast` nos permite ajustar el contraste de una imagen. Esto puede ser especialmente útil cuando queremos resaltar ciertos detalles o colores en una imagen.
- `grayscale` es un filtro que convierte una imagen a blanco y negro. Esto puede ser útil cuando queremos darle a nuestro sitio web un aspecto clásico o minimalista.
- El filtro `saturate` nos permite saturar el color de una imagen. Este filtro puede ser útil cuando queremos hacer que los colores en una imagen sean más vivos y vibrantes.
- … y muchos más

## Usando filtros para **eliminar el fondo blanco de una imagen con CSS**


Pero, ¿cómo utilizamos [la propiedad ](https://www.w3api.com/CSS/filter/)[`filter`](https://www.w3api.com/CSS/filter/)[ de CSS](https://www.w3api.com/CSS/filter/) para poder eliminar el fondo blanco de una imagen con CSS? La idea es **aplicar mucho brillo sobre la imagen, esto hará que se resalten las partes más blancas de la imagen**.


Para ello vamos a darle un valor de 1. Aunque dependiendo de la imagen que tengas, podrás tener que elevar o reducir este valor.


```css
.remove-bg {
    filter: brightness(1);
}
```


Vemos que hemos creado una clase que hemos llamado `remove-bg` la cual utilizaremos posteriormente sobre la imagen en la que vamos a realizar el filtro.


## Mezclar elementos mediate la propiedad mix-blend-mode


¿Con esto ya tenemos resuelto el **eliminar el fondo blanco de una imagen con CSS**? La verdad es que no, todavía nos queda un paso más. Tenemos que aprender a mezclar elementos mediante la [propiedad ](https://www.w3api.com/CSS/mix-blend-mode/)[`mix-blend-mode`](https://www.w3api.com/CSS/mix-blend-mode/).


Es decir, lo que buscamos es mezclar la imagen con el fondo para que se produzca la transparencia.


Algunos de os valores que podemos dar a la [propiedad CSS ](https://www.w3api.com/CSS/mix-blend-mode/)[`mix-blend-mode`](https://www.w3api.com/CSS/mix-blend-mode/) serán los siguientes:

- `normal`, este es el valor por defecto y significa que no se aplica ninguna mezcla.
- `multiply`, este modo se multiplican los colores de los elementos de la imagen y el fondo, lo que resulta en una mezcla más oscura.
- `screen`, este modo es lo opuesto a `multiply`. Los colores de los elementos de la imagen y el fondo se invierten, se multiplican y luego se invierten de nuevo para dar un resultado más claro.
- …

Lo que vamos a utilizar en este ejemplo para **eliminar el fondo blanco de una imagen con CSS** es el valor `multiply` que consigue la mezcla oscura. Así que lo añadimos a la clase `remove-bg` que hemos definido anteriormente.


```css
.remove-bg {
    filter: brightness(1);
    mix-blend-mode: multiply;
}
```


Ya solo nos quedará aplicar la clase `remove-bg` sobre nuestra imagen. Esto lo hacemos gracias a la [propiedad HTML ](https://www.w3api.com/HTML/class/)[`class`](https://www.w3api.com/HTML/class/) de la siguiente forma:


```html
<img src="logo.png" class="remove-bg" alt="Logo de Ayuda en la Web">
```


Y ahora sí que ya tendremos todo preparado para poder tener funcionando nuestro código que nos permite **eliminar el fondo blanco de una imagen con CSS.**

