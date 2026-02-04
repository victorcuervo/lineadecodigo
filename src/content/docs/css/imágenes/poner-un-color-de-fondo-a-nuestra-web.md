---
title: "Poner un color de fondo a nuestra web"
description: "Código CSS que nos enseña cómo podemos especificar el color de fondo a nuestra web mediante el uso de la propiedad background."
date: 2007-12-07
updatedDate: 2026-01-07
tags: ["background","head","style"]
slug: css/imagenes/poner-un-color-de-fondo-a-nuestra-web
type: doc
topic: css
id: 24a61e5c-2143-4764-afb7-49e47c7f7c90
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/colores/color-de-fondo-de-la-pagina.html
---

Si queremos poner un color de fondo a nuestra web tendremos que utilizar los estilos [CSS](http://www.manualweb.net/css/). Antiguamente, aunque funciona por compatibilidad, no era necesario utilizar hojas de estilo ya que el lenguaje [HTML](http://www.manualweb.net/html/) nos permitía hacerlo de una forma muy sencilla mediante el atributo `background` del elemento [body](http://www.w3api.com/HTML/body/). Pero esto ya ha quedado obsoleto y ahora debe de utilizarse [CSS](http://www.manualweb.net/css/). La verdad que hacerlo con [CSS](http://www.manualweb.net/css/), tampoco es muy complicado. Los [colores en CSS](https://lineadecodigo.com/tag/css-color/) se especifican mediante una única propiedad, que es la propiedad [`background`](http://www.w3api.com/CSS/background/), la cual admite o _**colores**_ o _**referencias a imágenes**_ para utilizarlas como fondo en nuestra página web. Si nos ponemos manos a la obra lo primero que tenemos que hacer es insertar el elemento [`style`](http://www.w3api.com/HTML/style/) del lenguaje [HTML](http://www.manualweb.net/html/), el cual nos permiten definir estilos [CSS](http://www.manualweb.net/css/) en nuestra página web. Estos elementos irán dentro de la cabecera de la página, delimitada por los elementos [`head`](http://www.w3api.com/HTML/head/). El código que nos quedará será similar a lo siguiente:


```html
<html>
  <head>
    <title>Color de Fondo de la página</title>
    <style>// Estilos</style>
  </head>
  <body>
  </body>
</htm>
```


Ahora, dentro del código [CSS](http://www.manualweb.net/css/) utilizaremos la propiedad [`background`](http://www.w3api.com/CSS/background/) que nos va a demarcar el estilo. Esta propiedad [`background`](http://www.w3api.com/CSS/background/) la utilizaremos sobre el selector [`body`](http://www.w3api.com/HTML/body/). De esta manera afectará a toda la página. Nos quedaría el siguiente código:


```css
body {
  background: red;
}
```


El valor del color puede ir mediante el nombre en ingles (_**red**_, _**yellow**_, _**blue**_, _**pink**_,...) o en formato RGB (_**#f00**_, _**#fa0**_, _**#00f**_,...). En el segundo caso hay que tener cuidado ya que antes del valor RGB hay que incluir una almohadilla. Así, el color rojo se puede especificar con _**"red"**_ o con _**"#f00"**_. El código final tanto de nuestra página [HTML](http://www.manualweb.net/html/) como del código [CSS](http://www.manualweb.net/css/) para poner color de fondo a nuestra web será el siguiente:


```html
<html>
  <head>
    <title>Color de Fondo de la página</title>
    <style>
      body{
        background:red;
      }
    </style>
  </head>
  <body>
    <h1>Página Web con Color de Fondo Rojo</h1>
  </body>
</html>
```

