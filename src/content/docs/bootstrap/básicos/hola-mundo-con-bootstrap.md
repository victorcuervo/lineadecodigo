---
title: "Hola Mundo con Bootstrap"
description: "Aprende a crear tu primera aplicación Hola Mundo con Bootstrap y descubre cómo este framework facilita el desarrollo responsive en tus proyectos."
date: 2013-09-23
updatedDate: 2026-02-03
tags: ["Bootstrap Básico","Hola Mundo"]
slug: bootstrap/basicos/hola-mundo-con-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: 2c8a9dfb-adca-8117-b71a-fcd7c7dcf3fc
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/basicos/holamundo-bootstrap.html
---

## ¿Qué es Bootstrap?


Bootstrap es un framework desarrollado por Twitter que facilita la construcción de aplicaciones que utilicen el patrón responsive design mediante tecnologías [HTML5](https://www.manualweb.net/html5/), [CSS3](http://www.manualweb.net/css/) y [Javascript](https://www.manualweb.net/javascript/). En la [web de Bootstrap](http://getbootstrap.com/getting-started/) puedes encontrar múltiple información sobre este framework, ejemplos de uso de sus componentes y más.


## Características de Bootstrap


Algunas de las características que podemos encontrar en Bootstrap son:

- Desarrollo de aplicaciones Responsive Design
- Soporte [HTML5](https://www.manualweb.net/html5/) y [CSS3](http://www.manualweb.net/css/)
- Permite desarrollo de aplicaciones para escritorio y móvil
- Soporte multi-navegador, incluido Internet Explorer
- Permite definir diferentes layouts
- Avanzado sistema Layout de grid
- Amplio conjunto de componentes para el desarrollo
- Posibilidad de compilar el framework con diferentes valores

## Descargar Bootstrap


Para desarrollar nuestra aplicación Hola Mundo con Bootstrap lo primero que tenemos que hacer es [descargarnos el framework](http://getbootstrap.com/getting-started/#download). Lo bueno de [Bootstrap es que podemos configurarnos que queremos descargarnos](http://getbootstrap.com/customize/).


> A día de hoy, febrero 2025, tenemos disponible la versión del framework [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/download/)


Existe una alternativa si no quieres descargarte el framework de Bootstrap que es utilizarlo directamente desde los [CDN que nos proporciona Bootstrap](https://www.bootstrapcdn.com/). 


## Archivos de Bootstrap


Para utilizar Bootstrap tenemos que conocer y utilizar tres archivos:

- **css/bootstrap.min.css**: la hojas de estilo del framework
- **js/bootstrap.min.js**: el módulo javascript
- **css/bootstrap-theme.min.css**: el tema a utilizar

Así que cargaremos estos archivos en nuestra página:


```html
<link href="css/bootstrap.min.css" rel="stylesheet"></link>
<link href="css/bootstrap-theme.min.css" rel="stylesheet"></link>
<script src="js/bootstrap.min.js"></script>
```


Es muy importante saber que para que funciones Bootstrap es necesario que utilicemos jQuery, así que deberemos de cargar también jQuery:


```html
<script src="http://code.jquery.com/jquery.js"></script>
```


## Configurar el viewport


Lo siguiente será configurar el viewport para la visualización basada en "responsive design" de la página. En el viewport indicamos que el ancho es el ancho del dispositivo y no se realizaría zoom, indicando initial-scale=1.0


```html
<meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
```


Con esto ya tendríamos configurada nuestra página del Hola Mundo con Bootstrap.

