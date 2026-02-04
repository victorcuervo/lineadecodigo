---
title: "Iniciar automáticamente un vídeo en HTML5"
description: "Aprende a iniciar automáticamente un vídeo en HTML5 con técnicas sencillas que mejorarán la experiencia del usuario en tu sitio web. ¡No te lo pierdas!"
date: 2012-01-16
updatedDate: 2026-01-24
tags: ["video","play","autoplay"]
slug: html/video/iniciar-automaticamente-un-video-en-html5
type: doc
topic: html
id: 61215e6e-adc0-4a29-8fed-c486834922eb
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/iniciar-video-automaticamente.html
---

Ya hemos aprendido a [cómo cargar un vídeo en HTML5 dentro de nuestra página](http://lineadecodigo.com/html5/cargar-un-video-en-html5/) y a cómo [cargar el vídeo en HTML5 desde diferentes formatos](http://lineadecodigo.com/html5/cargar-un-video-de-diferentes-formatos-con-html5/). En el código de hoy veremos cómo iniciar automáticamente un vídeo en [HTML5](https://www.manualweb.net/html5/).


Y es que el hecho de insertar las etiquetas VIDEO dentro de nuestra página web no implica que el vídeo arranque automáticamente. Si no que deberemos de utilizar los controles (los cuales cargamos mediante el atributo HTML5 controls) para iniciarlo.


## Utilizando el atributo autoplay


Pues bien, para iniciar automáticamente un vídeo en [HTML5](https://www.manualweb.net/html5/) tenemos dos formas. La primera consiste en utilizar [el atributo autoplay](https://www.w3api.com/HTML/video/autoplay/) del elemento VIDEO. Simplemente añadiendo este parámetro en nuestro código [HTML5](https://www.manualweb.net/html5/) conseguiremos que se inicie automáticamente. El código será el siguiente:


```html
<video autoplay="autoplay" controls="controls" width="300" height="150">
  <source src="videos/tecla.ogv" type="video/ogg">
  Tu navegador no soporta el elemento <code>video</code>
</video>
```


## Utilizando Javascript y el método play()


La segunda opción será utilizar el interface [Javascript](https://www.manualweb.net/javascript/) que nos ofrecen los elementos multimedia en [HTML5](https://www.manualweb.net/html5/). Este interface es conocido como HTMLMediaElement. En concreto utilizaremos un método que se llama [.play()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/) y que como su nombre bien nos indica inicializa la ejecución del vídeo.


Así lo primero que haremos será obtener la referencia al elemento vídeo de nuestra página (que ya no tiene el [autoplay](https://www.w3api.com/HTML/video/autoplay/)).


```javascript
var v = document.getElementsByTagName("video")[0];
```


Esto lo podemos hacer vía id con [.getElementById()](https://www.w3api.com/DOM/.getElementById()) o por etiqueta con [.getElementsByTagName()](https://www.w3api.com/DOM/.getElementsByTagName()). En ambos casos tendremos la referencia sobre el vídeo. Ya solo nos quedará el ejecutar el método [.play()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/).


```javascript
v.play();
```


Si queremos que este código simule que se inicie automáticamente el vídeo, deberemos de ponerlo en el [onLoad](https://www.w3api.com/HTML/tag/evento-html/) de la página o al final estructura de la misma.


## Código completo


Así, podemos tener en nuestra página dos vídeos [HTML5](https://www.manualweb.net/html5/) iniciados automáticamente, uno vía el elemento [HTML5](https://www.manualweb.net/html5/) y otro con el interface HTMLMediaElement y [Javascript](https://www.manualweb.net/javascript/).


```html
<video controls="controls" width="300" height="150">
  <source src="http://lineadecodigo.com/wp-content/uploads/2012/01/tecla.ogv" type="video/ogg">
  Tu navegador no soporta el elemento <code>video</code>
</video>

<video autoplay="autoplay" controls="controls" width="300" height="150">
  <source src="http://lineadecodigo.com/wp-content/uploads/2012/01/tecla.ogv" type="video/ogg">
  Tu navegador no soporta el elemento <code>video</code>
</video>

<script type="text/javascript">
  var v = document.getElementsByTagName("video")[0];
  v.play();
</script>
```

