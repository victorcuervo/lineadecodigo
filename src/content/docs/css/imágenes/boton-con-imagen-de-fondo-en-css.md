---
title: Botón con imagen de fondo en CSS
description: "Cómo crear un botón con imagen de fondo en CSS utilizando el atributo background-image ya sea en un input o en un button."
lastUpdated: 2025-12-16
slug: css/boton-con-imagen-de-fondo-en-css
author: victor_cuervo
---

En el articulo de ayer [veíamos cómo se manejaban las imágenes en los botones dentro de XForms](https://lineadecodigo.com/xforms/botones-con-imagenes-en-xforms/). [XForms](https://lineadecodigo.com/categoria/xforms/) será, esperemos, la evolución de los formularios [HTML](https://www.manualweb.net/html/) dentro de XHTML v2. Pero, a día, de hoy, con lo que tenemos que convivir es con [HTML](https://www.manualweb.net/html/) + [CSS](http://www.manualweb.net/css/). Es por ello que nos tendremos que apoyar en los atributos de [CSS](http://www.manualweb.net/css/) para poder poner crear un botón con imagen de fondo en CSS. La idea general es utilizar el [atributo ](http://w3api.com/CSS/background-image/)[`background-image`](http://w3api.com/CSS/background-image/), el cual pone una imagen de fondo sobre el elemento de la página sobre el que se aplique. Para ello vamos a crear una clase que llamaremos _"botonimagen"_, la cual podremos aplicar sobre cualquier botón de nuestra página. Lo primero es definir dicha clase, esto lo tenemos que hacer con el [atributo ](http://w3api.com/HTML/style/)[`style`](http://w3api.com/HTML/style/). Dicho elemento tiene un atributo type. Este atributo sirve para indicarle qué estilo va a ir definido dentro de la etiqueta. En nuestro caso será text/css. El código será el siguiente:


```css
.botonimagen {
  background-image: url(imagen.jpg);
}
```


De este código hay que indicar que el valor del [atributo ](http://w3api.com/CSS/background-image/)[`background-image`](http://w3api.com/CSS/background-image/) no es directamente el nombre de la imagen, sino que deberemos de utilizar una URL. Es por ello que el nombre de la imagen va después de la función url. Su valor podría ser cualquier dirección de URL donde estuviese la imagen. Lo siguiente que deberemos de hacer es asignar la clase a un botón. En este punto decir que el lenguaje [HTML](https://www.manualweb.net/html/) nos proporciona dos formas de conseguir un botón. ### Mediante la clase input y el type igual a button


```html
<input type="button" value="Texto del boton" />
```


### Mediante el elemento button


```html
<button value="Texto del boton"></button>
```


Para aplicar la clase deberemos de utilizar el [atributo ](http://w3api.com/HTML/style/)[`style`](http://w3api.com/HTML/style/). En el caso de escoger la primera de las formas de pintar un botón, la línea de código nos quedaría:


```html
<input type="button" class="botonimagen" value="Texto del boton" />
```


En este punto nos encontramos con una serie de inconvenientes. Por ejemplo: - El botón se adapta al tamaño del texto, por lo que si la imagen es más grande que el texto, la imagen no se verá en su completitud.


> La imagen se repite tantas veces como se necesite para llenar el espacio del botón. Esto puede ser un problema si estamos utilizando una imagen pequeña


Para paliar estos efectos y con el fin de que nos quede un botón cual menos, curioso. Podemos jugar con un conjunto de atributos, que son:

- [`height`](https://w3api.com/CSS/height/), para definir la altura del botón.
- [`width`](https://w3api.com/CSS/width/), para definir el ancho del botón
- [`background-repeat`](https://w3api.com/CSS/background-repeat/), para identificar el numero de veces que se va a repetir la imagen
- [`background-position`](http://w3api.com/CSS/background-position/), posición de la imagen: arriba, abajo, en el centro.

Finalmente el código de la clase nos quedaría de la siguiente forma:


```css
.botonimagen {
  background-image: url(imagen.jpg);
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  background-position: center;
}
```


De esta forma ya habremos conseguido **crear un botón con imagen de fondo en CSS**. Espero que os haya sido de utilidad.

