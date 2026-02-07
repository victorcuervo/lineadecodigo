---
title: "Drag Zoom Control con Google Maps"
description: "Aprende a implementar el Drag Zoom Control en Google Maps para seleccionar y ampliar áreas específicas del mapa mediante arrastre con el ratón."
date: 2007-06-08
updatedDate: 2026-02-07
tags: ["dragzoomcontrol","addcontrol"]
slug: google/maps/drag-zoom-control-con-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-8108-bfef-da5189e76825
author: victor_cuervo
---

Una de las novedades del [Google Maps API Utility Library Open Source](http://code.google.com/p/gmaps-utility-library-dev/) es el Drag Zoom Control desarrollada por Andre Lewis.


Este control es una evolución del control GZoom y nos permite definir un área dentro del mapa para hacer un zoom sobre ella.


## Configuración del Drag Zoom Control


Para poder utilizar este control lo primero que tenemos que hacer es descargarnos el archivo `dragzoom.js`, el cual posee el código con el control. También nos podemos descargar el archivo `dragzoom_packed.js`, el cual contiene el código empaquetado.


Antes de empezar a codificar este ejemplo es bueno que te leas Cargando Google Maps y Añadiendo Controles a Google Maps.


Lo primero que haremos será cargar la librería javascript del Dragon Zoom.


```javascript
<script src="dragzoom.js" type="text/javascript"></script>
```


## Requisitos previos


Además deberemos de tener cuidado con un par de cosas:


**1. El documento donde lo utilicemos deberá de ser un doctype XHTML 1.0 Transitional**


```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" >
```


**2. Para que funcione en el Internet Explorer deberemos de habilitar el comportamiento VML**


```css
<style type="text/css">v:* {behavior:url(#default#VML);}</style>
```


## Añadir el control al mapa


Ahora solo nos quedará cargar el control. Para ello deberemos de instanciar la clase `DragZoom()`, esto lo haremos añadiendo dicho control al mapa.


```javascript
map.addControl(new DragZoomControl());
```


[Visualizar el ejemplo](http://lineadecodigo.com/wp-content/uploads/2007/06/dragzoom-control1.html) | [Descargar el código](http://lineadecodigo.com/wp-content/uploads/2007/06/dragzoom-control1.zip)


Vía: [TuFuncion.com](http://tufuncion.com/)

