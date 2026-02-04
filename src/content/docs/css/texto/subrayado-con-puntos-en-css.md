---
title: "Subrayado con puntos en CSS"
description: "Como crear una hoja de estilos para tener un subrayado con puntos en CSS."
date: 2008-01-09
updatedDate: 2026-01-17
tags: ["text-decoration","css","dotted","border-bottom"]
slug: css/texto/subrayado-con-puntos-en-css
type: doc
topic: css
id: 938da32a-ed0b-452e-a766-308b35984ccb
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/texto/subrayado-de-puntos.html
---

Por defecto, la mayoría de los navegadores utilizan un subrayado de una línea para mostrar los enlaces que tiene nuestra página web. Las hojas de estilo [CSS](http://www.manualweb.net/css/) nos permiten modificar este comportamiento y dotar a los elementos de una página (enlaces incluidos) del diseño que más nos guste.


## Crear un subrayado con puntos en CSS


En este caso vamos a hacer que el subrayado del enlace sea una línea de puntos. Para tener un subrayado con puntos en [CSS](http://www.manualweb.net/css/) nos vamos a apoyar en la [propiedad border-bottom](https://www.w3api.com/CSS/border-bottom-width/). Mediante esta propiedad podemos dar estilo al borde inferior de un elemento. En el caso de un enlace, el borde inferior de un elemento coincide con su subrayado.


## Definir los estilos CSS


Todas las propiedades [CSS](http://www.manualweb.net/css/) de los enlaces se las asignaremos al elemento A. Para ello crearemos, en la cabecera de la página, unas etiquetas de estilos:


```css
<style>
</style>
```


## Eliminar el subrayado por defecto


Lo primero que tenemos que hacer para tener un subrayado con puntos en [CSS](http://www.manualweb.net/css/) es eliminar el subrayado por defecto del elemento. El subrayado del enlace lo refleja la [propiedad text-decoration]( "atributo css text-decoration"). Para eliminar el subrayado le asignamos el valor de none.


```css
a {
  text-decoration: none;
}
```


## Añadir el subrayado con puntos


Ahora vamos a definir el subrayado con puntos en [CSS](http://www.manualweb.net/css/). La propiedad [border-bottom](https://www.w3api.com/CSS/border-bottom-width/) tiene tres valores separados por blancos: ancho, estilo y color. El estilo de puntos es "dotted". De esta forma, si queremos definir un ancho de 1px sería el siguiente código:


```css
a {
  text-decoration: none;
  border-bottom: 1px dotted;
}
```


Solo nos quedará el añadir un enlace a nuestra página web y ya tenemos el subrayado con puntos en [CSS](http://www.manualweb.net/css/).

