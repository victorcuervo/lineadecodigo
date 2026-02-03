---
title: "Controlar un error de carga de un vídeo en HTML5"
description: "Controla errores de carga de un vídeo en HTML5 y mejora la experiencia del usuario en tu página web con sencillos pasos de programación. ¡Descubre cómo hacerlo!"
date: 2012-01-22
updatedDate: 2026-01-21
tags: ["video","error"]
slug: html/video/controlar-un-error-de-carga-de-un-video-en-html5
author: victor_cuervo
type: doc
topic: html
id: 2c8a9dfb-adca-815b-9598-e1d1e5bb8dc6
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/controlar-error-video.html
---

¿Por qué cuando se carga mi página web en [HTML5](https://www.manualweb.net/html5/) no se ve el vídeo? ¿Cómo puedo controlar un error de carga de un vídeo en HTML5? Estas pueden ser algunas de las preguntas que nos hagamos cuándo vemos que nuestros vídeos no están funcionando.


## Suscribirse al evento error


Si queremos controlar un error en un elemento de [vídeo](https://www.w3api.com/HTML/video/) en [HTML5](https://www.manualweb.net/html5/) lo primero que tenemos que hacer es suscribirnos al evento error del [vídeo](https://www.w3api.com/HTML/video/). Para ello utilizaremos un escuchador o addEventListener sobre el elemento [HTMLMediaElement](https://www.w3api.com/HTML/HTMLMediaElement/) que represente nuestro [vídeo](https://www.w3api.com/HTML/video/).


Así, si nuestro vídeo es:


```html
<video id="mivideo" src="tecla.ogv" controls>
</video>
```


## Implementar el controlador de errores


Para suscribirnos al evento error del [vídeo](https://www.w3api.com/HTML/video/) lo haremos mediante la siguiente línea de código:


```javascript
document.getElementById('mivideo').addEventListener('error', function() {
  alert('Error al cargar el vídeo');
}, true);
```


## Analizar el tipo de error con networkState


Cuando salte un error sobre el [vídeo](https://www.w3api.com/HTML/video/) se ejecutará el contenido de la función. Pero si queremos ser más concretos en el análisis del error podemos comprobar el valor de la variable [networkState](https://www.w3api.com/HTML/HTMLMediaElement/networkState). Esta variable representa la interacción entre el vídeo y la red.


Si el valor de networkState es igual [NETWORK_NO_SOURCE](https://www.w3api.com/HTML/HTMLMediaElement/NETWORK_NO_SOURCE) eso significa que no se ha podido encontrar el origen del [vídeo](https://www.w3api.com/HTML/video/). Así modificaremos el código de nuestra gestión de errores para controlar un error de carga de un [vídeo](https://www.w3api.com/HTML/video/) en [HTML5](https://www.manualweb.net/html5/):


```javascript
document.getElementById('mivideo').addEventListener('error', function() {
  if (document.getElementById('mivideo').networkState === [HTMLMediaElement.NETWORK](http://htmlmediaelement.network/)_NO_SOURCE) {
    alert('No se ha podido encontrar el origen del vídeo');
  } else {
    alert('Error al cargar el vídeo');
  }
}, true);
```

