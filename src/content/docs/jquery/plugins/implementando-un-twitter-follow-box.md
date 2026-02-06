---
title: "Implementando un Twitter Follow Box"
description: "Implementando un Twitter Follow Box es fácil y personalizable, ideal para mostrar tus seguidores en la web y mejorar la interacción con tus visitantes."
date: 2012-09-14
updatedDate: 2026-02-06
tags: ["twitter","plugin"]
slug: jquery/plugins/implementando-un-twitter-follow-box
type: doc
topic: jquery
id: 2c8a9dfb-adca-8154-a75e-e465d453eb32
author: Emmanuel Sio
download: https://github.com/victorcuervo/lineadecodigo_jquery/tree/master/plugins/twitter
---

Twitter Follow Box es un plugin realizado en [JQuery](http://www.manualweb.net/jquery/) que nos permite agregar al mejor estilo [Facebook](http://www.ayudaenlaweb.com/redes-sociales/que-es-facebook/), nuestros seguidores de [Twitter](http://www.ayudaenlaweb.com/microblogging/que-es-twitter/). No requiere grandes conocimientos para incorporarlo a nuestra web y nos llevará muy poco tiempo realizarlo. Para llevar a cabo la implementación de este plugin debemos realizar los siguientes pasos:

1. Descargar el plugin de la web del autor.
2. Incorporar en el header los links a la librería de [JQuery](http://www.manualweb.net/jquery/), al arhivo de [CSS](http://www.manualweb.net/css/) y a la librería del plugin.
3. Escribir el [div](https://www.w3api.com/HTML/div/) donde vamos a alojar el contenido del twitter follow box.
4. Escribir el script de llamada al código del plugin.

### Descarga del plugin


Primero debemos descargar el fichero zip desde la página de sus creadores haciendo [click aquí](http://jobyj.in/twitter-follow-box-widget/). Una vez que lo descargamos debemos acomodar los archivos que encontramos: 

- **JS: jquery.followbox.min.js** es la versión que podemos usar en producción y jquery.followbox.js es la versión que podemos utilizar para debbuguear. Estos archivos son el core del plugin.
- **CSS: followbox.css**. Es el archivo de [CSS](http://www.manualweb.net/css/). En este archivo hay dos themes: el principal y el dark. Lo pueden modificar a su manera.
- **Imagen: icon_twitter.png**. Este archivo es un loguito de Twitter que se encuentra al lado del link que apunta a la página del desarrollador. Tengan en cuenta que esta imagen está enlazada a una ruta específica dentro de los archivos JS antes mencionados. Para cambiar la ruta de donde lo alojen tienen que editar el archivo y buscar: var d="followbox/icon_twitter.png"

### Código dentro del head


```html
<link href="css/followbox.css" rel="stylesheet" type="text/css"/>
<script type='text/javascript' src='http://code.jquery.com/jquery-1.8.0.js'></script>
<script src="js/jquery.followbox.min.js" type="text/javascript"></script>
```


### Código del div


Escribimos un [div](https://www.w3api.com/HTML/div/) vacio donde queremos que aparezca el box


```html
<div id="twitterBox">
</div>
```


### Código de llamada del script


Escribimos el código para llamar al constructor del plugin:


```javascript
$("#twitterBox").followbox({
  user: "lineadecodigo",
  width: "1240",
  theme: "dark",
});
```


Dentro de las variables que podemos inicializar opcionalmente para acomodar el box de acuerdo a nuestras necesidades encontramos las siguientes. La variable user es obligatoria.

- **user:** nombre del usuario de twitter sin @
- **width:** ancho en pixeles
- **height:** alto en pixeles
- **border_color:** color del borde
- **bg_color:** color del fondo
- **bg_image:** imagen de fondo optativa
- **title_color:** color del texto del título
- **total_count_color:** color indicando la cantidad de seguidores
- **follower_name_color:** color de los enlaces a los seguidores
- **theme:** permite seleccionar un estilo global; puede ser light, dark o custom

Como síntesis de nuestro artículo podemos concluir que tenemos una implementación realmente sencilla, ultra customizable que nos va a permitir mostrar nuestros seguidores de twitter en nuestro sitio Web.

