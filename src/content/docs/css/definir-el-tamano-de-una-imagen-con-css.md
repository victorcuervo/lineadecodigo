---
title: Definir el tamaño de una imagen con CSS
description: "Código que explica cómo definir el tamaño de una imagen con CSS utilizando las propiedades width y height en una clase que usaremos en HTML."
lastupdates: 2023-09-17
author: victor_cuervo
---

En las primeras versiones del lenguaje [HTML](https://www.manualweb.net/html/) cuando se mezclaba el contenido como el diseño lo más normal es apoyarnos en el lenguaje [HTML](https://www.manualweb.net/html/) para definir el tamaño de una imagen. Si bien, una vez que se separa el diseño del contenido y aparece [CSS](http://www.manualweb.net/css/) como lenguaje de definición de estilos la idea es utilizar estilos [CSS](http://www.manualweb.net/css/) para definir el alto y ancho de una imagen. En este artículo vamos a ver cómo podemos definir el tamaño de una imagen con [CSS](http://www.manualweb.net/css/).


Lo que vamos a hacer es definir un conjunto de clases [CSS](http://www.manualweb.net/css/), la cual aplicaremos dependiendo de las necesidades de tamaño que tengamos para las imágenes dentro de nuestra página web en el código [HTML](https://www.manualweb.net/html/).


Para poder dar el estilo utilizaremos las propiedades [`width`](http://www.w3api.com/CSS/width/) y [`height`](http://www.w3api.com/CSS/height/), de igual manera que los utiliza el lenguaje [HTML](http://www.manualweb.net/html/) como atributos del elemento [`img`](http://www.w3api.com/HTML/img/), pero en este caso los asignaremos a una clase.


De esta manera generaremos el siguiente código en [CSS](http://www.manualweb.net/css/) que incluiremos dentro de nuestra definición de estilos:


```css
img.pequeña{
  width: 50px;
  height: 50px;
}
img.mediana{
  width: 100px;
  height: 100px;
}
img.grande{
  width: 200px;
  height: 200px;
}
```


Como se puede ver se han definido tres clases: _**pequeña**_, _**mediana**_ y _**grande**_. Las cuales solo funcionaran sobre elementos [`img`](http://www.w3api.com/HTML/img/), si no hubiésemos antepuesto este elemento en la definición del estilo, podríamos haber utilizado las clases para [cualquier tipo de elemento HTML](http://lineadecodigo.com/html/).


Solo nos quedará el asignar la clase a un elemento [`img`](http://www.w3api.com/HTML/img/). Para ello utilizamos el atributo [`class`](http://www.w3api.com/HTML/class/). Así tendremos el siguiente código:


```html
<img class="pequeña" src="lineadecodigo.jpg" />
<img class="mediana" src="lineadecodigo.jpg" />
<img class="grande" src="lineadecodigo.jpg" />
```


Así la página [HTML](http://www.manualweb.net/html/) completa nos quedará de la siguiente forma:


```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Tamaño de una imagen con CSS</title>
  <style type="text/css">
    img.pequeña{width: 50px; height: 50px;}
    img.mediana{width: 100px; height: 100px;}
    img.grande{width: 200px; height: 200px;}
  </style>
</head>
<body>

<h1>Tamaño de una imagen con CSS</h1>

<img class="pequeña" src="lineadecodigo.jpg"/>
<img class="mediana" src="lineadecodigo.jpg"/>
<img class="grande" src="lineadecodigo.jpg"/>

</body>
</html>
```


Vemos que hemos añadido el código [CSS](http://www.manualweb.net/css) dentro del elemento [`style`](http://www.w3api.com/HTML/style/) en la cabecera o [`head`](http://www.w3api.com/HTML/head/) de la página.


Con estos pasos tan sencillos habremos conseguido definir el tamaño de una imagen con [CSS](http://www.manualweb.net/css). ¿Cómo haces tú para poder definir el tamaño de una imagen, ya que existen más alternativas? ¿Creas una clase? ¿Lo asignas directamente a un elemento? Cuéntanos en los comentarios ya que estaremos encantados de saberlo.

