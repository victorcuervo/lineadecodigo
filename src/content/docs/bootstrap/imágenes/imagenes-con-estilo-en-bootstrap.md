---
title: "Imágenes con estilo en Bootstrap"
description: "Ejemplos para insertar imágenes con estilo en Bootstrap con bordes redondeados, thumbnail y circulos."
date: 2013-09-24
updatedDate: 2026-02-02
tags: ["img","class","img-thumbnail","img-rounded","img-circle"]
slug: bootstrap/imagenes/imagenes-con-estilo-en-bootstrap
author: victor_cuervo
type: doc
id: c8d5c58a-a506-42f4-bad0-fc240b2e2a64
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/basicos/estilo-imagenes.html
---

Dentro del framework Bootstrap es muy fácil dar estilo a las imágenes y conseguir efectos sobre ellas. Bootstrap nos ofrece tres posibilidades de crear imágenes con estilo.


## Tipos de estilos de imagen


Los estilos que podemos crear son:

- **Imagen con los bordes redondeados**: la imagen aparece con los bordes redondeados.
- **Imagen en un circulo**: la imagen aparece dentro de un circulo.
- **Imagen como un thumbnail**: el efecto es que la imagen está con los bordes redondeados y alrededor de ella hay un borde, que tiene también los bordes redondeados. Entre la imagen y el borde hay un espacio en blanco. Al más puro estilo de retrato.

## Aplicar clases de estilo


A cada uno de los estilos, Bootstrap le ha asignado una clase. De esta manera si queremos insertar imágenes con estilo en Bootstrap valdrá con asignar dicha clase a la imagen.


```html
<img src="imagen.png" class="estilo_bootstrap">
```


Las clases que representan los estilos indicados arriba son:

- **img-rounded**: para los bordes redondeados.
- **img-circle**: para la imagen en un circulo.
- **img-thumbnail**: para los thumbnails.

## Código de ejemplo


De esta forma, si queremos dar los diferentes estilos solo tenemos que utilizar las clases:


```html
<img src="imagen.png" class="img-circle">
<img src="imagen.png" class="img-rounded">
<img src="imagen.png" class="img-thumbnail">
```

